import type { FC } from 'react';

import styles from './company.module.scss';

export const Company: FC = () => {
	return (
		<section className={styles.company}>
			<div className={styles.caption}>
				<div className={styles.caption__point}></div>
				<p className={styles.caption__text}>
					Обучаем специалистов для компаний разных отраслей
				</p>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
				<li className={styles.item}>Логотип компании</li>
			</ul>
		</section>
	);
};
