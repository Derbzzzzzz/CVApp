import "../styles/Test.css";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import expressionParser from "docxtemplater/expressions.js"
import moment from "moment"

function formatDate(date){

    let newDate = date.replaceAll("-", "")

    newDate = moment(date, "YYYYMMDD")

    newDate = newDate.format("MMM YYYY")

    return newDate
}

function updateDates(array){
    for (let i = 0; i < array.length; i++) {
        array[i].startDate = formatDate(array[i].startDate)
        if(array[i].endDate != null){
            array[i].endDate = formatDate(array[i].endDate)
        }
    }
    

    return array
}

function updateResponibilities(array){
    for (let i = 0; i < array.length; i++) {
        array[i].responsibilities = (array[i].responsibilities).split("\n")
    }

    return array

}

function findWork(experiences){
    let ret = []
    for (let i = 0; i < experiences.length; i++) {
        if(experiences[i].expType == "Work"){
            ret.push(JSON.parse(JSON.stringify(experiences[i])))
        }
    }

    ret = updateResponibilities(ret)

    return updateDates(ret)
}

function findVolunteer(experiences){
    let ret = []
    for (let i = 0; i < experiences.length; i++) {
        if(experiences[i].expType == "Volunteering/Service"){
            ret.push(JSON.parse(JSON.stringify(experiences[i])))
        }
    }

    ret = updateResponibilities(ret)

    return updateDates(ret)
}

function findExtra(experiences){
    let ret = []
    for (let i = 0; i < experiences.length; i++) {
        if(experiences[i].expType == "Extracurricular"){
            ret.push(JSON.parse(JSON.stringify(experiences[i])))
        }
    }

    ret = updateResponibilities(ret)

    return updateDates(ret)
}


async function generateWordDocument(event, props){

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

        

        

        let templateData = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            degreeType: data.degreeType,
            degreeField: data.degreeField,
            school: data.school,
            schoolEndDate: formatDate(data.schoolEndDate),
            gpa: data.gpa,
            work: findWork(data.experiences),
            volunteer: findVolunteer(data.experiences),
            extra: findExtra(data.experiences)

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