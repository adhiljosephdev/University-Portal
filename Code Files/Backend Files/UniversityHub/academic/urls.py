from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()


router.register(r'courses', views.CourseViewSet)
router.register(r'students', views.StudentViewSet)

urlpatterns = [
    #path('students/', views.student_list),
    
    #path(route, view, name)
    path('hello/', views.hello_world, name='hello'),
    path('courses/', views.course_list, name='course_list'),
    path("register-student/", views.student_create, name="student_create"),
    path("register/", views.register_user, name="register"),
    path("delete-student/<int:id>/", views.delete_student),
    path("profile/<int:id>/", views.student_profile),
    #path("api/courses/", views.api_course_list),
 
    path('api/', include(router.urls)),
]
