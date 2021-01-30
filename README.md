# CMS for www.ramilamparo.com

## Required environment variables

You can create a `.env` file in the root folder with the following required environment variables. You can rename the `.env.example` to `.env` and replace it with your own values.

`JWT_SECRET=mysecret!` A secret for generating login tokens.

`CONTACT_EMAIL=contact@ramilamparo.com` Where the visitors of your website will send inquiry emails.

`EMAIL_USER=contact@ramilamparo.com` An smtp username used to send emails to CONTACT_EMAIL.

`EMAIL_HOST=mail.privateemail.com` Your smtp email server.

`EMAIL_SMTP_PORT=465` Your smtp email port

`EMAIL_PASS=your_email_password_123` Your smtp email pass.

`CAPTCHA_SECRET_KEY=CaptchaSecretKey` Your captca secret key to prevent bots.

### Production environment variables.

The following variables are required in production environment.

`DATABASE_USER=root` Your database username.

`DATABASE_PASS=password` Your database password.

`DATABASE_NAME=portfolio` Your database portfolio.

`DATABASE_HOST=localhost` Your database localhost.
