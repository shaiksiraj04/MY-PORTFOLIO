# Backend API TODO

## Step 1: Create project scaffolding
- [ ] Create `backend/` folder structure (config, controllers, routes, models, middleware, uploads, utils, services)
- [ ] Add `backend/package.json`, `backend/server.js`, `.env.example`

## Step 2: Implement core infrastructure
- [ ] Add MySQL connection + query helpers in `backend/config`
- [ ] Add middleware: CORS, Helmet, Morgan, asyncHandler, authAdmin, multer upload config
- [ ] Add global error handler + not-found middleware

## Step 3: Database schema
- [ ] Create `backend/config/schema.sql` with all required tables
- [ ] Add schema comments

## Step 4: Implement APIs
- [ ] Admin auth: login + JWT + protected admin routes
- [ ] Portfolio profile public API
- [ ] Skills public API (+ admin CRUD)
- [ ] Projects public API (pagination/search/tags) + admin CRUD + multiple image upload
- [ ] Experience public API
- [ ] Education public API
- [ ] Achievements public API
- [ ] Hobbies public API
- [ ] Social links public API
- [ ] Contact public API: validate, spam prevention, store, nodemailer to admin
- [ ] Dashboard summary admin API

## Step 5: Extra endpoints
- [ ] Visitor counter (analytics)
- [ ] Resume upload + public resume URL
- [ ] SEO metadata endpoint
- [ ] Portfolio analytics endpoint
- [ ] Dark/light preference storage
- [ ] Pagination + search patterns for lists

## Step 6: Documentation & setup
- [ ] Add `backend/README.md` with setup + run instructions
- [ ] Add API JSDoc comments across routes/controllers

## Step 7: Test
- [ ] Run server locally
- [ ] Validate major endpoints with curl/Postman

