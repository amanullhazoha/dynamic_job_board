# Dynamic Job Board Platform

A modern, responsive Job Board platform built using **React.js**, **Next.js**, and **Tailwind** **CSS**. This project focuses on creating a seamless experience for users, and recruiters, showcasing real-world application development practices.

## Features

### Home Page

- A clean and intuitive hero section with a job search bar.
- Featured jobs are displayed in an auto-playing carousel (with pause-on-hover functionality).
- Job categories like Tech, Marketing, and Design allow users to filter job listings quickly.
- Fully responsive design to ensure it looks great on desktops, tablets, and mobile devices.

### Job Listings Page

- Dynamic job listings powered by a custom mock server using Next.js API routes.
- Users can filter jobs by type, category, and location.
- Pagination implemented from scratch for smooth navigation through job results.
- Filters persist through query parameters, allowing users to share or bookmark filtered job views.

### Job Details Page

- Each job listing links to its detailed page using dynamic routes in Next.js.
- Includes tabs for key sections like Job Description, Requirements, and Company Info.
- A real-time chat widget enables candidates to communicate directly with recruiters, with chat history stored locally for persistence.

### User Authentication

- A simple login and signup system using a mock API for credential storage and validation.
- Logged-in users can access private routes, such as the job posting page.

### Post a Job

- A well-designed form for posting jobs, with validation for fields like title, description, category, and location.
- Submitted jobs are stored locally and displayed alongside existing job listings.

### Advanced Features

- A theme toggle for dark and light modes, with smooth transitions for better user experience.

---

## Tech Stack

- **Framework**: Next.js (React.js)
- **Mock Server**: Next.js API routes for job and user data
- **Styling**: Tailwind CSS for consistent, responsive design
- **State Management**: React Context API

---

## How to Run the Project

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or newer)
- **npm** or **yarn**

### Steps to Set Up Locally

1. Clone the repository:

   ```bash
   bash
   Copy code
   git clone https://github.com/amanullhazoha/dynamic_job_board.git
   cd dynamic_job_board

   ```

2. Install dependencies:

   ```bash
   bash
   Copy code
   npm install

   ```

3. Start the development server:

   ```bash
   bash
   Copy code
   npm run dev

   ```

4. Open the app in your browser at http://localhost:3000.

---

## Deployment

The application is deployed on **Render**. Check out the live demo here: [Live Demo](https://dynamic-job-board.onrender.com/).

---

## License

This project is open-source under the **MIT License**.
