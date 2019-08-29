import React from 'react';
import { Route,Link } from "react-router-dom";
import '@css/App.css';


class Memo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addMemo: false
        }
    }

    addMemo(){
        this.setState({addMemo:true})
    }

    newMemo(){}

    render(){
        const data = [
            {
                title: '根据本地时间格式，把 Date 对象转换为字符串。',
                id: 1,
                date: new Date().toLocaleString(),
                method:'new Date().toLocaleString()'
            },{
                title: '根据世界时，把 Date 对象转换为字符串。',
                id: 2,
                date: new Date().toUTCString(),
                method:'new Date().toUTCString()'
            },{
                title: '根据本地时间格式，把 Date 对象的时间部分转换为字符串。',
                id: 3,
                date: new Date().toLocaleTimeString(),
                method:'new Date().toLocaleTimeString()'
            },{
                title: '根据本地时间格式，把 Date 对象的日期部分转换为字符串。',
                id: 4,
                date: new Date().toLocaleDateString(),
                method:'new Date().toLocaleDateString()'
            },{
                title: '根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。',
                id: 5,
                date: Date.UTC(2019,8,28),
                method:'Date.UTC(2005,7,8)'
            },{
                title: '返回1970年1月1日午夜到指定日期（字符串）的毫秒数。',
                id: 6,
                date: Date.parse(2019,8,28),
                method:'Date.parse(2019,8,28)'
            },{
                title: '把 Date 对象的日期部分转换为字符串。',
                id: 7,
                date: new Date().toDateString(),
                method:'new Date().toDateString()'
            }
        ];
        return(
            <div className="container">
                <ol className="memo_content">
                {data.map((item,index) => (
                    <li key={item.id}>
                        <div className="memo_item">
                            <h5>
                                <Link to={`/memo/${item.id}`}>{item.title}</Link>
                                <Link className="right" to={`/editMemo/${item.id}`}>Edit</Link>
                            </h5>
                            
                            <div className="item_details">
                                <span className="left">{item.method}</span>
                                <span className="right">{item.date}</span>
                            </div>
                        </div>
                    </li>
                ))}
                <button className="add_memo" onClick={this.addMemo.bind(this)}>Add New Memo</button>
                </ol>
                {this.state.addMemo && 
                    <div className="new_memo">
                        <input value="add new memo" onChange={this.newMemo.bind(this)} />
                    </div>
                }
               
                
            </div>
        )
    }
}

export default Memo;