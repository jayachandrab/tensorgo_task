from django.db import models
import uuid
from datetime import datetime    

# Create your models here.

class ApiUsers(models.Model):
    
    
    id = models.IntegerField(primary_key=True, editable=True)    
    email=models.EmailField(max_length=200,blank=True)
    name=models.CharField(max_length=200,blank=True)
    gender=models.CharField(max_length=10,blank=True)
    status=models.CharField(max_length=15,blank=True)
    created_at = models.DateTimeField(auto_now_add=False)
    updated_at= models.DateTimeField(auto_now=True,blank=True)

