
export class Todo {

    constructor ( homeWork ) {

        this.homeWork = homeWork;

        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
        
    }
}