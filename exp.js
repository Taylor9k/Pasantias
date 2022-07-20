const express = require('express')
const exp = express()
exp.get('/', (req, res) => {
    res.send('HOLA MUNDO!!')
  })
  
exp.listen(3000)