// const fs = require('fs');
// const nodemailer = require('nodemailer');

// const emailSend = async (req, res) => {
//     try {
//         const { 
//             passportImage,
//             ticketImage,
//             otherImage,
//             signature,
//             userId,
//             firstName,
//             lastName,
//             phone,
//             email,
//             city,
//             address,
//             problem,
//             flightNumber,
//             date,
//             select,
//             description,
//         } = req.body;
        
//         // Assuming passportImage, ticketImage, otherImage, and signature are file paths or base64 encoded
//         console.log('dataaaa::::', req.body);

//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.gmail_user,
//                 pass: process.env.gmail_pass
//             }
//         });

//         var attachments = []
        
//         if (passportImage) {
//             console.log('ertiiii')
//             attachments.push({
//                 filename: 'pasport-image.jpg',
//                 path: passportImage
//             });
//         } else {
//             console.log('oriiiiiii')
//             console.error('Passport image path is invalid:', passportImage);
//         }

//         if (ticketImage && fs.existsSync(ticketImage)) {
//             attachments.push({
//                 filename: 'ticket-image.jpg',
//                 path: ticketImage
//             });
//         } else {
//             console.error('Ticket image path is invalid:', ticketImage);
//         }

//         if (otherImage && fs.existsSync(otherImage)) {
//             attachments.push({
//                 filename: 'other-image.jpg',
//                 path: otherImage
//             });
//         } else {
//             console.error('Other image path is invalid:', otherImage);
//         }

//         if (signature && fs.existsSync(signature)) {
//             attachments.push({
//                 filename: 'signature.png',
//                 path: signature
//             });
//         } else {
//             console.error('Signature image path is invalid:', signature);
//         }
//         console.log(attachments)

//         var mailOptions = {
//             from: 'dato9613@gmail.com',
//             to: 'team@flyinspectors.com',  // or the email of the intended recipient
//             subject: `${firstName} - NEW CLIENT`,
//             attachments: [
//                 ...attachments,
//                 // {
//                 //     filename: 'pasport-image.jpg',
//                 //     path: String(passportImage)
//                 // },
//             ],
//             html: `
//                 <h1>მოგესალმებით</h1>
//                 <p>სახელი: ${firstName}</p>
//                 <p>გვარი: ${lastName}</p>
//                 <p>ID: ${userId}</p>
//                 <p>ტელ: ${phone}</p>
//                 <p>ემაილი: ${email}</p>
//                 <p>ქალაქი: ${city}</p>
//                 <p>მისამართი: ${address}</p>
//                 <p>პრობლემა: ${problem}</p>
//                 <p>ფრენის ნომერი: ${flightNumber}</p>
//                 <p>დრო: ${date}</p>
//                 <p>select: ${select}</p>
//                 <p>აღწერა: ${description}</p>
//             `
//         };

//         transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//                 console.log(error);
//                 return res.status(500).send('Error sending email');
//             } else {
//                 console.log('Email sent: ' + info.response);
//                 return res.status(200).send('Email sent successfully');
//             }
//         });
//     } catch (error) {
//         console.error('Error:', error);
//         return res.status(500).send("Something went wrong while sending the email!");
//     }
// };

// module.exports = { emailSend };


const fs = require('node:fs');

const emailSend = async (req, res) => {
    try {
        const { 
            passportImage,
            ticketImage,
            otherImage,
            signature,
            userId,
            firstName,
            lastName,
            phone,
            email,
            city,
            address,
            problem,
            flightNumber,
            date,
            select,
            description,
        } = req.body;
        console.log(1111,req.body)

        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.gmail_user,
                pass: process.env.gmail_pass
            }
        });

        var mailOptions = {
            from: email,
            to: 'team@flyinspectors.com, dato9613@gmail.com',
            // text: text,
            subject: `${firstName} - NEW CLIENT`,
            attachments: [
                {
                    filename: 'pasport-image.jpg',
                    path: String(passportImage)
                },
                {
                    filename: 'ticket-image.jpg',
                    path: String(ticketImage)
                },
                {
                    filename: 'other-image.jpg',
                    path: String(otherImage)
                },
                {
                    filename: 'signature.png',
                    path: String(signature)
                }
            ],
            html: `
                <h1>მოგესალმებით</h1>
                <p>სახელი: ${firstName}</p>
                <p>გვარი: ${lastName}</p>
                <p>იუზერის ID: ${userId}</p>
                <p>ტელ: ${phone}</p>
                <p>ემაილი: ${email}</p>
                <p>ქალაქი: ${city}</p>
                <p>მისამართი: ${address}</p>
                <p>პრობლემა: ${problem}</p>
                <p>ფრენის ნომერი: ${flightNumber}</p>
                <p>დრო: ${date}</p>
                <p>select: ${select}</p>
                <p>აღწერა: ${description}</p>
                `
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {emailSend}