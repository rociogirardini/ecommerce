import React from 'react';
import UseAnimations from "react-useanimations";

const Cargando = () => {
    return (
        <>
            <div className='loadingBackground'>
                <UseAnimations animationKey="loading2"/>
            </div>
        </>
    )
}

export default Cargando