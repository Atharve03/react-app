import React, { useEffect } from 'react';

const RedirectPage = () => {
    useEffect(() => {
        const detectOS = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            if (/android/i.test(userAgent)) {
                window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android";
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.location.href = "https://apps.apple.com/app/instagram/id389801252";
            } else {
                // Redirect to a generic page or handle other OS
                alert("Unsupported OS");
                // Redirect to a default URL
                window.location.href = "https://example.com";
            }
        };

        detectOS();

    }, []); // Empty dependency array ensures useEffect runs only once after component mount

    return (
        <div>
            Redirecting...
        </div>
    );
};

export default RedirectPage;
