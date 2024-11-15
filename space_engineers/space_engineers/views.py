from django.shortcuts import render

# Представление для главной страницы
def index(request):
    return render(request, 'main/index.html')

# Представление для страницы "О нас"
def about(request):
    return render(request, 'main/about.html')
def tutorials(request):
    return render(request, 'main/tutorial.html')
