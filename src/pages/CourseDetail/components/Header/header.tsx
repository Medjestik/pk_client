import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './header.module.scss';

const btnStyle = {
	width: 'auto',
	height: '34px',
	padding: '10px',
	fontSize: '14px',
};

export const Header: FC = () => {
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			<div className={styles.logos}>
				<div className={`${styles.logo} ${styles.logo_min}`}></div>
				<div className={`${styles.logo} ${styles.logo_rut}`}></div>
			</div>
			<div className={styles.buttons}>
				<Button
					text='Вернуться к курсам'
					color='blue'
					style={btnStyle}
					onClick={() => navigate(-1)}
				/>
			</div>
		</header>
	);
};
