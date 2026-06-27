# ToplifeAI Platform

ToplifeAI is a comprehensive, AI-powered healthcare ecosystem SaaS platform. This monorepo-style structure houses both the frontend application and the backend services.

## Project Structure

- `frontend/`: Next.js 15 (App Router) application. Built with Tailwind CSS, Shadcn UI, and Framer Motion.
- `backend/`: NestJS backend. Serves as the primary API, managing the PostgreSQL database via Prisma ORM.

## Features Overview

1. **AI Health Assistant**: ChatGPT-like AI assistant for health questions, recommendations, and risk analysis.
2. **Personal Health Records**: Secure storage for medical reports, lab results, MRI, prescriptions, etc.
3. **Activity Tracking**: Track steps, distance, calories with integrations like Apple Health & Google Fit.
4. **Doctor & Medical Experts Platform**: Appointments, scheduling, remote video consultations.
5. **International Patients**: Dedicated workflow for case reviews, medical tourism in Vietnam, visa and accommodation support.
6. **Gene & Precision Medicine**: Upload gene reports to get disease risk scoring and personalized prevention plans.
7. **Wellness & Longevity**: Nutrition, exercise, and lifestyle recommendations.
8. **Admin CMS & Dashboards**: Analytics, Payments, User Management, Content Management for News & Insights.

## Quick Start (Phase 1)

### Requirements

- Node.js >= 18.x
- Docker and Docker Compose

### 1. Database Setup

Make sure you copy the environment template and start the PostgreSQL container:

```bash
cp .env.example .env
docker-compose up -d
```

### 2. Backend Setup

```bash
cd backend
npm install
# Setup prisma...
# npm run start:dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
# npm run dev
```

## Security & Compliance

ToplifeAI is designed with HIPAA-inspired architecture and GDPR readiness in mind, focusing on robust Role-Based Access Control (RBAC) and data encryption.
