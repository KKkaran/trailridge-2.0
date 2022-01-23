//this will have all the routes for homies table
const router = require('express').Router()
const {Homies,Purchase} = require('../../models')

//routes will be /api/homies/

//to get all homies
router.get('/',(req,res)=>{

    Purchase.findAll({
        include:[
            {
                model:Homies,
                attributes:['id','username','email']
            }
        ]
    })
    .then(db=>res.json(db))
    .catch(e=>{
        console.log(e);
        res.status(500).json(e)
    })
})
//to get a specific homie using id
router.get('/:id',(req,res)=>{
    Purchase.findOne(
        {
            where:{
                id:req.params.id
            },
            include:[
                {
                    model:Homies,
                    attributes:['id','username','email']
                }
            ]
        })
        .then(db=>{
            if (!db) {
                res.status(404).json({ message: 'No Purchase found with this id' });
                return;
              }
              res.json(db);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
})

//adding a new purchase to db
router.post('/',(req,res)=>{
    Purchase.create({
        description: req.body.description,
        price: req.body.price,
        shopper_id: req.body.shopper_id
    })
    .then(db=>{
        res.json(db)
    })
    .catch(e=>{
        console.log(e);
        res.status(500).json(e)
    })
})

//deleting a purchase


//updating a purchase

module.exports = router;