from django.db import models

PRODUCT_TYPE_CHOICES =(
    ("photo", "Photo"),
    ("video", "Video"),
    ("effects", "Effects"),
    ("design", "Design")
)
class Product(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=2000)
    price = models.IntegerField()
    author = models.CharField(max_length=50)
    type = models.CharField(max_length=120, choices=PRODUCT_TYPE_CHOICES, default="Photo")

    def __str__(self):
        return str(self.title)