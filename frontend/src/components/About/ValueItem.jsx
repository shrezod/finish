import './style.scss'
function ValueItem(props) {
    return (
        <div className="item-wrapper">
        <div className="value-item">
            <img src={props.image}
                width={100}
                height={100}
                alt=""
            />
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>

    </div>
    )
} 

export default ValueItem;