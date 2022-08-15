import React, { useState } from 'react';
import {BsTrash} from 'react-icons/bs'
import {Item} from '../../types/item'

import * as C from './ListItem.styles'


type Props = {
    item: Item;
    handleDeleteItem: (id: number) => void;
    list: Item[];
    getLocal: () => Item[];
    setLocal: (db_task: Item[]) => void;
}

const ListItem = ({item, handleDeleteItem, list, getLocal, setLocal}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done)

    const handleChecked = (e: any) => {
        let db = getLocal()
        const itemID = e.target.id
        let newList = [...list]
        
        setIsChecked(e.target.checked)
        newList.map((item) => {
            if (item.id == itemID) {
                item.done = !item.done
            }
        })

        db = newList
        setLocal(db)
    }

    return (
        <C.Container done={isChecked}>
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={handleChecked}
            id={item.id.toString()} />
            <label>{item.name} <BsTrash color='white' size={18} 
            onClick={() => handleDeleteItem(item.id)} /> </label>
        </C.Container>
    )
}

export default ListItem;
