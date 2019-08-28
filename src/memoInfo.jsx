import React from 'react';
// import '@css/App.css';

class memoInfo extends React.Component{
    constructor(props){
        super(props)
        console.log(location.pathname.match(/^\/[^\/]*/g)[0].substr(1))
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div>
                        <label>title</label>
                        <input value="" />
                    </div>
                    <div>
                        <label>author</label>
                        <input value="" />
                    </div>
                    <div>
                        <label>method</label>
                        <input value="" />
                    </div>
                    <div>
                        <label>date</label>
                        <input value="" />
                    </div>
                </form>
            </div>
        )
    }
}

export default memoInfo;