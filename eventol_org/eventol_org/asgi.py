"""
ASGI config for deportify project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/asgi/
"""

import os

from configurations import importer
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "eventol_org.settings")
os.environ.setdefault('DJANGO_CONFIGURATION', 'Dev')

importer.install()

application = get_asgi_application()
