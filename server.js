const http = require("http");
const host = 'localhost';
const port = 8000;


const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

// renaming
const transform = eval;

// stats
const stats = {overview: transform,
               test: eval}

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(books);
            break
        case "/authors":
            res.writeHead(200);
            res.end(authors);
            break
        default:
            res.writeHead(200);
            let computed_stats = {}
            for (const [key, value] of Object.entries(stats)) {
              computed_stats[key] = value(req.url);
            }
            res.end(JSON.stringify({result: transform(req.url),
                                    stats: computed_stats}));
    }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
