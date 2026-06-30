const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = process.env.PORT || 10000; // Render aksar 10000 port use karta hai

app.get('/', (req, res) => res.send('Server is running!'));

app.get('/download', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send("No URL provided");
    
    try {
        res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
        ytdl(url, { format: 'mp3', filter: 'audioonly' }).pipe(res);
    } catch (err) {
        res.status(500).send("Error processing video");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
