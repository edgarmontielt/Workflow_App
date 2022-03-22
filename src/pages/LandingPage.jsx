import Cards from "../components/LandingPage/Cards";
import Header from "../components/LandingPage/Header";
import Tools from "../components/LandingPage/Tools";

export default function LandingPage() {
  return (
    <div id="body" className=" max-w-screen-lg mx-auto w-3/4">
      <Header />
      <Tools />
      <Cards />
    </div>
  )
}
