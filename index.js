/************************
 * ENV
 ************************/
const host = "localhost";
const port = 3999;

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
    const data = req.body;
    console.log("========== Request ==========");
    console.log(`endpoint: ${data.endpoint}`);
    console.log(`method: ${data.method}`);
    console.log(`body: ${JSON.stringify(data.body)}`);
    const option = {
        method: data.method,
        headers: {},
    };
    if(data.method === "POST") {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(data.body);
    }
    return fetch(data.endpoint, option)
    .then(response => {
        console.log("========== Response ==========");
        console.log(`url: ${response.url}`);
        console.log(`status: ${response.status}`);
        console.log(`statusText: ${response.statusText}`);
        return response.json();
    })
    .then(json => {
        console.log("========== JSON ==========");
        console.log(json);
        res.json(json);
    })
    .catch(error => console.log(`error: ${error}`));
});

/************************
 * START SERVER
 ************************/
app.listen(port, () => console.log(`Starting Server ${host}:${port}`));
