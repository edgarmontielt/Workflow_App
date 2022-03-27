import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../../api"

export default function TeamDetails() {

    const [team, setTeam] = useState()
    const params = useParams()

    useEffect(() => {
        get("/teams/" + params.idTeam)
            .then(res => {
                console.log(res.data)
                setTeam(res.data)
            })
            .catch(error => console.log(error))
    }, [])


  return (
    <div>TeamDetails</div>
  )
}
