import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('Authrozation');
        localStorage.removeItem('memberEmail');
        localStorage.removeItem('memberName');
        localStorage.removeItem('authRole');
        localStorage.removeItem('isLogin');
        localStorage.clear();
        window.location.replace('/');
    });
};

export default Logout;