# Generated by Django 3.0.7 on 2020-08-21 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tgo', '0004_auto_20200821_0910'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apiusers',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]