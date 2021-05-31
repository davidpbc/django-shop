from django.urls import path
from base.views import order_views

urlpatterns = [
    path('add/', view=order_views.addOrderItems, name='orders-add'),
    path('myorders/', view=order_views.getMyOrders, name='myorders'),
    path('<str:pk>/', view=order_views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', view=order_views.updateOrderToPaid, name='pay'),
]
