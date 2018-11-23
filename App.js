/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Button } from 'react-native';

//components
import TodoScreen from './components/todoscreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSpinner: true
        };
    }

    dataloaded = ()=> {
        this.setState({
            showSpinner: false
        })
    }

    showContent = ()=> {
        if(this.state.showSpinner){
            return(
                <React.Fragment>
                   <ActivityIndicator size={100} />
                   <Text>Loading Todos</Text>
                </React.Fragment>
            );
        }       
    }
    render() {
        return (
            <View style={styles.container}>    
                <View style={styles.rowView}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Add Task</Text>
                    </TouchableOpacity>            
                    <Text style={styles.welcome}>Todo List</Text>
                </View>    
                <View>
                    {this.showContent()}
                    <ScrollView style={styles.todoList}>    
                        <TodoScreen dataloaded={this.dataloaded} />    
                    </ScrollView>              
                </View>                            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#F5FCFF',
        marginHorizontal: 20,
        flexDirection: 'column'
    },
    welcome: {
        fontSize: 40,
        // textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    todoList: {
        flexDirection: 'column'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      }
});
