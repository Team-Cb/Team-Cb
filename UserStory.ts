class UserStory {
    private name: string;
    private description: string;
    private storyValues: number;
    
    constructor(name: string) {
        this.name = name;
    }
    public setStoryValues(): void {
        this.storyValues = 0;
    }

    public setDescription(): void { }

    public getStoryValues(): number {
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
        this.stories.push(this.stories[]);

    }
    // get the next story in the array
    public nextStory(): UserStory | undefined {
        return this.stories.shift();
    }
}
export {UserStory, StoryQueue};