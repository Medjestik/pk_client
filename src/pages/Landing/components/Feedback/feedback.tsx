import type { FC } from 'react';

import { SendApplicationForm } from '../../../../features/Application/ui/send-application-form';

import styles from './feedback.module.scss';

export const Feedback: FC = () => {
	return (
		<section id='feedback' className={styles.feedback}>
			<h2 className={styles.title}>Остались вопросы по обучению?</h2>
			<p className={styles.subtitle}>
				Оставьте заявку — специалист отдела повышения квалификации свяжется с
				вами и подберёт подходящую программу обучения.
			</p>
			<SendApplicationForm
				direction='row'
				onSubmit={() => console.log('send')}
			/>
		</section>
	);
};
