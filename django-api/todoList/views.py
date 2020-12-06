from todoList.models import Todo
from rest_framework import viewsets
from .serializers import TodoSerializer

class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
