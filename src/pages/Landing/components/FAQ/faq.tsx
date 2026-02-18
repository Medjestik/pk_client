import type { FC } from 'react';

import { data } from './lib';

import { Accordion } from '../../../../widgets/Accordion/ui/Accordion';

import styles from './faq.module.scss';

export const FAQ: FC = () => {
	return (
		<section className={styles.faq}>
			<h2 className={styles.title}>Часто задаваемые вопросы</h2>
			<p className={styles.subtitle}>
				Ответы на самые популярные вопросы о поступлении и обучении.
			</p>
			<Accordion items={data} />
		</section>
	);
};
