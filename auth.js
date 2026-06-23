// auth.js - Universal authentication system
(function() {
    'use strict';
    
    const CORRECT_PASSWORD = "hm321"; // Change this to your desired password
    const AUTH_KEY = 'kbAuthenticated';
    const LOGIN_PAGE = 'index.html'; // Your login page filename (e.g., index.html)

    // Function to check if user is authenticated
    function isAuthenticated() {
        return sessionStorage.getItem(AUTH_KEY) === 'true';
    }

    // Function to redirect to login page
    function redirectToLogin() {
        if (window.location.pathname.split('/').pop() !== LOGIN_PAGE) {
            window.location.href = LOGIN_PAGE;
        }
    }

    // Function to authenticate user
    function authenticate(password) {
        if (password === CORRECT_PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            return true;
        }
        return false;
    }

    // Auto-protect pages (except login page)
    function protectPage() {
        const currentPage = window.location.pathname.split('/').pop();
        
        // Don't protect the login page itself
        if (currentPage === LOGIN_PAGE) {
            return;
        }
        
        // Check authentication status
        if (!isAuthenticated()) {
            redirectToLogin();
        }
    }

    // Make functions available globally
    window.AuthSystem = {
        authenticate: authenticate,
        isAuthenticated: isAuthenticated
    };

    // Auto-run protection when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', protectPage);
    } else {
        protectPage();
    }
})();