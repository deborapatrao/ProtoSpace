const getImgBuffer = require("./getImgBuffer");
const imageUpload = require("./uploadImg");

const getImageUrl = async (type, base64Image) => {
    const buffer = getImgBuffer(base64Image)
    return imageUpload(`${type}.jpeg`, buffer)
}

module.exports = getImageUrl