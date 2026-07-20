import { createContext,useState } from "react";
export const InterviewContext=createContext()

export const InterviewProvider=({children})=>{
    const [loading,setloading]=useState(flase);
    const [report,setRreport]=useState(null)
    const [reports,setReposts]=useState([])
    return (
        <InterviewContext.Provider value={{loading,setLoading,report,setReport,reports,setReports}}>
            {children}
        </InterviewContext.Provider>
    )
}