
import './FooterCard.css'

interface FooterCardProps {
    text: string
    children?: React.ReactNode
}


const FooterCard = ({text, children}: FooterCardProps) => {
    return (
        <div className="FooterCard">
            <p>{text}</p>
        </div>
    )
}

export default FooterCard