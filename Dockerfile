#Stage 1
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . ./
RUN npm run build:prod

#Stage 2
FROM nginx:1.21.6-alpine

COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]