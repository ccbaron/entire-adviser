# Entire Adviser

Sitio corporativo y plataforma base para captacion de leads de Entire Adviser / Entire Base.

Incluye:
- Frontend en Nuxt 4 para las paginas publicas.
- Backend en Node.js + Express para recibir formularios de contacto.
- Persistencia en MongoDB.
- Notificaciones por email usando Resend.

## Arquitectura

```
entire-adviser/
	backend/               # API Express (contacto, health, validaciones)
	frontend/              # Web principal en Nuxt 4
	frontend-spa-backup/   # Version SPA anterior (respaldo)
```

## Tecnologias

### Frontend
- Nuxt 4
- Vue 3
- Tailwind CSS v4

### Backend
- Node.js
- Express 5
- MongoDB (Mongoose)
- Zod (validacion)
- Resend (email)
- Pino (logging)

## Requisitos

- Node.js 20+
- npm 10+
- MongoDB accesible (local o remoto)
- Cuenta/API Key de Resend para notificaciones

## Instalacion

Instala dependencias por separado en frontend y backend:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Variables de entorno (backend)

El backend requiere estas variables para iniciar.

Crea el archivo `backend/.env`:

```env
PORT=4000
NODE_ENV=development

# URL del frontend permitido por CORS
FRONTEND_URL=http://localhost:3000

# MongoDB
MONGODB_URI=mongodb://127.0.0.1:27017/entire-adviser

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
NOTIFICATION_EMAIL=tu-correo@dominio.com
FROM_EMAIL=Entire Adviser <no-reply@tudominio.com>
```

Notas:
- Si falta cualquiera de las variables obligatorias, el backend no arranca.
- `FRONTEND_URL` debe coincidir con el origen real desde donde corre Nuxt.

## Ejecutar en desarrollo

Abre dos terminales.

### 1) Backend

```bash
cd backend
npm run dev
```

Backend por defecto en:
- `http://localhost:4000`

### 2) Frontend

```bash
cd frontend
npm run dev
```

Frontend por defecto en:
- `http://localhost:3000`

## Scripts disponibles

### Backend (`backend/package.json`)
- `npm run dev`: inicia con nodemon.
- `npm start`: inicia en modo normal.

### Frontend (`frontend/package.json`)
- `npm run dev`: servidor de desarrollo Nuxt.
- `npm run build`: build de produccion.
- `npm run preview`: previsualiza el build.
- `npm run generate`: genera version estatica.

## API

### Health check

`GET /api/health`

Respuesta esperada:

```json
{
	"ok": true,
	"message": "Backend de Entire Adviser funcionando correctamente"
}
```

### Enviar formulario de contacto

`POST /api/contact`

Body JSON:

```json
{
	"name": "Juan Perez",
	"email": "juan@empresa.com",
	"company": "Empresa SL",
	"message": "Hola, me interesa una propuesta para redisenar nuestra web corporativa."
}
```

Respuesta exitosa (`201`):

```json
{
	"ok": true,
	"message": "Contact form submitted successfully. We will get back to you soon.",
	"data": {
		"id": "...",
		"name": "Juan Perez",
		"email": "juan@empresa.com",
		"company": "Empresa SL",
		"message": "Hola, me interesa una propuesta para redisenar nuestra web corporativa.",
		"createdAt": "2026-03-21T12:34:56.000Z"
	}
}
```

Respuesta de error (ejemplo):

```json
{
	"ok": false,
	"message": "Debes introducir un email valido."
}
```

## Reglas de validacion del formulario

- `name`: minimo 2, maximo 100 caracteres.
- `email`: formato valido, maximo 150 caracteres.
- `company`: opcional, maximo 150 caracteres.
- `message`: minimo 10, maximo 2000 caracteres.

## Rate limiting

El endpoint de contacto limita las solicitudes a:
- 5 requests por IP cada 15 minutos.

Si se supera el limite, devuelve un error con `ok: false`.

## Flujo funcional de contacto

1. El usuario envia el formulario desde la pagina `/contact`.
2. El backend valida el payload con Zod.
3. Se guarda el lead en MongoDB.
4. Se intenta enviar email de notificacion via Resend.
5. El API responde `201` aunque falle el envio de email (el lead ya queda guardado).

## Produccion

- Configura correctamente `FRONTEND_URL` con el dominio real del frontend.
- Publica backend y frontend como servicios separados.
- Usa un MongoDB de produccion.
- Configura `NODE_ENV=production`.

Importante:
- Actualmente la pagina de contacto usa una URL fija para el backend: `http://localhost:4000/api/contact`.
- Para despliegue, actualiza esa URL o migra a una configuracion por entorno/runtime.

## Proyecto legado

La carpeta `frontend-spa-backup/` contiene una version anterior en Vue + Vite.
No es la version principal activa, pero se conserva como referencia.