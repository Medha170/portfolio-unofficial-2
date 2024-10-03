document.addEventListener("DOMContentLoaded", function () {
    const githubUsername = "Medha170"; // Replace with your GitHub username
    const repoContainer = document.getElementById('github-projects');

    // Fetch repositories from GitHub API
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                // Create project card for each repository
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                
                projectCard.innerHTML = `
                    <h2>${repo.name}</h2>
                    <p>${repo.description || 'No description available.'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;
                
                // Append the project card to the container
                repoContainer.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
});

fetch(`https://api.github.com/users/${githubUsername}/events`)
    .then(response => response.json())
    .then(events => {
        // Process events to extract meaningful contributions
        events.forEach(event => {
            if (event.type === "PushEvent") {
                const contribution = document.createElement('div');
                contribution.classList.add('contribution-item');
                
                contribution.innerHTML = `
                    <p>Pushed to <strong>${event.repo.name}</strong> at ${new Date(event.created_at).toLocaleDateString()}</p>
                `;
                
                repoContainer.appendChild(contribution);
            }
        });
    });
