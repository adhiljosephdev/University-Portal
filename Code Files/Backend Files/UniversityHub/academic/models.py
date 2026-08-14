from django.db import models
from django.contrib.auth.models import User
 
class Department(models.Model): 
    name = models.CharField(max_length=100, unique=True) 
    head_of_dept = models.CharField(max_length=100) 
    # blank=True means this field is optional in forms 
    description = models.TextField(blank=True) 
 
    def __str__(self): 
        # This controls how the object looks in the Admin panel/Console 
        return self.name 
 
class Course(models.Model): 
    SEMESTER_CHOICES = [ 
        (1, 'Semester 1'), 
        (2, 'Semester 2'), 
        (3, 'Semester 3'),
        (4, 'Semester 4'), 
    ] 
 
    # Foreign Key links Course to Department 
    # on_delete=models.CASCADE: If Dept is deleted, delete all its courses (Data Consistency) 
    department = models.ForeignKey(Department, on_delete=models.CASCADE, 
related_name='courses') 
     
    name = models.CharField(max_length=100) 
    code = models.CharField(max_length=10, unique=True) # e.g., CS101 
    semester = models.IntegerField(choices=SEMESTER_CHOICES, default=1) 
    credits = models.IntegerField() 
 
    syllabus=models.FileField(
        upload_to='syllabus/',
         blank=True,
         null=True
    )
    def __str__(self): 
        return f"{self.code} - {self.name}" 
 
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField(auto_now_add=True)  # Set once on creation
    # Many-to-Many: A student can pick multiple courses
    courses = models.ManyToManyField(Course, blank=True)

    # upload_to creates a subfolder inside MEDIA_ROOT
    profile_pic = models.ImageField(
        upload_to='students/profiles/',
        blank=True,
        null=True
    )

    def __str__(self):
        return f'{self.first_name} {self.last_name}'