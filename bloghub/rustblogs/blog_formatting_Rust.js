const posts = [
    {
        title: "My Rusty Program",
        preview: "My first Rust program...",
        date: "Dec 19, 2025",
        link: "hello_rust.html"
    },
    {
        title: "Slices and Structs",
        preview: "My next step in learing Rust...",
        date: "Dec 20, 2025",
        link: "slices_and_struct.html"
    },
    {
        title: "My First Rusty Malware",
        preview: "Trying my hand in malware...",
        date: "Dec 26, 2025",
        link: "first_malware3.html"
    },
    {
        title: "Upgrades People, Upgrades!!",
        preview: "Improving the malware",
        date: "Dec 27, 2025",
        link: "upgraded_malware4.html"
    },
    {
        title: "Rust Mp3",
        preview: "Made a mp3 using rust and python",
        date: "jan 1/6, 2026",
        link: "rustymp3.html"
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