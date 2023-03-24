const express = require('express')
const app = express()
const port = 3000
const {connectTodB} = require("./services/db/connexion.js")
const router  =  require("./routes/index.js")
app.use(router)

connectTodB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})


app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

