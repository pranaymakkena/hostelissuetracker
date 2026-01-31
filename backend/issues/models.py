from django.db import models
from django.contrib.auth.models import User

class Issue(models.Model):

    CATEGORY = [
        ('Plumbing','Plumbing'),
        ('Electrical','Electrical'),
        ('Internet','Internet'),
        ('Cleanliness','Cleanliness'),
        ('Furniture','Furniture'),
    ]

    PRIORITY = [
        ('Low','Low'),
        ('Medium','Medium'),
        ('High','High'),
        ('Emergency','Emergency'),
    ]

    STATUS = [
        ('Reported','Reported'),
        ('Assigned','Assigned'),
        ('In Progress','In Progress'),
        ('Resolved','Resolved'),
        ('Closed','Closed'),
    ]

    student = models.ForeignKey(User, on_delete=models.CASCADE)

    category = models.CharField(max_length=30, choices=CATEGORY)
    priority = models.CharField(max_length=20, choices=PRIORITY)
    description = models.TextField()
    image = models.ImageField(upload_to='issues/', blank=True)

    hostel = models.CharField(max_length=50)
    block = models.CharField(max_length=20)
    room = models.CharField(max_length=20)

    status = models.CharField(max_length=20, choices=STATUS, default='Reported')

    assigned_to = models.CharField(max_length=100, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.category
