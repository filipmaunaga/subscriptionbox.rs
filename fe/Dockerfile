# Stage 1 - Building stage
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./ 

RUN npm run build

# Stage 2 - Serve the app with nginx
FROM nginx:alpine

COPY --from=build app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

