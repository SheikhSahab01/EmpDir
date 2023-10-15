const express = require("express");
const router = express.Router();

router.post('/EmpData',(req,res)=>{
    try{
      res.send([global.employees]);
    }
    catch(error){
      console.error(error.message);
      res.send("Server Error");
    }
})

module.exports = router;