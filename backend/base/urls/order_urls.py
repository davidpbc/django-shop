from django.urls import path
from base.views import order_views

urlpatterns = [
    path('', view=order_views.getOrders, name='orders'),
    path('add/', view=order_views.addOrderItems, name='orders-add'),
    path('myorders/', view=order_views.getMyOrders, name='myorders'),
    path(
        '<str:pk>/deliver/',
        view=order_views.updateOrderToDelivered,
        name='order-deliver'
    ),
    path('<str:pk>/', view=order_views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', view=order_views.updateOrderToPaid, name='pay'),
]
