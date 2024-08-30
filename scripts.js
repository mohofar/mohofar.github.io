document.addEventListener("DOMContentLoaded", function () {
    function openTab(evt, tabId) {
        // Hide all tab-content elements
        document.querySelectorAll(".tab-content").forEach(function (content) {
            content.classList.remove("active-content");
        });

        // Remove active class from all tabs
        document.querySelectorAll(".tab").forEach(function (tab) {
            tab.classList.remove("active-tab");
        });

        // Show the clicked tab's content and add active class to the clicked tab
        document.getElementById(tabId).classList.add("active-content");
        evt.currentTarget.classList.add("active-tab");
    }

    // Initialize tabs
    document.querySelectorAll(".tab").forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            openTab(event, event.target.getAttribute("onclick").match(/'([^']+)'/)[1]);
        });
    });

    // Collapsible content functionality
    document.querySelectorAll(".collapsible").forEach(function (button) {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
