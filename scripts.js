// JavaScript to handle collapsible functionality and dynamic content generation
document.addEventListener("DOMContentLoaded", function() {
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
        {
            title: "Understanding Smartwatch Battery Utilization in the Wild",
            description: "This paper explores smartwatch battery usage patterns and provides insights into optimizing battery life based on real-world data.",
            publication: "Homayounfar, M., Malekijoo, A., Visuri, A., Dobbins, C., Peltonen, E., Pinsky, E., ... & Rawassizadeh, R. (2020). Sensors, 20(13), 3784."
        },
        {
            title: "A Multimodal Deep Learning Approach to Predicting Systemic Diseases from Oral Conditions",
            description: "This study employs a multimodal deep learning approach to predict systemic diseases based on oral conditions.",
            publication: "Zhao, D., Homayounfar, M., Zhen, Z., Wu, M. Z., Yin Yu, S., Yiu, K. H., ... & Koohi-Moghadam, M. (2022). Diagnostics, 12(12), 3192."
        },
        {
            title: "FEDZIP: A Compression Framework for Communication-Efficient Federated Learning",
            description: "This paper introduces FEDZIP, a framework designed to enhance communication efficiency in federated learning through compression techniques.",
            publication: "Malekijoo, A., Fadaeieslam, M.J., Malekijou, H., Homayounfar, M., Alizadeh-Shabdiz, F., & Rawassizadeh, R. (2021). arXiv preprint arXiv:2102.01593."
        },
        {
            title: "Mental Arousal Level Recognition Competition on the Shared Database",
            description: "This paper discusses a competition focused on recognizing mental arousal levels using shared databases and various algorithms.",
            publication: "Saidi, M., Rezania, S., Khazaei, E., TaghiBeyglou, B., Hashemi, S.S., Kaveh, R., ... Homayounfar, M., et al. (2019). 27th Iranian Conference on Electrical Engineering (ICEE), IEEE."
        },
        {
            title: "K-space Based Motion Estimation for Polar fMRI Using Transfer Learning",
            description: "This study explores a k-space based motion estimation technique for polar fMRI, leveraging transfer learning to improve accuracy.",
            publication: "Makhsousi, F., Homayounfar, M., Ghaffarzadeh, S., Nasiraei-Moghaddam, A. (2023). ISMRM 2023 Conference."
        }
    ];

    const projectsContainer = document.getElementById("projects-container");

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

        collapsibleButton.addEventListener("click", function() {
            this.classList.toggle("active");
            contentDiv.style.display = contentDiv.style.display === "block" ? "none" : "block";
        });

        projectsContainer.appendChild(collapsibleButton);
        projectsContainer.appendChild(contentDiv);
    });
});

function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    const tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
    }

    document.getElementById(tabName).classList.add("active-content");
    event.currentTarget.classList.add("active-tab");
}
