from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    # built-in URL configuration for the Django admin panel.
    path('admin/', admin.site.urls),
    # path('', include('academic.urls')),
    path('academic/', include('academic.urls')),
    path('api-token-auth/', obtain_auth_token),


    # Login Route
    path(
        'login/',
        auth_views.LoginView.as_view(
            template_name='registration/login.html'
        ),
        name='login'
    ),

    # Logout Route
    path(
        'logout/',
        auth_views.LogoutView.as_view(
            next_page='login'
        ),
        name='logout'
    ),
]
from django.conf import settings
from django.conf.urls.static import static


# Only serve media files in debug mode (Development)
if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )