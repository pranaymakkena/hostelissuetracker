from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Issue
from .serializers import IssueSerializer
from users.models import Profile

# Student → create issue
@api_view(['POST'])
def create_issue(request):

    profile = Profile.objects.get(user=request.user)

    data = request.data
    issue = Issue.objects.create(
        student=request.user,
        category=data['category'],
        priority=data['priority'],
        description=data['description'],
        image=data.get('image'),

        hostel=profile.hostel,
        block=profile.block,
        room=profile.room
    )

    return Response({"msg": "Issue Reported"})


# List issues (role-based)
@api_view(['GET'])
def list_issues(request):

    profile = Profile.objects.get(user=request.user)

    if profile.role == 'MANAGEMENT':
        issues = Issue.objects.all()
    else:
        issues = Issue.objects.filter(student=request.user)

    serializer = IssueSerializer(issues, many=True)
    return Response(serializer.data)


# Management → update status
@api_view(['PUT'])
def update_status(request, pk):

    issue = Issue.objects.get(id=pk)
    issue.status = request.data['status']
    issue.assigned_to = request.data.get('assigned_to', '')
    issue.save()

    return Response({"msg": "Updated"})
