const minionsRouter=require('express').Router()
module.exports=minionsRouter

const{
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
    isValidMinion,
  } =require('./db')




  minionsRouter.param('minionId',(req,res,next,id)=>{
   const minion = getFromDatabaseById('minions', id);

  if(minion){

   req.minion=minion
   req.id = id;
   next()


  }else{

    res.status(404).send()
  }



  })

  //get all minions

  minionsRouter.get('/',(req,res,next)=>{

    res.status(200).send(getAllFromDatabase("minions"))
   


})

//create a new element 

minionsRouter.post('/',(req,res,next)=>{

if(typeof req.body==="object"){
const newMinion=addToDatabase('minions',req.body)
res.status(201).send(newMinion)

}

})


//get a single minion by id

minionsRouter.get('/:minionId',(req,res,next)=>{

 

   res.status(200).send(req.minion)



})

//update a minion by id

minionsRouter.put('/:minionId',(req,res,next)=>{

  const updatedMinion=updateInstanceInDatabase('minions',req.body)
  res.status(200).send(updatedMinion)



})

//delete a minion by id

minionsRouter.delete('/:minionId',(req,res,next)=>{

if(deleteFromDatabasebyId("minions",req.id)){


res.status(204).send()


}else{


  res.status(500).send()
}




})