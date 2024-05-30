const nodemailer = require("nodemailer");
const sendmail = async(req,res)=>{
  const code = req.query.code;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "selmonbhoi690@gmail.com",
            pass: "ibssmcuzkdjdhbyr",
        },    });
    
      const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <selmonbhoi690@gmail.com>', // sender address
        to: "selmonbhoi690@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>"
      });
    res.send(`I have mail ${code}`);
}
module.exports = sendmail;