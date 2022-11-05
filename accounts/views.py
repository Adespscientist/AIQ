from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from .models import RegisterForm
def register(request):
    if request.method == 'POST':
        last_name = request.POST.get('last_name')
        first_name = request.POST.get('first_name')
        user_email = request.POST.get('user_email')
        phone = request.POST.get('phone')
        countries = request.POST.get('selectCountry')
        address = request.POST.get('user_address')
        letter = request.POST.get('letter')
        cv = request.POST.get('cv')
        role = request.POST.get('role')
        about = request.POST.get('about')
        question1 = request.POST.get('question1')
        question2 = request.POST.get('question2')
        question3 = request.POST.get('question3')
        question4 = request.POST.get('question4')
        question5 = request.POST.get('question5')
        question6 = request.POST.get('question6')
        question7 = request.POST.get('question7')
        question8 = request.POST.get('question8')
        question9 = request.POST.get('question9')
        question10 = request.POST.get('question10')
        question11 = request.POST.get('question11')
        question12 = request.POST.get('question12')
        question13 = request.POST.get('question13')
        question14 = request.POST.get('question14')
        question15 = request.POST.get('question15')
        consider = request.POST.get('consider')
        form=RegisterForm(last_name=last_name, first_name=first_name, user_email=user_email,phone=phone,countries=countries,address=address,letter=letter,cv=cv,
                     role=role,about=about, question1=question1,question2=question2,question3=question3,question4=question4,
                     question5=question5,question6=question6,question7=question7,question8=question8,question9=question9,question10=question10,question11=question11,question12=question12,
                     question13=question13,question14=question14,question15=question15,consider=consider)
        form.save()
        messages.success(request, 'Congratulations!! Your application has been recieved, thank you for applying. If your skills, experience and professional background is a considerable match for this program you will be contacted for an interview via the contact details provided.')
        return redirect('success')
   
    return render(request, 'accounts/register.html')

