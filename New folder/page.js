const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.item');
const titleElement = document.querySelector('.slider-content .title');
const descriptionElement = document.querySelector('.slider-content .description');
const linkElement = document.querySelector('.slider-content a');

let currentIndex = 0;

// Content data for each slide
const slideData = [
    {
        title: "Cyclone",
        description: "Explore the history of cyclones in Bangladesh.",
        link: "FAQ.html"
    },
    {
        title: "Flood",
        description: "Explore the history of floods in Bangladesh.",
        link: "flood-details.html"
    },
    {
        title: "River Erosion",
        description: "Explore the history of erosion in Bangladesh.",
        link: "erosion-details.html"
    }
];

function updateSliderContent(index) {
    const currentSlideData = slideData[index];
    titleElement.textContent = currentSlideData.title;
    descriptionElement.textContent = currentSlideData.description;
    linkElement.href = currentSlideData.link;
}

function moveSlider(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateSliderContent(currentIndex);
}

// Add event listeners to navigation buttons
document.querySelector('.prev').addEventListener('click', () => moveSlider(-1));
document.querySelector('.next').addEventListener('click', () => moveSlider(1));

// Initialize the first slide content
document.addEventListener('DOMContentLoaded', () => {
    updateSliderContent(currentIndex);
});
