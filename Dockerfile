
# Use the official Nginx image
FROM nginx:alpine

# Copy website files into Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
