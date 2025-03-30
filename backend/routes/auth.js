const express = require("express");
const { User } = require("../model/model.js");
const z = require("zod");
const bcrypt = require("bcrypt");

const router = express.Router();

const UserData = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(12),
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const zodValidation = UserData.safeParse({
      email,
      password,
    });

    if (!zodValidation.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password format",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(500).json({
        success: false,
        message: "Error saving user in database",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Signup successful",
    });
  } catch (e) {
    console.error("Error during signup:", e);
    return res
      .status(500)
      .json({ success: false, message: "Error signing up" });
  }
});

module.exports = router;
