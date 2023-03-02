import { useState, useEffect } from 'react';
import APICall from './utils/APICall';
import CardWrapper from './components/CardWrapper/CardWrapper';
import Header from './components/Header/Header';
import HeaderButton from './components/HeaderButton/HeaderButton';
import SortButton from './components/SortButton/SortButton';
import './App.css';

export default function App() {

	const [cards, setCards] = useState([]);
	// const [sorted, setSorted] = useState(false);
	const [showOnlyFav, setShowOnlyFav] = useState(false);
	// const [showOnlyOne, setShowOnlyOne] = useState(false);
	// const [currentOneCard, setCurrentOneCard] = useState(0);

	useEffect(() => {
		Promise.all([APICall.getImages(), APICall.getFacts()])
			.then(([images, facts]) => {
				let newCards = [];
				for (let i = 0; i < 25; i++) {
					let card = {
						id: +[i] + 1,
						img: images[i],
						fact: facts[i],
						fav: false
					}
					newCards.push(card)
				}
				setCards(newCards);
			}).catch((err) => console.log(err))
	}, [])


	return (
		<div>
			<Header
				// handleShowAllClick={handleShowAllClick}
				>
				<SortButton
					// React don't see attribute as booleon and expect a string
					// that's why I add the "toString()" 
					// showingonecard={showOnlyOne.toString()}
					// showingfavcards={showOnlyFav.toString()}
					// onClick={handleSortClickButton}
				>
					Sort ⇓
				</SortButton>
				<HeaderButton
					// onClick={handleFavClickButton}
					>
					Favocats ♥
				</HeaderButton>
				<HeaderButton
					// onClick={handleShowOneClickButton}
					>
					There can be only one
				</HeaderButton>
			</Header>
			{cards.length !== 0 && <CardWrapper
				cards={cards}
				showOnlyFav={showOnlyFav}
			//handleFavClickCard={handleFavClickCard}
			/>}
		</div>
	);
}
