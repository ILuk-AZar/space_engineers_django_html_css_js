# accounts/urls.py
from django.urls import path
from . import views  # Ensure views is correctly imported

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('profile/', views.profile, name='profile'),
]
