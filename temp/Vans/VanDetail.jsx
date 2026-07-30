import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail(){
    const params = useParams()
    const location = useLocation()

    const [van, setVans] = React.useState(null)

    React.useEffect(()=>{
        // Retrieve and convert back to an object. Then, find the object that matches the params.id
        const storedVans = JSON.parse(localStorage.getItem("vansData") || "[]")
        const selectedVan = storedVans.find(v => v.id === params.id)

        setVans(selectedVan)
    },[params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}