
import Footer from "../../components/Dashboard/Footer/Footer"
import Navbar from "../../components/Dashboard/Navbar/Navbar"
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar" 
import { Route , Routes } from "react-router-dom"
import { useCallback, useState } from "react"

import HomeDashboard from "./HomeDashboard"
import Projects from "./Projects"
import Users from "./Users"
import Developers from "./Developers"
import TableDashboard from "../../components/Ui/TableDashboard/TableDashboard"
import FormDashboard from "../../components/Ui/FormDashboard/FormDashboard"

function Dashboard(){
    const [drafts, setDrafts] = useState({
        users: false,
        projects: false,
        developers: false,
    })

    const handleDraftChange = useCallback((draftName, hasDraft) => {
        setDrafts((currentDrafts) => {
            if(currentDrafts[draftName] === hasDraft){
                return currentDrafts
            }

            return {
                ...currentDrafts,
                [draftName]: hasDraft,
            }
        })
    }, [])

    const handleUsersDraftChange = useCallback((hasDraft) => {
        handleDraftChange("users", hasDraft)
    }, [handleDraftChange])

    const handleProjectsDraftChange = useCallback((hasDraft) => {
        handleDraftChange("projects", hasDraft)
    }, [handleDraftChange])

    const handleDevelopersDraftChange = useCallback((hasDraft) => {
        handleDraftChange("developers", hasDraft)
    }, [handleDraftChange])

    return(
        <>
         <Navbar adminName="Moselhy" />
        
          
         <div className="d-flex">

            <Sidebar drafts={drafts} />

             <main className="flex-grow-1 p-4">
               <Routes>

                <Route  path="/" element={<HomeDashboard/>} />
                <Route  path="/projects" element={<Projects/>}>

                <Route index element= {<TableDashboard title="Projects" addButtonText="Add new project" />} />
                <Route path="add" element= {<FormDashboard onDraftChange={handleProjectsDraftChange} title="Add new project" submitText="Add project" />} />

                </Route>
                
                <Route  path="/user" element={<Users/>}>

                <Route index element= {<TableDashboard />} />
                <Route path="add" element= {<FormDashboard onDraftChange={handleUsersDraftChange} />} />
                
                
                </Route>

                <Route  path="/developer" element={<Developers/>}>

                <Route index element= {<TableDashboard title="Developers" addButtonText="Add new developer" />} />
                <Route path="add" element= {<FormDashboard onDraftChange={handleDevelopersDraftChange} title="Add new developer" submitText="Add developer" />} />

                </Route>
                
             

               </Routes>
             </main>

         </div>
       

        <Footer/>
       </>
          
    )
}



export default Dashboard
