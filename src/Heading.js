import React from 'react';

const Heading = (props) => {
    return (
        <>           
           <div style={{fontFamily: 'Roboto', padding: 10, color: "black", fontWeight: 'bold', fontSize: '200%', }}>
                <h1>{ props.title }</h1>
            </div>         
           
        </>      
    );
}

export default Heading;