import { FC, useCallback, useState } from "react"
import { questions } from "./data"
import Game from "./Game"
import Result from "./Result"
import "./styles.scss"

const App: FC = () => {
	const [step, setStep] = useState(0)
	const [validQuestions, setValidQuestions] = useState(0)
	const question = questions[step]
	const onClickVariant = useCallback(
		(index: number) => {
			setStep(prev => prev + 1)
			if (index === question.correct) {
				setValidQuestions(prev => prev + 1)
			}
		},
		// eslint-disable-next-line
		[validQuestions, step]
	)

	const onClickResume = useCallback(() => {
		setStep(0)
		setValidQuestions(0)
	}, [])

	return (
		<div className='App'>
			{step !== questions.length ? (
				<Game step={step} question={question} onClick={onClickVariant} />
			) : (
				<Result
					validQuestions={validQuestions}
					totalQuestions={questions.length}
					onClickResume={onClickResume}
				/>
			)}
		</div>
	)
}

export default App
