import type { FC } from 'react';
import type { IAccordionItemProps } from '../interface/interface';

import { useState, useRef } from 'react';

import styles from '../styles/accordion.module.scss';

export const AccordionItem: FC<IAccordionItemProps> = ({ item }) => {
	const mainRef = useRef<HTMLDivElement>(null);
	const childrenRef = useRef<HTMLDivElement>(null);

	const [isOpenAccordion, setIsOpenAccordion] = useState<boolean>(false);
	const [height, setHeight] = useState<string>('0px');

	const handleToggleAccordion = () => {
		setIsOpenAccordion((prevState) => !prevState);

		if (childrenRef.current) {
			setHeight(
				isOpenAccordion ? '0px' : `${childrenRef.current.scrollHeight}px`
			);
		}
	};

	return (
		<li
			className={`${styles.accordion__item} ${
				isOpenAccordion ? styles.accordion__item_state_open : ''
			}`}>
			<div
				ref={mainRef}
				className={styles.accordion__main}
				onClick={handleToggleAccordion}>
				<h4 className={styles.accordion__title}>{item.title}</h4>
				<div className={styles.accordion__icon}></div>
			</div>

			<div
				style={{ maxHeight: height }}
				ref={childrenRef}
				className={styles.accordion__children}>
				<p className={styles.accordion__text}>{item.content}</p>
			</div>
		</li>
	);
};
