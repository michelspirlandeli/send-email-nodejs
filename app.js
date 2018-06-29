const {getTransport, sendEmail } = require('./send-email')

const config = {
    service: 'gmail',
    email: 'meuemail@gmail.com',
    password: '******'
}

const destination = {
    remetente: 'meuemail@gmail.com',
    email: 'meuemail@gmail.com',
    subject: 'Testando'
}

const html = `<h1> Testando`

const transport = getTransport(config)

sendEmail(transport)(destination, html)
    .then(response => console.log(response))
    .catch(err => console.log(err))