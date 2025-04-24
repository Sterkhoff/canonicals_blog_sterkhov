import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface arrowButtonProps {
	onClick: OnClick;
	isOpened: boolean;
}

export const ArrowButton = (props: arrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={props.onClick}
			onKeyDown={props.onClick}
			className={clsx(styles.container, {
				[styles.container_open]: props.isOpened,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, {
					[styles.arrow_open]: props.isOpened,
				})}
			/>
		</div>
	);
};
