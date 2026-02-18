import type { FC, CSSProperties } from 'react';

import { useSelector } from '../../../../store/store';

import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './programs.module.scss';

const btnStyle: CSSProperties = {
	margin: '24px 0 0 auto',
	width: '170px',
};

export const Programs: FC = () => {
	const { programs } = useSelector((state) => state.programs);

	return (
		<section className={styles.programs}>
			<h2 className={styles.title}>Каталог программ</h2>
			<p className={styles.subtitle}>
				Выберите программу по формату, направлению и стоимости.
			</p>
			<div className={styles.container}>
				<div className={styles.filter}>
					<Button text='Сбросить фильтры' color='blue' width='full' />
				</div>
				<ul className={styles.list}>
					{programs.map((elem) => (
						<li className={styles.item} key={elem.id}>
							<div className={styles.item__tag}>{elem.direction_name}</div>
							<h4 className={styles.item__title}>{elem.name}</h4>
							<p className={styles.item__text}>
								Для специалистов в сфере управления активами и недвижимости.
							</p>
							<div className={styles.item__info}>
								<span className={styles.item__hours}>
									{elem.hours_volume} ак. час.
								</span>
								<span className={styles.item__form}>
									{elem.learning_format}
								</span>
							</div>
							<Button text='Подробнее' color='blue' style={btnStyle} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
