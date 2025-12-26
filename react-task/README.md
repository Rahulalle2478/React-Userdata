# 👤 React User Profile App

A single-page React application that displays profiles of users fetched from a REST API.  
The app allows users to **view, like, edit, delete, and create new user profiles** dynamically.

---

## 🚀 Features

- Fetches user data from a REST API
- Displays user profile cards
- Generates unique avatars using DiceBear API
- Like button with toggle functionality
- Edit user details using a modal
- Delete user with confirmation popup
- Create new users using a form component
- Loading indicator while fetching data
- Responsive UI

---

## 🛠️ Technologies Used

- React JS
- JavaScript (ES6)
- HTML5
- CSS3 / Bootstrap / MUI / Tailwind (any UI framework used)
- Create React App
- Context API for state management

---

Avatar :
https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy

------
📂 Project Structure:

react-user-profile-app/
├── src/
│ ├── components/
│ │ ├── Create.jsx
│ │ ├── EditModal.jsx
│ │ ├── UserProfile.jsx
│ ├── context/
│ │ └── UserContext.js
│ ├── App.js
│ ├── index.js
│ └── styles/
│ └── styles.css
├── public/
└── package.json

-------


---

## ➕ Create User Functionality

- Users can create a new profile using the **Create User** form
- On submission:
  - A new user object is created
  - A unique avatar is generated using the username
  - The user is added to the existing list without refreshing the page
- State is managed globally using **Context API**

---

## ⏳ Loading Indicator

A loading spinner is shown when the app loads and remains visible until the API data is fully fetched.

---

## 📚 Concepts Covered

- JSX
- Functional Components
- Props and State
- Context API
- Conditional Rendering
- List Rendering
- Event Handling
- Forms and Validation
- Modals
- API Data Fetching
- State Management
- Lifting State Up

---

## ⚠️ Disclaimer

This project is built for **educational and assessment purposes only**.  
All APIs used are publicly available.

---

## 🧑‍💻 Author

Rahul Alle
git clone : "https://github.com/Rahulalle2478/React-Userdata.git "





