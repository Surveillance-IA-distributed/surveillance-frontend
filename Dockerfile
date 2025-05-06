# Etapa 1: Construcción de la aplicación Angular SSR
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar el código fuente
COPY . .

# 🔧 Construcción SSR (no build común)
RUN npm run build -- --configuration=production

# Etapa 2: Imagen final para producción SSR
FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar todo lo necesario desde build
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY package*.json ./
RUN npm install --legacy-peer-deps --production

# Exponer el puerto del SSR
EXPOSE 4200

# Ejecutar SSR
#CMD ["node", "/usr/src/app/dist/frontend/server/main.server.mjs"]
CMD ["node", "/usr/src/app/dist/frontend/server/server.mjs"]