import React, { useEffect } from 'react';

const OffCanvasMenu = () => {
    useEffect(() => {
        const $offCanvasToggle = document.querySelectorAll('.offcanvas-toggle');
        const $offCanvas = document.querySelectorAll('.offcanvas');
        const $offCanvasOverlay = document.querySelector('.offcanvas-overlay');
        const $mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const $body = document.body;

        const handleToggleClick = (e) => {
            e.preventDefault();
            const $this = e.target;
            const $target = document.querySelector($this.getAttribute('href'));
            $body.classList.add('offcanvas-open');
            $target.classList.add('offcanvas-open');
            $offCanvasOverlay.style.display = 'block';
            if ($this.parentElement.classList.contains('mobile-menu-toggle')) {
                $this.classList.add('close');
            }
        };

        const handleCloseClick = (e) => {
            e.preventDefault();
            $body.classList.remove('offcanvas-open');
            $offCanvas.forEach(offCanvas => offCanvas.classList.remove('offcanvas-open'));
            $offCanvasOverlay.style.display = 'none';
            $mobileMenuToggle.querySelector('a').classList.remove('close');
        };

        $offCanvasToggle.forEach(toggle => toggle.addEventListener('click', handleToggleClick));
        document.querySelectorAll('.offcanvas-close, .offcanvas-overlay').forEach(element =>
            element.addEventListener('click', handleCloseClick)
        );

        // Cleanup event listeners on component unmount
        return () => {
            $offCanvasToggle.forEach(toggle => toggle.removeEventListener('click', handleToggleClick));
            document.querySelectorAll('.offcanvas-close, .offcanvas-overlay').forEach(element =>
                element.removeEventListener('click', handleCloseClick)
            );
        };
    }, []);

    return (
        <div>
            {/* Add your HTML structure here */}
            <div className="offcanvas-overlay"></div>
            {/* Example: */}
            <a href="#menu1" className="offcanvas-toggle">Toggle Menu</a>
            <div id="menu1" className="offcanvas">
                <a href="#" className="offcanvas-close">Close</a>
                {/* Menu content */}
            </div>
        </div>
    );
};

export default OffCanvasMenu;
