 
 document.addEventListener('DOMContentLoaded', () => {
     const accordions = document.querySelectorAll('.accordion-header');
     const tabs = document.querySelectorAll('.tab');
     const tabContent = document.querySelectorAll('.tab-content img');
 
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const content = accordion.nextElementSibling;
            const isActive = accordion.classList.contains('active');
            accordions.forEach(acc => {
                acc.classList.remove('active');
                acc.nextElementSibling.style.display = 'none';
            });
            if (!isActive) {
                accordion.classList.add('active');
                content.style.display = 'block';
            }
        });
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');

            // Hide all images
            tabContent.forEach(content => content.classList.remove('active'));
            // Show the corresponding image
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});