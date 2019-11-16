
from django.urls import path
from .views import code
from rest_framework import routers
from .api import WordViewSet


router = routers.DefaultRouter()
router.register('api/words', WordViewSet, 'words'),

urlpatterns = [
    path('', code,name="home"),
]+router.urls