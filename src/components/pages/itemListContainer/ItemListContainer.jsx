import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import MaterialCard from "../../common/productCard/MaterialCard";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore"
import SkeletonCustom from "../../common/burguerSection/SkeletonCustom";


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { name } = useParams();

    useEffect(() => {

        const colleccionDeProductos = collection(db, "products");
        let consulta = colleccionDeProductos;

        if (name) {
            const coleccionFiltrada = query(
                colleccionDeProductos,
                where("category", "==", name)
            );
            consulta = coleccionFiltrada;
        }

        const getProducts = getDocs(consulta);

        getProducts.then((res) => {
            let newArray = res.docs.map((elemento) => {
                return { id: elemento.id, ...elemento.data() };
            });
            setItems(newArray);
        })
    }, [name]);


    // const rellenar = () => {

    //     let productsCollection = collection(db, "products")

    //     products.forEach((product) => {
    //         addDoc(productsCollection, product)
    //     })
    // }

    const obtenerTitulo = () => {
        switch (name) {
            case "carne":
                return "Hamburguesas de Carne";
            case "pollo":
                return "Hamburguesas de Pollo";
            case "veggies":
                return "Hamburguesas Vegetarianas";
            case "acompañamientos":
                return "Acompañamientos";
            default:
                return "Nuestras Hamburguesas";
        }
    };

    return (

        <Box sx={{ backgroundColor: "#FAF3C9", padding: 5 }}>
            <Box>
                <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#2C0E14", mb: 4, mt: 5, fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" }, }}>
                    {obtenerTitulo()}
                </Typography>
            </Box>
            <Box sx={{ padding: 5 }} >
                {/* <Button onClick={rellenar}> Rellenar db </Button> */}
                {items.length === 0 ?
                    (<SkeletonCustom />)
                    : (<Grid container spacing={3} >
                        {items.map((item) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                                <MaterialCard {...item} />
                            </Grid>
                        ))}
                    </Grid>
                    )
                }
            </Box>
        </Box >
    );
};

export default ItemListContainer;

