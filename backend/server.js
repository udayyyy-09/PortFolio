app.post("/send-email", async (req, res) => {
    console.log("Received request:", req.body);
    const { name, email, subject, message } = req.body;
  
    try {
      console.log("Setting up transporter");

      const transporter = nodemailer.createTransport({   //this is the transporter to send the email
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      
      console.log("Preparing mail options");
      //this will show how mail should be present
      const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `New-Contact ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      };
  
      console.log("Sending email");

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
      res.status(200).send("Message sent successfully!");
    } catch (error) {
      console.error("Error details: ", error);
      res.status(500).send("Failed to send message.");
    }
  });