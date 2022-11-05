from django import forms
from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField
from .models import Snippet
Roles = [
    ('gis', 'Gis'), 
    ('se', 'Se'),
    ('da', 'Da')
]
About=[
    ('facebook', 'Facebook'),
    ('instagram', 'Instagram'),
    ('youtube', 'Youtube'),
    ('twitter', 'Twitter'),
    ('radio', 'Radio'),
    ('friend', 'Friend')
]
class RegisterForm(forms.Form):
    lastname=forms.TextInput()
    firstname=forms.TextInput()
    email=forms.TextInput()
    phone = PhoneNumberField()
    countries=CountryField(multiple=True)
    address=forms.TextInput()
    letter=forms.FileField()
    cv=forms.FileField()
    role=forms.ChoiceField(choices=[Roles])
    question1=forms.TextInput()
    question2=forms.TextInput()
    question3=forms.TextInput()
    question4=forms.TextInput()
    question5=forms.TextInput()
    question6=forms.TextInput()
    question7=forms.TextInput()
    question8=forms.TextInput()
    question9=forms.TextInput()
    question10=forms.TextInput()
    question11=forms.TextInput()
    question12=forms.TextInput()
    question13=forms.TextInput()
    question14=forms.TextInput()
    question15=forms.TextInput()
    about=forms.ChoiceField(choices=[About])
    consider=forms.TextInput()
