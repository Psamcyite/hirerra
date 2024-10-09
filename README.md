
# Hirerra

Hirerra is a platform that connects developers with employers for remote job opportunities. Built with cutting-edge technologies, Hirerra aims to simplify the hiring process and make it seamless for developers to showcase their skills and get hired by companies looking for remote talent.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Docker Setup](#docker-setup)
- [Usage](#usage)

## Features

- **Developer Profiles**: Developers can create detailed profiles showcasing their skills, experience, and portfolios.
- **Job Listings**: Employers can post job openings for remote positions across various domains.
- **Search and Filter**: Advanced search and filtering options for developers to find the right jobs and for employers to discover talent.
- **Application Management**: Developers can track the status of their job applications, and employers can manage applicants.
- **Responsive Design**: A user-friendly interface optimized for both mobile and desktop, using Tailwind CSS for a modern UI.

## Tech Stack

Hirerra is built using the following technologies:

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React.js**: For building the user interface and creating reusable components.
- **MongoDB**: NoSQL database for storing user profiles, job postings, and applications.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and modern UIs quickly.
- **Yarn**: Package manager for dependency management and project scripts.
- **Docker**: For containerized development and deployment.

## Installation

To get started with Hirerra locally using **Yarn**, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/psamcyite/hirerra.git
   ```

2. Navigate into the project directory:

   ```bash
   cd hirerra
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

4. Set up your environment variables. Create a `.env.local` file in the root directory and add your MongoDB connection string:

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Run the development server:

   ```bash
   yarn dev
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Docker Setup

If you prefer to run the application in a Docker container:

1. Ensure you have **Docker** installed on your machine.

2. Build the Docker image:

   ```bash
   docker build -t hirerra .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 3000:3000 --env-file .env.local hirerra
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

4. To stop the container:

   ```bash
   docker stop <container_id>
   ```

## Usage

- **Developers**: Sign up, create a profile, and start applying for remote jobs.
- **Employers**: Post job listings, search for candidates, and manage applications.
