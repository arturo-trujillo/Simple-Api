const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`Up n Running at http://localhost:${PORT} `)
);

app.get('/component', (req,res)=>{
    res.status(200).send({
        start:'Hello ',
        middle: 'I am ',
        end: 'Alive!'
    })
});

// This should work, but i dont wanna use Insomnia nor Postman XD

app.post('/component/:id',(req,res)=> {
    const {id} = req.params;
    const {name} = req.body;

    if(!name){
       res.status(418).send({message: 'Start is required!'});
    }
    res.send({
        name: `Component with your ${start} and ID of ${id}`
    });

});


// htttps://swagger.io/specification/ 
// MUST LOOK AT THIS LINK!