import React from 'react'

var defaultMixin = {
    getDefaultProps: function() {
        return {
            name: "Allen"
        }
    }
}

var Component = React.createClass({
    mixins: [defaultMixin],
    render: function() {
        return <h1>Hello, {this.props.name}</h1>
    }
})

export default Component;