import React from 'react'
import './Card.css'
import logo from '../Images/im1.jpg'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card:React.FC<Props> = ({ companyName, ticker, price }: Props) => {
    return (
        <div className='card'>
            <img src={logo} alt={`${companyName} logo`} className='card-logo' />
            <div className="card-content">
                <h3>{companyName}</h3>
                <p>{ticker} - ${price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card
