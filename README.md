# 🏫 IIT-COEUT Website (Centre of Excellence in Urban Transportation)

> **Overview**: This website is the official web portal for the **Centre of Excellence in Urban Transportation (COEUT)** at **IIT Madras**. It showcases the centre's mission, national research projects, state-of-the-art laboratory facilities, faculty & research team members, and downloadable resources like datasets, software, and newsletters.

---

## 🛠️ Prerequisites (What You Need on Your Computer)

Before you run the website on your computer, you need 3 free software programs installed:

1. **Node.js** (The engine that runs web projects)
   - Download & Install from: [https://nodejs.org](https://nodejs.org/) (Choose the "LTS" version).
2. **Git** (The tool used to download code from GitHub)
   - Download & Install from: [https://git-scm.com](https://git-scm.com/)
3. **VS Code - Visual Studio Code** (A simple text editor to view and edit files)
   - Download & Install from: [https://code.visualstudio.com](https://code.visualstudio.com/)

---

## 🚀 How to Clone, Start, and Run the App (Step-by-Step)

Follow these simple steps to run the website on your own computer:

### Step 1: Open Terminal / Command Prompt
- On **Windows**: Press `Win + R`, type `cmd` or `powershell`, and press **Enter**.
- On **Mac**: Press `Cmd + Space`, type `Terminal`, and press **Enter**.

### Step 2: Download (Clone) the Website Code
Type or copy-paste this command into your terminal and press **Enter**:
```bash
git clone https://github.com/Dhayanithi-545/COEUT-IIT.git
```
*(This creates a folder named `COEUT-IIT` on your computer containing all project files.)*

### Step 3: Go into the Website (`web`) Folder
Type this command and press **Enter**:
```bash
cd COEUT-IIT/web
```

### Step 4: Install Required Packages
Type this command and press **Enter**:
```bash
npm install
```
*(This downloads all the necessary website building blocks into a folder called `node_modules`. You only need to run this once!)*

### Step 5: Start the Website!
Type this command and press **Enter**:
```bash
npm run dev
```

### Step 6: Open the Website in Your Web Browser
After running `npm run dev`, you will see text like this in your terminal:
```text
  ➜  Local:   http://localhost:5173/
```
- Open your browser (Google Chrome, Microsoft Edge, Safari, etc.).
- Go to address: **`http://localhost:5173`**
- 🎉 **Congratulations! The website is now running live on your computer!**

### 💡 How to Stop the Website:
When you are done, go back to your terminal window and press **`Ctrl + C`** on your keyboard to turn off the server.

---

## 📤 How to Save and Push Changes to GitHub

After making and saving your edits in VS Code (for example, modifying text inside `web/src/data.js`), follow these 3 simple commands in your terminal to push your changes to GitHub:

### Step 1: Stage (Select) Your Modified Files
Run this command:
```bash
git add .
```
*(This selects all the files you edited and prepares them to be saved.)*

### Step 2: Save a Snapshot (Commit)
Run this command with a short note describing what you changed:
```bash
git commit -m "Updated website content"
```
*(This saves a snapshot of your changes on your computer.)*

### Step 3: Push Changes to GitHub
Run this command:
```bash
git push
```
*(This uploads your updated code to the online GitHub repository.)*

---

## 🌐 Automatic Deployment with Vercel

This website is configured for **Automatic Deployment on Vercel**!

### How Automatic Deployment Works:
1. **Connected to GitHub**: The Vercel deployment system is directly linked to your GitHub repository (`Dhayanithi-545/COEUT-IIT`).
2. **Instant Live Updates**: Every time you run **`git push`**, Vercel automatically detects the update, builds the updated website in the cloud, and publishes it live to your web URL within **1 to 2 minutes**!
3. **Zero Maintenance**: You do **not** need to manually deploy files or configure server software. Simply push your changes to GitHub, and Vercel handles the rest automatically.

### ℹ️ Purpose of `vercel.json`:
The project includes a file named `vercel.json`. This instructs Vercel to route all page URL requests (such as `/about`, `/research`, `/labs`, `/people`, `/downloads`) to `index.html`, ensuring that visitors can refresh or bookmark any page without getting a `404 Page Not Found` error.

---

## 📂 File Structure: What Each File Has and Does

Here is a complete breakdown of every file in the project so you know exactly where everything is located.

```text
IIT-COEUT/
├── README.md               <-- You are reading this guide right now!
├── vercel.json             <-- Settings for publishing the website online on Vercel
└── web/                    <-- Main project folder containing all website code
    ├── index.html          <-- The main HTML web page frame
    ├── package.json        <-- List of website tools & libraries installed
    ├── vite.config.js      <-- Website builder configuration
    ├── public/             <-- Public images and website icons
    └── src/                <-- SOURCE CODE (Where all content & pages live)
        ├── data.js         <-- ⭐ MOST IMPORTANT FILE! (Holds all text & data)
        ├── App.jsx         <-- Page navigation router
        ├── main.jsx        <-- Website starter script
        ├── styles.css      <-- Colors, fonts, and visual styling
        ├── Navbar.jsx      <-- Top navigation menu bar
        ├── Footer.jsx      <-- Bottom website footer
        ├── HeroSection.jsx <-- Top homepage banner header
        ├── About.jsx       <-- "About COE" page
        ├── Research.jsx    <-- "Research & Projects" page
        ├── Labs.jsx        <-- "Labs & Facilities" page
        ├── People.jsx      <-- "Faculty & Team Members" page
        ├── Downloads.jsx   <-- "Downloads & Software/Datasets" page
        └── assets/         <-- Website images, logos, and banners
```

---

### 🔍 Detailed Explanation of Files & Folders

#### 📁 Top Level Files (`IIT-COEUT/`)
- **`README.md`**: This guide file providing step-by-step instructions.
- **`vercel.json`**: Routing instructions for Vercel deployment to ensure single-page app URLs work properly.
- **`.gitignore`**: A hidden text file that tells Git to ignore temporary files (like `node_modules`).

---

#### 📁 Web Configuration Files (`IIT-COEUT/web/`)
- **`package.json`**: The "recipe book" of the website. Lists all installed software packages (like React, icons, animation tools) and commands (`npm run dev`, `npm run build`).
- **`package-lock.json`**: Automatically generated file that records exact version numbers of installed tools. (You don't need to touch this).
- **`vite.config.js`**: Settings for **Vite**, the high-speed tool that converts code into a working web application.
- **`index.html`**: The skeleton web page file that sets the website title and loads the main React application.
- **`.oxlintrc.json`**: Rules for automated code checking and formatting.

---

#### 📁 Public Assets Folder (`IIT-COEUT/web/public/`)
- **`favicon.svg`**: The small icon shown on browser tabs next to the website name.
- **`IIT_Madras_Logo.svg.webp`**: Public logo file for IIT Madras.
- **`icons.svg`**: Graphic icons file.

---

#### 📁 Image Assets Folder (`IIT-COEUT/web/src/assets/`)
Contains all graphic images, photos, and logos used inside web pages:
- **`IIT_Madras_Logo.svg.webp`**: Official logo of IIT Madras displayed on the navigation bar.
- **`hero-image.jpg`**: Main banner image shown on the homepage background.
- **`hero-second.jpeg`**: Secondary banner image.
- **`mainbanner.jpg`**: General website hero banner image.
- **`react.svg`** / **`vite.svg`**: Default system icons.

---

#### 📁 Source Code Folder (`IIT-COEUT/web/src/`)

##### ⭐ `data.js` — THE MOST IMPORTANT FILE FOR YOU!
> **If you want to edit text, change phone numbers, update emails, add new faculty members, add research projects, or update downloads, THIS IS THE ONLY FILE YOU NEED TO EDIT!**

- **What it does**: Holds all the information, lists, and text displayed on the website.
- **What is inside**:
  - `navigationItems`: Menu items and dropdown links in the top header.
  - `centreOverview`: Mission statement, objectives, background history, partner institutes, governing council, and contact information.
  - `researchAreas` / `ongoingProjects` / `completedProjects`: All project titles, funding agencies, descriptions, and publication details.
  - `labFacilities`: Lab details, software tools, driving simulator info, field measurement equipment.
  - `peopleData`: Names, photos, designations, research areas, and emails of coordinators, faculty members, scholars, staff, and alumni.
  - `downloadsData`: Download links for software, datasets, reports, brochures, newsletters, and video links.

##### 🌐 `App.jsx`
- **What it does**: The website's traffic controller (Router). It switches between different pages when you click menu buttons (`/about`, `/research`, `/labs`, `/people`, `/downloads`).

##### 🚀 `main.jsx`
- **What it does**: The entry script that launches the React application onto the webpage (`index.html`). You rarely need to touch this.

##### 🎨 `styles.css`
- **What it does**: Controls how the website looks — colors (blue, gold, dark navy), font sizes, layout spacing, buttons, tables, cards, and mobile screen responsiveness.

##### 🧩 Page Components (The Building Blocks)
- **`Navbar.jsx`**: Displays the top menu bar, IIT Madras logo, COEUT title, mega dropdown menu, search bar, and mobile screen drawer menu.
- **`Footer.jsx`**: Displays the bottom bar with quick links, address, email, telephone number, and copyright notice.
- **`HeroSection.jsx`**: Displays the large title section and background image at the top of the home page.
- **`About.jsx`**: Draws the "About COE" page using data from `data.js` (Overview, Partners, Governing Council, Stakeholders, Newsletters, Contact Us).
- **`Research.jsx`**: Draws the "Research & Projects" page (Research Thrusts, Completed & Ongoing Projects, Tech Transfers, Publications).
- **`Labs.jsx`**: Draws the "Labs & Facilities" page (Simulator labs, software tools, data servers, testbeds, equipment).
- **`People.jsx`**: Draws the "People" page (Coordinators, Core Faculty, Associate Faculty, Staff, PhD Scholars, Alumni).
- **`Downloads.jsx`**: Draws the "Downloads" page (Software packages, datasets, research reports, newsletters, videos).

---

## 🤖 How to Make Changes Using AI 

If you ever want to update text, add new team members, or fix something in the future, you don't need to write code manually! Just open an AI assistant (like ChatGPT, Claude, or Gemini) and use these ready-made prompt templates:

### Example 1: To Add a New Team Member
> *"I have a React project where all website content is inside `web/src/data.js`. Please show me how to add a new faculty member named Dr. Rajesh Kumar with email rajesh@iitm.ac.in to the `peopleData` list."*

### Example 2: To Update Contact Details or Email
> *"I want to change the contact email in `web/src/data.js`. Where is `contacts` located in `data.js` and how should I edit it?"*

### Example 3: To Add a New Downloadable Document or Newsletter
> *"Here is a section of `web/src/data.js` for newsletters. Please format a new newsletter entry titled 'COEUT Newsletter Volume 15' with PDF link 'newsletter_v15.pdf'."*

---

## 📞 Quick Reference Summary

| Action | Command / File / Details |
| :--- | :--- |
| **Open Folder** | `cd COEUT-IIT/web` |
| **Start Website Locally** | `npm run dev` |
| **Local Website Address** | `http://localhost:5173` |
| **Stop Website** | Press `Ctrl + C` in Terminal |
| **Change Text / Content** | Edit file `web/src/data.js` |
| **Change Colors / Styling** | Edit file `web/src/styles.css` |
| **Stage Changes** | `git add .` |
| **Save Snapshot (Commit)** | `git commit -m "Updated website content"` |
| **Push & Auto-Deploy Live** | `git push` *(Vercel auto-deploys in 1-2 mins!)* |

---
