# Generated by Django 2.1.2 on 2019-05-12 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elasticsearchapp', '0020_auto_20190512_0737'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tile',
            name='name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
