// حركة بسيطة عند ظهور الأقسام
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);
sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(section);
});
// تأثير بسيط على مؤشر الماوس
document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    document.body.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%,
            #111 0%,
            #050505 35%
        )
    `;
});
