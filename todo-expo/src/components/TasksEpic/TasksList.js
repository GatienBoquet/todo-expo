import React from 'react'
import {FlatList} from 'react-native'

import TaskTitle from './TaskTitle';

const TasksLists =  ({tasks, onChangeStatus, onDelete}) => {

    const _renderItem = ({  item }) => (
    <TaskTitle 
        id={item.id} 
        title={item.title}
        completed={item.completed} 
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        ></TaskTitle>
    );

    return (
        <FlatList
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
        />
    )

}

export default TasksLists;