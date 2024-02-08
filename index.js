const express = require("express");
const getTodo = require("./controllers/getTodo");
const updateTodo = require("./controllers/updateTodo");
// const getTodoById = require("./controllers/getTodo");

const app = express();
require("dotenv").config();


const Port = process.env.port || 4000;
// console.log(Port)

// middleware to parse the json request body

app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);


app.listen(Port, () => {
    console.log(`server is running on successfully ${Port}`);
})

// connect to db

const dbconnect = require("./config/database");

dbconnect();

app.get("/", (req, res) => {
    res.send(`
<h1>Todo App Backend</h1>

<ul>
    <h3>Route 1</h3>
    <li>Description: Create Todo Route.</li>
    <li>Endpoint: https://tryvercel-eight.vercel.app/api/v1/createTodo</li>
    <li>Method: POST</li>
    <li>Parameters: {title: You can write title, description: Description goes here}</li>
</ul>

<ul>
    <h3>Route 2</h3>
    <li>Description: getAllTodo route.</li>
    <li>Endpoint: <a href="https://tryvercel-eight.vercel.app/api/v1/getTodos">https://tryvercel-eight.vercel.app/api/v1/getTodos</a></li>
    <li>Method: GET</li>
</ul>

<ul>
    <h3>Route 3</h3>
    <li>Description: Get Todo by id Route.</li>
    <li>Endpoint: https://tryvercel-eight.vercel.app/api/v1/getTodos/mongodb_id</li>
    <li>Method: GET</li>
</ul>

<ul>
    <h3>Route 4</h3>
    <li>Description: Update Todo Route.</li>
    <li>Endpoint: https://tryvercel-eight.vercel.app/api/v1/updateTodo/id</li>
    <li>Method: PUT</li>
</ul>

<ul>
    <h3>Route 5</h3>
    <li>Description: Delete Todo Route.</li>
    <li>Endpoint: https://tryvercel-eight.vercel.app/api/v1/deleteTodo/Mongodb_Object_id</li>
    <li>Method: DELETE</li>
</ul>
    `)
})