import { request } from './utils';

export const getPrograms = () => {
	return request('/active-programs/', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
};

export const getStreams = () => {
	return request('/programs-with-batches/', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
};
