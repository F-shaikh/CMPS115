# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
from django.shortcuts import render
from django.apps import apps
from elasticsearchapp.documents import JobListingDocument
from elasticsearch_dsl import Q
import numpy as np
import plotly.graph_objs as go
import plotly.offline as ply
import plotly.tools as tls
JobListing = apps.get_model('elasticsearchapp', 'JobListing')


def home(request):
    filters = request.GET.getlist('filters[]')
    keywords = request.GET.getlist('keywords[]')
    # raw = request.GET.get('raw')
    raw = 1
    queries = Q()
    if not keywords:
        keywords = ['Java', 'Python', 'Ruby', 'PHP', 'iOS', 'Android']

    for f in filters:
        queries = queries & Q("match", description=f)

    data = []

    # calculate total for each day
    total_search = JobListingDocument.search()
    total = total_search.count()
    total_search = total_search[0:total]
    total_search.aggs.bucket('listings_per_day', 'date_histogram', field='posted_date', interval='day')
    total_search = total_search.execute()
    total_buckets = total_search.aggregations.listings_per_day.buckets

    # calculate number of entries and add trace for each keyword
    for keyword in keywords:
        query = queries & Q("match", description=keyword)
        listings_search = JobListingDocument.search().query(query)
        key_total = listings_search.count()
        listings_search = listings_search[0:key_total]

        listings_search.aggs.bucket('listings_per_day', 'date_histogram', field='posted_date', interval='day')
        listings_search = listings_search.execute()

        x = []
        y = []
        for index, bucket in enumerate(listings_search.aggregations.listings_per_day.buckets):
            if bucket.key >= 1541203200000:
                x.append(datetime.utcfromtimestamp(bucket.key/1000).strftime('%x'))
                if raw == '0':
                    try:
                        y.append(bucket.doc_count / total_buckets[index].doc_count)
                    except ZeroDivisionError:
                        y.append(0)
                else:
                    y.append(bucket.doc_count)

        trace = go.Scatter(
            x=x,
            y=y,
            name=keyword,
            mode='lines+markers'
        )
        data.append(trace)

    if raw == '0':
        layout = go.Layout(showlegend=True, yaxis=dict(tickformat=".2%"))

    else:
        layout = go.Layout(showlegend=True)
    fig = go.Figure(data=data, layout=layout)
    ply.plot(fig, filename='templates/job-trends.html', auto_open=False)

    return render(request, 'JobTrendsLandingPage.html')
