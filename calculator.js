const http = require("http");
const url = require("url");

const host = 'localhost';
const port = 8000;


// operations
const op = {eval: eval,
            print: console.log,
            characters: (x) => x.length}

const requestListener = function (req, res) {
    var params = url.parse(req.url, true).query;
    res.setHeader("Content-Type", "application/json");

    res.writeHead(200);
    let computed_stats = {}
    for (const [key, value] of Object.entries(op)) {
      computed_stats[key] = value(params.formula);
    }
    res.end(JSON.stringify({stats: computed_stats}));
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


// test with
// curl "localhost:8000?formula='2-2'"
