import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [stylesState, setStylesState] =
		useState<ArticleStateType>(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': stylesState.fontFamilyOption.value,
					'--font-size': stylesState.fontSizeOption.value,
					'--font-color': stylesState.fontColor.value,
					'--container-width': stylesState.contentWidth.value,
					'--bg-color': stylesState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onChangesRestore={() => setStylesState(defaultArticleState)}
				onChangesSubmit={(x) => setStylesState(x)}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
