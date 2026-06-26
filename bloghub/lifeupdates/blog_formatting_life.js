const posts = [
    {
        title: "Coming Soon",
        preview: "Huge Project update",
        date: "tbd",
        link: "the_big_one.html"
    },


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