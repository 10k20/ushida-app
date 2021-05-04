
from rest_framework.routers import DefaultRouter

from .views import UserViewSet, ProductViewSet


router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = router.urls