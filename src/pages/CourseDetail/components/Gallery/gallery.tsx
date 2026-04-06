import type { FC } from 'react';

import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import styles from './gallery.module.scss';
import 'keen-slider/keen-slider.min.css';

type ItemType =
	| 'content'
	| 'video'
	| 'task'
	| 'timeline'
	| 'panorama'
	| 'map'
	| string;

interface CarouselItem {
	type: ItemType;
	img: string;
	link?: string;
}

interface IGalleryProps {
	items: CarouselItem[];
	windowWidth: number;
}

export const Gallery: FC<IGalleryProps> = ({ items, windowWidth }) => {
	const [slidesPerView, setSlidesPerView] = useState(3);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesCount, setSlidesCount] = useState(0);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: {
			perView: slidesPerView,
			spacing: 16,
		},
		created(slider) {
			setSlidesCount(slider.track.details.slides.length);
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	useEffect(() => {
		if (windowWidth < 1023) setSlidesPerView(1);
		else if (windowWidth < 1599) setSlidesPerView(2);
		else setSlidesPerView(3);
	}, [windowWidth]);

	const renderTag = (tag: ItemType) => {
		switch (tag) {
			case 'content':
				return 'опорный конспект';
			case 'video':
				return 'видеолекция';
			case 'task':
				return 'практика';
			case 'timeline':
				return 'timeline';
			case 'panorama':
				return 'панорама 360';
			case 'map':
				return 'интерактивная карта';
			default:
				return tag;
		}
	};

	return (
		<div className={styles.gallery}>
			<div className={`keen-slider ${styles.slider}`} ref={sliderRef}>
				{items.map((item, i) => (
					<div className={`keen-slider__slide ${styles.slide}`} key={i}>
						<div className={styles.item}>
							<span
								className={`${styles.tag} ${styles[`tag_type_${item.type}`]}`}>
								{renderTag(item.type)}
							</span>

							<img className={styles.img} src={item.img} alt='screen' />
						</div>
					</div>
				))}
			</div>

			<div className={styles.dots}>
				{Array.from({ length: slidesCount }).map((_, idx) => (
					<button
						key={idx}
						className={`${styles.dot} ${
							currentSlide === idx ? styles.dotActive : ''
						}`}
						onClick={() => instanceRef.current?.moveToIdx(idx)}
					/>
				))}
			</div>
		</div>
	);
};
