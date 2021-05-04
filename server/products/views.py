from rest_framework import viewsets
from django_filters import rest_framework as filters

from django.contrib.auth.models import User
from .models import Product
from .serializers import UserSerializer, ProductSerializer

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('type',)