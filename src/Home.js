import "./styles.css"
import CarouselHome from "./CarouselHome";
import HomeContent from "./HomeContent";
function Home()
{
    return (<div>
       <div className="page-heading"></div>
        <CarouselHome/>
        <HomeContent/>
    </div>)

}
export default Home;