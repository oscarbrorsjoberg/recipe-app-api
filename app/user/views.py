from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from user.serializer import UserSerializer, AuthTokenSerializer


class CreateUserView(generics.CreateAPIView):
    ''' create a new user int the system '''
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    ''' Create a new auth token from user '''
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
