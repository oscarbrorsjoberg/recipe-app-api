from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('recipe', index),
    path('create', index),
]
