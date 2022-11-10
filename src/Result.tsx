import { FC } from "react"

interface IResult {
	validQuestions: number
	totalQuestions: number
	onClickResume: () => void
}

const Result: FC<IResult> = ({ validQuestions, totalQuestions, onClickResume }) => {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt={"icon"} />
			<h2>
				Вы отгадали {validQuestions} ответа из {totalQuestions}
			</h2>
			<button type={"button"} onClick={onClickResume}>
				Попробовать снова
			</button>
		</div>
	)
}

export default Result
