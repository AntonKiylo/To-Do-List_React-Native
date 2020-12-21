import React from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'

const TodoInput = ({ todo, setTodo, inputText, setInputText }) => {
  
  

  const addNewTodo = () => {
    if (inputText.trim()) {
      setTodo([
        ...todo,
        {
          text: inputText,
          id: new Date().getTime()
        }
      ])

      setInputText('')
    } else {
      alert('error')
    }
  }

  return (
    <View style={styles.todoInput}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder='Enter your todo'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={addNewTodo}
      >
        <Text style={styles.text}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  input: {
    flex: 1,
    marginRight: 12,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#457b9d',
    borderRadius: 8,
    paddingTop: 3,
    paddingBottom: 3,
    color: '#457b9d',
    fontSize: 18,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#457b9d',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  }
})

export default TodoInput