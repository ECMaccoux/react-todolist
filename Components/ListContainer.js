import React from 'react';
import ListItem from './ListItem';

function renderListItems(items, remove) {
    return items.map((item, index) => {
        return <ListItem key={index} ListID={index} item={item} remove={remove}></ListItem>;
    });
}

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }

    addItemToList() {
        const newVal = document.getElementById("inputField").value;
        let arr = JSON.parse(JSON.stringify(this.state.items));
        arr.push(newVal);
        this.setState({items: arr});
    }

    removeItemFromList(value) {
        const newVal = document.getElementById("inputField").value;
        let arr = JSON.parse(JSON.stringify(this.state.items));
        arr = arr.filter((item) => {
            if(item == value) {
                return false;
            } else {
                return true;
            }
        });
        this.setState({items: arr});
    }

    render() {
        return (
            <div>
                <input id="inputField"></input>
                <button onClick={this.addItemToList}>Add Item</button>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {renderListItems(this.state.items, this.removeItemFromList)}
                </div>
            </div>
        );
    }
}