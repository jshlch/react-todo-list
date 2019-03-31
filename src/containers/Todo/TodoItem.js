import React, {Component} from 'react';
import { connect } from 'react-redux'
import Card from '../../components/Card'
import Button from '../../components/Button'
import {deleteTodo} from './actions'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick() {
    const {todo, date, deleteTodo} = this.props;
    deleteTodo(todo)
  }

  render() {
    const {todo, date} = this.props;
    return (
      <Card variant="p-4 mb-2">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <span className="regular gray small uppercase">{todo}</span>
            <span className="regular light-gray xsmall mt-1">{date}</span>
          </div>
          <div>
            <Button variant="btn-flat btn-sm btn-primary" text="Mark as done"/>
            <Button onClick={this.handleDeleteClick} variant="btn-flat btn-sm btn-danger" text="DELETE"/>
          </div>
        </div>
      </Card>
    )
  }
}

const mapDispatchToProps =  dispatch => ({
  deleteTodo : data => dispatch(deleteTodo(data))
})

const withRedux = connect(null, mapDispatchToProps)(TodoItem)

export default withRedux;