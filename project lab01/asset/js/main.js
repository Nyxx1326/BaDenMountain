// ===== DARK / LIGHT MODE TOGGLE =====
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Dark/Light Mode';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px 15px';
toggleBtn.style.zIndex = '1000';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Optional: Save preference to localStorage
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
        target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== LAZY-LOADING IMAGES =====
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            // If you used data-src attribute for lazy loading
            if(img.dataset.src){
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
        });
    }, { rootMargin: "0px 0px 50px 0px" });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});
