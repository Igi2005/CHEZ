const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cors = require("cors")

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/openbox/:id',async(req,res)=>{
    let id = Number(req.params.id)
    const getUniqueData = await prisma.skrzynkibronie.findMany({
        where : {
            id_skrzyni: id
        }
    }); 
    const getBoxImage = await prisma.skrzynki.findUnique({
        where:{
            id_skrzynki : id
        }
    })
    
    const getImages = await prisma.images.findMany()
    let data = []
    for(let i = 0; i < getUniqueData.length; i++) {
        for(let j = 0; j < getImages.length; j++) {
            const obj = getUniqueData[i]
            const obj2 = getImages[j]
            if(obj.id_broni == obj2.id) {
                data.push(obj2)
            }
        }
    }
    //console.log(data)
    res.json({data : data, img : getBoxImage})
})


module.exports=router