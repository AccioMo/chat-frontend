# Generated by Django 5.0.6 on 2024-07-07 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0003_alter_appuser_user_permissions'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='bot',
            field=models.BooleanField(default=False),
        ),
    ]