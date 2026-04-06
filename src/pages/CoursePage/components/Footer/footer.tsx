import type { FC } from 'react';

import styles from './footer.module.scss';

export const Footer: FC = () => {
	return (
		<footer className={styles.header}>
			<div className={styles.logos}>
				<div className={`${styles.logo} ${styles.logo_min}`}></div>
				<div className={`${styles.logo} ${styles.logo_rut}`}></div>
			</div>
			<span className={styles.caption}>RUT-EDU</span>
		</footer>
	);
};
