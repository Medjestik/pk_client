import type { FC } from 'react';

import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './header.module.scss';

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}></div>
			<nav className={styles.nav}>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>О ДПО</li>
					<li className={styles.nav__item}>Возможности</li>
					<li className={styles.nav__item}>Программы</li>
					<li className={styles.nav__item}>Заказчики</li>
					<li className={styles.nav__item}>Этапы обучения</li>
					<li className={styles.nav__item}>Частые вопросы</li>
				</ul>
			</nav>
			<Button text='Оставить заявку' color='blue' />
		</div>
	);
};
