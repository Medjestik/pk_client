import type { FC } from 'react';
import type { IStream, IBatch } from '../../../../store/landing/types';

import { useState } from 'react';
import { useDispatch, useSelector } from '../../../../store/store';

import { Button } from '../../../../shared/components/Button/ui/button';
import { Modal } from '../../../../shared/components/Modal/ui/modal';
import { SendProgramForm } from '../../../../features/Application/ui/send-program-form';

import {
	setCurrentProgram,
	setCurrentBatch,
} from '../../../../store/landing/reducer';
import { convertDateShort } from '../../../../shared/lib/date';

import styles from './streams.module.scss';

export const Streams: FC = () => {
	const dispatch = useDispatch();
	const { streams } = useSelector((state) => state.landing);

	const STEP = 2;
	const [visibleCount, setVisibleCount] = useState<number>(STEP);

	const [isOpenProgramForm, setIsOpenProgramForm] = useState<boolean>(false);

	const handleShowMore = () => {
		setVisibleCount((prev) => prev + STEP);
	};

	const handleOpenModal = (stream: IStream, batch: IBatch) => {
		const program = { name: stream.name, id: stream.id };
		dispatch(setCurrentProgram(program));
		dispatch(setCurrentBatch(batch));
		setIsOpenProgramForm(true);
	};

	const handleCloseModal = () => {
		dispatch(setCurrentProgram(null));
		dispatch(setCurrentBatch(null));
		setIsOpenProgramForm(false);
	};

	const visibleStreams = streams.slice(0, visibleCount);
	const hasMore = visibleCount < streams.length;

	return (
		streams.length > 0 && (
			<section id='streams' className={styles.streams}>
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
								<li className={styles.item__tag}>
									{elem.hours_volume} ак. час.
								</li>
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

										<Button
											text='Записаться'
											color='blue'
											onClick={() => handleOpenModal(elem, batch)}
										/>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>

				{hasMore && (
					<button
						type='button'
						className={styles.button}
						onClick={handleShowMore}>
						Показать ещё {Math.min(STEP, streams.length - visibleCount)}
					</button>
				)}

				{isOpenProgramForm && (
					<Modal
						isOpen={isOpenProgramForm}
						onClose={handleCloseModal}
						title='Отправить заявку'
						description='Специалист отдела повышения квалификации свяжется с вами'>
						<SendProgramForm onSubmit={handleCloseModal} />
					</Modal>
				)}
			</section>
		)
	);
};
