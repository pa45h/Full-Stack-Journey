exports.contactUsEmail = (firstname, lastname, email, message, phoneNo) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Submission</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
            
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
            
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            
            .body {
                font-size: 16px;
                margin-bottom: 20px;
                text-align: left;
            }
            
            .highlight {
                font-weight: bold;
                color: #000000;
            }
            
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
                text-align: center;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="">
                <img class="logo" src="" alt="Logo">
            </a>
            
            <div class="message">New Contact Form Submission</div>
            
            <div class="body">
                <p><span class="highlight">Name:</span> ${firstname} ${lastname}</p>
                <p><span class="highlight">Email:</span> ${email}</p>
                <p><span class="highlight">Phone no.:</span> ${phoneNo}</p>
                <p><span class="highlight">Message:</span></p>
                <p>${message}</p>
            </div>
            
            <div class="support">
                This message was sent from your website contact form. Please respond directly to the user’s email: 
                <a href="mailto:${email}">${email}</a>
            </div>
        </div>
    </body>
    
    </html>`;
};

exports.contactThankYou = (name) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Thank You for Contacting Us</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
            
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
            
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
            
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
            
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
            
            .highlight {
                font-weight: bold;
            }
            
        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="">
                <img class="logo" src="" alt="Logo">
            </a>
            
            <div class="message">Thank You for Contacting Us</div>
            <div class="body">
                <p> Dear ${name}, </p>
                <p> Thank you for reaching out to us! We have received your message and our team will get back to you as soon as possible. </p>
                <p> In the meantime, feel free to explore more on our website. </p>
                <a class="cta" href="">Visit Website</a>
            </div>
            <div class="support">
                If you need immediate assistance, you can email us directly at 
                <a href="mailto:pa45h.katariya@gmail.com">pa45h.katariya@gmail.com</a>.
            </div>
        </div>
    </body>
    
    </html>`;
};
