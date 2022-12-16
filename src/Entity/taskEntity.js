import GUID from "./toolkit";

export default class Task {
    constructor(id, name, CreationDate, description, goals, tags){
        this.ID = id || GUID();
        this.Name = name;
        this.CreationDate = CreationDate || Date.now();
        this.Description = description;
        this.Goals = goals || [];
        this.Tags = tags || [];
    }
}

