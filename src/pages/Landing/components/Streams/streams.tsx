import type { FC } from 'react';
import { useState } from 'react';

import { convertDateShort } from '../../../../shared/lib/date';
import { useSelector } from '../../../../store/store';
import { Button } from '../../../../shared/components/Button/ui/button';

import styles from './streams.module.scss';

export const Streams: FC = () => {
	const { streams } = useSelector((state) => state.programs);

	const STEP = 2;
	const [visibleCount, setVisibleCount] = useState<number>(STEP);

	const handleShowMore = () => {
		setVisibleCount((prev) => prev + STEP);
	};

	const visibleStreams = streams.slice(0, visibleCount);
	const hasMore = visibleCount < streams.length;

	return (
		<section className={styles.streams}>
			<h2 className={styles.title}>Расписание потоков и набор групп</h2>

			<p className={styles.subtitle}>
				Выберите программу и удобные даты начала обучения. <br />
				Расписание обновляется по мере формирования групп.
			</p>

			<ul className={styles.list}>
				{visibleStreams.map((elem) => (
					<li className={styles.item} key={elem.id}>
						<h4 className={styles.item__title}>{elem.name}</h4>

						<ul className={styles.item__tags}>
							<li className={styles.item__tag}>{elem.direction_name}</li>
							<li className={styles.item__tag}>{elem.hours_volume} ак. час.</li>
						</ul>

						<ul className={styles.parts}>
							{elem.batches.map((batch) => (
								<li className={styles.part} key={batch.id}>
									<div className={styles.part__main}>
										<span className={styles.part__tag}>
											{batch.learning_format}
										</span>

										<p className={styles.part__title}>
											{convertDateShort(batch.start_date)} —{' '}
											{convertDateShort(batch.end_date)}
										</p>
									</div>

									<Button text='Записаться' color='blue' />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			{hasMore && (
				<button
					type='button'
					className={styles.showMore}
					onClick={handleShowMore}>
					Показать ещё {Math.min(STEP, streams.length - visibleCount)} программы
				</button>
			)}
		</section>
	);
};
