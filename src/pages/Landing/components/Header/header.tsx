import type { FC } from 'react';

import { useState } from 'react';

import { Link } from 'react-scroll';

import { Button } from '../../../../shared/components/Button/ui/button';
import { Modal } from '../../../../shared/components/Modal/ui/modal';
import { SendApplicationForm } from '../../../../features/Application/ui/send-application-form';

import styles from './header.module.scss';

export const Header: FC = () => {
	const [isOpenApplicationForm, setIsOpenApplicationForm] =
		useState<boolean>(false);

	return (
		<div className={styles.header}>
			<div className={styles.logo}></div>
			<nav className={styles.nav}>
				<ul className={styles.nav__list}>
					<Link
						className={styles.nav__item}
						to='description'
						smooth={true}
						offset={0}
						duration={500}
						spy={true}>
						О ДПО
					</Link>
					<Link
						className={styles.nav__item}
						to='advantages'
						smooth={true}
						offset={0}
						duration={1000}
						spy={true}>
						Возможности
					</Link>
					<Link
						className={styles.nav__item}
						to='programs'
						smooth={true}
						offset={0}
						duration={1500}
						spy={true}>
						Программы
					</Link>
					<Link
						className={styles.nav__item}
						to='stages'
						smooth={true}
						offset={0}
						duration={2000}
						spy={true}>
						Этапы обучения
					</Link>
					<Link
						className={styles.nav__item}
						to='faq'
						smooth={true}
						offset={0}
						duration={2500}
						spy={true}>
						Частые вопросы
					</Link>
				</ul>
			</nav>
			<Button
				text='Оставить заявку'
				color='blue'
				onClick={() => setIsOpenApplicationForm(true)}
			/>
			{isOpenApplicationForm && (
				<Modal
					isOpen={isOpenApplicationForm}
					onClose={() => setIsOpenApplicationForm(false)}
					title='Отправить заявку'
					description='Специалист отдела повышения квалификации свяжется с вами'>
					<SendApplicationForm
						onSubmit={() => setIsOpenApplicationForm(false)}
					/>
				</Modal>
			)}
		</div>
	);
};
