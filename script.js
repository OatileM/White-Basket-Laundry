/*
 * White Basket Laundry - JavaScript
 * Developer Notes:
 * - Intersection Observer for scroll animations
 * - Smooth scrolling enhancements
 * - Mobile-friendly interactions
 * - Performance optimized
 * - Cross-browser compatible
 */

// Simple burger menu functions
function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

function closeMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initScrollAnimations();
    initSmoothScrolling();
    initMobileOptimizations();
    initAccessibility();
    initMobileNavigation();
    
    /**
     * Mobile navigation functionality
     */
    function initMobileNavigation() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        
        console.log('Burger menu:', burgerMenu);
        console.log('Mobile nav:', mobileNav);
        
        if (burgerMenu && mobileNav) {
            burgerMenu.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Burger clicked');
                this.classList.toggle('active');
                mobileNav.classList.toggle('active');
                console.log('Classes toggled');
            });
            
            // Close mobile nav when clicking on a link
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    burgerMenu.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });
        } else {
            console.log('Elements not found');
        }
    }
    
    /**
     * Scroll-triggered animations using Intersection Observer
     * More performant than scroll event listeners
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Stop observing once animated to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.story-text, .contact-content');
        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
    
    /**
     * Enhanced smooth scrolling for better UX
     */
    function initSmoothScrolling() {
        // Smooth scroll to top functionality (if needed in future)
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        
        // Add scroll-to-top functionality to logo
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', scrollToTop);
            logo.style.cursor = 'pointer';
            logo.setAttribute('title', 'Back to top');
        }
    }
    
    /**
     * Mobile-specific optimizations
     */
    function initMobileOptimizations() {
        // Prevent zoom on input focus (if forms are added later)
        const viewport = document.querySelector('meta[name="viewport"]');
        
        // Add touch-friendly hover effects
        const interactiveElements = document.querySelectorAll('.whatsapp-btn, .logo');
        
        interactiveElements.forEach(element => {
            // Add touch start/end events for better mobile interaction
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        });
        
        // Optimize WhatsApp button for mobile
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            // Add haptic feedback on supported devices
            whatsappBtn.addEventListener('click', function() {
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });
        }
    }
    
    /**
     * Accessibility enhancements
     */
    function initAccessibility() {
        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            // Skip to main content with Tab key
            if (e.key === 'Tab' && !e.shiftKey) {
                const focusableElements = document.querySelectorAll(
                    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
                );
                
                // Ensure proper tab order
                focusableElements.forEach((el, index) => {
                    el.setAttribute('tabindex', index + 1);
                });
            }
        });
        
        // Add focus indicators for keyboard navigation
        const focusableElements = document.querySelectorAll('a, button');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--accent-color)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
        
        // Add ARIA labels for better screen reader support
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            whatsappBtn.setAttribute('aria-label', 'Contact us via WhatsApp at +27 62 019 2670');
        }
        
        const logo = document.querySelector('.logo');
        if ( ) {
            logo.setAttribute('aria-label', 'White Basket Laundry logo - Click to return to top');
        }
    }
    
    /**
     * Performance monitoring and optimization
     */
    function initPerformanceOptimizations() {
        // Lazy load images when they come into view
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });
            
            // Observe all images with data-src attribute
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
        
        // Preload all background images for smooth rotation
        const backgroundImages = ['Background.png', 'Background 2.png', 'Background 3.png'];
        backgroundImages.forEach(src => {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = src;
            document.head.appendChild(preloadLink);
        });
        
        // Preload logo
        const logoPreload = document.createElement('link');
        logoPreload.rel = 'preload';
        logoPreload.as = 'image';
        logoPreload.href = 'Logo.jpg';
        document.head.appendChild(logoPreload);
    }
    

    
    /**
     * Error handling and fallbacks
     */
    window.addEventListener('error', function(e) {
        console.warn('Non-critical error occurred:', e.message);
        // Graceful degradation - ensure basic functionality works
    });
    
    // Service Worker registration for future PWA features (optional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Uncomment when service worker is implemented
            // navigator.serviceWorker.register('/sw.js');
        });
    }
    
    /**
     * Analytics helper functions
     * Note: Replace with actual analytics implementation
     */
    function trackEvent(eventName, eventData = {}) {
        // Google Analytics 4 event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
        
        // Console log for development
        console.log('Event tracked:', eventName, eventData);
    }
    
    // Track WhatsApp button clicks
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            trackEvent('whatsapp_click', {
                'event_category': 'contact',
                'event_label': 'whatsapp_button'
            });
        });
    }
    
    // Track page engagement
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('page_engagement', {
            'event_category': 'engagement',
            'value': timeSpent
        });
    });
});

// CSS for scroll animations
const animationStyles = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .touch-active {
        transform: scale(0.98);
        transition: transform 0.1s ease-out;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .animate-on-scroll,
        .animate-in {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);