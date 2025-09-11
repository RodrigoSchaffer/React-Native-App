import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TasksScreen = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    if (task) {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>

      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={addTask} color="#61764B">
        <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.tasksContainer}>
        {tasksList.length > 0 ? (
          tasksList.map((task, index) => (
            <Text key={index} style={styles.task}>
              - {task}
            </Text>
          ))
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E8EAED',
  },
  header: {
    fontSize: 24,
    marginTop: 50,
    marginBottom: 20,
    color: "#61764B",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
  },
  tasksContainer: {
    marginTop: 20,
  },
  task: {
    fontSize: 16,
    color: "#61764B",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  button: {
    backgroundColor: '#61764B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20, // Space between the buttons
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TasksScreen;
