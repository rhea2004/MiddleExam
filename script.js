document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        const angle = (percent / 100) * 360;
        circle.style.background = `conic-gradient(#c9b5b5 0deg, #4caf50 ${angle}deg, #ddd ${angle}deg)`;
    });
});
