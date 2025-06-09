const { UserModel } = require("../Models")
const { compareSync } = require("bcrypt")
const { JWT_SECRET, AUTH_SERVICE_URL} = require("../Config/config")
const jwt = require("jsonwebtoken")
const axios = require("axios")

module.exports = {
    signup: async (req, res) => {
        try {   

            const response = await axios.post(`${AUTH_SERVICE_URL}`, req.body);
            const result = response.data            
            return res.status(200).json({
                success:true,
                data: result
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error
            })
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await UserModel.findOne({ email, is_deleted: false, is_active: true }).populate('role')
            if (!user) {
                return res.status(404).json({ success: false, message: "User not registered" })
            }

            const isPasswordCorrect = compareSync(password, user.password)
            if (!isPasswordCorrect) {
                return res.status(404).json({ success: false, message: "Please enter correct password." })
            }

            const token = jwt.sign({ email, _id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "2d" })

            return res.status(201).json({
                success: true,
                message: "User logged in Successfully.",
                data: {
                    user,
                    token
                }
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error
            })
        }
    },
}