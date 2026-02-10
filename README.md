# 🔐 AuthFlow: React + Firebase + MongoDB

A full-stack authentication system featuring Google Login (Firebase) and a custom MongoDB backend.

## 📁 Project Structure

- **/backend**: Node.js & Express server with Mongoose and Firebase Admin SDK.
- **/frontend**: React + Vite application styled with Tailwind CSS.

---

## 🛠️ Setup Instructions

### 1. Clone the Project

```bash
git clone https://github.com/JahidC0deSpace/auth_flow.git
cd auth_flow
cd backend
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_key

# Firebase Service Account (from your serviceAccountKey.json)
FB_PROJECT_ID="your-project-id"
FB_CLIENT_EMAIL="firebase-adminsdk-..."
FB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
npm run dev
```
