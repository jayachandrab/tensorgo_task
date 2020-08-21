from rest_framework import serializers
from tgo.models import ApiUsers

class ApiUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model=ApiUsers
        fields = ['id','name','email','gender','status','updated_at']
    # def update(self, instance, validated_data):       
    #     instance.id = validated_data.get('id',instance.id)
    #     instance.name = validated_data.get('name',instance.name)
    #     instance.gender = validated_data.get('gender',instance.gender)
    #     instance.status = validated_data.get('status',instance.status)
    #     instance.save()
    #     return instance