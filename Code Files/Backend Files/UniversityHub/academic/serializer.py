from rest_framework import serializers
from .models import Department, Course, Student

# 1. Department Serializer
class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        #'__all__' is a shortcut to include every field in the model
        fields = '__all__'

# 2. Course Serializer
class Courseserializer(serializers.ModelSerializer):
    # Nested Serializer: Instead of just showing the Dept ID (1),
    # we can show the Dept Name by being clever here.
    # For now, let's keep it simple and just show the ID.
    class Meta:
        model = Course
        fields = ['id','name','code','credits','department','semester','syllabus']

# 3. Student Serializer
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id','first_name','last_name','email','courses','profile_pic']