document.getElementById('url-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const longUrl = document.getElementById('long-url').value;

    // Simulate server response
    const shortUrl = `https://short.ly/${Math.random().toString(36).substr(2, 8)}`;

    // Display shortened URL
    const resultDiv = document.getElementById('result');
    const shortUrlLink = document.getElementById('short-url');
    shortUrlLink.href = longUrl;  // In production, link to redirect service.
    shortUrlLink.textContent = shortUrl;
    resultDiv.style.display = 'block';
});
