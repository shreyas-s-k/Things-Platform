# Generated by Django 3.1.3 on 2020-11-14 23:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sensor',
            old_name='name',
            new_name='id',
        ),
    ]