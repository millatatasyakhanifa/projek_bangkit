# STAGE 1
FROM node:14.17.5 AS build
ENV NODE_ENV=production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
# Copy app files
COPY . ./

RUN npm i -g pm2
CMD ["pm2-runtime", "app.js"]