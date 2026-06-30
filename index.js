const express = require('express');
const ytdl = require('yt-dlp-exec');
const app = express();

app.get('/download', async (req, res) => {
    const url = req.query.url;
    res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
    
    // yt-dlp se direct audio stream pipe karna
    ytdl(url, {
        dumpSingleJson: true,
        noCheckCertificates: true,
        format: 'bestaudio',
        output: '-'
    }).pipe(res);
});

app.listen(process.env.PORT || 3000);
