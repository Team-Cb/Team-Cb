import React from "react"
import "./estimation.css"
import { UserStoryQueue, UserStory } from "./UserStory"
import { NavLink } from "react-router-dom"

let storyQueue: UserStoryQueue;
storyQueue = new UserStoryQueue();

const Estimation = () => {
    return (<>
        <header>
            <h1>Got Scrum?</h1>
            <h5><strong>Team CB's Room<br />ID: 12345</strong></h5>
            <NavLink to={"/"}>Leave</NavLink>
        </header>
        <CurrentQueue />
        <StQueue />
        <Estimations />
    </>)
}
const CurrentQueue = () => {
    return (
        <section id="currentQueue">
            <div>
                <h3>Now estimating:</h3>
                <h4>Current User Story</h4>
            </div>
            <h4>AVG</h4>
            <ul>
                <EstimationButton value={0} />
                <EstimationButton value={2} />
                <EstimationButton value={3} />
                <EstimationButton value={4} />
                <EstimationButton value={8} />
                <EstimationButton value={13} />
                <EstimationButton value={20} />
                <EstimationButton value={40} />
                <EstimationButton value={100} />
            </ul>
        </section>
    )
}
const StQueue = () => {

    return (
        <aside id="storyQueue">
            <h2>Story Queue</h2>
            <h6><i>Up next:</i></h6>
            <div></div>
            <ol>
                <Story name="User Story #1" />
                <li></li>
                <Story name="User Story #2" />
                <Story name="User Story #3" />
                <Story name="User Story #4" />
            </ol>
            <div></div>
        </aside>
    )
}
const Story = (props: { name: string }) => {
    let story: UserStory;
    story = new UserStory(props.name);
    storyQueue.addStory()
    return (
        <li>
            {story.toString()}
        </li>
    )

}
const Estimations = () => {
    return (
        <aside id="estimations">
            <h2>Estimations</h2>
            <ul>
                <li>US: 20</li>
                <li>US: 17</li>
                <li>US: 13</li>
                <li>US: 10</li>
                <li>US: 5</li>
            </ul>
        </aside>
    )
}
const EstimationButton = (props: { value: number }) => {
    const [currentValue, setNewValue] = React.useState(props.value);
    function setValue(newValue: number) {
        setNewValue(newValue);
    }
    function getValue() {
        return currentValue;
    }
    return (
        <li><button type="button">{getValue()}</button></li>
    )
}
export default Estimation;