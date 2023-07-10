const ideasRouter=require('express').Router()
module.exports=ideasRouter

const{ createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase}=require('./db.js')



 const checkMillionDollarIdea=require('./checkMillionDollarIdea.js')





    ideasRouter.param('ideaId',(req,res,next,id)=>{
    const idea=getFromDatabaseById("ideas",id)

    if(idea){

      req.id=id
      req.idea=idea
      next()

    }else{
     
    res.status(404).send() 


    }

    })

//get all ideas

    ideasRouter.get('/',(req,res,next)=>{

   res.status(200).send(getAllFromDatabase('ideas'))


     

    })


//create a new idea

ideasRouter.post('/ideaId',checkMillionDollarIdea,(req,res,next)=>{

    const newIdea=addToDatabase('ideas',req.body)

     res.status(201).send(newIdea)
})


//get a single idea by id


ideasRouter.get('/ideaId',(req,res,next)=>{




res.status(200).send(req.idea)



})


//update a single idea by id 

ideasRouter.put('/ideaId',(req,res,next)=>{

    const updatedIdea=updateInstanceInDatabase('ideas',req.body)


    res.status(200).send(updatedIdea)

})

//delete idea by Id

ideasRouter.delete('/ideaId',(req,res,next)=>{

if(deleteFromDatabasebyId('ideas',req.id)){


res.status(204).send()


}else{


res.status(500).send()

}





})