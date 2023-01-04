#Stage 1
FROM node:19-alpine3.15 AS builder

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . ./
RUN npm run build

#Stage 2
FROM nginx:1.21.6-alpine

COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

RUN adduser -u 1002 -D non-root-user && chown -R non-root-user:non-root-user /usr/share/nginx/html
USER non-root-user

ENTRYPOINT ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
