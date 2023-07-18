from django.contrib import admin

from .models import UserAccount

# Register your models here.

@admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
    list_display = ['id','email','first_name']
    list_display_links = ['id','email','first_name']