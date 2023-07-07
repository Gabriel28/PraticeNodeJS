FROM node

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "dev" ]; \
        then npm install; \
        else npm install --only=production; \
        fi
        
COPY . ./

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.11.0/wait /wait
RUN chmod +x /wait

CMD [ "node", "./src/server.js"]