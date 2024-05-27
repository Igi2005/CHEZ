const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cors = require("cors")

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/',async(req,res) =>{
    const getUniqueData = await prisma.skrzynki.findMany({});
    if(getUniqueData) res.json({msg : "Działa!",data : getUniqueData})
    else res.json({msg : "Błąd w bazie danych"})
})

module.exports=router