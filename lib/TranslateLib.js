export class TranslateLib {
	baseURL = "https://7if32ljz45.execute-api.eu-central-1.amazonaws.com/dev";
	token;

	/**
	 * Initialize the library with your public token.
	 * @param {{token:string}} options
	 */
	constructor({ token }) {
		this.token = token;
	}

	/**
	 * Fetches all the translations for a given language
	 * @param {string} language - The language of the translations
	 */
	async getTranslations(language) {
		const response = await fetch(`${this.baseURL}/translations/${language}/${this.token}`);
		return await response.json();
	}
}
