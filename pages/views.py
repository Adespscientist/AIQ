from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'pages/index.html')

def success(request):
    return render(request, 'pages/success.html')

