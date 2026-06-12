const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/uploadMiddleware");

const {
  registerUser,
  loginUser,
  getUserInfo,
  deleteAccount,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = req.file.path; 
  
  res.status(200).json({ imageUrl });
});

router.delete("/deleteAccount", protect, deleteAccount);

module.exports = router;
