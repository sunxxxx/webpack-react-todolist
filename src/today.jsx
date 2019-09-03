import React from 'react'
import '@css/App.css';
import {  Route } from "react-router-dom";


class Today extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todayList: [
                {
                    item: '111111111111111111111111',
                    id: 1,
                    date: '2018/01/01',
                    deadline: '2018/02/01'
                },{
                    item: '2222222222222222222222222',
                    id: 2,
                    date: '2019/01/04',
                    deadline: '2019/08/29'
                },{
                    item: '333333333333333333333333333',
                    id: 3,
                    date: '2018-02-01',
                    deadline: '2020-04-01'
                },{
                    item: '4444444444444444444444444',
                    id: 4,
                    date: '2012-09-01',
                    deadline: '2019-08-29'
                }
            ]
        }
    }

    UNSAFE_componentWillMount(){

    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    }

    search(e){
        this.props.history.push({
            search: `?date=${e.target.value}`
        })
        console.log(this.props)
    }

    render(){
        this.state.todayList.sort(function(a,b){
            return a.date > b.date ? 1:-1
        })

        return(
            <div className="container">
                <div className="projectBox">
                    <ul className="project">
                    <h5>Today's Item</h5>
                        <li>Done</li>
                        <li>Undone</li>
                    </ul>
                </div>
                <div className="t_bg">
                    <input type="text" className="search" placeholder="Search" onChange={(e) => (this.search(e))} />
                    <div className="item_box">
                        {this.state.todayList.map((item) => (
                            <div key={item.id} className="item_box_show">
                                <h5>{item.item}</h5>
                                <p className="deadline">Create Time: {new Date(item.date).toDateString()}</p>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        )
    }
}


export default Today;