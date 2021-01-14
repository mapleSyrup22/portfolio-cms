"use strict";
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	mail: async (ctx) => {
		try {
			const { body, subject, replyTo } = ctx.request.body.mail;
			await strapi.plugins.email.services.email.send({
				to: process.env.CONTACT_EMAIL,
				replyTo,
				subject,
				text: body
			});
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
};
