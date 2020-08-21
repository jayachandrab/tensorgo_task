from django.shortcuts import render
from django.http import HttpResponse
import requests
from .models import ApiUsers
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import ApiUsersSerializer
from rest_framework.response import Response
from datetime import datetime    

# Create your views here.
@api_view(['GET','POST'])
def getUser(request):
    key="277c8ba753b4921472cbf3aaa965e2a91320ce88d1d3eab6b91d8f8f5cabdfdc"
    r = requests.get('https://gorest.co.in/public-api/users', params=request.GET)
    
    
    data=r.json()
    
    context={}
    context['data']=data
    all_data=context['data']['data']
    print(len(all_data))
    for d in all_data:
        user=ApiUsers.objects.get(id=d['id'])
        if user is None:

            user=ApiUsers()
            user.id=d['id']
            user.email=d['email']
            user.name=d['name']
            user.gender=d['gender']
            user.created_at=d['created_at']
            user.updated_at=d['updated_at']
            user.status=d['status']
            user.save()

    print(all_data[0]['id'])
    allUsers=ApiUsers.objects.all()
    serializer=ApiUsersSerializer(allUsers,many=True)
    return Response(serializer.data)
    #return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #return render(request,"home.html",context)

       
@api_view(['GET','PUT','DELETE','PATCH'])
def upate_user_etails(request,pk):
    print(pk)
    try:
        user=ApiUsers.objects.get(id=pk)
    except ApiUsers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=ApiUsersSerializer(user)
        return Response(serializer.data)
    print(user.name)
    print("found=====")
    if request.method=='PUT':
        serializer=ApiUsersSerializer(user,data=request.data)
        print("in put update")
        print(request.data)
        #request.data['updated_at']=
        print(request.data['email'])
        if serializer.is_valid():
            val=serializer.save()
            val.save()
            print(val)
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    # elif request.method=='DELETE':
    #     user.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)

