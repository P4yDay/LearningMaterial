import React, { Component } from 'react'

class AddPerson extends Component{
    state = {
        name: null,
        age: null,
        ht: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

     handleSubmit = (e) => {
        e.preventDefault();
        this.props.person(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor="name">Hometown: </label>
                    <input type="text" id="ht" onChange={this.handleChange} />
                    
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default AddPerson;