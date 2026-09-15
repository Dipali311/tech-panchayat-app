# Tech Panchayat

Tech Panchayat is a digital Gram Panchayat portal for residents, administrators, and Gram Panchayat teams. It provides public village information, notices, schemes, dashboards, tax records, welfare information, funding details, and receipt-related screens.

## Technology

- Frontend: React 18, React Router, Tailwind CSS, Axios, Lucide React
- Backend: Node.js and Express
- Database configuration: MySQL connection settings are prepared through environment variables
- Languages: English, Hindi, and Marathi

## Project Structure

```text
tech-panchayat-app/
|-- backend/
|   |-- index.js
|   |-- routes/
|   `-- database/
|-- frontend/
|   |-- public/
|   `-- src/
|-- .env.example
|-- .gitignore
`-- README.md
```

## Requirements

- Node.js 18 or newer
- npm
- Git
- MySQL, if database features are enabled

## Installation

Clone the repository and enter the project folder:

```bash
git clone https://github.com/Dipali311/tech-panchayat-app.git
cd tech-panchayat-app
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Environment Configuration

Copy `.env.example` to `.env` in the project root and replace the values with your local MySQL settings.

```text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=techpanchayat
DB_PORT=3306
```

Never commit `.env` or real passwords to GitHub.

## Run the Application

Start the backend in one terminal from the project root:

```powershell
cd backend
npm start
```

The backend runs at:

```text
http://localhost:5000
```

Start the frontend in a second terminal:

```powershell
cd frontend
npm start
```

Open the application at:

```text
http://localhost:3000
```

## Available Commands

From `frontend/`:

```bash
npm start       # Start the React development server
npm run build   # Create a production build
npm test        # Run frontend tests
```

From `backend/`:

```bash
npm start       # Start the Express server
npm run dev     # Start with nodemon
```

## Current Data Note

Several dashboard screens currently use sample data stored in frontend components. The authentication route also currently uses sample users. The MySQL connection configuration is separated into environment variables and can be connected to persistent database routes as the application develops.

## Contributing

1. Create a new branch.
2. Make and test your changes.
3. Commit the changes with a clear message.
4. Push the branch and open a pull request.

```bash
git checkout -b feature/your-change
git add .
git commit -m "Describe your change"
git push -u origin feature/your-change
```
