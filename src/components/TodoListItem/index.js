import React from 'react';
import Card from '../../components/Card'
import Button from '../../components/Button'
import './style.css'

function TodoListItem (props) {
  const {id, description, isDone, created_at} = props.todo;

  return (
    <Card variant="p-4 mb-2">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <span className={isDone ? 'done-text  gray small uppercase' : 'regular gray small uppercase'}>{description}</span>
          <span className={isDone ? 'done-text regular light-gray xsmall mt-1' : 'regular light-gray xsmall mt-1'}>{created_at}</span>
        </div>
        <div>
          {!isDone && <Button onClick={() => props.handleDoneClick(id)} variant="btn-flat btn-sm btn-primary" text="Done"/>}
          <Button onClick={() => props.handleDeleteClick(id)} variant="btn-flat btn-sm light-gray" text="DELETE"/>
        </div>
      </div>
    </Card>
  )
}

export default TodoListItem;