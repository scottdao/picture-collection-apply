from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return HttpResponse('hello wirld, index!')


#pppp Create your views here.

