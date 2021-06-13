import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TasksLists from './TasksList'
import TaskForm from './TaskForm'
import CountersContainer from './CountersContainer'
import FloatingButton from '../_Shared/FloatingButton'



function TasksContainer(props){
    const [tasks, setTasks] = useState([
        {id: new Date().getTime(), title: "Nouvelle tâches", completed: false}
    ]);
    const [isFormOpened, setIsFormOpened] = useState(false)

    const onAddTask = (title) => {
        const newTask = {id: new Date().getTime(), title: title, completed: false}
        setTasks([newTask, ...tasks])
    }

    const onChangeStatus = (id) => {
        let newTasks = []
        tasks.forEach(task =>{
            if(task.id === id){
                newTasks.push(
                    {id:id, 
                    title: task.title, 
                    completed: !task.completed})
            }else{
                newTasks.push(task);
            }
        })

        setTasks(newTasks)
    }
    
    const onDelete = (id) =>{
        let newTasks = []

        tasks.forEach(task =>{
            if(task.id != id){
                newTasks.push(task);
            }
        })
        setTasks(newTasks)
    }

    const getTasksCompleted = () =>{
        let nbrTasks = 0

        tasks.forEach(task =>{
            if(task.completed){
                nbrTasks++;
            }
        })
        return nbrTasks;
    }

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened)
    }


    return (
      <View style={Styles.container}>
          {isFormOpened  && <TaskForm onAddTask={onAddTask}/>}
          <CountersContainer 
          nbTasks={tasks.length} 
          nbTasksCompleted={tasks.filter(task => task.completed).length}
          />

          <TasksLists 
          tasks={tasks} 
          onChangeStatus={onChangeStatus} 
          onDelete={onDelete}
          />
          <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened}/>
      </View>

    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        position: "relative"
    }

})

export default TasksContainer;