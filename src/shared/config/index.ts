export const getApiUrl = (): string => {
	const { hostname } = window.location;

	if (hostname === 'localhost') {
		return 'https://api.emiit.ru/_wt/pk';
	} else {
		return 'https://api.emiit.ru/_wt/pk';
	}
};

export const API_URL = getApiUrl();
