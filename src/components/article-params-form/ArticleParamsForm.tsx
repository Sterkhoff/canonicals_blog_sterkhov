import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import {useRef, useState} from 'react';
import { Select } from 'components/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import clsx from 'clsx';
import {useOutsideClickClose} from "components/select/hooks/useOutsideClickClose";

type ArticleParamsFormProps = {
	onChangesSubmit: (articleState: ArticleStateType) => void;
	onChangesRestore: () => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [optionsState, setOptionsState] =
		useState<ArticleStateType>(defaultArticleState);

	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<ArrowButton onClick={() => setIsOpen(!isOpen)} isOpened={isOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<Select
						title={'ШРИФТ'}
						selected={optionsState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(x) =>
							setOptionsState({ ...optionsState, fontFamilyOption: x })
						}
					/>
					<RadioGroup
						name={'fontSize'}
						title={'РАЗМЕР ШРИФТА'}
						selected={optionsState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(x) =>
							setOptionsState({ ...optionsState, fontSizeOption: x })
						}
					/>
					<Select
						title={'ЦВЕТ ШРИФТА'}
						selected={optionsState.fontColor}
						options={fontColors}
						onChange={(x) => setOptionsState({ ...optionsState, fontColor: x })}
					/>
					<Separator />
					<Select
						title={'ЦВЕТ ФОНА'}
						selected={optionsState.backgroundColor}
						options={backgroundColors}
						onChange={(x) =>
							setOptionsState({ ...optionsState, backgroundColor: x })
						}
					/>
					<Select
						title={'ШИРИНА КОНТЕНТА'}
						selected={optionsState.contentWidth}
						options={contentWidthArr}
						onChange={(x) =>
							setOptionsState({ ...optionsState, contentWidth: x })
						}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							onClick={() => {
								props.onChangesRestore();
								setOptionsState(defaultArticleState);
							}}
							type='button'
						/>
						<Button
							onClick={() => props.onChangesSubmit(optionsState)}
							title='Применить'
							type='button'
						/>
					</div>
				</form>
			</aside>
		</div>
	);
};
