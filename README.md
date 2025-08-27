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
```
Run the local environment:
```bash
npm run dev
```
## Firebase Configuration

Create a Firebase project in Firebase Console
.

Enable Authentication, Firestore Database, and optionally Hosting.

Add a new web app to get config values.

Create a file at src/firebase/config.ts:
```javascript
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```
Deployment Link

👉 https://bitbounty.vercel.app/
Here is a link to a short Demo https://www.loom.com/share/22ddb516229e458b8cd71bf8cb6d1304?sid=c2b22c86-0290-4216-9f33-448749d351f7

## Challenges Faced

React Router v7(Its relatively new to me, havent used react in a while mostyl Nextjs) Learning Curve

Challenge: Understanding how loaders/actions only work within routes.

Solution: Carefully studied the React Router docs, and optimized data fetching with  and defer() and some router 7 docs reccomendation to reduce load times.

Time Comparisons with Firebase Timestamps

Challenge: Difficulty comparing Firestore Timestamp objects directly with JS Date which was the thought process I had to query out the completed challenge i.e if due date is past the current date but it was a bit tricky to handle so I opted for another approach.

Solution: I used a flag passed to the challenge collection called active and I used that to query the active one and once the date is passed a job will run to update the status to not-active.

