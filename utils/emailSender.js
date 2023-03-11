const nodemailer = require("nodemailer")

exports.sendVerificationEmail = (email, name, url) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: ryxgjwizxbnhdiqr,
        },
    });

    let info = {
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "Oreby ecommerce email verification", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${url}</b>`, // html body
    }

    transporter.sendMail(info, (err, res)=>{
        if(err) return err
        return res
    })
}