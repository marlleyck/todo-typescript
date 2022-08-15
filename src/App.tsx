import React, {useEffect, useState} from 'react';
import * as C from './App.styles';

import {Item} from  './types/item'
import ListItem from './components/ListItem/ListItem'
import AddArea from './components/AddArea/AddArea';


function App() {

  const getLocal = () => JSON.parse(localStorage.getItem('db_task') || '[]') ?? []
  const setLocal = (db_task: Item[]) => localStorage.setItem('db_task', JSON.stringify(db_task))
  const db = getLocal()


  const [list, setList] = useState<Item[]>(db)

  useEffect(() => {
    let db = getLocal()
    db = list
    setLocal(db)
  }, [])

  const handleAddTask = (taskName: string) => {
    let db = getLocal()

    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    db = newList
    setLocal(db)
    setList(newList)
  }

  const handleDeleteItem = (id: number) => {
      let newList = list.filter((item) => item.id !== id)
      let db = getLocal()
      db = newList
      setLocal(db)
      setList(newList) 
  }

  return (
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item: Item, index: number) => (
            <ListItem 
            key={index} 
            item={item} 
            handleDeleteItem={handleDeleteItem}
            list={list}
            getLocal={getLocal}
            setLocal={setLocal} />
          ))}

        </C.Area>
      </C.Container>
  );
}

export default App;
