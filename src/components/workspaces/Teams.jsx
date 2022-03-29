import { useEffect } from "react"
import { Link } from "react-router-dom"
import Team from "./Team"
import { get } from "../../api"

export default function Teams({ teams, setTeams }) {

    useEffect(()=>{
        get("/teams")
        .then(res=>setTeams(res.data))
        .catch(error=>console.log(error))
    },[])

    return (
        <div className="flex gap-12 flex-wrap">
            {teams.map(team => <Link to={"/my_teams/"+team._id}><Team key={team.length} data={team}></Team></Link>)}
        </div>
    )
}