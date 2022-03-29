import { useEffect } from "react"
import { Link } from "react-router-dom"
import Team from "./Team"
import { get } from "../../api"

export default function Teams({ teams, setTeams }) {

    useEffect(()=>{
        get("/teams")
        .then(res=>setTeams(res.data))
        .catch(error=>console.log(error))
        console.log(teams);
    },[])

    return (
        <div className="flex gap-12 flex-wrap">
            {teams.map(team => <Link to={"/my_teams/"+team._id}><Team key={team._id} data={team}></Team></Link>)}
        </div>
    )
}

