FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose Storybook port
EXPOSE 6006

# Run Storybook
CMD ["npm", "run", "storybook", "--", "--host", "0.0.0.0"]
