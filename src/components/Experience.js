const Experience = (props) => {
//<i class="fa-solid fa-location-dot"></i>
    return (
        <>
        <section>
            <img src={props.imageUrl} alt={props.title} className="placesImage" />
            <div className="details">
            <span className="placeAndgMaps">
            <i className="fa-solid fa-location-dot"></i> {props.location.toUpperCase()}
            <a href={props.googleMapsUrl} className="mapsLink" target="_blank" rel="noreferrer">View On Google Maps</a>
            </span>
            <h1 className="placeName">{props.title}</h1>
            <h5 className="fromToDates">{props.startDate} - {props.endDate}</h5>
            <p className="desc">{props.description}</p>
            </div>
            
        </section>
        <hr />
        </>
    )
}

export default Experience;