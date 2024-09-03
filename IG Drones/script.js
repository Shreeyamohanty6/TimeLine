const timelineEntries = document.querySelectorAll('.timeline-entry');
const mainImage = document.getElementById('mainImage');
const mainTitle = document.getElementById('mainTitle');
const mainDescription = document.getElementById('mainDescription');

timelineEntries.forEach(entry => {
    entry.addEventListener('click', () => {
        // Remove active class from all entries
        timelineEntries.forEach(e => e.classList.remove('active'));
        
        // Add active class to the clicked entry
        entry.classList.add('active');
        
        // Get the new image source, title, and description
        const newImageSrc = entry.getAttribute('data-image');
        const newTitle = entry.getAttribute('data-title');
        const newDescription = entry.getAttribute('data-description');

        // Fade out the current content
        mainImage.style.opacity = 0;
        mainTitle.style.opacity = 0;
        mainDescription.style.opacity = 0;

        // After fade out, change the content, then fade in
        setTimeout(() => {
            mainImage.setAttribute('src', newImageSrc);
            mainTitle.textContent = newTitle;
            mainDescription.textContent = newDescription;
            
            mainImage.style.opacity = 1;
            mainTitle.style.opacity = 1;
            mainDescription.style.opacity = 1;
        }, 500); // Match this duration with the CSS transition time
    });
});
