import type { FC } from 'react';

import styles from './feedback.module.scss';

export const Feedback: FC = () => {
	return (
		<section className={styles.feedback}>
			<h2 className={styles.title}>Остались вопросы по обучению?</h2>
			<p className={styles.subtitle}>
				Оставьте заявку — специалист отдела повышения квалификации свяжется с
				вами и подберёт подходящую программу обучения.
			</p>
			<span className={styles.caption}>
				Мы не передаём данные третьим лицам и используем их только для связи по
				вопросам обучения.
			</span>
		</section>
	);
};
