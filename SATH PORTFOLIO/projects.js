document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) throw new Error('Network response was not ok');
            const projects = await response.json();
            renderProjects(projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const renderProjects = (projects) => {
        projects.forEach(({ title, description, link }) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
                <a href="${link}" target="_blank">View Project</a>
            `;
            projectList.appendChild(projectElement);
        });
    };

    fetchProjects();
});
