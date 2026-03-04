import type { FC, CSSProperties } from 'react';
import type { IProgram } from '../../../../store/programs/types';

import { useState } from 'react';
import { useDispatch, useSelector } from '../../../../store/store';

import { Button } from '../../../../shared/components/Button/ui/button';
import { Modal } from '../../../../shared/components/Modal/ui/modal';
import { Detail } from '../../../../widgets/Detail/ui/detail';
import { SendProgramForm } from '../../../../features/Application/ui/send-program-form';

import { setCurrentProgram } from '../../../../store/programs/reducer';

import styles from './programs.module.scss';

const btnStyle: CSSProperties = {
	margin: '24px 0 0 auto',
	width: '170px',
};

export const Programs: FC = () => {
	const dispatch = useDispatch();
	const { programs } = useSelector((state) => state.programs);

	const STEP = 6;
	const [visibleCount, setVisibleCount] = useState<number>(STEP);

	const [isOpenProgramForm, setIsOpenProgramForm] = useState<boolean>(false);
	const [isOpenDetailProgram, setIsOpenDetailProgram] =
		useState<boolean>(false);

	const handleShowMore = () => {
		setVisibleCount((prev) => prev + STEP);
	};

	const handleOpenDetail = (program: IProgram) => {
		dispatch(setCurrentProgram(program));
		setIsOpenDetailProgram(true);
	};

	const handleCloseDetail = () => {
		dispatch(setCurrentProgram(null));
		setIsOpenDetailProgram(false);
	};

	const handleOpenModal = () => {
		setIsOpenDetailProgram(false);
		setIsOpenProgramForm(true);
	};

	const handleCloseModal = () => {
		dispatch(setCurrentProgram(null));
		setIsOpenProgramForm(false);
	};

	const visiblePrograms = programs.slice(0, visibleCount);
	const hasMore = visibleCount < programs.length;

	return (
		<section id='programs' className={styles.programs}>
			<h2 className={styles.title}>Каталог программ</h2>
			<p className={styles.subtitle}>
				Выберите программу по формату, направлению и стоимости.
			</p>

			<div className={styles.container}>
				<ul className={styles.list}>
					{visiblePrograms.map((elem) => (
						<li className={styles.item} key={elem.id}>
							<div className={styles.item__tag}>{elem.direction_name}</div>

							<h4 className={styles.item__title}>{elem.name}</h4>

							<p className={styles.item__text}>{elem.lead}</p>

							<div className={styles.item__info}>
								<span className={styles.item__hours}>
									{elem.hours_volume} ак. час.
								</span>
								<span className={styles.item__form}>
									{elem.learning_format}
								</span>
							</div>

							<Button
								text='Подробнее'
								color='blue'
								style={btnStyle}
								onClick={() => handleOpenDetail(elem)}
							/>
						</li>
					))}
				</ul>

				{hasMore && (
					<button
						type='button'
						className={styles.button}
						onClick={handleShowMore}>
						Показать ещё {Math.min(STEP, programs.length - visibleCount)}
					</button>
				)}
			</div>
			{isOpenDetailProgram && (
				<Detail
					isOpen={isOpenDetailProgram}
					onClose={handleCloseDetail}
					onOpen={handleOpenModal}
				/>
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
	);
};
