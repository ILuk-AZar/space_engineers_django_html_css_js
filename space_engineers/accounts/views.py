from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User

# Регистрация нового пользователя
def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('profile')  # После регистрации перенаправляем на страницу профиля
    else:
        form = UserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})

# Вход пользователя
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('profile')
        else:
            return render(request, 'accounts/login.html', {'error': 'Неверное имя пользователя или пароль'})
    return render(request, 'accounts/login.html')

# Профиль пользователя
def profile(request):
    return render(request, 'accounts/profile.html')
