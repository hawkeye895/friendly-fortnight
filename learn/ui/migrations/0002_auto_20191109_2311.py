# Generated by Django 2.2.7 on 2019-11-09 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ui', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='example',
            field=models.TextField(blank=True, default='NA', max_length=500),
        ),
    ]