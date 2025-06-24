# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install all dependencies, including devDependencies
RUN npm install

# Copy the entire project directory to the container
COPY . /app

# Expose the Next.js port
EXPOSE 3000