import React, { Component } from 'react'
 
function withPersistentData = (key) => (WrappedComponent) => {
  return class extends Component {

    
    componentWillMount() {
      let data = localStorage.getItem(key);
        this.setState({data});
    }
 
    render() {
      // 通过{...this.props} 把传递给当前组件的属性继续传递给被包装的组件WrappedComponent
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}
 
class MyComponent2 extends Component {  
  render() {
    return <div>{this.props.data}</div>
  }
 
  //省略其他逻辑...
}
 
class MyComponent3 extends Component {  
  render() {
    return <div>{this.props.data}</div>
  }
 
  //省略其他逻辑...
}
 
const MyComponent2WithPersistentData = withPersistentData('data')(MyComponent2);
const MyComponent3WithPersistentData = withPersistentData('name')(MyComponent3);


export default MyComponent3WithPersistentData