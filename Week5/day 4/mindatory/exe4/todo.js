export class TodoList {
    tasks = [];

    add(task){
        this.tasks.push({name : task , done : false})
    }

    done(index){
        this.tasks[index].done = true
    }

    show(){
        this.tasks.forEach((t, i) => console.log(`${i + 1}. ${t.name} [${t.done ? '✓' : ' '}]`))
    }

}