/************************
 * ENV
 ************************/
const host = "localhost";
const port = 3999;
const method = "POST";
const endpoint = "https://jsonplaceholder.typicode.com/posts";

/************************
 * INIT
 ************************/
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

/************************
 * REQUEST
 ************************/
app.post('/api/', (req, res) => {
    console.log("========== Request:Start ==========");
    console.log(req.body);
    console.log("========== Request:End ==========");
    let option = {
        method: method,
        headers: {},
    };
    if(method === "POST") {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(req.body);
    }
    return fetch(endpoint, option)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log("========== Response:Start ==========");
        console.log(json);
        console.log("========== Response:End ==========");
        res.json(json);
    });
});

/************************
 * START SERVER
 ************************/
app.listen(port, () => console.log(`Starting Server ${host}:${port}`));
