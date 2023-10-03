# Use the official Node.js image as the base image
FROM node:slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files to the container
COPY . .

# Expose the port your Node.js app listens on (3000 in this case)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]
