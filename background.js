const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientType = document.getElementById("gradientType");
const angle = document.getElementById("angle");
const angleValue = document.getElementById("angleValue");
const preview = document.getElementById("preview");

function updateBackground() {
    const colorValue1 = color1.value;
    const colorValue2 = color2.value;
    const gradient = gradientType.value;
    const angleDegree = angle.value;

    let backgroundValue = "";

    if (gradient === "linear") {
        backgroundValue = `linear-gradient(${angleDegree}deg, ${colorValue1}, ${colorValue2})`;
    } else if (gradient === "radial") {
        backgroundValue = `radial-gradient(circle, ${colorValue1}, ${colorValue2})`;
    }

    preview.style.background = backgroundValue;
}

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
gradientType.addEventListener("change", updateBackground);
angle.addEventListener("input", () => {
    angleValue.textContent = `${angle.value}°`;
    updateBackground();
});
