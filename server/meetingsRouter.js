const meetingsRouter=require('express').Router()

module.exports=meetingsRouter


const{createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,}=require('./db.js')

//get all meetings array

meetingsRouter.get('/',(req,res,next)=>{


        res.status(200).send(getAllFromDatabase('meetings'))



    })


//create  a new meeting



meetingsRouter.post('/',(req,res,next)=>{




    res.status(201).send(addToDatabase('meetings',createMeeting()))


})

//delete all the meetings

meetingsRouter.delete('/',(req,res,next)=>{

  if(meetingsRouter('meetings')){

    deleteAllFromDatabase('meetings')

    res.status(204).send()

  }else{


   res.status(500).send()

  }
  res.send()

})
