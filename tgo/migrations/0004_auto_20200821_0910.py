# Generated by Django 3.0.7 on 2020-08-21 03:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tgo', '0003_auto_20200821_0004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apiusers',
            name='updated_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]
