# Generated by Django 5.0.6 on 2024-07-07 22:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0004_chat_bot'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='bot',
        ),
    ]