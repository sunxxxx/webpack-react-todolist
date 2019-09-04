import React from 'react';
import ReactDOM from 'react-dom';
import './modal.less'

const modalRoot = document.getElementById('modal');


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'modal_bg'
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }
}

export default Modal