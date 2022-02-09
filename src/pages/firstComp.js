import React, { Component } from 'react';
 
class FirstComp extends Component {
    render() { 
        const {experience, person} = this.props
        const {name, role} = person

        const getProperties = (e)=>{
            console.log(e)
        }
        return (
            <div>
                <h1>{experience}</h1>
                <p>{name}</p>
                <p>{role}</p>

            <input name='profession' type='text' id="rex" onChange={getProperties} />

            </div>
        );
    }
}
 
export default FirstComp;