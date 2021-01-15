module.exports = {
	definition: `
        input ContactMail {
            subject: String!
            replyTo: String!
			body: String!
			captcha: String!
		}
		
		type ServerResponse {
			success: Boolean!
			message: String!
		}
    `,
	mutation: `
        sendMail(mail: ContactMail): ServerResponse
    `,
	resolver: {
		Mutation: {
			sendMail: {
				description: "Send an email to the owner.",
				policies: [],
				resolver: "application::contact-page.contact-page.mail"
			}
		}
	}
};
