const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the fields correctly." });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "joaovictorsp.012@gmail.com",
      pass: "rgkr hmdc zyez exzi",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "joaovictorsp.012@gmail.com",
    subject: `message from ${data.name}`,
    html: `
          <h3>Informações</h3>
          <ul>
              <li>Nome: ${data.name}</li>
              <li>Email: ${data.email}</li>
          </ul>
          <h3>Mensagem</h3>
          <p>${data.message}</p>
      `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res
          .status(400)
          .json({ msg: "Por favor preencha todos os campos." });
      res.status(200).json({ msg: "Obrigado por entrar em contato!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "Something went wrong." });
    }
  });
});

module.exports = router;
