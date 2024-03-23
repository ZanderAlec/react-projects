export class Project {
    constructor(title, columns) {
        this.title = title;
        this.columns = [];

        Object.defineProperties(this, {
            title: {
                enumerable: true,
                configurable: false,

                get: function () {
                    return title;
                },
                set: function (value) {

                    if (typeof value !== 'string')
                        throw Error("the value must be a string!");

                    title = value;
                }
            },

            columns: {
                enumerable: true,
                configurable: false,

                get: function () {
                    return columns;
                },

                set: function (array) {
                    if (Array.isArray(array)) {
                        columns = array;
                    }
                }
            }
        });
    }
    addColumn(title) {
        const newCol = new Column(title);

        if (!this.columns)
            return this.columns = [newCol];

        this.columns.push(newCol);
    }
    deleteColumn(id) {
        this.columns.splice(id, 1);
    }
}



export class Column {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
    addTask(title, priority, time, completed) {
        const newTask = new Task(title, priority, time, completed);
        this.tasks.push(newTask);
    }
    deleteTask(id) {
        this.tasks.splice(id, 1);
    }
}



export class Task {
    constructor(title, priority, deadline, completed) {        
        this.title = title;
        this.priority = priority;
        this.deadline = deadline;
        this.completed = completed;

        Object.defineProperties(this, {
            priority: {
                enumerable: true,
                configurable: false,

                get: () => { return priority; },
                set: (value) => {
                    if (typeof value !== "string")
                        throw Error("Invalid value");

                    priority = value;
                }
            },

            completed: {
                enumerable: true,
                configurable: false,

                get: () => { return completed; },
                set: (value) => {
                    if (typeof value !== "boolean")
                        throw Error("Must be a boolean");

                    completed = value;
                }
            }
        });
    }
}