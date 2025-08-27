# Challenge Platform

## Project Overview
The Challenge Platform is a web-based application designed to facilitate the creation, submission, and review of coding challenges. It caters to two primary user types: developers, who can submit solutions to challenges, and companies, who can create challenges and review submissions. Key features include:
- User authentication and role-based access (developer/company).
- Challenge creation with customizable details (title, description, due date, etc.).
- Submission system with GitHub and live URL support.
- Review system for companies to approve or reject submissions.
- Real-time dashboard for tracking progress and submissions.
- Optimized navigation with loading states using React Router v7.

This platform aims to foster a collaborative environment for skill development and project evaluation.

## Folder Structure
The codebase is organized to maintain scalability and clarity:

- `/src`: Root directory for source files.
  - `/components`: Reusable UI components (e.g., `ChallengeCard`, `ReviewCard`, `GlobalSpinner`).
  - `/firebase`: Firebase configuration and service files (e.g., `auth.ts`, `challenges.ts`).
  - `/pages`: Page-level components or route-specific files (e.g., `DashboardPage.tsx`).
  - `/services`: Business logic and API calls (e.g., `challengeService.ts`).
  - `/context`: Context providers (e.g., `AuthContext` if implemented).
  - `/app.css`: Global styles or Tailwind CSS configurations.
  - `/+types`: TypeScript type definitions for routes and other structures.
  - `/routes`: Route configurations (e.g., `dashboard.tsx`).

This structure separates concerns, making it easy to locate UI, data logic, and routing files.

## Setup Instructions

### Dependencies
The project relies on the following dependencies:
- React
- React Router v7
- Tailwind CSS
- Firebase (for authentication, Firestore, and storage)
- TypeScript
- Lucide React (for icons)

Install them by running:
```bash
npm install
