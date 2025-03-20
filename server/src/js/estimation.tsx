import React from "react"
import axios from "axios"
import "../css/estimation.css"
import { UserStoryQueue, UserStory } from "./UserStory"
import { NavLink } from "react-router-dom"
import { Card, Cards } from "./Cards"
const storyQueue: UserStoryQueue = new UserStoryQueue();
const estimations: UserStoryQueue = new UserStoryQueue();
const cards: Cards = new Cards();
let currentStory: UserStory | undefined;
const URL = "http://localhost/api/";

storyQueue.fetchStories();
cards.fetchCards();
estimations.fetchStories();
let backlog = new UserStoryQueue();
backlog.addStory(new UserStory("US", 1))
backlog.addStory(new UserStory("US", 2))
backlog.addStory(new UserStory("US", 4))
backlog.addStory(new UserStory("US", 8))
backlog.addStory(new UserStory("US", 13))
backlog.addStory(new UserStory("US", 20))
backlog.addStory(new UserStory("US", 40))
backlog.addStory(new UserStory("US", 100))

const Estimation = () => {
    return (<>
        <header>
            <h1>Got Scrum?</h1>
            <h5><strong>Team CB's Room<br />ID: 12345</strong></h5>
            <NavLink to={"/"}>Leave</NavLink>
        </header>
        <CurrentQueue storyQueue={storyQueue} cards={cards} />
        <StQueue storyQueue={storyQueue} />
        <Estimations estimations={estimations}/>
    </>)
}
const CurrentQueue = (props: { storyQueue: UserStoryQueue; cards: Cards }) => {
    const [currentStoryQueue, setStoryQueue] = React.useState(props.storyQueue);
    const [currentCards, setCards] = React.useState(props.cards);
    axios.get(URL + "storyQueue").then((response) => {
        setStoryQueue(response.data.stories);
    })
    axios.get(URL + "cards").then((response) => {
        setCards(response.data);
    })
    
    currentStory = storyQueue.findAt(0);
    let avg: number;
    let total = 0;
    if (backlog.getLength() !== 0) {
        avg = total / backlog.getLength();
    } else avg = 0;
    let cardsList = cards.getCards();
    cardsList.forEach((card) => {

    })
    const ListCards = () => {
        return (
            <>
                {cardsList.map((card, i) => (
                    <EstimationButton key={i} card={card} />
                ))}
            </>
        );
    }
    return (
        <section id="currentQueue">
            <div>
                <h3>Now estimating:</h3>
                <h4><Story story={currentStory} list={false} /></h4>
            </div>
            <h4>AVG</h4>
            <ul>
                <ListCards />
            </ul>
        </section>
    )

}
const StQueue = (props: { storyQueue: UserStoryQueue }) => {
    const [currentStoryQueue, setStoryQueue] = React.useState(props.storyQueue);
    axios.get(URL + "storyQueue").then((response) => {
        setStoryQueue(response.data.stories);
    })
    const List = () => {
        let stories = []
        for (let index = 1; index < storyQueue.getLength() - 1; index++) {
            if (index == 2) {
                stories.push(<li key={storyQueue.getLength() + 1}></li>)
            }
            stories.push(<Story key={index} story={storyQueue.findAt(index)} list={true} />)
        }
        return stories
    }
    return (
        <aside id="storyQueue">
            <h2>Story Queue</h2>
            <h6><i>Up next:</i></h6>
            <div></div>
            <ol>
                <List />
            </ol>
            <div></div>
        </aside>
    )
}
const Story = (props: { story: UserStory | undefined; list: boolean }) => {
    let story: UserStory;
    if (props.story !== undefined) {
        story = new UserStory(props.story.toString());
        storyQueue.addStory(story)
        if (props.list) {
            return (
                <li>
                    {story.toString()}
                </li>
            )
        } else {
            return story.toString()
        }
    }

}

const Estimations = (props: {estimations: UserStoryQueue}) => {
    const Estimation = (props: { userStory: UserStory | undefined }) => {
        if (props.userStory !== undefined && props.userStory.getStoryValues() !== undefined) {
            return (
                <li>{props.userStory.toString()}: <br />{props.userStory.getStoryValues()}</li>
            )
        }
    }
    const [currentEstimations, setEstimations] = React.useState(props.estimations);
    axios.get(URL + "estimations").then((response) => {
        setEstimations(response.data.stories);
    })
    const List = () => {
        let stories = []
        for (let index = 0; index < backlog.getLength(); index++) {
            stories.push(<Estimation key={index} userStory={backlog.findAt(index)} />)
        }
        return stories
    }
    return (
        <aside id="estimations">
            <h2>Estimations</h2>
            <ul>
                <List />
            </ul>
        </aside>
    )
}
const EstimationButton = (props: { card: Card }) => {
    return (
        <li><button type="submit">{props.card.getValue()}</button></li>
    )
}
export default Estimation;