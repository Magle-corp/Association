FROM cypress/base:14

# Set working directory.
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# Check that cypress is installed correctly.
RUN npx cypress verify

# Install dependencies.
CMD npm install
