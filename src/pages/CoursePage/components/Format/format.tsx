import type { FC } from 'react';

import { Link } from 'react-scroll';
import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './format.module.scss';

const btnStyle = {
	padding: '17px 27px',
	width: 'fit-content',
};

export const Format: FC = () => {
	return (
		<section className={styles.format} id='format'>
			<h2 className={styles.title}>
				Выберите{' '}
				<span className={styles.title_color}>свой формат обучения</span>
			</h2>
			<div className={styles.container}>
				<div className={styles.card}>
					<h4 className={styles.card__title}>
						Я хочу изучать<br></br>
						<span className={styles.card__title_color}>открытые курсы</span>
					</h4>
					<p className={styles.card__subtitle}>
						Получите доступ к&nbsp;актуальным знаниям в&nbsp;области экономики
						и&nbsp;цифровизации. Курсы разработаны преподавателями университета
						и&nbsp;подходят для&nbsp;студентов, специалистов и&nbsp;всех, кто
						хочет расширить компетенции.
					</p>
					<ul className={styles.card__list}>
						<li className={styles.card__item}>Бесплатный доступ</li>
						<li className={styles.card__item}>Самостоятельный темп обучения</li>
						<li className={styles.card__item}>Прикладной материал</li>
					</ul>
					<Link to='course' smooth={true} offset={0} duration={500} spy={true}>
						<Button text='Выбрать курсы' color='blue' style={btnStyle} />
					</Link>
					<div
						className={`${styles.card__img} ${styles.card__img_type_1}`}></div>
				</div>
				<div className={styles.card}>
					<h4 className={styles.card__title}>
						Я хочу изучать<br></br>
						<span className={styles.card__title_color}>
							специализированные курсы
						</span>
					</h4>
					<p className={styles.card__subtitle}>
						Программы ориентированы на&nbsp;подготовку специалистов
						в&nbsp;области устойчивого развития и&nbsp;экологической
						трансформации отраслей. Доступ предоставляется участникам
						образовательных инициатив и&nbsp;корпоративных программ. Для записи
						на специализированные курсы обратитесь на почту ief07@bk.ru
					</p>
					<ul className={styles.card__list}>
						<li className={styles.card__item}>
							Углеродное регулирование на транспорте
						</li>
						<li className={styles.card__item}>
							Устойчивое развитие в строительстве
						</li>
					</ul>
					<Button
						text='Начать изучение'
						color='blue'
						style={btnStyle}
						type='link'
						href='https://edu.emiit.ru/'
					/>
					<div
						className={`${styles.card__img} ${styles.card__img_type_2}`}></div>
				</div>
			</div>
		</section>
	);
};
