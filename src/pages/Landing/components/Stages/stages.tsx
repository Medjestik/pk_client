import type { FC, CSSProperties } from 'react';

import { data } from './lib';

import { Accordion } from '../../../../widgets/Accordion/ui/Accordion';
import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './stages.module.scss';

const btnStyle: CSSProperties = {
	margin: 'auto 0 0 0',
};

export const Stages: FC = () => {
	return (
		<section className={styles.stages}>
			<div className={styles.column}>
				<h2 className={styles.title}>Как проходит обучение</h2>
				<p className={styles.subtitle}>
					Пошаговый процесс от выбора программы до получения удостоверения
					установленного образца.
				</p>
				<Button text='Оставить заявку' style={btnStyle} color='blue' />
			</div>
			<Accordion items={data} />
		</section>
	);
};
