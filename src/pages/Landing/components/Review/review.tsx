import type { FC } from 'react';
import type { IReview } from '../../../../store/landing/types';

import { useSelector } from '../../../../store/store';
import { useState } from 'react';

import { Rating } from '../../../../shared/components/Rating/ui/rating';

import styles from './review.module.scss';

export const Review: FC = () => {
	const { reviews } = useSelector((state) => state.landing);

	const STEP = 3;
	const [visibleCount, setVisibleCount] = useState<number>(STEP);

	const handleShowMore = () => {
		setVisibleCount((prev) => prev + STEP);
	};

	const visibleNews = reviews.slice(0, visibleCount);
	const hasMore = visibleCount < reviews.length;

	return (
		reviews.length > 0 && (
			<section id='review' className={styles.review}>
				<h2 className={styles.title}>Отзывы слушателей программ</h2>
				<p className={styles.subtitle}>
					Слушатели программ — специалисты транспортной отрасли, органов
					государственной власти и бизнеса. Отзывы отражают практическую
					значимость и результаты обучения.
				</p>

				<div className={styles.container}>
					<ul className={styles.list}>
						{visibleNews.map((elem: IReview) => (
							<li className={styles.item} key={elem.id}>
								<div className={styles.item__header}>
									<span className={styles.item__rating}>
										<Rating value={elem.rating} />
									</span>
									<div className={styles.item__tag}>Повышение квалификации</div>
								</div>
								<p className={styles.item__text}>«{elem.quote}»</p>
								<h4 className={styles.item__title}>{elem.person_name}</h4>
								<h4 className={styles.item__subtitle}>
									{elem.person_position}
								</h4>
							</li>
						))}
					</ul>

					{hasMore && (
						<button
							type='button'
							className={styles.button}
							onClick={handleShowMore}>
							Показать ещё {Math.min(STEP, reviews.length - visibleCount)}
						</button>
					)}
				</div>
			</section>
		)
	);
};
