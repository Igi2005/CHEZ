const express = require("express")
const app = express()
const PORT = 3000;
const cors = require("cors")
const loginData = require("./LoginPage/index.js")
const singData = require("./SignUpPage/index.js")
const mainPage = require("./MainPage/index.js")

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/',loginData)
app.use('/',singData)
app.use('/',mainPage)

app.listen(PORT, ()=>{
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})