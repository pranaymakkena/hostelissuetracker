from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Profile


@api_view(['POST'])
def register(request):

    user = User.objects.create_user(
        username=request.data['username'],
        password=request.data['password']
    )

    Profile.objects.create(
        user=user,
        role=request.data['role'],
        hostel=request.data['hostel'],
        block=request.data['block'],
        room=request.data['room']
    )

    return Response({"msg": "Registered"})
