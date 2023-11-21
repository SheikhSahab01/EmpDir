const express = require("express");
const router = express.Router();
const Emp = require("../models/Employee");
var jwt = require('jsonwebtoken');
const jwtSecret = "emp123"

router.post(
  "/createemp",
  async (req, res) => {
    try {
      await Emp.create({
        emp_id: req.body.emp_id,
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        role: req.body.role,
        location: req.body.location,
        mobile: req.body.mobile,
        img: req.body.img,
        password: req.body.password,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  async (req, res) => {
    let email = req.body.email;
    try {
      let empData = await Emp.findOne({ email });
      if (!empData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }
      // const pwdCompare = bcrypt.compare(req.body.password,empData.password);
      const pwd = req.body.password;
      if (!(pwd === empData.password)) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentils" });
      }

      const data={
           user:{
            id:empData.emp_id
           }
      }
      const authToken = jwt.sign(data,jwtSecret);
      return res.json({ success: true,authToken:authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/getuser",
   async(req,res)=>{
    try{
      let emp_id = req.body.emp_id;
      const user = await Emp.findOne({emp_id}).select("-password");
      res.send(user)
    }
    catch(error){
      res.send(error.message);
    }
})

module.exports = router;
