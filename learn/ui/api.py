from rest_framework import viewsets, permissions, generics
from .models import Word
from .serializers import WordSerializer

#Word serializer
class WordViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    queryset = Word.objects.all()
    serializer_class = WordSerializer
    