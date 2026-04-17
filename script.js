document.addEventListener("DOMContentLoaded", () => {
    window.openInvitation = function() {
        const sealScreen = document.getElementById('seal-screen');
        const invitation = document.getElementById('invitation');

        sealScreen.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sealScreen.style.opacity = '0';
        sealScreen.style.transform = 'scale(1.06)';

        setTimeout(() => {
            sealScreen.style.display = 'none';
            invitation.style.display = 'block';
            requestAnimationFrame(() => {
                invitation.style.transition = 'opacity 0.7s ease';
                invitation.style.opacity = '1';
            });
            initReveal();
        }, 850);
    };

    function initReveal() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.13 });
        reveals.forEach(el => observer.observe(el));
    }
});
