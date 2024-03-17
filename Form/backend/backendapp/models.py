from django.db import models

# Create your models here.
class Person(models.Model):
    full_name=models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    contact=models.CharField(max_length=20)
    address=models.TextField()
    
    def __str__(self):
        return self.full_name
