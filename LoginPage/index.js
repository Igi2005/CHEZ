const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cors = require("cors")

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.post('/login',async(req,res) =>{
    console.log("mamy req")
    var emailB = String(req.body.UserEmail)
    var passB = String(req.body.UserPass)
    console.log("name to " + emailB + " pass to " + passB)
    const getUniqueData = await prisma.users.findUnique({
        where: {
            email : emailB,
            password : passB
        }
    });
    if(getUniqueData) res.json({msg : "Pomyslnie zalogowano się!",user : {nick: getUniqueData.nick}})
    else res.json({msg : "Niestety podane dane nie zgadzają się!"})
})

module.exports=router