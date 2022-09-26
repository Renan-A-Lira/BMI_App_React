
import './BodyCard.css'

interface BodyCardProps {
    children: React.ReactNode
}

const BodyCard = ({children}: BodyCardProps) => {
    return (
        <div className="BodyCard">
            {children}
        </div>
    )
}

export default BodyCard