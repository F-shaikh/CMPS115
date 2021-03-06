"""jobTrends URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'api/trend_data', views.TrendData.as_view()),
    url(r'api/bar_data', views.BarData.as_view()),
    url(r'api/top_skills', views.TopSkills.as_view()),
    url(r'api/top_locations', views.TopLocations.as_view()),
    url(r'api/get_json_file', views.GetJsonFile.as_view()),
    url(r'api/job_listings', views.JobListings.as_view()),
    url(r'user_info', views.UserInfo.as_view()),
    url(r'logout', views.Logout.as_view()),
    url(r'custom_tiles', views.CustomTiles.as_view()),
    url(r'tiles', views.Tiles.as_view()),
    url(r'accounts/', include('allauth.urls')),
    url(r'^.*', views.home),
]
