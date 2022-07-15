require('dotenv').config();
const AWS = require("aws-sdk")
// const getImgBuffer = require("getImgBuffer")
const bucketName = 'protospace-app'
const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: 'us-west-1'
})

const s3Bucket = new AWS.S3({params: {Bucket: bucketName}})

module.exports = s3Bucket   