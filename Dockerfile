# --- Etapa de Construcción (Builder) ---
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # Copiamos los archivos de dependencias
    COPY package*.json ./
    
    # Usamos 'ci' en lugar de 'install' para instalaciones limpias y reproducibles en CI/CD
    RUN npm ci
    
    # Copiamos todo el código fuente
    COPY . .
    
    # (Opcional) Si tu landing usa variables de entorno en tiempo de compilación (ej. PUBLIC_API_URL)
    # Descomenta las siguientes líneas y pásalas desde la interfaz de Dokploy
    # ARG PUBLIC_API_URL
    # ENV PUBLIC_API_URL=$PUBLIC_API_URL
    
    # Compilamos el proyecto de Astro (genera los archivos estáticos en /app/dist)
    RUN npm run build
    
    # --- Etapa de Producción ---
    FROM nginx:alpine
    
    # Copiamos la configuración personalizada de Nginx
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Copiamos los archivos generados en la etapa de build hacia Nginx
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Exponemos el puerto 80 (Traefik en Dokploy se conectará a este puerto)
    EXPOSE 80
    
    # Iniciamos Nginx
    CMD ["nginx", "-g", "daemon off;"]