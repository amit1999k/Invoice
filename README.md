# Invoice Website

## 🚀 Deployment
- **Frontend** → GitHub Pages (folder: `/frontend`)
- **Backend** → Render / Railway / Heroku (folder: `/backend`)

### Steps:
1. Push repo to GitHub.
2. In GitHub → Settings → Pages → set source to `/frontend`.
3. Deploy backend:
   ```bash
   cd backend
   npm install
   npm start
   ```
4. Update `frontend/script.js` → replace backend URL with your deployed backend.
