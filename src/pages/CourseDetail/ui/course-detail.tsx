import type { FC } from 'react';

import { useDispatch, useSelector } from '../../../store/store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { courses } from '../../CoursePage/components/Course/lib';

import { Header } from '../components/Header/header';
import { Gallery } from '../components/Gallery/gallery';
import { CourseTag } from '../../CoursePage/components/Course/course-tags';
import { Button } from '../../../shared/components/Button/ui/button';
import { Modal } from '../../../shared/components/Modal/ui/modal';
import { Registration } from '../../Registration/ui/registration';

import {
	openRegistrationModal,
	closeRegistrationModal,
	getIsRegistrationModalOpen,
} from '../../../store/uiSlice';

import styles from '../styles/course-detail.module.scss';

interface Author {
	name: string;
	degree: string;
	img?: string;
}

interface Course {
	id: string;
	name: string;
	hours: number;
	img: string;
	tags: string[];
	authors: Author[];
	description: string;
	annotation: string;
	active: boolean;
	screens: any[];
}

interface CourseDetailProps {
	windowWidth: number;
}

const btnStyle = {
	margin: '16px 0 0 0',
	padding: '8px 24px',
	width: 'fit-content',
	height: '48px',
};

export const CourseDetail: FC<CourseDetailProps> = ({ windowWidth }) => {
	const dispatch = useDispatch();

	const isOpenRegistration = useSelector(getIsRegistrationModalOpen);

	const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
	const [isLoadingPage, setIsLoadingPage] = useState(true);

	const { courseId } = useParams<{ courseId: string }>();

	const openModal = () => {
		dispatch(openRegistrationModal());
	};

	const closeModal = () => {
		dispatch(closeRegistrationModal());
	};

	useEffect(() => {
		const course = courses.find((elem) => elem.id === courseId) || null;
		setCurrentCourse(course);
		setIsLoadingPage(false);

		return () => {
			setCurrentCourse(null);
		};
	}, [courseId]);

	if (isLoadingPage || !currentCourse) {
		return <div />;
	}

	return (
		<div className={styles.course}>
			<Header />
			<div className={styles.container}>
				<div className={styles.row}>
					<section className={styles.section}>
						<div className={styles.info}>
							<span className={styles.title}>Online-курс</span>
							<h2 className={styles.name}>«{currentCourse.name}»</h2>

							<div className={styles.tags}>
								<span className={styles.hours}>{currentCourse.hours} ч.</span>
								<CourseTag tags={currentCourse.tags} />
							</div>

							{currentCourse.active && (
								<Button
									text='Начать изучение курса'
									color='black'
									style={btnStyle}
									onClick={() => openModal()}
								/>
							)}
						</div>
					</section>

					<div className={styles.imgContainer}>
						<img
							className={styles.img}
							src={currentCourse.img}
							alt={currentCourse.id}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<section
						className={`${styles.section} ${styles.sectionAuthors} ${styles.sectionMarginRight}`}>
						<h4 className={styles.sectionTitle}>Авторы курса</h4>

						<ul className={styles.authors}>
							{currentCourse.authors.map((elem, i) => (
								<li
									className={`${styles.author} ${
										currentCourse.authors.length <= 2 ? styles.authorLarge : ''
									}`}
									key={i}>
									<div className={styles.authorImgContainer}>
										<img
											className={styles.authorImg}
											src={elem.img || ''}
											alt=''
										/>
									</div>

									<div className={styles.authorInfo}>
										<h6
											className={`${styles.authorName} ${
												currentCourse.authors.length <= 2
													? styles.authorNameLarge
													: ''
											}`}>
											{elem.name}
										</h6>

										<p
											className={`${styles.authorDegree} ${
												currentCourse.authors.length <= 2
													? styles.authorDegreeLarge
													: ''
											}`}>
											{elem.degree}
										</p>
									</div>
								</li>
							))}
						</ul>
					</section>

					<section className={`${styles.section} ${styles.sectionAnnotation}`}>
						<h4 className={styles.sectionTitle}>Аннотация</h4>

						<p className={styles.text}>{currentCourse.description}</p>
						<p className={styles.text}>{currentCourse.annotation}</p>
					</section>
				</div>

				<div className={styles.row}>
					<section className={styles.section}>
						<h4 className={styles.sectionTitle}>Примеры учебных материалов</h4>
						<Gallery items={currentCourse.screens} windowWidth={windowWidth} />
					</section>
				</div>
			</div>
			{isOpenRegistration && (
				<Modal isOpen={isOpenRegistration} onClose={closeModal}>
					<Registration />
				</Modal>
			)}
		</div>
	);
};
