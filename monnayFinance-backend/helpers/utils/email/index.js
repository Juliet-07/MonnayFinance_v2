const nodeMailer = require("nodemailer");
const emailTemplate=require("./templates/email");


class Emailing {

  async mailer(emails, message, subject, from) {
    let transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_EMAIL, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
      tls: { rejectUnauthorized: false },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Vigoplace <${from}>`, // sender address
      bcc: `${emails}`, // list of receivers
      subject: subject, // Subject line
      html: message, // html body
    });

    return `${info} Email sent successfully`;
  }

  async mailSend(data, emails, subject, from) {
    let { fullName, message, verificationLink, actionText } = data;
    message = emailTemplate(fullName, message, verificationLink, actionText);
    await this.mailer(emails, message, subject, from);
  }

}

module.exports = Emailing;