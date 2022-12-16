import GUID from "./toolkit";

export default class GoalEntity {
    constructor(id,description, state, EndDate) {
        this.ID = id || GUID();
        this.Description = description;
        this.State = state || false;
        this.EndDate = EndDate || null;
    }
    setFinish() {
        if (!this.State) {
            this.State = true;
            this.EndDate = Date.now();
        }
    }
}