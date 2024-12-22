# Base image for Node.js
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Build the Next.js application
RUN npm run build

# Use AWS Lambda Node.js runtime as the base image
FROM public.ecr.aws/lambda/nodejs:18

# Copy application files from the builder
COPY --from=builder /app /var/task

CMD ["index.handler"]