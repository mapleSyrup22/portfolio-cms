module.exports = {
	definition: `
        input ContactMail {
            subject: String!
            replyTo: String!
            body: String!
        }
    `,
	mutation: `
        sendMail(mail: ContactMail): Boolean
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
