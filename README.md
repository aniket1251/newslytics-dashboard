# Newslytics Dashboard

Newslytics is a responsive and feature-rich dashboard built with **Next.js** and **React**, designed to display and analyze articles fetched from a third-party API. It supports powerful data filtering, visualization, export capabilities, and authentication.

---

## 🚀 Features

### 🧩 Core Functionalities
- **Authentication**: GitHub OAuth login via `next-auth`
- **Dashboard UI**: Responsive layout with Sidebar, Header, Chart, Filters, and Table
- **News API Integration**: Fetches articles from a third-party source
- **Filtering**: Filter articles by:
  - Author
  - Type (news/blog)
  - Date range

### 📊 Analytics
- **Chart Types**: Toggle between Bar, Line, and Pie charts to visualize article distribution
- **Dynamic Updates**: Chart reflects filtered articles

### 💰 Payout Table
- Displays count of articles per author
- Editable payout rate per article
- Calculates and displays total payout

### 📤 Export Options
- **CSV Export** using `json2csv`
- **PDF Export** using `jspdf` + `autotable`

---

## 🛠 Tech Stack

- **Next.js** (App framework)
- **React** (Frontend library)
- **Tailwind CSS** (Styling)
- **next-auth** (Authentication)
- **chart.js + react-chartjs-2** (Charting)
- **jspdf & jspdf-autotable** (PDF Export)
- **json2csv** (CSV Export)

---

## 📦 Local Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/newslytics-dashboard.git
cd newslytics-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env.local`
Create a `.env.local` file at the root with the following:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_custom_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Development Server
```bash
npm run dev
```
Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```bash
/components         # Reusable UI components
/context            # Global context (Dashboard state)
/pages              # Next.js pages (Dashboard, API, Auth)
/utils              # Utility functions (e.g., fetchNews)
```