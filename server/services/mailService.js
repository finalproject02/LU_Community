import nodemailer from 'nodemailer';
import {referenceNumberMessage} from "./messages.js";
export const sendOfferLetterMessage = async (email, name) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lucommunity3@gmail.com',
            pass: '@lucommunity#'
        }
    })
    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Your Credential is Authenticated',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Email from Lu Community</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card bg-light p-4">
                    <div class="card-header fw-bold fs-3 text-success">
                        Your credential is authenticated.
                    </div>
                    <div class="card-body p-5">
                        <h5 class="card-title text-dark">Dear <em>${name}</em></h5>
                        <p class="text-dark">We verified that your submitted information is accurated. Next process you
                            should
                            clear your payment. Here are the guide line of tuition fee payment system. Click on the
                            below button for
                            details</p>
                        <a href="https://www.lus.ac.bd/guide-line-of-tuition-fee-payment-system/" class="btn"
                            style="background-color: #6daf2c;">payment
                            process</a>
                        <div class="text-dark mt-4">
                            <p>Thank you,</p>
                            <p>Leading University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
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
            user: 'lucommunity3@gmail.com',
            pass: '@lucommunity#'
        }
    })

    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Your Credential is Authenticated',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Email from Lu Community</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card bg-light p-4">
          <div class="card-header fw-bold fs-3 text-danger">
            Your Credential is not authenticated.
          </div>
          <div class="card-body p-5">
            <h5 class="card-title text-dark">Dear <em>${name}</em></h5>
            <p class="text-dark">We are very sorry to say that your submitted information is not accurate. Please give
              your correct information and submit the form again. Here is the link.</p>
            <a href="https://www.lus.ac.bd/guide-line-of-tuition-fee-payment-system/" class="btn btn-primary">Admission
              form</a>
            <div class="text-dark mt-4">
              <p>Thank you,</p>
              <p>Leading University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
</body>

</html>`
    }
    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) throw error;
        console.log('Email: ' + info.response)
    })
}



export const emailWithReferenceNumber = async (email, name, referenceCode) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lucommunity3@gmail.com',
            pass: '@lucommunity#'
        }
    })
    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Reference token',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card bg-light p-4">
                    <div class="card-header fw-bold fs-3 text-success">
                    </div>
                    <div class="card-body p-5">
                        <h5 class="card-title text-dark">Hello <em>${name}</em></h5>
                        <p class="text-dark">Your registration has been successful. For payment you should use this ${referenceCode} code as a reference number.</p>
                        <p></p>
                        <div class="text-dark mt-4">
                            <p>Thank you,</p>
                            <p>Leading University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`
    }
    await transporter.sendMail(mailOptions, async (error, info) => {
        if (error) throw error;
        console.log('Email: ' + info.response)
    })
}

export const addTeacherEmail = async (name, number, designation, department, email, password) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lucommunity3@gmail.com',
            pass: '@lucommunity#'
        }
    })
    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Appointment credential',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card bg-light p-4">
                    <div class="card-header fw-bold fs-3 text-success">
                    </div>
                    <div class="card-body p-5">
                        <h5 class="card-title text-dark">Hello <em>${name}</em></h5>
                        <p class="text-dark">Your has been appointed as ${designation} of ${department} department at Leading University. Your email: ${email} and password: ${password} for login our university web application</p>
                        <p></p>
                        <div class="text-dark mt-4">
                            <p>Thank you,</p>
                            <p>Leading University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`
    }
    await transporter.sendMail(mailOptions, async (error, info) => {
        if (error) throw error;
        console.log('Email: ' + info.response)
    })
}

export const addStudentEmail = async (name, number, department, email, password) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lucommunity3@gmail.com',
            pass: '@lucommunity#'
        }
    })
    const mailOptions = {
        from: '"LU Community" <lucommunity3@gmail.com>',
        to: email,
        subject: 'Appointment credential',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card bg-light p-4">
                    <div class="card-header fw-bold fs-3 text-success">
                    </div>
                    <div class="card-body p-5">
                        <h5 class="card-title text-dark">Hello <em>${name}</em></h5>
                        <p class="text-dark">Your has been appointed as ${designation} of ${department} department at Leading University. Your email: ${email} and password: ${password} for login our university web application</p>
                        <p></p>
                        <div class="text-dark mt-4">
                            <p>Thank you,</p>
                            <p>Leading University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`
    }
    await transporter.sendMail(mailOptions, async (error, info) => {
        if (error) throw error;
        console.log('Email: ' + info.response)
    })
}