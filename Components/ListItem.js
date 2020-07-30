import React from 'react'

export default function ListItem(props) {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <input type="checkbox"></input>
            <p onClick={() => {
                props.remove(props.item);
            }}>{props.item}</p>
        </div>
    );
}