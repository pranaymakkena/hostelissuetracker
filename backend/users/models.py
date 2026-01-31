from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):

    ROLE = (
        ('STUDENT', 'Student'),
        ('MANAGEMENT', 'Management')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE)

    hostel = models.CharField(max_length=50)
    block = models.CharField(max_length=20)
    room = models.CharField(max_length=20)

    def __str__(self):
        return self.user.username
