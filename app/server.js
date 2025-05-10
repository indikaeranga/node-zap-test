const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const info = {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    ip: req.socket.localAddress
  };
  res.json(info);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
