import type { FC } from 'react';

import styles from './course-tags.module.scss';

interface ICourseTags {
	tags: string[];
}

export const CourseTag: FC<ICourseTags> = ({ tags }) => {
	const renderTag = (tag: string) => {
		switch (tag) {
			case 'history':
				return 'история';

			case 'transport':
				return 'транспорт';

			case 'technology':
				return 'технологии';

			case 'management':
				return 'менеджмент';

			case 'safety':
				return 'безопасность';

			case 'economy':
				return 'экономика';

			case 'analytics':
				return 'аналитика';

			case 'business':
				return 'бизнес';

			default:
				return tag;
		}
	};

	return tags.map((tag, i) => (
		<li key={i} className={`${styles.tag} ${styles[`tag_type_${tag}`]}`}>
			{renderTag(tag)}
		</li>
	));
};
