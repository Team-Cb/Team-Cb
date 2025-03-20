"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
require("../css/estimation.css");
const UserStory_1 = require("./UserStory");
const react_router_dom_1 = require("react-router-dom");
const Cards_1 = require("./Cards");
const storyQueue = new UserStory_1.UserStoryQueue();
const estimations = new UserStory_1.UserStoryQueue();
const cards = new Cards_1.Cards();
let currentStory;
const URL = "http://localhost:8080/api/";
storyQueue.fetchStories();
cards.fetchCards();
estimations.fetchStories();
let backlog = new UserStory_1.UserStoryQueue();
backlog.addStory(new UserStory_1.UserStory("US", 1));
backlog.addStory(new UserStory_1.UserStory("US", 2));
backlog.addStory(new UserStory_1.UserStory("US", 4));
backlog.addStory(new UserStory_1.UserStory("US", 8));
backlog.addStory(new UserStory_1.UserStory("US", 13));
backlog.addStory(new UserStory_1.UserStory("US", 20));
backlog.addStory(new UserStory_1.UserStory("US", 40));
backlog.addStory(new UserStory_1.UserStory("US", 100));
const Estimation = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Got Scrum?" }), (0, jsx_runtime_1.jsx)("h5", { children: (0, jsx_runtime_1.jsxs)("strong", { children: ["Team CB's Room", (0, jsx_runtime_1.jsx)("br", {}), "ID: 12345"] }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/", children: "Leave" })] }), (0, jsx_runtime_1.jsx)(CurrentQueue, { storyQueue: storyQueue, cards: cards }), (0, jsx_runtime_1.jsx)(StQueue, { storyQueue: storyQueue }), (0, jsx_runtime_1.jsx)(Estimations, { estimations: estimations })] }));
};
const CurrentQueue = (props) => {
    const [currentStoryQueue, setStoryQueue] = react_1.default.useState(props.storyQueue);
    const [currentCards, setCards] = react_1.default.useState(props.cards);
    axios_1.default.get(URL + "storyQueue").then((response) => {
        setStoryQueue(response.data.stories);
    });
    axios_1.default.get(URL + "cards").then((response) => {
        setCards(response.data);
    });
    currentStory = storyQueue.findAt(0);
    let avg;
    let total = 0;
    if (backlog.getLength() !== 0) {
        avg = total / backlog.getLength();
    }
    else
        avg = 0;
    let cardsList = cards.getCards();
    cardsList.forEach((card) => {
    });
    const ListCards = () => {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: cardsList.map((card, i) => ((0, jsx_runtime_1.jsx)(EstimationButton, { card: card }, i))) }));
    };
    return ((0, jsx_runtime_1.jsxs)("section", { id: "currentQueue", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Now estimating:" }), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)(Story, { story: currentStory, list: false }) })] }), (0, jsx_runtime_1.jsx)("h4", { children: "AVG" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(ListCards, {}) })] }));
};
const StQueue = (props) => {
    const [currentStoryQueue, setStoryQueue] = react_1.default.useState(props.storyQueue);
    axios_1.default.get(URL + "storyQueue").then((response) => {
        setStoryQueue(response.data.stories);
    });
    const List = () => {
        let stories = [];
        for (let index = 1; index < storyQueue.getLength() - 1; index++) {
            if (index == 2) {
                stories.push((0, jsx_runtime_1.jsx)("li", {}, storyQueue.getLength() + 1));
            }
            stories.push((0, jsx_runtime_1.jsx)(Story, { story: storyQueue.findAt(index), list: true }, index));
        }
        return stories;
    };
    return ((0, jsx_runtime_1.jsxs)("aside", { id: "storyQueue", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Story Queue" }), (0, jsx_runtime_1.jsx)("h6", { children: (0, jsx_runtime_1.jsx)("i", { children: "Up next:" }) }), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("ol", { children: (0, jsx_runtime_1.jsx)(List, {}) }), (0, jsx_runtime_1.jsx)("div", {})] }));
};
const Story = (props) => {
    let story;
    if (props.story !== undefined) {
        story = new UserStory_1.UserStory(props.story.toString());
        storyQueue.addStory(story);
        if (props.list) {
            return ((0, jsx_runtime_1.jsx)("li", { children: story.toString() }));
        }
        else {
            return story.toString();
        }
    }
};
const Estimations = (props) => {
    const Estimation = (props) => {
        if (props.userStory !== undefined && props.userStory.getStoryValues() !== undefined) {
            return ((0, jsx_runtime_1.jsxs)("li", { children: [props.userStory.toString(), ": ", (0, jsx_runtime_1.jsx)("br", {}), props.userStory.getStoryValues()] }));
        }
    };
    const [currentEstimations, setEstimations] = react_1.default.useState(props.estimations);
    axios_1.default.get(URL + "estimations").then((response) => {
        setEstimations(response.data.stories);
    });
    const List = () => {
        let stories = [];
        for (let index = 0; index < backlog.getLength(); index++) {
            stories.push((0, jsx_runtime_1.jsx)(Estimation, { userStory: backlog.findAt(index) }, index));
        }
        return stories;
    };
    return ((0, jsx_runtime_1.jsxs)("aside", { id: "estimations", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Estimations" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(List, {}) })] }));
};
const EstimationButton = (props) => {
    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { type: "submit", children: props.card.getValue() }) }));
};
exports.default = Estimation;
//# sourceMappingURL=estimation.js.map