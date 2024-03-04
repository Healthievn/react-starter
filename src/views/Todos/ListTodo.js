import React from "react";
import AddTodo from "./AddTodo";
class ListTodo extends React.Component {
    state = {
        ListTodo: [
            { id: 1, title: 'Doing homework' },
            { id: 2, title: 'Making video' },
            { id: 3, title: 'Fixing bugs' },
        ]
    }
    addNewTodo = (todo) => {
        this.setState({
            ListTodo: [...this.state.ListTodo, todo],
            // ListTodo: currentListTodo

        })

    }

    handledel = (todo) => {
        let currentTodo = this.state.ListTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            ListTodo: currentTodo
        })

    }

    render() {
        let { ListTodo } = this.state;
        return (

            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {ListTodo && ListTodo.length > 0 &&
                        ListTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button>edit</button>
                                    <button
                                        onClick={() => this.handledel(item)}
                                    >del</button>

                                </div>

                            )
                        })
                    }



                </div>
            </div>
        )
    }

}
export default ListTodo;