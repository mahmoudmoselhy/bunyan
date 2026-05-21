
import style from "./Status.module.css"

import CardStatus from "../../Ui/CardStatus/CardStatus"

function Status(){


    return(
        <>
<section className="py-4">
    <div className="conainer">
            <div className="row">
                <div className="col-12 col-md-3 ">
                   <CardStatus counter="100"  title= "Users" />
                </div>
                 <div className="col-12 col-md-3">
                   <CardStatus counter="130"  title= "Projects" />
                </div>

                 <div className="col-12 col-md-3 ">
                   <CardStatus counter="200"  title= "Devolper" />
                </div>

                 <div className="col-12 col-md-3 ">
                   <CardStatus  counter="80"  title= "Blogs" />
                </div>
            </div>
            </div>
            </section>
        </>
    )
}



export default Status