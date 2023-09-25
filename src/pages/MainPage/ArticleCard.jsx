import { useNavigate } from "react-router-dom"

const ArticleCard = ({id, article, image}) => {
    const navigate = useNavigate()
    
    return (
        <div className="article">
            <div className="image-cont">
                <img src={image} alt="img" className="article-img"/>
            </div>
            <div className="article-container">
                <h3 className="article-header"> Article: {id} </h3>
                <p className="article-parag"> {article.slice(0, 200)} 
                    <span 
                    className="parag-span"
                    onClick={() => navigate(`/article/${id}`)}>
                        { ' [...read more]' }
                    </span> 
                </p>
            </div>
        </div>
    )
}

export default ArticleCard