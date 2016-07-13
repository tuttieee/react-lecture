import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      todos: [],
    };
  }

  render() {
    const todos = this.state.todos;

    return (
      <div>
        <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>{ todo }</li>
          )
        })}
        </ul>

        <input
          type="text"
          value={ this.state.text }
          onChange={ e => {
            this.setState({
              text: e.target.value,
            });
          }}
        />

        <button
          onClick={() => {
            const prevTodos = this.state.todos;

            // Todoを追加
            this.setState({
              todos: [
                ...prevTodos,
                this.state.text,
              ],
            });

            // <input />の内容をクリア
            this.setState({
              text: '',
            });
          }}
        >Add</button>
      </div>
    )
  }
}
