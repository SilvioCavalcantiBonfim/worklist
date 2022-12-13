import GUID from "./toolkit";

export default class GoalEntity {
    constructor(id,description, state, enddate) {
        this.ID = id || GUID();
        this.Description = description;
        this.State = state || false;
        this.endDate = enddate || null;
    }
    setFinish() {
        if (!this.State) {
            this.State = true;
            this.endDate = Date.now();
        }
    }
}