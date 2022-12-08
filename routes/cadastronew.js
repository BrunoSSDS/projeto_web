const express = require("express") ;
const { addcadastronew, deletecadastronew, getcadastronews, updatecadastronew } = require ("../controllers/cadastronew.js") ;

const router = express.Router()

router.get("/", getcadastronews)

router.post("/", addcadastronew)

router.put("/:id", updatecadastronew)

router.delete("/:id", deletecadastronew)

module.export = router