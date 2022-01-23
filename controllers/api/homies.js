//this will have all the routes for homies table
const router = require('express').Router()
const {Homies,Purchase} = require('../../models')

//routes will be /api/homies/

//to get all homies
router.get('/',(req,res)=>{

    Homies.findAll({
        attributes:{exclude:['password']},
        include:[
            {
                model:Purchase
            }
        ]
        }
    )
    .then(db=>res.json(db))
    .catch(e=>{
        console.log(e);
        res.status(500).json(e)
    })
})
//to get a specific homie using id
router.get('/:id',(req,res)=>{
    Homies.findOne(
        {
            attributes:{exclude:['password']},
            where:{
                id:req.params.id
            },
            include:[
                {
                    model:Purchase
                }
            ]
        })
        .then(db=>{
            if (!db) {
                res.status(404).json({ message: 'No Homie found with this id' });
                return;
              }
              res.json(db);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
})

//adding a new homie to db
router.post('/',(req,res)=>{
    Homies.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(db=>{
        res.json(db)
    })
    .catch(e=>{
        console.log(e);
        res.status(500).json(e)
    })
})

//deleting a homie


//updating a homie

module.exports = router;