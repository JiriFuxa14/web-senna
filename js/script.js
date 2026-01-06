// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Parallax Effect
gsap.to(".hero-img", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Fade In Animations for Sections
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    gsap.from(section.children, {
        y: 50,
        // opacity: 0, // REMOVED: Prevent blank page if animation fails
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // When top of section hits 80% of viewport
            toggleActions: "play none none reverse"
        }
    });
});

// Stats Counter Animation
const stats = document.querySelectorAll(".stat-number");

stats.forEach(stat => {
    const target = parseInt(stat.getAttribute("data-target"));

    gsap.to(stat, {
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#stats",
            start: "top 70%",
            once: true // Only run once
        },
        snap: { innerHTML: 1 }, // Snap to whole numbers
        onUpdate: function () {
            stat.innerHTML = Math.round(this.targets()[0].innerHTML);
        }
    });
});

// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll('nav a, .btn-scroll');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.padding = '15px 5%';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
        nav.style.padding = '20px 5%';
    }
});

// --- AUDIO SYSTEM ---
document.addEventListener('DOMContentLoaded', () => {
    try {
        const bgMusic = document.getElementById('bg-music');
        const clickSfx = document.getElementById('click-sfx');

        // Only proceed if elements exist
        if (bgMusic && clickSfx) {
            bgMusic.volume = 0.35;
            clickSfx.volume = 0.1;

            // Safe Autoplay
            const attemptPlay = () => {
                bgMusic.play().catch(e => {
                    console.log("Audio autoplay waiting for interaction");
                });
            };
            attemptPlay();

            // Fallback for browsers blocking autoplay
            const unlockAudio = () => {
                bgMusic.play().then(() => {
                    document.removeEventListener('click', unlockAudio);
                    document.removeEventListener('scroll', unlockAudio);
                }).catch(e => console.log("Unlock waiting"));
            };
            document.addEventListener('click', unlockAudio);
            document.addEventListener('scroll', unlockAudio);

            // Click Effects
            document.querySelectorAll('a, button, .btn-scroll').forEach(el => {
                el.addEventListener('click', () => {
                    try {
                        if (clickSfx.readyState >= 2 || clickSfx.readyState === 0) {
                            clickSfx.currentTime = 0;
                            clickSfx.play().catch(e => console.error("SFX error", e));
                        }
                    } catch (err) { console.error("SFX critical error", err); }
                });
            });
        }
    } catch (criticalErr) {
        console.error("Audio system failed completely, but page continues:", criticalErr);
    }
});
