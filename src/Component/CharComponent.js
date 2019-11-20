import React from 'react';

const CharComponent = (props) =>{

    const style = {
        padding: '16px',
        margin: '16px',
        border: '1px solid blue',
        textAlign: 'center',
        height: '30px',
        width: '30px'
    }
    return(
        <div>
            <p style={style} onClick={props.clicked}>{props.eachLetter}</p>       
        </div>
    );
};

export default CharComponent;