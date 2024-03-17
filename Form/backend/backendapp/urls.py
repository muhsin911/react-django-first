from django.urls import path, include

from rest_framework import routers
from .import views

router = routers.DefaultRouter()
router.register(r'person',views.PersonViewSet, basename='person')

urlpatterns=[
    # path('',include('routers.urls'))
]
urlpatterns += router.urls