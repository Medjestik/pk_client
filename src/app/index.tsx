import { Route, Routes } from 'react-router-dom';

import { Landing } from '../pages/Landing/ui/landing';
import { NotFound } from '../pages/NotFound/ui/not-found';

import { EROUTES } from '../shared/utils/routes';

import styles from './app.module.scss';

export const App = () => {
	return (
		<div className={styles.page}>
			<Routes>
				<Route path={EROUTES.LANDING} element={<Landing />} />

				<Route path='*' element={<NotFound />} />
			</Routes>

			<div id='modal-root'></div>
		</div>
	);
};
