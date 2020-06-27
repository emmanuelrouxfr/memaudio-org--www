FROM node:alpine as build
LABEL maintainer="Bamdad Sabbagh <devops@bamdadsabbagh.com>"

WORKDIR /app

COPY package.json yarn.lock .snyk ./
RUN yarn install --pure-lockfile --no-progress

COPY . ./
RUN yarn build

# serve
FROM nginx:alpine
LABEL maintainer="Bamdad Sabbagh <devops@bamdadsabbagh.com>"

COPY --from=build /app/build /app
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

USER node
CMD ["nginx", "-g", "daemon off;"]
