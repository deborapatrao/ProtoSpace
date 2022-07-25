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
    const Protocol_id = req.body.protocol_id;
    const Workspace_id = req.body.workspace_id
    doc.pipe(fs.createWriteStream('temp/test.pdf'));
    const ProtocolInfo = await Protocol.findByPk(Protocol_id, {
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
    });
    //Query for Steps
    const steps_query = `select sp.id                                                    as step_id
                        , sp.description                                           as step_description
                        , sup.note                                                 as step_note
                        , sp.step_number
                        , sup.end_step
                        , sup.start_step
                   from step_user_protocol sup
                            join protocol p on p.id = sup.protocol_id
                            join step_protocol sp on sp.id = sup.step_protocol_id

                   where 1 = 1
                     and p.id = ${Protocol_id}
                     and sup.workspace_id = ${Workspace_id}`

    const [steps] = await Raw.query(steps_query);


//Header

    doc
        .fontSize(40)
        .text(ProtocolInfo.name, {
            align: 'center'
        });

    doc.moveDown()
        .fontSize(18)
        .text(`Author: ${ProtocolInfo.author.toLocaleUpperCase()}`, {
            align: 'left'
        });

    if (ProtocolInfo.external_link) {
        doc
            .fontSize(16)
            .text(`External Link: ${ProtocolInfo.external_link}`, {
                align: 'left',
                link: ProtocolInfo.external_link,
            })

    }
    doc.moveDown()
        .fontSize(16)
        .text(`Abstract:`);
    doc
        .fontSize(16)
        .text(ProtocolInfo.abstract);


    doc.moveDown()
        .fontSize(16)
        .text(`Diclaimer:`);
    doc
        .fontSize(16)
        .text(ProtocolInfo.disclaimer);


    doc.moveDown()
        .fontSize(16)
        .text(`Guideline:`);
    doc
        .fontSize(16)
        .text(ProtocolInfo.guideline);

    doc.moveDown()
        .fontSize(16)
        .text(`Materials:`);
    doc
        .fontSize(16)
        .text(ProtocolInfo.materials);

    doc.moveDown()
        .fillColor('red')
        .fontSize(16)
        .text(`Before Start:`);
    doc
        .fontSize(16)
        .text(ProtocolInfo.before_start);

    doc.moveDown()
        .fillColor('red')
        .fontSize(16)
        .text(`Safety Warning:`);
    doc
        .fontSize(16)
        .text(ProtocolInfo.safety_warning);

    doc.moveDown()
        .fillColor('black')
        .fontSize(22)
        .text(`Steps:`);


    for(const step of steps){

        const components_query = `select c.name         as component_name,
                          sc.name        as step_component_name,
                          sc.information as component_information,
                          sc.value       as component_value,
                          u.name         as unit_name,
                          u.symbol       as symbol
                   from step_component as sc
                            join component c on c.id = sc.component_id
                            join unit u on sc.unit_id = u.id
                   where step_id = ${step.step_id}`

        const [components] = await Raw.query(components_query);


        doc.moveDown()
            .fontSize(16)
            .text(`Step ${step.step_number}`,{align:'center'});
        doc.moveDown(2)
            .fontSize(16)
            .text(`Description:`);
        doc
            .fontSize(16)
            .text(step.step_description);


        for(const component of components){
            doc.moveDown()
                .fontSize(16)
                .text(`Name`);
            doc
                .fontSize(16)
                .text(component.step_component_name);
            doc.moveDown()
                .fontSize(16)
                .text(`Component: ${component.component_name}`);
            doc.moveDown()
                .fontSize(16)
                .text(`Value: ${component.component_value} ${component.unit_name}`);
        }

        doc.moveDown()
            .fontSize(16)
            .text(`Note:`);
        doc
            .fontSize(16)
            .text(step.step_note);
    }





    doc.end();
    res.end()


}
