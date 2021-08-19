from rest_framework import generics

from user.serializer import UserSerializer


class CreateUserView(generics.CreateAPIView):
    ''' create a new user int the system '''
    serializer_class = UserSerializer
