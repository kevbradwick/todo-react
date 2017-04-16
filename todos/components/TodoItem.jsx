import React from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      complete: this.props.complete
    }
  }

  toggleChecked(e) {
    let isChecked = e.target.checked;
    this.setState({complete: isChecked});
    this.props.onItemChecked(this.props.id, isChecked);
  }

  render() {
    return <div>
      <input
          type="checkbox"
          onChange={this.toggleChecked.bind(this)}
          checked={this.state.complete ? "checked" : ""}
      />
      <span>{this.props.title}</span>
    </div>
  }
}


TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  onItemChecked: PropTypes.func,
  id: PropTypes.number.isRequired
};


TodoItem.defaultProps = {
  complete: false
};
