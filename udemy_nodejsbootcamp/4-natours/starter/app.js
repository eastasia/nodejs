

const fs = require('fs')
const express = require('express');
const app = express();

// app.get('/', (req, res) => {
// //res.status(200).send('Hello from the server side!');

// res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' })
//     res.send('You can post to this endpoint...');
// })

// app.post('/', (req, res) => {
//     res.send('You can post to this endpoint... ');
// })

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);


const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data:  {
            tours: tours
        }
    })
}
const getTour = (req, res) = require('stream'); => {
    console.log(req.params);
    const id = req.params.id * 1;

    const tour = tours.find(el => el.id === id)

    if (!tour){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });

}

const createTour = (req, res) => {

    const newId = tour[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body );
    tours.push(newTour);

    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }
            })
        }
    )

}

const updateTour = () => {
    
}

app.post('/api/v1/tours',createTour);
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tour/:id', getTour);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});



