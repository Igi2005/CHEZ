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
    console.log("name to " + nameB + " pass to " + passB + " surname " + surnameB  + " email " + emailB)

    const getEmail = await prisma.users.findUnique({
        where: {
            email : emailB,
        }
    });
    if(getEmail) {
        res.json({msg : "Podany adres email istnieje w bazie danych!"})
    }
    else {
        const data = {
            name : nameB,
            surname : surnameB,
            email : emailB,
            password : passB
        }

        await prisma.users.create({data: data});
        res.json({msg : "Pomyślnie dodano do bazy danych!"})

    }
})

module.exports=router