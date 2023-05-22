const express = require("express");
const app = express();

const Running = require("./models/schema");
require("./db/connection");

app.use(express.json());

const port = process.env.PORT || 8800;

//Create Data API
app.post("/", async (req, res) => {

    // const data = new Running({  manually data feeding
    //     "ranking": "1",
    //     "name": "Anushka",
    //     "dob": "2002-01-05T18:30:00.000Z",
    //     "country": "Indian",
    //     "score": 1200,
    // })
    try {
        const runer = new Running(req.body);
        const createdata = await runer.save();
        res.send(createdata);

    } catch (e) {
        res.status(400).send(e)
    }
})

//Reading Data from An API
app.get("/", async (req, res) => {
    const getdata = await Running.find();
    res.send(getdata);
})

app.get("/:name", async (req, res) => {
    const names = req.params.name;
    const getdata = await Running.find({ name: names });
    res.send(getdata);
})

//Updating Data In API (It will update only provided content)

app.patch("/:id", async (req, res) => {
    const _id = req.params.id;
    const updatedata = await Running.findByIdAndUpdate(_id, req.body, {
        new: true
    });
    res.send(updatedata);
})

//Delete Data From An API

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedata = await Running.deleteMany({ _id: id }, {
        new: true
    });
    res.send(deletedata);
})


app.listen(port, () => {
    console.log("Server is runnning on port 8800");
})