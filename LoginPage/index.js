const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cors = require("cors")

router.use(express.json())
router.use(express.urlencoded({extended: true}))
let globalNick = null
let globalBalans = null
let globalId = null

router.post('/sellitems',async(req,res)=>{
    const data = req.body
    const gunID = data.idG
    const transactionID = data.idT
    const money = data.price
    const sell = await prisma.ekwipunek.delete({
        where : {
            id_broni: gunID,
            id_operacji: transactionID,
        }
    })
    const updateBalance = await prisma.users.update({
        where : {
            id: globalId
        },
        data: {
            balans: {
                increment: money 
            }
        }
    })
    globalBalans = globalBalans + money
    if(sell) console.log("usuneło niby")
    else console.log("nie usuneło")
    
})

router.get('/getitems',async(req,res)=>{
    if(globalId != null) {
        console.log("globalId != null id to " + globalId)
        const getUniqueData = await prisma.ekwipunek.findMany({
            where:{
                id_usera : globalId
            }  
        })
        //console.log(getUniqueData)
        const userData = await prisma.users.findUnique({
            where :{
                id : globalId
            }
        })
        const weaponsData = [];
        for (const userWeapon of getUniqueData) {
          const weaponData = await prisma.images.findUnique({
            where: {
              id: userWeapon.id_broni,
            },
          });
          if (weaponData) {
            weaponsData.push({ ...weaponData, id_operacji: userWeapon.id_operacji });
          }
        }
        //console.log('Dane broni:', weaponsData);
        res.json({data : weaponsData, id : globalId, userData : userData})
    }
})

router.get('/getaddeddata/:action',async(req,res) =>{
    const gunName = req.params.action
    console.log("gunName to " + gunName)
    const getUniqueData = await prisma.images.findFirst({
        where : {
            name : gunName
        }
    })
    console.log("--------------------------------")
    console.log(getUniqueData)
    console.log("--------------------------------")
    res.json({data : getUniqueData})
})


router.get('/openbox',async(req,res) => {
    //console.log("openbox")
    res.json({data : globalNick, balans : globalBalans})
})

router.post('/newsaldo',async(req,res) => {
    console.log("id to " + globalId)
    const newBalans = req.body.Balans;
    globalBalans = Number(newBalans)
    console.log("newbalans to " + globalBalans)
    const updatedUser = await prisma.users.update({
        where: { id: globalId },
        data: {
            balans: newBalans
        }
    });
})

router.post('/adddata',async(req,res) => {
    console.log("-----------------------------------------")
    console.log(req.body.item)
    const id = req.body.item.id
    const insertData = await prisma.ekwipunek.create({
        data : {
            id_usera : globalId,
            id_broni : id
        }
    })
})

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
        globalBalans = getUniqueData.balans
        globalId = getUniqueData.id
        res.json({msg : "Pomyslnie zalogowano się!",user : {nick: getUniqueData.nick}, })
    } 
    else res.json({msg : "Niestety podane dane nie zgadzają się!"})

    console.log("global nick to " + globalNick)
})

router.get('/login/nickname',async(req,res)=>{
    console.log("mamy req /nickName nick to "  + globalNick + "global balans to " + globalBalans)
    if(globalNick == null) {
        res.json({msg : "jeszcze sie nie zalogowano"})
    }
    if(globalNick != null) {
        res.json({msg: "zalogowano sie", data : globalNick, balans : globalBalans})
    }
})

router.get('/login/logout',async(req,res)=>{
    globalNick = null
    globalBalans = null
    globalId = null
    console.log("mamy req wylogowanie sie "  + globalNick)
})

module.exports=router