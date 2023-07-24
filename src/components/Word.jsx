import "../styles/Test.css";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import expressionParser from "docxtemplater/expressions.js"


async function generateWordDocument(event, props){
    console.log(props)
    try {
        let response = await fetch("./src/assets/template.docx");
        let tempData = await response.arrayBuffer();
        let zip = PizZip(tempData);

        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
            parser: expressionParser
        })

        let data = props.state.data

        let degree;

        if(data.degreeType == ""){

        }

        

        let templateData = {
            "name": data.name,
            "email": data.email,
            "phoneNumber": data.phoneNumber,
            "degreeType": data.degreeType,
            "degreeField": data.degreeField,
            "school": data.school,
            "schoolEndDate": data.schoolEndDate

        }



        doc.render(templateData)


        const blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }); //Output the document using Data-URI
        saveAs(blob, "output.docx")

    } catch (error) {
    console.log('Error: ' + error);
    }
}



// function generateWordDocument(event, props) {
//     event.preventDefault();
//     // Create a new instance of Document for the docx module
  
//     let data = props.state.data

//     console.log(data.firstName, data.lastName)
  
//     const title = new Paragraph({
//         children: [
//             new TextRun({
//                 text: data.firstName + " " + data.lastName,
//                 bold: true,
//                 size: 40,
//                 break: 1,
//             }),
//             new TextRun({
//                 text: data.phoneNumber,
//                 break: 1,
//             }),
//             new TextRun({
//                 text: data.email,
//                 break: 1,
//             }),
//         ],
//         alignment: AlignmentType.CENTER
//     })
  
//     const doc = new Document({
//         styles: {
//             default: {
//                 document: {
//                     run: {
//                         font: "Georgia",
//                         size: "11pt",
//                     },
//                     paragraph: {
//                         spacing:{
//                             line: 320,
//                         },
//                     }
//                 }
//             },
//         },
//       sections: [
//           {
//               children: [title, title],
//           },
//       ],
//   });
  
//   // Used to export the file into a .docx file
//   Packer.toBlob(doc).then(blob => {
//     console.log(blob);
//     saveAs(blob, "example.docx");
//     console.log("Document created successfully");
//   });
  
//   }


export default generateWordDocument;