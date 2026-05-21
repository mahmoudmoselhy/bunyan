
import { useEffect } from "react"

function FormDashboard ({ title = "Add new user", submitText = "Submit", onDraftChange }){
    function handleFormChange(event){
        if(!onDraftChange){
            return
        }

        const fields = Array.from(event.currentTarget.elements).filter((field) =>
            ["INPUT", "TEXTAREA", "SELECT"].includes(field.tagName)
        )

        const hasData = fields.some((field) => {
            if(field.type === "checkbox" || field.type === "radio"){
                return field.checked
            }

            return field.value.trim() !== ""
        })

        onDraftChange(hasData)
    }

    useEffect(() => {
        return () => {
            if(onDraftChange){
                onDraftChange(false)
            }
        }
    }, [onDraftChange])
    
    return(
        <>

        <div className="container">

            <h3 className="mb-3">{title}</h3>

            <form onChange={handleFormChange}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">{submitText}</button>
</form>


        </div>
        
        
        </>
    )
}





export default FormDashboard
