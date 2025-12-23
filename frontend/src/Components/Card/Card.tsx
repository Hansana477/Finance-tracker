import React from 'react'

interface Props {
    
}

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img src="" alt="card image" />
            <div className="card-content">
                <h3>Card Title</h3>
                <p>Card description goes here.</p>
            </div>
        </div>
    )
}

export default Card
