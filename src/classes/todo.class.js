
export class Todo {

    static fromJson ({id, homeWork, completed, created}) {

        const tempTodo = new Todo( homeWork );

        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.created = created;

        return tempTodo;
    }

    constructor ( homeWork ) {

        this.homeWork = homeWork;

        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
        
    }
}