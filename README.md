Video: https://www.youtube.com/watch?v=ardeKHEN1j4&t=3450s&ab_channel=ChrisBlakely

# Backend
```bash
> cd backend
> npm i express cors dotenv mongodb mongoose
> npm i ts-node typescript nodemon @types/express @types/cors @types/node --save-dev
> npx tsc --init
> npm i express-oauth2-jwt-bearer
> npm i jsonwebtoken
> npm i @types/jsonwebtoken --save-dev
> npm i express-validator
> npm i cloudinary
> npm i multer
> npm i @types/multer
> npm i stripe
> npm i concurrently
```

# Backend To Run
```bash
> cd backend
> npm run dev

# Open Another Terminal
> stripe login
> stripe listen --forward-to localhost:7000/api/order/checkout/webhook
# similar completed checkout by running in another terminal
> stripe trigger checkout.session.completed
```

# Frontend
```bash
> npm create vite@latest
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
> npm i -D @types/node

> npx shadcn-ui@latest init
> npx shadcn-ui@latest add button
> npx shadcn-ui@latest add sheet
> npx shadcn-ui@latest add separator
> npx shadcn-ui@latest add dropdown-menu
> npx shadcn-ui@latest add form
> npx shadcn-ui@latest add input
> npx shadcn-ui@latest add sonner
> npx shadcn-ui@latest add checkbox
> npx shadcn-ui@latest add aspect-ratio
> npx shadcn-ui@latest add pagination
> npx shadcn-ui@latest add card
> npx shadcn-ui@latest add badge
> npx shadcn-ui@latest add dialog
> npx shadcn-ui@latest add progress
> npx shadcn-ui@latest add tabs  
> npx shadcn-ui@latest add select

> npm i react-router-dom
> npm i lucide-react
> npm i @auth0/auth0-react
> npm i react-query
> npm i zod
```

# Frontend To Run
```bash
> cd frontend
> npm run dev

## test typescript
> npx tsc
```

# Deploy to Render.com
https://youtube-mern-food-ordering-backend.onrender.com/health
https://youtube-mern-food-ordering-frontend.onrender.com
```bash
- Backend - add render.com IP to mongodb atlas
- Frontend - add render.com domain name to Auth0 allowed callback URLs
- Download sample restaurant data (London, Manchester):
https://github.com/chrisblakely01/mern-food-ordering-app-course-resources/blob/main/restaurants_data.json
```

