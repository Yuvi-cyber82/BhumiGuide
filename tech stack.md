# BhumiGuide Intelligence — Technical Stack Overview

## 1. Product Architecture

This project is a full-stack web application with a single React frontend and a Node.js/Express backend connected to MongoDB. The app is structured as an MVP product for land-buying guidance, with a clear separation between:
- user interface
- business logic and API endpoints
- persistent reference data
- AI response logic
- document upload and verification workflow

The architecture is intentionally simple and pragmatic for an early-stage product:
- frontend handles UX, localization, and stateful user interaction
- backend exposes APIs for auth, data loading, progress sync, uploads, and AI
- MongoDB stores user accounts, progress, and seeded reference data
- optional AI keys can enable live model responses without changing core UX

## 2. Frontend Stack

### Core technologies
- React 18
- Vite for local development and build tooling
- JavaScript (ES modules)
- Tailwind CSS for utility-driven styling
- Custom CSS and inline style objects for design-system patterns and layout logic

### UI-related libraries
- lucide-react for icons
- custom theme and component abstraction in frontend/src/theme.js and frontend/src/components

### Frontend structure
- frontend/src/App.jsx: main app shell and global state orchestration
- frontend/src/pages/: page-level screens such as Home, LandBuying, Documents, AI, Legal Verification, Account, Dashboard
- frontend/src/components/: reusable UI behaviors and cards
- frontend/src/data/: seeded reference data for locations, procedure, documents, offices, and charges
- frontend/src/api/: API wrappers for auth, uploads, progress, and reference data
- frontend/src/i18n.js and i18n.places.js: localization support for multi-language UX

### Frontend responsibilities
- page navigation and state transitions
- location selection and procedure personalization
- AI assistant chat flow
- document checklist tracking
- login/signup modal flows
- progress sync to backend
- upload and verification workflows

## 3. Backend Stack

### Core technologies
- Node.js
- Express
- MongoDB via Mongoose
- ES modules

### Backend packages
- bcryptjs: password hashing
- jsonwebtoken: JWT-based authentication
- mongoose: MongoDB ODM
- multer: file upload handling
- cors: cross-origin handling
- dotenv: environment configuration
- mongodb-memory-server: in-memory MongoDB fallback for local development
- nodemailer: OTP email sending
- google-auth-library: Google sign-in verification

### Backend structure
- backend/server.js: app bootstrap and route mounting
- backend/src/config/db.js: database connection logic
- backend/src/routes/: API route definitions for auth, reference, AI, uploads, and progress
- backend/src/models/: Mongoose models for User, Progress, VerificationRecord, ReferenceData, ProcedureStep, DocumentInfo
- backend/src/utils/: service modules for AI, OTP, emails, auth, upload analysis, and data seeding
- backend/src/middleware/: auth and upload middleware
- backend/src/seedData/: static reference data used to seed the database

### Backend responsibilities
- API hosting for frontend communication
- JWT validation and account management
- seeded state/district/taluka data and procedure metadata
- user progress persistence
- document file upload storage and metadata capture
- AI question handling with fallback answers
- OTP generation and optional email sending

## 4. Data Layer

### Database choice
MongoDB is used as the primary database because the project stores:
- dynamic reference data
- semi-structured document metadata
- user records and progress snapshots
- verification records and uploaded file metadata

### Mongoose models
- User: account details, password hash, Google identity, email verification state
- Progress: saved checklist state, profile answers, notification preferences, activity stream
- ReferenceData: generic key-value reference data for locations and rules
- ProcedureStep: ordered procedure steps and conditional steps
- DocumentInfo: document metadata such as purpose, type, office, and mandatory status
- VerificationRecord: uploaded file records tied to a user and property verification flow

### Seed strategy
The app seeds reference data on startup using backend/src/utils/seedReferenceData.js. This makes the backend boot with the same base data every time and allows local development without manual setup.

## 5. Authentication and Security

### Authentication approach
- JWT tokens with a secret stored in environment variables
- required on protected routes
- optional authentication is also supported for some AI endpoints

