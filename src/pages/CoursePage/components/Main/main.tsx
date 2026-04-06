import type { FC } from 'react';

import { Link } from 'react-scroll';
import { Header } from '../Header/header';
import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './main.module.scss';

const btnStyle = {
	padding: '17px 27px',
	width: 'fit-content',
};

export const Main: FC = () => {
	return (
		<section className={styles.main}>
			<Header />
			<div className={styles.container}>
				<span className={styles.caption}>RUT-EDU</span>
				<h1 className={styles.title}>
					Онлайн-курсы для&nbsp;развития компетенций будущего
				</h1>
				<p className={styles.subtitle}>
					Открытые образовательные программы для&nbsp;всех
					и&nbsp;специализированные курсы с&nbsp;доступом
					для&nbsp;профессионального развития в&nbsp;области экономики,
					цифровизации и&nbsp;устойчивого развития.
				</p>
				<Link to='format' smooth={true} offset={80} duration={1000} spy={true}>
					<Button text='Подробнее' color='blue' style={btnStyle} />
				</Link>
				<div className={styles.cube}></div>
				<div className={styles.img}></div>
			</div>
		</section>
	);
};
