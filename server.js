const express=require('express')
const bodyparser=require('body-parser')
const URL=require('./models/urlschema');
const app=express()
require('dotenv').config()
const PORT=process.env.PORT||3000;
app.use(bodyparser.json());



app.get('/:shortid',async(req,res)=>{
    try {
        const shortid=req.params.shortid;
        const data=await URL.findOne({ShortId:shortid});
        data.clickcounter++;
         await data.save()
        res.status(200).redirect(data.RedirectURL)   

    } catch (error) {
        console.log(error);
        res.send(error);
    }

})
app.listen(PORT,()=>{
    console.log(`server is listing port:${PORT}`);
})
module.exports=app;