const controller = {};
const objectMethods = require("./utils/objectMethods");

controller.make_meme = async (req, res) => {
  const fetch = require("node-fetch");
  console.log("req body is =++++++++++++++++", req.body);
  const { memeData = {} } = req.body || {};
  if (Object.keys(memeData).length <= 0) {
    return res.status(400).send("Bad Request");
  }
  const imgflipParams = objectMethods.objectToQueryParams({
    ...memeData,
    username: process.env.IMG_FLIP_USERNAME,
    password: process.env.IMG_FLIP_PASSWORD,
  });
  console.log(imgflipParams);
  try {
    const resultBuffer = await fetch(
      "https://api.imgflip.com/caption_image" + imgflipParams
    );
    const result = await resultBuffer.json();
    console.table(result);
    // console.log(result.data.url);
    if (result?.success) {
      res.header("Access-Control-Allow-Origin", "*");
      return res.status(200).json({ url: result?.data?.url });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send("Internal Server Error");
  } catch (error) {
    console.log(error);
    res.set(500).send("Internal Server Error");
  }
};
module.exports = controller;
