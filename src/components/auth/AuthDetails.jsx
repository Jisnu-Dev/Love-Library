import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null); // State to hold authenticated user

    useEffect(() => {
        const auth = getAuth(); // Initialize Firebase Auth
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user); // Set user if authenticated
            } else {
                setAuthUser(null); // Set null if not authenticated
            }
        });

        return () => unsubscribe(); // Clean up by unsubscribing on component unmount
    }, []);

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setAuthUser(null); // Clear user state on sign-out
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    return (
        <div>
            {authUser ? (
                <div>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;
