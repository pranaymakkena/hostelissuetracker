from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_issue),
    path('list/', views.list_issues),
    path('update/<int:pk>/', views.update_status),
]
