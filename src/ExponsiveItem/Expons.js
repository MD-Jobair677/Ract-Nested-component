import React from 'react'
import './Expons.css'
import ExponsDate from './ExponsDate';

function Expons(props){
    // akana props ar maddoma data recived kora hoba

    



    return(
        <div className='expons'>
            <h1>Lets Get Start</h1>
            <div className='expons-item'>
              

            {/* use multicomponent  */}

                <ExponsDate

                date={props.date}

                ></ExponsDate>

                
                <div className='insurance'>
                       <h2>{props.title}</h2>
                        <div className='button'>${props.amount} </div>
                </div>
            </div>
        </div>
    )
}

export default Expons;