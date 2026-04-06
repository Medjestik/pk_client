import type { FC, FormEvent } from 'react';
import type { IRegistrationForm } from '../types/types';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from '../../../store/store';
import { useForm } from '../../../hooks/useForm';
import { useToast } from '../../../shared/components/ToastProvider/ui/ToastProvider';

import { Form } from '../../../shared/components/Form/ui/form';
import {
	FormField,
	FormInput,
	FormButtons,
} from '../../../shared/components/Form/components';
import { Button } from '../../../shared/components/Button/ui/button';
import { MultiSelect } from '../../../shared/components/Select/ui/multi-select';

import {
	initialRegistrationValues,
	validationSchema,
	shouldBlockSubmit,
} from '../lib/helpers';
import { getErrorMessage } from '../../../shared/lib/getErrorMessage';
import { courses } from '../../CoursePage/components/Course/lib';

import { registerUser } from '../../../store/user/actions';
import { closeRegistrationModal } from '../../../store/uiSlice';

type CourseOption = {
	id: string;
	name: string;
};

export const Registration: FC = () => {
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const { isLoading } = useSelector((state) => state.user);

	const [currentCourses, setCurrentCourses] = useState<CourseOption[]>([]);
	const { values, handleChange, errors } = useForm<IRegistrationForm>(
		initialRegistrationValues,
		validationSchema
	);

	const [isBlockSubmit, setIsBlockSubmit] = useState<boolean>(true);

	const handleChangeCourses = (selected: CourseOption[]) => {
		setCurrentCourses(selected);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!isBlockSubmit && currentCourses) {
			const registrationData = {
				email: values.email,
				first_name: values.firstName,
				last_name: values.lastName,
				middle_name: values.middleName,
				phone: values.phone,
				courses: currentCourses.map((c) => c.id),
			};

			try {
				await dispatch(registerUser(registrationData)).unwrap();
				showToast({
					title: 'Заявка на регистрацию успешно отправлена!',
					text: 'После одобрения вашей заявки администратором системы вы получите данные для входа на электронную почту.',
					type: 'success',
				});
				dispatch(closeRegistrationModal());
			} catch (err) {
				console.error(err);
				showToast({
					title: 'Ошибка при регистрации!',
					text: getErrorMessage(err),
					type: 'error',
				});
			}
		}
	};

	const activeCourses: CourseOption[] = courses
		.filter((course) => course.active)
		.map((course) => ({
			id: course.id,
			name: course.name,
		}));

	useEffect(() => {
		setIsBlockSubmit(shouldBlockSubmit(values, errors, currentCourses));
	}, [values, errors, currentCourses]);

	return (
		<Form
			name='form-registration'
			onSubmit={handleSubmit}
			title='Регистрация на учебном портале'
			subtitle='Зарегистрируйтесь, чтобы начать изучение курсов уже сейчас!'
			titleAlign='left'>
			<FormField
				title='Фамилия'
				fieldError={{
					text: errors.lastName || '',
					isShow: !!errors.lastName,
				}}>
				<FormInput
					name='lastName'
					placeholder='Ваша фамилия'
					value={values.lastName}
					onChange={handleChange}
				/>
			</FormField>
			<FormField
				title='Имя'
				fieldError={{
					text: errors.firstName || '',
					isShow: !!errors.firstName,
				}}>
				<FormInput
					name='firstName'
					placeholder='Ваше имя'
					value={values.firstName}
					onChange={handleChange}
				/>
			</FormField>
			<FormField
				title='Отчество'
				fieldError={{
					text: errors.middleName || '',
					isShow: !!errors.middleName,
				}}>
				<FormInput
					name='middleName'
					placeholder='Ваше отчество'
					value={values.middleName}
					onChange={handleChange}
				/>
			</FormField>
			<FormField title='Выберите курсы для изучения'>
				<MultiSelect<CourseOption>
					options={activeCourses}
					selectedOptions={currentCourses}
					onChange={handleChangeCourses}
				/>
			</FormField>
			<FormField
				title='Электронная почта'
				fieldError={{ text: errors.email || '', isShow: !!errors.email }}>
				<FormInput
					name='email'
					placeholder='Ваша электронная почта'
					value={values.email}
					onChange={handleChange}
				/>
			</FormField>
			<FormField
				title='Мобильный телефон'
				fieldError={{
					text: errors.phone || '',
					isShow: !!errors.phone,
				}}>
				<FormInput
					name='phone'
					placeholder='+ 7'
					value={values.phone}
					onChange={handleChange}
				/>
			</FormField>
			<FormButtons>
				<Button
					type='submit'
					text='Зарегистрироваться'
					color='blue'
					width='full'
					isBlock={isBlockSubmit || isLoading}></Button>
			</FormButtons>
		</Form>
	);
};
