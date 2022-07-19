require('dotenv').config();
const S3 = require("aws-sdk/clients/s3")
const fs = require("fs");
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
// const getImgBuffer = require("getImgBuffer")

const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET_REGION, AWS_S3_BUCKET_NAME} = process.env


const s3 = new S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_S3_BUCKET_REGION
})

/* The above code is uploading a file to AWS S3. */
exports.profilePhoto = async (file, fileName) => {
    let photoURL = ''
    const fileStream = fs.createReadStream(file);

    const uploadParams = {
        Bucket: AWS_S3_BUCKET_NAME,
        Body: fileStream,
        Key: `profile/${fileName}.jpg`,
        ContentType: 'image/jpg',
    }

    await s3.upload(uploadParams).promise().then(data => photoURL=data.Location)
    await unlinkFile(file.path)

    return photoURL
}


