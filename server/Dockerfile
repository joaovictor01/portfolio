FROM node:22

WORKDIR /server

COPY package*.json ./
COPY server ./

RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 5000

CMD ["npm", "run", "server"]