class UserStory {
    private name: string;
    private description: string;
    private storyValues: number | undefined;
    constructor(name = "") {
        this.name = name;
        this.description = "";
        this.storyValues = undefined;
    }
    public setStoryValues(): void {
        this.storyValues = 0;
    }

    public setDescription(): void { }

    public getName(): string {
        return this.name;
    }

    public getStoryValues(): number | undefined {
        return this.storyValues;
    }

    public getDescription(): string {
        return `${this.description}`;
    }

    public toString(): string {
        return `${this.name}`;
    }
}

class StoryQueue {
    private stories: UserStory[];
    constructor() {
        this.stories = [];
    }
    // add to the array
    public addStory(): void {
        this.stories.push(new UserStory());

    }
    // get the next element in the array
    public nextStory(): UserStory | undefined {
        //guard statement
        if (this.stories.length === 0) {
            return this.stories.pop();
        } else {
            return undefined;
        }
    }
}
export { UserStory, StoryQueue };