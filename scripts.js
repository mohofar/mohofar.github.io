function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Hide all main tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove active class from all main tabs
    tablinks = document.getElementsByClassName("tabs")[0].getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    // Show the clicked main tab content
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

function openProjectTab(evt, projectName) {
    var i, projectcontent, projectlinks;
    // Hide all project tab contents
    projectcontent = document.getElementsByClassName("project-content");
    for (i = 0; i < projectcontent.length; i++) {
        projectcontent[i].style.display = "none";
    }
    // Remove active class from all project tabs
    projectlinks = document.getElementsByClassName("project-tabs")[0].getElementsByClassName("tab");
    for (i = 0; i < projectlinks.length; i++) {
        projectlinks[i].className = projectlinks[i].className.replace(" active-tab", "");
    }
    // Show the clicked project tab content
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

// Initialize with the first tab active
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tabs .tab").click();
    document.querySelector(".project-tabs .tab").click();
});
