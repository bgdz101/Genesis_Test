require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set the API key


// Function to send emails
const sendEmail = async (to, subject, text) => {
  const msg = {
    to: to, // Recipient email address
    from: 'bogdandz101@gmail.com', // Must be verified with SendGrid
    subject: subject,
    text: text
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email', error);
  }
};

module.exports = { sendEmail };
