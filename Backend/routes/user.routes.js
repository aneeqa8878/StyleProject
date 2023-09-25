const express=require('express');
const router= express.Router();
const controller=require("../controller/user.controller")


router.post("/",controller.store)
router.get("/",controller.index)
router.get("/:id",controller.get)
router.delete("/:id",controller.destroy)


module.exports=router