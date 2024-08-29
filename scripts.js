function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove active class from all tabs
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    // Show the clicked tab content
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}
