# Generated by Django 3.2.16 on 2022-11-05 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_registerform_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registerform',
            name='about',
            field=models.CharField(choices=[('facebook', 'Facebook'), ('instagram', 'Instagram'), ('youtube', 'Youtube'), ('twitter', 'Twitter'), ('radio', 'Radio'), ('friend', 'Friend')], default='', max_length=200, null=True),
        ),
    ]
