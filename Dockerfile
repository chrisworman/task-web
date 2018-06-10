FROM nginx
COPY ./ /usr/share/nginx/html
COPY ./nginx.server.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
