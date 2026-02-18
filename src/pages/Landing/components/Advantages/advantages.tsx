import type { FC } from 'react';

import styles from './advantages.module.scss';

export const Advantages: FC = () => {
	return (
		<section className={styles.advantages}>
			<div className={styles.header}>
				<h2 className={styles.title}>
					Возможности и масштабы дополнительного образования
				</h2>
				<p className={styles.subtitle}>
					Широкий выбор программ и большой опыт обучения специалистов и
					корпоративных групп.
				</p>
			</div>
			<ul className={styles.list}>
				<li className={`${styles.item} ${styles.item_type_1}`}>
					<div className={styles.item__tag}>Каталог программ</div>
					<h4 className={styles.item__title}>
						50+<br></br>программ
					</h4>
					<p className={styles.item__text}>
						по направлениям экономики, управления, финансов и цифровых
						компетенций
					</p>
				</li>
				<li className={`${styles.item} ${styles.item_type_2}`}>
					<div className={styles.item__tag}>Слушатели</div>
					<h4 className={styles.item__title}>
						36 000+ <br></br>слушателей
					</h4>
					<p className={styles.item__text}>
						ежегодно проходят обучение по программам повышения квалификации и
						профессиональной переподготовки
					</p>
				</li>
				<li className={`${styles.item} ${styles.item_type_3}`}>
					<div className={styles.item__tag}>Опыт</div>
					<h4 className={styles.item__title}>
						168 000+ <br></br>специалистов
					</h4>
					<p className={styles.item__text}>
						подготовлены за последние годы в рамках программ дополнительного
						образования
					</p>
				</li>
				<li className={`${styles.item} ${styles.item_type_4}`}>
					<div className={styles.item__tag}>Корпоративное обучение</div>
					<h4 className={styles.item__title}>Корпоративные заказчики</h4>
					<p className={styles.item__text}>
						реализация программ для транспортных компаний и организаций других
						отраслей
					</p>
				</li>
			</ul>
		</section>
	);
};
