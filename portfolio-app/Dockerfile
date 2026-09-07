# ---- Stage 1: build the frontend ----
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ---- Stage 2: backend + built frontend ----
FROM node:18-alpine
# build tools needed to compile better-sqlite3's native binding
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev

COPY backend/ ./backend/
COPY app.js ./app.js
COPY package.json ./package.json
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

ENV PORT=3000
EXPOSE 3000

CMD ["node", "app.js"]
