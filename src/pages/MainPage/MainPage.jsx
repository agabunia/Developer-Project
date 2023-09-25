import Advert from "./Advert.component"
import ArticlesSummary from "./ArticlesSummary.component"
import '../../styles/MainPageStyles.css'

const MainPage = () => {
    return(
        <div className="mainPage">
            <Advert />
            <h1 className="main-Header">The Latest Articles</h1>
            <ArticlesSummary />
        </div>
    )
}

export default MainPage