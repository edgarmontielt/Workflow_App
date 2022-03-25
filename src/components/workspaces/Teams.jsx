import Team from "./Team"

export default function Teams({teams}) {
    return (
        <div className="flex gap-10 flex-wrap">
            {teams.map(team => {
                return <Team key={team.length} data={team}></Team>
            })}
        </div>
    )
}
