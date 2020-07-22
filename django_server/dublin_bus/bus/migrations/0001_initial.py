# Generated by Django 3.0.3 on 2020-07-21 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Currentweather',
            fields=[
                ('dt', models.IntegerField(primary_key=True, serialize=False)),
                ('dt_iso', models.DateTimeField()),
                ('city_id', models.IntegerField(blank=True, null=True)),
                ('city_name', models.CharField(blank=True, max_length=45, null=True)),
                ('lat', models.CharField(blank=True, max_length=45, null=True)),
                ('lon', models.CharField(blank=True, max_length=45, null=True)),
                ('temp', models.DecimalField(blank=True, decimal_places=3, max_digits=6, null=True)),
                ('temp_min', models.DecimalField(blank=True, decimal_places=3, max_digits=6, null=True)),
                ('temp_max', models.DecimalField(blank=True, decimal_places=3, max_digits=6, null=True)),
                ('pressure', models.CharField(blank=True, max_length=45, null=True)),
                ('humidity', models.CharField(blank=True, max_length=45, null=True)),
                ('wind_speed', models.CharField(blank=True, max_length=45, null=True)),
                ('wind_deg', models.CharField(blank=True, max_length=45, null=True)),
                ('clouds_all', models.IntegerField(blank=True, null=True)),
                ('weather_id', models.IntegerField(blank=True, null=True)),
                ('weather_main', models.CharField(blank=True, max_length=45, null=True)),
                ('weather_description', models.CharField(blank=True, max_length=45, null=True)),
                ('weather_icon', models.CharField(blank=True, max_length=45, null=True)),
            ],
        ),
    ]