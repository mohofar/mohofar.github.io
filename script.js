document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetContentId = tab.getAttribute('data-content');
            
            // Remove active classes from all tabs and contents
            tabs.forEach(t => t.classList.remove('active-tab'));
            tabContents.forEach(content => content.classList.remove('active-content'));
            
            // Add active class to the clicked tab and corresponding content
            tab.classList.add('active-tab');
            document.getElementById(targetContentId).classList.add('active-content');
        });
    });
});
