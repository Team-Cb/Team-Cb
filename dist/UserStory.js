"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryQueue = exports.UserStory = void 0;
class UserStory {
    constructor(name = "") {
        this.name = name;
        this.description = "";
        this.storyValues = undefined;
    }
    setStoryValues() {
        this.storyValues = 0;
    }
    setDescription() { }
    getStoryValues() {
        return this.storyValues;
    }
    getDescription() {
        return `${this.description}`;
    }
    toString() {
        return `${this.name}`;
    }
}
exports.UserStory = UserStory;
class StoryQueue {
    constructor() {
        this.stories = [];
    }
    // add to the array
    addStory() {
        this.stories.push(new UserStory());
    }
    // get the next element in the array
    nextStory() {
        //guard statement
        if (this.stories.length === 0) {
            return this.stories.pop();
        }
        else {
            return undefined;
        }
    }
}
exports.StoryQueue = StoryQueue;
