# Static marketing site served by nginx (for VPS / EasyPanel).
# GitHub Pages keeps deploying independently from this; the Dockerfile is only
# used by the VPS host and is ignored by Pages.
FROM nginx:1.27-alpine

# Custom server config: gzip, asset caching, clean URLs, branded 404.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Site files.
COPY . /usr/share/nginx/html

EXPOSE 80
