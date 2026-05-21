import style from "../../Dashboard/Status/Status.module.css"


function CardStatus({ counter, title }) {
    return(
        <>
        
         <div className={`${style.status} card bg-second`}>
                       <div className="d-flex justify-content-between align-items-center p-5">

                       <i className={`${style.icon} fa-regular fa-building fs-1`}></i>

                        <div className="fw-bold">

                            <h5 className="mb-0 fs-2 fw-bold"><span className="counter">{counter}</span></h5>
                            <p className="mb-0 "><span className="title">{title}</span></p>
                        </div>



                       </div>
                    </div>
        
        </>
    )
}



export default CardStatus
