import GUID from "./toolkit";

export default class TagEntity {
    constructor(id, name, color){
        this.ID = id || GUID();
        this.Name = name;
        this.Color = color;
    }
}