import nodemailer from 'nodemailer';
export const sendOfferLetterMessage = async (email, name) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Your Credential is Authenticated',
        html: `<!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        *{
            margin: 0;
            padding: 0;
        }
        .header {
          background-color: #9933cc;
          color: #ffffff;
          padding: 30px;
          text-align: center;
        }
        </style>
        </head>
        <body>
        
        <div class="header">
          <h2>hi ${name}</h2>
          <p>We are verified that your credential is accurate. Next proccess you should clear your payment. </p>
        </div>
        
        </body>
        </html>`
    }
    await transporter.sendMail(mailOptions, async (error, info) => {
       if (error) throw error;
       console.log('Email: ' + info.response)
    })
}

export const sendAccurateCredential = async (email, name) => {
    let transporter = await  nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Your Credential is Authenticated',
        html: `<!DOCTYPE html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        *{
            margin: 0;
            padding: 0;
        }
        .header {
          background-color: #9933cc;
          color: #ffffff;
          padding: 30px;
          text-align: center;
        }
        </style>
        </head>
        <body>
        
        <div class="header">
          <h2>hi ${name}</h2>
          <p>We are verified that your credential is not accurate. If you want to admit in Leading University your send again ligeal infomation. Please go Our website and registeration again for online admissions</p>
        </div>
        
        </body>
        </html>`
    }
    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) throw error;
        console.log('Email: ' + info.response)
    })
}