import React from 'react';
// import '@css/App.css';

class memoInfo extends React.Component{
    constructor(props){
        super(props)
        this.sate = {
            pathname: ''
        }
    }

    UNSAFE_componentWillMount(){
        this.setState({
            pathname:location.pathname.match(/^\/[^\/]*/g)[0].substr(1)
        })
    }

    saveValue(e){
        console.log(e)
    }

    render(){
        return(
            <div className="container">
                
                {this.state.pathname === 'editMemo' &&
                    <form className="memoInfo_box">
                        <div>
                            <label>TITLE</label>
                            <input type="textarea" onFocus={this.saveValue.bind(this)} placeholder="根据本地时间格式，把 Date 对象转换为字符串。" />
                        </div>
                        <div>
                            <label>AUTHOR</label>
                            <input type="text" placeholder="sunxx" />
                        </div>
                        <div>
                            <label>METHOD</label>
                            <input type="text" onFocus={this.saveValue.bind(this)} placeholder="new Date().toLocaleString()" />
                        </div>
                        <div>
                            <label>DATE</label>
                            <div className="editInput" contentEditable="false" data-placeholder="2019/8/29 上午11:06:54"></div>
                        </div>
                    </form>
                }

                {this.state.pathname === 'memo' && 
                    <form className="memoInfo_box">
                        <div>
                            <label>TITLE</label>
                            <div className="editInput" contentEditable="false" data-placeholder="根据本地时间格式，把 Date 对象转换为字符串"></div>
                        </div>
                        <div>
                            <label>AUTHOR</label>
                            <div className="editInput" contentEditable="false" data-placeholder="sunxx"></div>
                        </div>
                        <div>
                            <label>METHOD</label>
                            <div className="editInput" contentEditable="false" data-placeholder="new Date().toLocaleString()"></div>
                        </div>
                        <div>
                            <label>DATE</label>
                            <div className="editInput" contentEditable="false" data-placeholder="2019/8/29 上午11:06:54"></div>
                        </div>
                    </form>
                }    
                
            </div>
        )
    }
}

export default memoInfo;