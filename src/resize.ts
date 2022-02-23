import express from 'express';

const router = express.Router();
const url = require('url');
const sharp = require("sharp");
const fs = require('fs')


router.get('/resize', async (req: any, res: any) => {
  const queryObject = url.parse(req.url, true).query;
  try {
    createFolder();
    let image: String;
    let width: number;
    let height: number;

    width = parseInt(queryObject['width']);
    height = parseInt(queryObject['height']);

    if (queryObject['image']) {
      image = queryObject['image'];
    }
    else {
      return "Please select image."
    }
    const checkImage = await checkExistance(image);
    if (!checkImage) {
      return res.status(400).send("Image does not exist");
    }
    const resized = await resizeImage(image, width, height)
    if (!resized) {
      return res.status(400).send("Image not resized.");
    }
    fs.readFile(`images/thumbnails/${image}-${width}x${height}.jpeg`, function (err: any, data: any) {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });
      res.end(data);
    })
    return res;

  } catch (e) {
    console.log(e)
    return res.status(500).send(e);
  }

})


export const createFolder = () => {
  const folderName = 'images/thumbnails'
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export const checkExistance = async (image: String) => {
  try {
    const metadata = await sharp(`images/${image}.jpeg`).metadata();
    return true;
  } catch (e) {
    return false;
  }
}

export const resizeImage = async (image: String, width: number, height: number) => {
  try {
    await sharp(`images/${image}.jpeg`)
      .resize({
        width,
        height
      })
      .toFile(`images/thumbnails/${image}-${width}x${height}.jpeg`);
    return true;
  } catch (e) {
    return false;
  }
}
export default router;

