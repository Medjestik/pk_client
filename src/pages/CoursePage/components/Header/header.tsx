import type { FC } from 'react';

import { Link } from 'react-scroll';
import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './header.module.scss';

const btnStyle = {
	width: 'auto',
	height: '34px',
	padding: '10px',
	fontSize: '14px',
};

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logos}>
				<div className={`${styles.logo} ${styles.logo_min}`}></div>
				<div className={`${styles.logo} ${styles.logo_rut}`}></div>
			</div>
			<div className={styles.buttons}>
				<Link to='course' smooth={true} offset={0} duration={1000} spy={true}>
					<Button text='Открытые курсы' color='black' style={btnStyle} />
				</Link>
				<Button
					text='Войти в личный кабинет'
					color='blue'
					style={btnStyle}
					type='link'
					href='https://edu.emiit.ru/'
				/>
			</div>
		</header>
	);
};
