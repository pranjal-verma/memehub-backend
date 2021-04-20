var express = require("express");
var router = express.Router();
const controller = require("../controllers");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post("/make_meme", async (req, res) => {
  try {
    await controller.make_meme(req, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
