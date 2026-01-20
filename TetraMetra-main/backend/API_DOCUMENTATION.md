 # Tetrahedron Backend API Documentation

 ## Overview

 This document describes the currently implemented backend API (authentication, blogs and case studies).
 Base URL (local): `http://localhost:5000/api`

 Notes:
 - Authentication uses JWTs. Tokens are issued on registration/login and expire in 30 days.
 - Protected routes require the header `Authorization: Bearer <token>`.
 - File uploads (images) use Cloudinary via `multer-storage-cloudinary`. Endpoints that accept images use `multipart/form-data`.

 ---

 ## Environment variables
 Required variables (in `backend/.env`):
 - `MONGO_URI` - MongoDB connection string
 - `JWT_SECRET` - secret used to sign tokens
 - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` - Cloudinary credentials for image uploads

 ---

 ## Error format
 All error responses return JSON in the shape:
 ```json
 { "message": "Error description" }
 ```

 ## Endpoints

 ### Authentication (`/api/auth`)

 - POST `/api/auth/register`
   - Access: Public
   - Accepts: JSON or form data with `email` and `password` (route uses `multer().none()` but `express.json()` is also enabled).
   - Body:
     ```json
     { "email": "user@example.com", "password": "password123" }
     ```
   - Success (201): returns created user and token
     ```json
     { "_id": "<id>", "email": "user@example.com", "token": "<jwt>" }
     ```

 - POST `/api/auth/login`
   - Access: Public
   - Body: same as register
   - Success (200): returns user and token

 ---

 ### Blogs (`/api/blogs`)

 - GET `/api/blogs`
   - Access: Public
   - Returns: array of blog documents

 - POST `/api/blogs`
   - Access: Private (Authorization header required)
   - Content-Type: `multipart/form-data`
   - Form fields:
     - `title` (string, required)
     - `description` (string, required)
     - `date` (optional, ISO string)
     - `image` (file, optional)
   - On success (201) returns the created blog document

 - GET `/api/blogs/:id`
   - Access: Public
   - Returns a single blog document or 404

 - PUT `/api/blogs/:id`
   - Access: Private
   - Content-Type: `multipart/form-data`
   - Form fields (all optional): `title`, `description`, `author`, `date`, `image` (file)
   - Updates the fields provided; returns updated blog document

 - DELETE `/api/blogs/:id`
   - Access: Private
   - Deletes the blog and returns `{ message: 'Blog removed' }`

 Blog model fields (summary): `title` (string), `description` (string), `date` (Date), `image` (string - Cloudinary URL), `createdBy` (User id)

 ---

 ### Cases (`/api/cases`)

 - GET `/api/cases`
   - Access: Public
   - Returns: array of case documents

 - POST `/api/cases`
   - Access: Private
   - Content-Type: `multipart/form-data`
   - Form fields:
     - `title` (string, required)
     - `description` (string, required)
     - `image` (file, optional)
   - Success (201): returns created case document

 - GET `/api/cases/:id`
   - Access: Public
   - Returns a single case document or 404

 - PUT `/api/cases/:id`
   - Access: Private
   - Content-Type: `multipart/form-data`
   - Form fields (all optional): `title`, `description`, `image` (file)
   - Returns updated case document

 - DELETE `/api/cases/:id`
   - Access: Private
   - Deletes the case and returns `{ message: 'Case removed' }`

 Case model fields (summary): `title` (string), `description` (string), `image` (string), `createdBy` (User id)

 ---

 ## Models (brief)
 - `User`:
   - `email` (string, unique)
   - `password` (string, hashed via bcrypt)
 - `Blog`:
   - `title`, `description`, `date`, `image`, `createdBy`
 - `Case`:
   - `title`, `description`, `image`, `createdBy`

 ---

 ## Authentication middleware
 The `protect` middleware checks `req.headers.authorization` for a header starting with `Bearer `, extracts the token, verifies it with `JWT_SECRET`, and attaches `req.user` (User document without password) to the request. If the token is missing/invalid the middleware responds with `401` and `{ message: 'Not authorized, ...' }`.

 ## Uploads (images)
 Image uploads use Cloudinary via `multer-storage-cloudinary`. The middleware `upload.single('image')` is applied to routes that accept images. The controller saves `req.file.path` (Cloudinary URL) into the model's `image` field.

 ---

 ## Examples

 Register
 ```bash
 curl -X POST http://localhost:5000/api/auth/register \
   -H "Content-Type: application/json" \
   -d '{"email":"user@example.com","password":"password123"}'
 ```

 Login
 ```bash
 curl -X POST http://localhost:5000/api/auth/login \
   -H "Content-Type: application/json" \
   -d '{"email":"user@example.com","password":"password123"}'
 ```

 Create blog (with image)
 ```bash
 curl -X POST http://localhost:5000/api/blogs \
   -H "Authorization: Bearer <token>" \
   -F "title=My Blog" \
   -F "description=Blog content" \
   -F "image=@/path/to/image.jpg"
 ```

 Update blog (multipart - optional fields)
 ```bash
 curl -X PUT http://localhost:5000/api/blogs/<id> \
   -H "Authorization: Bearer <token>" \
   -F "title=Updated title" \
   -F "image=@/path/to/new.jpg"
 ```

 ---

 ## Troubleshooting
 - If you get `401: Not authorized, token failed` or `JsonWebTokenError: jwt malformed` ensure the client sends a valid `Authorization: Bearer <token>` header (not `Bearer null`).
 - Ensure `JWT_SECRET` in `.env` matches the secret used when generating tokens.

 ---

 Last updated: match code in `backend/src` (controllers/routes/middleware)
```bash
curl -X PUT http://localhost:5000/api/blogs/<blog_id> \
  -H "Authorization: Bearer <token>" \
  -F "title=Updated Title" \
  -F "description=Updated content"
```

### Delete a Blog Post
```bash
curl -X DELETE http://localhost:5000/api/blogs/<blog_id> \
  -H "Authorization: Bearer <token>"
```

---

## Notes

- All dates are returned in ISO 8601 format
- Image uploads use multipart/form-data
- JWT tokens are included in responses for register and login endpoints
- Protected endpoints require valid Bearer token in Authorization header
- Case studies and blog posts track creator via `createdBy` field
