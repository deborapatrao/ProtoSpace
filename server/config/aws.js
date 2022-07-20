require('dotenv').config();
const S3 = require("aws-sdk/clients/s3")



const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET_REGION, AWS_S3_BUCKET_NAME} = process.env


const s3 = new S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_S3_BUCKET_REGION
})

module.exports =  s3


