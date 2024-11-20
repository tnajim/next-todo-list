**next-todo-list** is a simple todo list CRUD app developed using **[Next.js](https://nextjs.org/)** and the **[PocketBase API](https://pocketbase.io/)**.

## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Git** (optional, for version control): [Download and install Git](https://git-scm.com/)

## Getting Started

- Clone the project
- Open terminal on the project

Start the PocketBase application in your terminal:

```
./pocketbase serve
```
- Open the Admin UI: `http://127.0.0.1:8090/_/`
- Create an Admin Account
- Create a new Collection called `notes2` with a "plain text" field named `content`
- Unlock all the collection's API rules to grant everyone access (for local use)

Run the development server:

```bash
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Create, Update and Delete todos