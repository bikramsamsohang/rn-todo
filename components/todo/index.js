import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Todo extends Component {
  render() {
    return (
      <View style={styles.containerBlue}>
        <Text>{this.props.job.task}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    containerBlue: {
        padding: 5,
        marginVertical: 2,
        backgroundColor: 'lightblue'
    }
});

export default Todo;
