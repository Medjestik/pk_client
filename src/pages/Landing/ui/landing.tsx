import type { FC } from 'react';

import { Main } from '../components/Main/main';

import styles from '../styles/landing.module.scss';

export const Landing: FC = () => {
	return (
		<div className={styles.landing}>
			<Main />
		</div>
	);
};
