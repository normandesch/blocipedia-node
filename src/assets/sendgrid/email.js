const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {

    createEmail (newUser){
        const msg = {
            to: 'normandesch3@gmail.com',
            from: 'admin@blocipedia.com',
            subject: 'Welcome to Blocipedia',
            text: 'Thank you for signing up with Blocipedia. This is an email confirmation.',
            html: '<strong>Thank you for signing up with Blocipedia. This is an email confirmation.</strong>',
          };
          sgMail.send(msg);
    }
}
