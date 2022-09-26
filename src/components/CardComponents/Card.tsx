
import Input from '../Input'

import './Card.css'

interface cardProps {
    children: React.ReactNode

}

const Card = ({children}: cardProps) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card