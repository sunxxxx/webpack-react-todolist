import React from 'react';
import Modal from '@src/components/Modal/Modal';


class PortalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal className="modal_bg">
        <div className="modal">
          <div className="modal_head">Add Memo</div>
          <div className="modal_body">
            <form>
              <label>Title</label>
              <input placeholder="title" />
            </form>
          </div>
          <div className="modal_footer">
            <button onClick={this.handleHide}>Hide modal</button>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="portal">
        Portal
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default PortalBox;