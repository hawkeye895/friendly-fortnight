# Generated by Django 2.2.7 on 2019-11-09 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=100, unique=True)),
                ('meaning', models.TextField(default='NA', max_length=300)),
                ('synonym', models.CharField(blank=True, default='NA', max_length=200)),
                ('example', models.TextField(default='NA', max_length=500)),
            ],
        ),
    ]
