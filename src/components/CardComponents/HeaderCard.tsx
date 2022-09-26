import './HeaderCard.css'

interface cardProps {
    title: string

}

const HeaderCard = ({title}: cardProps) => {
    return (
        <div className="HeaderCard">
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderCard