from django.shortcuts import render
from .models import Core
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def home(request,title):
    #todo
    try:
        core = Core.objects.get(title=title)
    except Core.DoesNotExist:
        return JsonResponse({'message': 'home does not exist'},  status = status.HTTP_404_NOT_FOUND)

