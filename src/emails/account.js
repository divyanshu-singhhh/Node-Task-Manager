const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'divyanshu.160410107126@gmail.com',
        subject: 'Welcome to the awesome task manager',
        text: `Welcome to the app, ${name}. Let me know how u get along with the app`
    })
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'divyanshu.160410107126@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye, ${name}. Would u like to let us know the reasom for getting off from our app`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}