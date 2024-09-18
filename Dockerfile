FROM node:22

RUN mkdir -p /server

WORKDIR /server
ADD server /server
COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 5000

CMD ["npm", "run", "server"]