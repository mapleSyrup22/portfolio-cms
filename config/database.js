module.exports = ({ env }) => {
	if (env("NODE_ENV") !== "production") {
		return {
			defaultConnection: "default",
			connections: {
				default: {
					connector: "bookshelf",
					settings: {
						client: "sqlite",
						filename: env("DATABASE_FILENAME", ".tmp/data.db")
					},
					options: {
						useNullAsDefault: true
					}
				}
			}
		};
	}
	return {
		defaultConnection: "default",
		connections: {
			default: {
				connector: "bookshelf",
				settings: {
					client: "postgres",
					port: 5432,
					host: env("DATABASE_HOST"),
					database: env("DATABASE_NAME"),
					username: env("DATABASE_USER"),
					password: env("DATABASE_PASS")
				},
				options: {}
			}
		}
	};
};
