from django.urls import path
from .views import create_issue, list_issues, update_status

urlpatterns = [
    path('create/', create_issue),           # POST
    path('list/', list_issues),             # GET
    path('update/<int:pk>/', update_status) # PUT
]
