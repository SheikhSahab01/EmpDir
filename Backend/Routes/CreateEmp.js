const express = require("express");
const router = express.Router();
const Emp = require("../models/Employee");

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
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// router.post(
//   "/loginuser",
//   [body("email").isEmail(), body("password").isLength({ min: 5 })],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     let email = req.body.email;
//     try {
//       let userData = await User.findOne({ email });
//       if (!userData) {
//         return res
//           .status(400)
//           .json({ errors: "Try logging in with correct credentils" });
//       }
//       const pwdCompare = bcrypt.compare(req.body.password,userData.password);
//       if (!pwdCompare) {
//         return res
//           .status(400)
//           .json({ errors: "Try logging in with correct credentils" });
//       }

//       const data={
//            user:{
//             id:userData.id
//            }
//       }
//       const authToken = jwt.sign(data,jwtSecret);
//       return res.json({ success: true,authToken:authToken });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

module.exports = router;
