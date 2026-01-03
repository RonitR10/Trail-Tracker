# Trail Tracker

Trail Tracker is a web application that helps users track the cities and countries they visit.  
It provides a clean and simple interface to add, view, and manage travel locations.
Leave a trail for someone to explore.

---

## 🚀 Features

- Track visited cities and countries
- Add, edit, and delete locations
- Clean and minimal UI
- Data persistence using JSON files (via JSON Server)

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Data Storage:** JSON files
- **Server:** JSON Server (required for read/write operations)
- **Version Control:** Git & GitHub

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/RonitR10/Trail-Tracker.git
cd Trail-Tracker
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start JSON  Server(required)
The Application requires a JSON server to read and write the city and coutry data.
```bash
npm install -g json-server
json-server --watch dist/cities.json --port 5000
```
### 4. Start the development server
```bash
npm run dev
```
Open the app in your browser.

## ⚠️ Important Notes

- A JSON Server must be running for the app to function correctly.

- The dist folder contains JSON files used for storing cities and countries.

- This project does not use a database; all data is handled via JSON files.

- Environment variables (if any) should be stored in .env files and not committed to GitHub.

## 📁 Project Structure
```
Trail-Tracker/
├── dist/                  # JSON data files (cities, countries)
├── src/                   # Application source code
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 👤 Author
### Ronit
Web Development Enthusiast

GitHub: https://github.com/RonitR10
  
