"use strict";
const nodemailer = require("nodemailer");
const axios = require("axios");

const {
	CONTACT_EMAIL,
	EMAIL_HOST,
	EMAIL_SMTP_PORT,
	EMAIL_USER,
	EMAIL_PASS,
	CAPTCHA_SECRET_KEY
} = process.env;

if (!CONTACT_EMAIL) {
	throw new Error("CONTACT_EMAIL is required.");
}
if (!EMAIL_HOST) {
	throw new Error("EMAIL_HOST is required.");
}
if (!EMAIL_SMTP_PORT) {
	throw new Error("EMAIL_PORT is required.");
}
if (!EMAIL_USER) {
	throw new Error("EMAIL_USER is required.");
}
if (!EMAIL_PASS) {
	throw new Error("EMAIL_PASS is required.");
}
if (!CAPTCHA_SECRET_KEY) {
	throw new Error("CAPTCHA_SECRET_KEY is required.");
}

const transport = nodemailer.createTransport({
	host: EMAIL_HOST,
	port: EMAIL_SMTP_PORT,
	secure: true,
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS
	}
});

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	mail: async (ctx) => {
		try {
			const { body, subject, replyTo, captcha } = ctx.request.body.mail;
			const captchaUrl = new URL(
				"https://www.google.com/recaptcha/api/siteverify"
			);
			captchaUrl.searchParams.append("secret", CAPTCHA_SECRET_KEY);
			captchaUrl.searchParams.append("response", captcha);
			const captchaResponse = await axios.post(captchaUrl.href);

			if (!captchaResponse?.data?.success && captchaResponse?.data?.score < 0.5) {
				throw new Error("Captcha verification failed.");
			}
			await transport.sendMail({
				to: CONTACT_EMAIL,
				from: `Personal Site <${EMAIL_USER}>`,
				replyTo,
				subject,
				text: body
			});
			return {
				success: true,
				message: "Email has been sent!"
			};
		} catch (e) {
			return {
				success: false,
				message: e.message
			};
		}
	}
};
