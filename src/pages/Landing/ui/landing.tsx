import type { FC } from 'react';

import { useDispatch, useSelector } from '../../../store/store';
import { useEffect } from 'react';

import { Main } from '../components/Main/main';
import { Description } from '../components/Description/description';
import { Advantages } from '../components/Advantages/advantages';
import { Programs } from '../components/Programs/programs';
import { Streams } from '../components/Streams/streams';
import { Company } from '../components/Company/company';
import { Stages } from '../components/Stages/stages';
import { FAQ } from '../components/FAQ/faq';
import { Feedback } from '../components/Feedback/feedback';
import { Footer } from '../components/Footer/footer';

import { Preloader } from '../../../shared/components/Preloader/ui/preloader';

import {
	getProgramsAction,
	getStreamsAction,
} from '../../../store/programs/actions';

import styles from '../styles/landing.module.scss';

export const Landing: FC = () => {
	const dispatch = useDispatch();
	const { isLoadingPrograms } = useSelector((state) => state.programs);

	useEffect(() => {
		dispatch(getProgramsAction());
		dispatch(getStreamsAction());
	}, [dispatch]);

	if (isLoadingPrograms) {
		return <Preloader />;
	}

	return (
		<div className={styles.landing}>
			<Main />
			<Description />
			<Advantages />
			<Programs />
			<Streams />
			<Company />
			<Stages />
			<FAQ />
			<Feedback />
			<Footer />
		</div>
	);
};
