const { AWS_S3_BUCKET_NAME } = process.env
const fs = require("fs");
const s3 = require("../config/aws");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink)

exports.profilePhoto = async (file, fileName) => {
    let photoURL = ''
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket: 'protospace-app',
        Body: fileStream,
        Key: `profile/${fileName}`,
        ContentType: file.type,
    }
    const upload = await s3.upload(uploadParams).promise().then(data => photoURL = data.Location)
    if (upload) {
        await unlinkFile(file.path)
        return photoURL
    }
}
exports.protocolImages = async (file, fileName, stepNumber) => {
    let photoURL = ''
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket: 'protospace-app',
        Body: fileStream,
        Key: `protocols/${stepNumber}/${fileName}`,
        ContentType: file.type,
    }
    const upload = await s3.upload(uploadParams).promise().then(data => photoURL = data.Location)
    if (upload) {

        await unlinkFile(file.path)

        return photoURL

    }
}
