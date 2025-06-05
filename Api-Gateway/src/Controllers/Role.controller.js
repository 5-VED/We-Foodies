const { RoleModel } = require("../Models")

module.exports = {
    addRole: async (req, res) => {
        try {
            const result = await RoleModel.create(req.body)
            return res.status(201).json({
                success: true,
                message: "Role created successfully",
                data: result
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
    
    removeRole: async (req, res) => {
        try {
            const result = await RoleModel.findOneAndDelete({role:req.body.role},{new:true})
            return res.status(200).json({
                success: true,
                message: "Role deleted successfully",
                data: result
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error
            })
        }
    }
} 
