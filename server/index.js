import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, {Schema} from 'mongoose'



const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())



const eggSchema = new Schema({
  title: {type: String, required:true},
  description: {type: String, required:true},
  price: {type: Number, required:true}
 
});
const Eggs=mongoose.model('Eggs', eggSchema)

app.get('/eggs',async (req, res) => {
    try {
        const eggs=await Eggs.find({})
         res.send(eggs)
    } catch (error) {
        res.status(500).json({message:error})
    }
   
})

app.get('/eggs/:id', async (req, res) => {
    try {
        const eggs=await Eggs.findById(req.params.id)
         res.send(eggs)
    } catch (error) {
        res.status(500).json({message:error})
    }
   
})


app.post('/eggs',async (req, res) => {
    try {
        const egg=new Eggs({
            title:req.body.title,
            description:req.body.description,
            price:req.body.price
        })
        await egg.save()
            res.send({message:"created"})
    } catch (error) {
        res.status(500).json({message:error})
    }

})


app.delete('/egg/:id',async (req, res) => {
    try {
        const eggs=await Eggs.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"deleted"})
    } catch (error) {
        res.status(500).json({message:error})
    }
  
})
const port=process.env.PORT
const url=process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
  .then(() => console.log('Connected!'))
  .catch(err=>console.log("db not connect"+err))

app.listen(port, () => {
    console.log(`Example app listening on port `+port)
})