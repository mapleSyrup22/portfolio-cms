module.exports = ({ env }) => ({
	email: {
		provider: "sendgrid",
		providerOptions: {
			apiKey: env("SENDGRID_API_KEY")
		},
		settings: {
			defaultFrom: "contact@ramilamparo.com",
			defaultReplyTo: "contact@ramilamparo.com"
		}
	}
});
