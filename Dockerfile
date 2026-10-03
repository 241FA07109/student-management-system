# Stage 1: Build client
FROM node:22-alpine AS client-builder

WORKDIR /app/client

COPY client/package*.json ./
RUN npm ci

COPY client/ ./
RUN npm run build


# Stage 2: Backend
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY index.js ./
COPY routes ./routes
COPY controllers ./controllers
COPY models ./models

COPY --from=client-builder /app/client/dist ./client/dist

EXPOSE 5000

CMD ["node", "index.js"]