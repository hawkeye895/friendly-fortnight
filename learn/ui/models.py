from django.db import models

# Create your models here.
class Word(models.Model):
    word = models.CharField(serialize=True,editable=True,unique=True,max_length=100)
    meaning = models.TextField(max_length=300,default='NA')
    synonym = models.CharField(blank=True,max_length=200,default='NA')
    example = models.TextField(max_length=500,default='NA',blank=True)