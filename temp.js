// import Imgflip from "imgflip";
const Imgflip = require("imgflip");
console.log(Imgflip);
console.log("type", typeof Imgflip);
// process.exit();
// https://imgflip.com/signup
const imgflip = new Imgflip({
  username: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
});

(async () => {
  // https://api.imgflip.com/get_memes
  // Get top 100 popular meme formats
  const memes = await imgflip.memes();
  console.log(memes);

  // Caption and download a great meme!
  await imgflip.meme(`100777631`, {
    captions: [
      `PROGRAMMERS`,
      `THIS PACKAGE`,
      `IS THIS THE GREATEST PACKAGE EVER?`,
    ],
    path: `pigeon.png`,
  });
})();
