const path = require("path");
const router = require("express").Router();


//API ROUTES

router.use("/api", apiRoutes);

//no api exist, redircet to react app

router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/bulid/inex.html"))

})

module.exports = router;