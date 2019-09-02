import React, { Component } from 'react'
 
function withPersistentData(WrappedComponent) {
  return class extends Component {
      constructor(props){
          super(props);
          this.state = {
              data:'data'
          }
      }
    componentWillMount() {
    //   let data = localStorage.getItem('data');
        // this.setState({data});
        console.log(this.state.data)
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
}
 
const MyComponentWithPersistentData = withPersistentData(MyComponent2)

export default MyComponentWithPersistentData;