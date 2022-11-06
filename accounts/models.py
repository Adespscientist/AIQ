from django.db import models
from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
Roles = (
    ('GIS and Remote sensing Expert', 'GIS and Remote sensing Expert'), 
    ('Software Engineer', 'Software Engineer'),
    ('Data Analyst', 'Data Analyst')
)
About=(
    ('facebook', 'Facebook'),
    ('instagram', 'Instagram'),
    ('youtube', 'Youtube'),
    ('twitter', 'Twitter'),
    ('radio', 'Radio'),
    ('friend', 'Friend')
)
class RegisterForm(models.Model):
    last_name=models.CharField(max_length=100, default='')
    first_name=models.CharField(max_length=100, default='')
    user_email=models.CharField(max_length=100, default='')
    phone = PhoneNumberField(max_length=100, default='')
    countries=CountryField(max_length=100, default='')
    address=models.CharField(max_length=100, default='')
    letter=models.FileField( default='', blank=True, upload_to='letters/%Y/%m/%d.{{first_name}}')
    cv=models.FileField( default='', blank=True, upload_to='documents/%Y/%m/%d')
    role=models.CharField(max_length=100, choices=Roles, default='', null=True)
    about=models.CharField(max_length=200, choices=About, default='', null=True)
    question1=models.TextField(default='')
    question2=models.TextField(default='')
    question3=models.TextField(default='')
    question4=models.TextField(default='')
    question5=models.TextField(default='')
    question6=models.TextField(default='')
    question7=models.TextField(default='')
    question8=models.TextField(default='')
    question9=models.TextField(default='')
    question10=models.TextField(default='')
    question11=models.TextField(default='')
    question12=models.TextField(default='')
    question13=models.TextField(default='')
    question14=models.TextField(default='')
    question15=models.TextField(default='')
    consider=models.TextField(default='')
    
def __str__(self):
    return self.name