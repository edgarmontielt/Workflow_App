import Card from "./Card";

export default function Cards() {
    return (
        <section className=" flex gap-10 p-10">
            <Card title={"Security"} content={"Lorem ipsum dolor sit amet consectetur adipiscing elit, risus fringilla est vitae leo euismod donec"}/>
            <Card title={"Privacity"} content={"Lorem ipsum dolor sit amet consectetur adipiscing elit, risus fringilla est vitae leo euismod donec"}/>
            <Card title={"Efficiency"} content={"Lorem ipsum dolor sit amet consectetur adipiscing elit, risus fringilla est vitae leo euismod donec"}/>
        </section>
    )
}
