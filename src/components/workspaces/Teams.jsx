import { useEffect } from "react"
import { get } from "../../api"
import Team from "./Team"

export default function Teams({ teams, setTeams }) {

    useEffect(() => {
        get("/teams")
        .then(res =>  setTeams(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="flex gap-12 flex-wrap">
            {teams.map(team => {
                return <Team key={team.length} data={team}></Team>
            })}
        </div>
    )
}
