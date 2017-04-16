import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'


export default class TodoList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {allComplete: false};
  }

  /**
   * Return an array of TodoItem's.
   */
  items() {
    return this.props.items.map((item) => {
      return <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          complete={item.complete}
          onItemChecked={this.onItemChecked.bind(this)}
      />
    });
  }

  onItemChecked(id, checked) {
    this.props.items.filter(i => i.id === id)[0].complete = checked;
    const complete = this.props.items.filter(item => item.complete).length;
    this.setState({allComplete: complete === this.props.items.length});
  }

  render() {
    return <ul>
      {this.state.allComplete && <li>Complete!</li>}
      {this.items()}
    </ul>
  }
}


TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

TodoList.defaultProps = {
  items: []
};
