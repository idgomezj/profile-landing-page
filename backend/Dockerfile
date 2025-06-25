#FROM python:3.10-slim-bullseye
FROM python:3.13

ENV TZ=America/New_York

# Set the working directory
WORKDIR /app


# Copy only necessary files
COPY . .

# Update and install tzdata
RUN apt-get update 


# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

RUN rm -f requirements.txt

EXPOSE 8000