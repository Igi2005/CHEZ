const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cors = require("cors")

router.use(express.json())
router.use(express.urlencoded({extended: true}))
let globalNick = null

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
    if(getUniqueData){
        globalNick = getUniqueData.name
        res.json({msg : "Pomyslnie zalogowano się!",user : {nick: getUniqueData.nick}})
    } 
    else res.json({msg : "Niestety podane dane nie zgadzają się!"})
})

router.get('/login/nickname',async(req,res)=>{
    console.log("mamy req /nickName nick to "  + globalNick)
    if(globalNick == null) {
        res.json({msg : "jeszcze sie nie zalogowano"})
    }
    if(globalNick != null) {
        res.json({msg: "zalogowano sie", data : globalNick})
    }
})

router.get('/login/logout',async(req,res)=>{
    globalNick = null
    console.log("mamy req wylogowanie sie "  + globalNick)
})

module.exports=router