const posts = [
    {
        title: "Banjo",
        preview: "Local Database",
        date: "Feb 16, 2026 (Maybe)",
        link: "TBD"
    }
]

// sorts the posts by date (newest first)
posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
});

const container = document.getElementById('posts-container');

posts.forEach(post => {
    const postCard = document.createElement('a');
    postCard.className = 'post-card';
    postCard.href = post.link;

    postCard.innerHTML = `
        <h3 class="post-title">${post.title}</h3>
        <p class="post-preview">${post.preview}</p>
        <div class="post-meta">
            <span>${post.date}</span>
        </div>
    `;

    container.appendChild(postCard);
});