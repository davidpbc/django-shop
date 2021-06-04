from base.views.user_views import (
    MyTokenObtainPairView,
    updateUserProfile,
    getUserProfile,
    getUsers,
    registerUser,
    deleteUser,
    getUserById,
    updateUser,
)
from django.urls import path

urlpatterns = [
    path(
        'login/',
        MyTokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path("register/", registerUser, name="register"),
    path("profile/", getUserProfile, name="users-profile"),
    path("profile/update/", updateUserProfile, name="users-profile-update"),
    path("", getUsers, name="users"),
    path("<str:pk>/", getUserById, name="user"),
    path("update/<str:pk>/", updateUser, name="user-update"),
    path("delete/<str:pk>/", deleteUser, name="user-delete"),
]
