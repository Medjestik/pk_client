import type { FC } from 'react';

import { Link } from 'react-scroll';

import { Header } from '../Header/header';
import { Button } from '../../../../shared/components/Button/ui/button';

import video from '../../../../shared/images/video.mp4';

import styles from './main.module.scss';

export const Main: FC = () => {
	return (
		<section className={styles.main}>
			<Header />
			<h1 className={styles.title}>
				<span className={styles.title_color_blue}>Развивайте навыки,</span>{' '}
				<br></br>которые востребованы на рынке
			</h1>
			<p className={styles.subtitle}>
				Программы повышения квалификации и профессиональной переподготовки
				от&nbsp;Института экономики и&nbsp;финансов РУТ&nbsp;(МИИТ)
				для&nbsp;сотрудников транспортных компаний, организаций других отраслей
				и&nbsp;частных лиц.
			</p>
			<div className={styles.background}>
				<video className={styles.video} autoPlay muted loop playsInline>
					<source src={video} type='video/mp4' />
				</video>
				<div className={styles.overlay}></div>
				<div className={styles.info}>
					<div className={styles.caption}>
						<p className={styles.text}>Онлайн и очное обучение</p>
						<div className={styles.point}></div>
						<p className={styles.text}>
							Удостоверение государственного образца
						</p>
						<div className={styles.point}></div>
						<p className={styles.text}>От 2-х недель</p>
					</div>
					<div className={styles.buttons}>
						<Link
							to='feedback'
							smooth={true}
							offset={0}
							duration={3000}
							spy={true}>
							<Button text='Получить консультацию' color='white' />
						</Link>
						<Link
							to='programs'
							smooth={true}
							offset={0}
							duration={1500}
							spy={true}>
							<Button text='Подобрать программу' color='blue' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
