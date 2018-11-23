import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

//Services
import * as TodoService from '../../services/todoService';

//components
import Todo from '../todo';

class TodoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        TodoService.fetchTodos('http://my-json-server.typicode.com/bikramsamsohang/todos/tasks')
        .then(res => {
            this.setState({
                todos: res.data
            });
            this.props.dataloaded();
        });
    }

    render() {
        return (
        <ScrollView>         
            {
                this.state.todos.map((todo) => (
                    <Todo key={todo.id} job={todo} />
                ))
            }
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({});

export default TodoScreen;
