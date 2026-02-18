import type { FC } from 'react';

import { getCurrentYear } from '../../../../shared/utils/getCurrentYear';

import styles from './footer.module.scss';

export const Footer: FC = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.main}>
					<div className={styles.column}>
						<h5 className={styles.title}>О ДПО</h5>
						<p className={styles.text}>
							Институт экономики и финансов РУТ (МИИТ) реализует программы
							дополнительного профессионального образования для специалистов
							транспортной и других отраслей.
						</p>
						<p className={styles.text}>Об обучении</p>
						<p className={styles.text}>Возможности и масштабы</p>
						<p className={styles.text}>Как проходит обучение</p>
						<p className={styles.text}>Часто задаваемые вопросы</p>
					</div>
					<div className={styles.column}>
						<h5 className={styles.title}>Программы</h5>
						<p className={styles.text}>Каталог программ</p>
						<p className={styles.text}>Расписание потоков</p>
					</div>
					<div className={styles.column}>
						<h5 className={styles.title}>Контакты</h5>
						<p className={styles.text}>Москва, ул. Образцова, д. 9</p>
						<p className={styles.text}>+7 (495) 000-00-00</p>
						<p className={styles.text}>dpo@miit.ru</p>
						<p className={styles.text}>Пн–Пт 9:00–18:00</p>
					</div>
					<div className={styles.column}>
						<h5 className={styles.title}>Документы</h5>
						<p className={styles.text}>
							Лицензия на образовательную деятельность
						</p>
						<p className={styles.text}>Политика конфиденциальности</p>
						<p className={styles.text}>Обработка персональных данных</p>
						<p className={styles.text}>Публичная оферта</p>
						<p className={styles.text}>Реквизиты организации</p>
					</div>
				</div>
				<div className={styles.bottom}>
					<p className={styles.copy}>
						&copy; {getCurrentYear()}, Институт экономики и финансов РУТ (МИИТ)
					</p>
				</div>
			</div>
		</section>
	);
};
