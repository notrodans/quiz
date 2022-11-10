import { FC } from "react"
import { IQuestion, questions } from "./data"

interface IGame {
	step: number
	question: IQuestion
	onClick: (index: number) => void
}

const Game: FC<IGame> = ({ step, question, onClick }) => {
	const percentage = Math.round((step / questions.length) * 100) + "%"

	return (
		<>
			<div className='progress'>
				<div style={{ width: percentage }} className='progress__inner'>
					<span>{percentage}</span>
				</div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question &&
					question.variants.map((text, idx) => (
						<li key={idx}>
							<button onClick={() => onClick(idx)}>{text}</button>
						</li>
					))}
			</ul>
		</>
	)
}

export default Game
