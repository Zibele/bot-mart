from django.db import models

# Create your models here.
class Core(models.Model):

    title = models.CharField(max_length=70, blank=False, default='')
    

