
import React from 'react';

const Validation = (props) => {

    let count = props.inputStrLength;
    let message = '';
    if(count > 5 && count <= 15)
        {
            message = (<p>String too Short</p>); 
        }
    else if (count > 15)
        {
            message = (<p>String too Long</p>); 
        }    
    return(
        <div>
            {message}
        </div>
    );
}

export default Validation;