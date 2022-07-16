const fs = require('fs');
const AWS = require('aws-sdk');
const s3Bucket = require('aws')

const imageUpload = (path, buffer) =>{
    const data = {
        Key: path,
        Body: buffer,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: 'public-read'
    }
    return new Promise((resolve, reject)=>{
        s3Bucket.putObject(data, (err)=>{
            if(err){
                reject(err)
            }else{
                resolve(`https://s3.amazonws.com/protospace-app/${path}`)
            }
        })
    })
}
module.exports = imageUpload