### Security features implemented
- bcrypt password hashing
- JWT verification middleware
- Google credential validation for Google sign-in
- protected upload routes for logged-in users only
- token-based persistence in frontend local storage / state management

### Notes
The project uses a developer secret fallback for JWT in local development, which is appropriate for an MVP but should be replaced with a strong production secret.

## 6. AI Integration

The AI assistant supports a layered strategy:

### Rule-based engine
- Used as the default fallback when no live API key is configured
- Helps keep the product working without external services
- Implements deterministic responses based on the user’s location and profile

### Live AI support
- Gemini is the model used in the backend route layer
- The code is designed to use environment-based API keys and gracefully fallback if the model fails
- AI context includes state/district location, approximate charges, and user-specified case details

### AI flow
- user sends a question from frontend
- backend attaches local context such as selected region and profile variables
- AI or rule engine generates an answer
- response is sent back to frontend with optional segment metadata for structured rendering

## 7. File Upload and Verification Workflow

### Upload handling
- multer is used to accept file uploads on the backend
- files are stored under backend/uploads
- metadata such as file name, size, MIME type, and saved server name is stored in MongoDB

### Document analysis
- backend utility logic identifies likely document types by filename and extension
- missing documents are computed against mandatory rules for the selected state
- file age and format are flagged as warnings/errors when suspicious

### Verification model
- the app simulates a legal verification flow with a staged sequence of checks
- it records the user’s survey number, property context, and uploaded files
- readiness is estimated based on compliance with state-specific requirements

## 8. Frontend/Backend Integration

### API design pattern
The frontend calls a backend API base URL configured through environment variables, with endpoints such as:
- /api/auth
- /api/reference
- /api/ai
- /api/uploads
- /api/progress

### Data-fetch approach
- reference data is loaded once on app startup
- progress is restored when a stored token is detected
- activity and notifications sync after state changes
- backend APIs return JSON data and are consumed directly by React state

## 9. Localization and UX Model

The app supports a multilingual UX with language switching via:
- frontend/src/i18n.js
- frontend/src/i18n.places.js

This is important because the user base includes multiple Indian language contexts. The AI assistant also uses language-aware prompts and attempts to answer in the user’s selected language while preserving technical document names and acronyms.

## 10. Development and Environment Setup

### Local development flow
- Backend:
  - cd backend
  - npm install
  - npm run dev
- Frontend:
  - cd frontend
  - npm install
  - npm run dev

### Environment variables
Typical configuration includes:
- MONGO_URI for database connection
- JWT_SECRET for auth
- GOOGLE_CLIENT_ID for Google auth
- GEMINI_API_KEY or similar external model credentials
- SMTP or email service configuration if OTP delivery is enabled

### Local fallback behavior
- If no MongoDB connection string is present, the app may start with mongodb-memory-server
- If AI keys are missing, the product uses rule-based answer generation instead of live model calls

## 11. Design and Implementation Style

### Strengths of the current stack
- Fast MVP development with modern JS tooling
- Clear separation of concerns between UI, API, and data layer
- Strong emphasis on real user flows and prototype realism
- Simple enough for a small team to evolve without heavy infrastructure

### Trade-offs
- Frontend uses custom styling patterns rather than a full design system
- Backend uses data seeding and in-memory fallback rather than a full production-grade data pipeline
- AI answers are state-aware but still approximate
- Government data is indicative rather than authoritative legal data

## 12. Recommended Production Evolution

For production-grade scaling, the current stack could evolve by adding:
- a more robust deployment pipeline with Docker and CI/CD
- production MongoDB hosting with proper backups
- stronger secret management and environment isolation
- a more formal API versioning layer
- external verification and legal data sources
- rate limiting, audit logging, and monitoring

## 13. Summary

BhumiGuide Intelligence is built around a simple but effective architecture:
- React + Vite + Tailwind on the frontend
- Node.js + Express on the backend
- MongoDB for persistent data
- Mongoose models for stateful application data
- rule-based + optional AI response generation
- file upload and readiness analysis for document-check workflows

This stack is well-suited for a product MVP focused on practical buyer guidance, account persistence, and context-aware land-buying decisions in the Indian market.
