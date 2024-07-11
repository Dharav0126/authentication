const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/person'); // Assuming person.js is in the same directory
const db = require('./db'); // Ensuring db.js handles the connection

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', function (req, res) {
    res.send("Welcome to my hotel");
});

app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        console.log("Received data:", data);

        if (!data.email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const newPerson = new Person(data);

        // Saving data
        const response = await newPerson.save();
        console.log("Data saved", response);
        res.status(201).json(response);
    } catch (err) {
        console.error("Error saving person", err);
        if (err.code === 11000) { // Duplicate key error
            res.status(409).json({ error: 'Duplicate email entry' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

// Get data from the person 
app.get('/person', async (req, res)=>{
        const data = await Person.find();
        console.log("Data retrieved");
        res.status(200).json(data);
    
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log("http://localhost:3000/");
});
