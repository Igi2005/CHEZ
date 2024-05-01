const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cors = require("cors")

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.post('/signup',async(req,res) =>{
    console.log("mamy req")
    var nameB = String(req.body.UserName)
    var surnameB = String(req.body.UserSurname)
    var emailB = String(req.body.UserEmail)
    var passB = String(req.body.UserPass)
    var nickB = String(req.body.UserNick)
    console.log("name to " + nameB + " pass to " + passB + " surname " + surnameB  + " email " + emailB + "nick to " + nickB)
    var result = ""
    const getEmail = await prisma.users.findUnique({
        where: {
            email : emailB,
        }
    });
    if(getEmail) {
        result = "Podany adres email istnieje w bazie danych!"
    }
    else {
        const data = {
            name : nameB,
            surname : surnameB,
            email : emailB,
            password : passB,
            nick : nickB
        }

        await prisma.users.create({data: data});
        result = "Pomyślnie dodano do bazy danych!"
    }

    res.json({msg:result})
})

module.exports=router