# Use an official Nginx runtime as the base image
FROM nginx:alpine

# Copy the contents of the www directory to the nginx web root directory
COPY ./docs /usr/share/nginx/html

# Expose port 80 to the outside world
#EXPOSE 80

# Command to run the nginx server
#CMD ["nginx", "-g", "daemon off;"]