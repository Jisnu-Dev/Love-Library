import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FacebookAuth } from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const user = await FacebookAuth(); // Call the FacebookAuth function
      console.log('Facebook user:', user);
    } catch (error) {
      console.error('Error signing in with Facebook:', error.message);
    }
  };

  return (
    <div className='sign-in-container'>
      <form onSubmit={handleSignIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <button className='py-3 rounded' onClick={handleFacebookSignIn}>Log In with Facebook</button>
      </form>
    </div>
  );
};

export default SignIn;
