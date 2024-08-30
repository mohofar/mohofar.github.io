document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Self-supervised Region-aware Segmentation of COVID-19 CT Images",
            description: "This paper introduces a novel method for self-supervised region-aware segmentation of COVID-19 CT images using 3D GAN and contrastive learning.",
            publication: "Shabani, S., Homayounfar, M., Vardhanabhuti, V., Kohi-moghadam, M. (2022). Computers in Biology and Medicine, 149, 106033."
        },
        {
            title: "CovidCTNet: An Open-source Deep Learning Approach to Diagnose COVID-19",
            description: "This paper presents CovidCTNet, a deep learning approach designed to diagnose COVID-19 using a small cohort of CT images.",
            publication: "Javaheri, T., Homayounfar, M., Amoozgar, Z., Reiazi, R., Homayounieh, F., Abbas, E., ... & Rawassizadeh, R. (2021). NPJ Digital Medicine, 4(1), 1-10."
        },
        // Add more projects here...
    ];

    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {
        projects.forEach((project) => {
            const collapsibleButton = document.createElement("button");
            collapsibleButton.className = "collapsible";
            collapsibleButton.textContent = project.title;

            const contentDiv = document.createElement("div");
            contentDiv.className = "content";
            contentDiv.innerHTML = `
                <p>${project.description}</p>
                <p><strong>Publication:</strong> ${project.publication}</p>
            `;

            collapsibleButton.addEventListener("click", function () {
                this.classList.toggle("active");
                contentDiv.style.display = contentDiv.style.display === "block" ? "none" : "block";
            });

            projectsContainer.appendChild(collapsibleButton);
            projectsContainer.appendChild(contentDiv);
        });
    } else {
        console.error("Element with ID 'projects-container' not found.");
    }
});
