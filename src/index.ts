import express from "express";
import { Database } from "./database";
import { Model } from "./model";

let model: Model;
(async () => { model = await Database.read(); })();

const app = express();
app.use(express.json())
app.use(express.static('../public'))

app.get('/api/restaurants', (_request, response) => {
    response.status(200).json(model.restaurants);
});

app.get('/api/reservations', (_request, response) => {
    response.status(200).json(model.reservations);
});

app.post('/api/reservations', (request, response) => {
    model.reservations.push(request.body);
    (async () => { await Database.write(model); })();
    response.status(200).json({ success: true });
});

process.on('SIGINT', () => process.exit());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port} ...`));