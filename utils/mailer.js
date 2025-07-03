const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: "gmail",
  auth: {
    user: "yashpouranik1245@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

module.exports.sendWelcomeMail = async (req) => {
  const info = await transporter.sendMail({
    from: '"trekStay" <yashpouranik1245@gmail.com>',
    to: req.user.email,
    subject: "Welcome to trekStay 🌄",
    text: `Hello ${req.user.username}, welcome to trekStay! We're thrilled to have you on board.`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Welcome to <span style="color: #28a745;">trekStay</span>, ${req.user.username}! 👋</h2>
        <p>We're thrilled to have you join our travel community. Whether you're a solo explorer or planning a group adventure, trekStay is here to make your journey smoother and more memorable.</p>
        <p><strong>What's next?</strong></p>
        <ul>
          <li>🌍 Discover unique stays and travel experiences</li>
          <li>🗓️ Book your favorite places with ease</li>
          <li>🤝 Get 24/7 support from our team</li>
        </ul>
        <p>If you have any questions or need help planning your trip, just reply to this email. We're always here to help!</p>
        <p>Happy travels,<br><strong>The trekStay Team</strong></p>
      </div>
    `,
  });

  console.log("Message sent:", info);
};


module.exports.sendBookingMail = async (req, listing) => {
  const info = await transporter.sendMail({
    from: '"trekStay" <yashpouranik1245@gmail.com>',
    to: req.user.email,
    subject: "🎉 Booking Confirmed – trekStay",
    text: `Hi ${req.user.username}, your booking for ${listing.title} is confirmed!`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Booking Confirmed! ✅</h2>
        <p>Hi <strong>${req.user.username}</strong>,</p>
        <p>Your booking for <strong>${listing.title}</strong> has been successfully confirmed.</p>
        <p><strong>Details:</strong></p>
        <ul>
          <li>🏠 Stay: ${listing.title}</li>
          <li>📍 Location: ${listing.location}</li>
          <li>📅 Booked On: ${new Date().toLocaleDateString()}</li>
        </ul>
        <p>If you have any questions or need help with your trip, feel free to reply to this email.</p>
        <p>We hope you have an amazing stay! 🌄</p>
        <p>Cheers,<br><strong>The trekStay Team</strong></p>
      </div>
    `,
  });

  console.log("Booking email sent:", info);
};
