import GUID from "./toolkit";

export default class Task {
    constructor(id, name, CreationDate, description){
        this.ID = id || GUID();
        this.Name = name;
        this.CreationDate = CreationDate || Date.now();
        this.Description = description;
        this.Goals = [];
        this.Tags = [];
    }
    
    addGoal (goals) {
        this.Goals = this.Goals.push(goals);
    }

    addTag (tag) {
        this.Tags = this.Tags.push(tag);
    }
}

