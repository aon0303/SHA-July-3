#!/bin/sh

python3 -m gunicorn -w 4 -b 0.0.0.0:5000 wsgi:app
