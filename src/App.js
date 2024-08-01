// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './firebase'; // Ensure firebase.js is imported to initialize Firebase
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;
