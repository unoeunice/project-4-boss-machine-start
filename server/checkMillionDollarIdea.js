const checkMillionDollarIdea = (req,res,next) => {
const idea=req.body


if((Number(idea.numWeeks)*Number(idea.weeklyRevenue))>=1000000){

next()





}else{


res.status(400).send()

}


  




};






// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
