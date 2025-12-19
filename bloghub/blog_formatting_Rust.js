const posts = [
    {
        title: "Understanding List Comprehensions",
        preview: "A deep dive into Python's most elegant feature...",
        date: "Dec 15, 2024",
        readTime: "5 min read",
        link: "post1.html"
    },
    {
        title: "Decorators: The Complete Guide",
        preview: "Everything you need to know about Python decorators...",
        date: "Dec 10, 2024",

        link: "post2.html"
    }

]

// sorts the posts by date (newest first)//
posts.sort((a, b) => new Date(b.date) - new Date(a.date));
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