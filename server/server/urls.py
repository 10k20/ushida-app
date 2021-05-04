from django.contrib import admin
from django.urls import path, include
from django.conf.urls import *
from products import views

api_patterns = [
    path('', include('products.urls'))
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_patterns))
]
