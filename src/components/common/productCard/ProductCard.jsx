import { Link } from "react-router";
import "./productCard.css";
import { Button } from "@mui/material";

const ProductCard = ({ title, price, description, imageUrl, id }) => {
    return (
        <div className="item">
            <div className="card__img-container">
                <img src={imageUrl} alt={title} className="card__img" />
            </div>
            <h3 className="card__name">{title}</h3>
            <h3 className="card__description">{description}</h3>
            <h3 className="card__price">${price.toLocaleString("es-ES")}</h3>
            <Link to={`/itemDetail/${id}`}>
                <Button className="card__button">Ver Detalle</Button>
            </Link>
        </div>
    );
};

export default ProductCard;


