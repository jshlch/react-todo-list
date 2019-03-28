import React from 'react';
import Card from '../Card'
import Button from '../Button'

const TodoItem = ({todo, date}) => {
  return (
    <Card variant="p-4 mb-2">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <span className="regular gray small uppercase">{todo}</span>
          <span className="regular light-gray xsmall mt-1">{date}</span>
        </div>
        <div>
          <Button variant="btn-flat btn-sm btn-primary" text="Mark as done"/>
          <Button variant="btn-flat btn-sm btn-danger" text="Remove"/>
        </div>
      </div>
    </Card>
  )
}

export default TodoItem;