import { useEffect, useState } from "react"

const useCharts = ()=>{
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('ChartData.json').then(res=>res.json()).then(data=>setUsers(data))
    },[])

    return [users, setUsers]

}
export {useCharts}