import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Card from './Card';

const cardDateCorrect = {
    fav: false,
    id: "1",
    img: "https://25.media.tumblr.com/Jjkybd3nSa0itc50DuH5vXat_500.jpg",
    fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
}

test('Card display correctly', async() => {
    render(<Card card={cardDateCorrect}/>);

    const card = screen.getByRole('article', {name: 'card'})
    expect(card).toBeInTheDocument()
    // check it has an id
    expect(card).toHaveAttribute('id', cardDateCorrect.id);
    // check it has favorite status
    expect(card.dataset.fav).toBe('false');

    // check it has an image
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', cardDateCorrect.img);
    expect(image).toHaveAttribute('alt', 'this is a cat');

    // check it has a paragraph
    const catFact = screen.getByText(cardDateCorrect.fact);
    expect(catFact).toBeInTheDocument();
})
test('Card like-function is working correctly', async() => {
    const user = userEvent.setup();
    render(<Card card={cardDateCorrect}/>);

    const card = screen.getByRole('article', {name: 'card'})
    expect(card).toBeInTheDocument()
    // check the favorite status is false
    expect(card.dataset.fav).toBe('false');

    // check that is display none (have 'greyHeartHover' class)
    const like = screen.getByText('❤');
    expect(like.classList.contains('greyHeartHover')).toBe(true);

    // check when hover it's displaying gray
    await user.hover(card);
    //const likeHover = screen.getByText('❤');
    //expect(likeHover).toHaveStyle('color: hsl(0, 0%, 93%)');
    await user.unhover(card);

    // click on card and check it's displaying red
    await user.click(card);
    //const likeTrue = screen.getByText('❤');
    //expect(likeTrue).toHaveStyle('color: hsl(351, 100%, 45%)');

    // click on card and check it's displaying none
    await user.click(card);
    //const likeTrue = screen.getByText('❤');
    //expect(likeTrue).toHaveStyle('display: none');
    
    const paragraph = screen.getByText(cardDateCorrect.fact);
    // click on paragraph and check it's displaying red
    await user.click(paragraph);
    //expect(paragraph).toHaveStyle('color: hsl(351, 100%, 45%)');

    // click on paragraph and check it's displaying none
    await user.click(paragraph);
    //expect(paragraph).toHaveStyle('display: none');

    const image = screen.getByRole('img');
    // click on image and check it's displaying red
    await user.click(image);
    //expect(image).toHaveStyle('color: hsl(351, 100%, 45%)');

    // click on image and check it's displaying none
    await user.click(image);
    //expect(image).toHaveStyle('display: none');
})