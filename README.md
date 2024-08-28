
# Personal Portfolio Website

This project is my personal portfolio website. The website showcases my skills, projects, and education, and it allows visitors to contact him directly. It is built using HTML, CSS, JavaScript, and Firebase for backend services.




## Table of Contents
1. Features
2. Technologies Used
3. Setup Instructions
4. Usage
5. Project Structure
6. Firebase Integration

## Features

- Responsive Design: The website is mobile-friendly and adjusts to different screen sizes.
- Projects: A dedicated section for showcasing projects with descriptions and links to GitHub repositories.
- Skills Section: Displays my technical skills with relevant icons.
- Education Timeline: A timeline section that outlines my educational background.
- Contact Form: A contact form for visitors to send messages directly.
- Firebase Integration: Firebase is used to manage authentication and Firestore for database services.


## Technologies Used

- Frontend:
    - HTML5
    - CSS3
    - JavaScript
- Backend:
    - Firebase Authentication
    - Firebase Firestore
- Tools & Libraries:
    - ReactJS
    - Tailwind CSS
    - Git & GitHub
## Setup Instructions

1. Clone the repository:

bash

```git clone https://github.com/username/repo-name.git```

```cd repo-name```

2. Install dependencies:
- This project uses plain HTML, CSS, and JavaScript, so there are no npm dependencies to install. Just ensure you have a modern web browser to view the site.

3. Set up Firebase:
- Create a Firebase project from the Firebase Console.
- Enable Firestore and Firebase Authentication.
- Replace the Firebase configuration in your scripts/script.js file with your Firebase project credentials.
4. Run the project:
- Open the index.html file in your preferred web browser to view the website.

## Usage
- Navigate to the portfolio sections via the top navigation bar.
- Browse through projects, skills, and educational background.
- Use the contact form to send a message directly.


## Project Structure

```.
├── index.html            # Main HTML file
├── styles.css            # Main CSS file
├── scripts/
│   └── script.js         # Main JavaScript file for Firebase integration
├── images/               # Folder for storing images
│   ├── LinkedIn.jpg      # LinkedIn profile image
│   ├── myphoto.png       # Profile photo
│   ├── github.png        # GitHub icon
│   └── ...               # Other images (skills icons, etc.)
└── README.md             # Project README file
```
## Firebase Integration 
- Firebase SDKs: The project includes Firebase SDKs for authentication and Firestore database services. Make sure to configure these with your own Firebase credentials in the script.js file.

Example Firebase Configuration in script.js:
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
```
Replace the placeholder values like "YOUR_API_KEY" with actual Firebase project credentials and update any additional links and names as needed.