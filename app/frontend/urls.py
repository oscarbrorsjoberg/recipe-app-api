from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('recipe', index),
    path('create', index),
    path('recipes/<str:recipeId>', index),
]
