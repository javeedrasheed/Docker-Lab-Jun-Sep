# Base Image
FROM nginx:alpine

# Copy code files to nginx files
COPY . /usr/share/nginx/html

# Expose on port 80
EXPOSE 80
