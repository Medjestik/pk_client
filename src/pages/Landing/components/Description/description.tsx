import type { FC } from 'react';

import styles from './description.module.scss';

export const Description: FC = () => {
	return (
		<section className={styles.description}>
			<div className={styles.caption}>
				<div className={styles.caption__point}></div>
				<p className={styles.caption__text}>О ДПО</p>
			</div>
			<h2 className={styles.title}>
				<span className={styles.title_color_blue}>
					Мы помогаем развивать профессиональные компетенции,
				</span>{' '}
				которые&nbsp;действительно применимы в&nbsp;работе.
			</h2>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h4 className={styles.item__title}>Практическая направленность</h4>
					<p className={styles.item__text}>
						Мы разрабатываем программы с&nbsp;учётом реальных профессиональных
						задач, с&nbsp;которыми сталкиваются специалисты в&nbsp;повседневной
						работе. Обучение строится вокруг прикладных кейсов, инструментов
						и&nbsp;методик, которые можно использовать сразу после окончания
						курса.
					</p>
				</li>
				<li className={styles.item}>
					<h4 className={styles.item__title}>Актуальные программы</h4>
					<p className={styles.item__text}>
						Содержание программ регулярно обновляется с&nbsp;учётом изменений
						в&nbsp;законодательстве, технологиях и&nbsp;управленческих
						практиках. Это позволяет слушателям получать знания, соответствующие
						современным требованиям работодателей и&nbsp;отрасли.
					</p>
				</li>
				<li className={styles.item}>
					<h4 className={styles.item__title}>Гибкие форматы обучения</h4>
					<p className={styles.item__text}>
						Большинство программ реализуется в&nbsp;онлайн или&nbsp;гибридном
						формате, что&nbsp;позволяет совмещать обучение с&nbsp;работой.
						Слушатели получают доступ к&nbsp;учебным материалам и&nbsp;поддержке
						преподавателей без&nbsp;необходимости отрыва
						от&nbsp;профессиональной деятельности.
					</p>
				</li>
			</ul>
		</section>
	);
};
