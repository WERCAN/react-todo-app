import React, { Component } from 'react'

export class ItemList extends Component {


deleteItem=()=>{
    
}

    render() {
        return (
            <ul>
                {this.props.items.map((itemText, index) =>{
                    return (
                    <li id={index}>{itemText.text}
                     <a href="/" onClick={this.deleteItem.bind(this,index)}>X</a>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default ItemList
