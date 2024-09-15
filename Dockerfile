# Stage 1: Build the application
FROM node:16.20.1 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

FROM node:16.20.1

WORKDIR /app

COPY --from=build /app /app

EXPOSE 4000

CMD [ "npm", "run", "start" ]
