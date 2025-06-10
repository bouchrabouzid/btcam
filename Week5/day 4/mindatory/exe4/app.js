import { TodoList } from "./todo.js";

const todo = new TodoList()

todo.add('learn JS')
todo.add('watch dr Stone')

todo.done(1)

todo.show()