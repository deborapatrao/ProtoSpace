const PDFDocument = require('pdfkit');
const db = require("../models")
const fs = require("fs");
const Raw = db.sequelize;
const Protocol = db.protocol
const Step = db.step_protocol
const StepComponents = db.step_component
const StepUserProtocol = db.step_user_protocol

const doc = new PDFDocument;

exports.exportPDF = async (req, res) => {
    doc.pipe(fs.createWriteStream('temp/test.pdf'));
    const ProtocolInfo = await Protocol.findByPk(req.body.protocol_id, {
        attributes: [
            'name',
            'author',
            'external_link',
            'abstract',
            'disclaimer',
            'guideline',
            'materials',
            'before_start',
            'safety_warning'
        ]
    })
    // const [results, metadata] = await Raw.query(query);
//Header

    doc
        .fontSize(40)
        .text(ProtocolInfo.name,{
            align: 'center'
        });
    doc
        .fontSize(18)
        .text(`Author: ${ProtocolInfo.author.toLocaleUpperCase()}`,{
        align: 'left'
    });
    res.send(ProtocolInfo.external_link)
    if(ProtocolInfo.external_link){
    doc
        .fontSize(16)
        .text(`External Link:`,{
            align: 'left'
        })
        .link('www.google.com.br')
    }
    doc.end();
    res.end()


}
