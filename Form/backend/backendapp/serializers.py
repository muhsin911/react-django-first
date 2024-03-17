from rest_framework import serializers
from .models import Person

class PersonSerializer(serializers.ModelSerializer):
    # model=Person
    # fields=['id','full_name','email','contact','address']
    
    class Meta:
        model = Person
        fields = ['id', 'full_name', 'email', 'contact', 'address']