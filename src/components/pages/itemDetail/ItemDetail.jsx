import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore"


export const ItemDetail = ({ }) => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let productCollection = collection(db, "products");
        let refDoc = doc(productCollection, id)
        const getProduct = getDoc(refDoc)

        getProduct.then((res) => {
            setItem({ id: res.id, ...res.data() });
        })

    }, [id]);



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);


        return () => clearTimeout(timer);
    }, []);

    return (
        <main style={{ minHeight: "80vh" }}>
            {loading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        gap: 4,
                        scale: 1.5
                    }}
                >
                    <CircularProgress color="secondary" sx={{ mb: 2 }} />
                    <CircularProgress color="success" sx={{ mb: 2 }} />
                    <CircularProgress color="inherit" sx={{ mb: 2 }} />
                </Box>
            ) : (<Box
                sx={{
                    background: "#F6EFC6",
                    py: 10,

                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        width: "100%",
                        padding: "1rem",
                        maxWidth: "1100px",
                        mx: "auto",
                        px: { xs: "1rem", sm: "2rem", md: "3rem" },
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)"
                    }}
                >

                    <Box sx={{ flex: 1, justifyContent: "center", textAlign: { xs: "center", md: "left" } }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: "bold",
                                color: "#2C0E14",
                                mb: 2,
                                fontSize: { xs: "2rem", sm: "3.2rem", md: "4rem" },
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "#DF7216",
                                mb: 3,
                                fontSize: { xs: "0.8rem", sm: "1.3rem", md: "1rem" }
                            }}
                        >
                            {item.detail}
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "#2C0E14",
                                fontSize: { xs: "1.2rem", sm: "2rem", md: "2rem" },
                                mt: 2,
                                letterSpacing: 1,
                                display: "flex",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                alignItems: "center",
                                justifyContent: "space-evenly"
                            }}
                        >
                            ${item.price}
                            <Counter item={item} />
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Box
                            component="img"
                            src={item.imageUrl}
                            alt={item.title}
                            sx={{
                                width: { xs: "50%", sm: "100%", md: "80%" },
                                maxWidth: "500px",
                                height: "auto",
                                borderRadius: "16px",
                                boxShadow: 3,
                                objectFit: "cover",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            )
            }
        </main>

    );
};
