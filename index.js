const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
app.get('/download', (req, res) => {
    const url = req.query.url;
    ytdl(url, { format: 'mp3', filter: 'audioonly' }).pipe(res);
});
app.listen(process.env.PORT || 3000);
