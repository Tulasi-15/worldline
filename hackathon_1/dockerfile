# Use an official Nginx image as the base image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the website files from the host into the container
COPY . .

# Expose port 80 to make the website accessible
EXPOSE 80

# The command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]