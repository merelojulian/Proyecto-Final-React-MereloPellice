import { Container, Paper, Typography, List, ListItem, ListItemText, IconButton, Button, Box } from "@mui/material"
import { Add, Remove, Delete } from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#01BFA4",
        },
        secondary: {
            main: "#FB7B13",
        },
        text: {
            primary: "#2C0E14",
        },
        background: {
            default: "#FAF3C9",
            paper: "#F6EFC6",
        },
    },
})

const CartPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.default', minHeight: "100vh", py: 12 }}>
                <Container maxWidth="md">
                    <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper' }}>
                        <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', fontWeight: "bold" }}>
                            Tu carrito
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={<Typography sx={{ color: 'text.primary' }}>Clásica</Typography>}
                                    secondary={<Typography sx={{ color: 'secondary.main' }}>$4500.00</Typography>}
                                />
                                <Box>
                                    <IconButton edge="end" aria-label="decrease" sx={{ color: 'secondary.main', mx: 0.1 }}>
                                        <Remove />
                                    </IconButton>
                                    <Typography component="span" sx={{ mx: 0.5, color: "text.primary" }}>
                                        2
                                    </Typography>
                                    <IconButton edge="end" aria-label="increase" sx={{ color: 'secondary.main' }}>
                                        <Add />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" sx={{ color: 'secondary.main', ml: 1 }}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={<Typography sx={{ color: "text.primary" }}>JalaBacon</Typography>}
                                    secondary={<Typography sx={{ color: 'secondary.main' }}>$5500.00</Typography>}
                                />
                                <Box>
                                    <IconButton edge="end" aria-label="decrease" sx={{ color: 'secondary.main', mx: 0.1 }}>
                                        <Remove />
                                    </IconButton>
                                    <Typography component="span" sx={{ mx: 0.5, color: "text.primary" }}>
                                        1
                                    </Typography>
                                    <IconButton edge="end" aria-label="increase" sx={{ color: 'secondary.main' }}>
                                        <Add />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" sx={{ color: 'secondary.main', ml: 1 }}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={<Typography sx={{ color: "text.primary" }}>La de Pollo</Typography>}
                                    secondary={<Typography sx={{ color: 'secondary.main' }}>$4500.00</Typography>}
                                />
                                <Box>
                                    <IconButton edge="end" aria-label="decrease" sx={{ color: 'secondary.main', mx: 0.1 }}>
                                        <Remove />
                                    </IconButton>
                                    <Typography component="span" sx={{ mx: 0.5, color: "text.primary" }}>
                                        3
                                    </Typography>
                                    <IconButton edge="end" aria-label="increase" sx={{ color: 'secondary.main' }}>
                                        <Add />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" sx={{ color: 'secondary.main', ml: 1 }}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </ListItem>
                        </List>
                        <Box sx={{ mt: 4, textAlign: "right" }}>
                            <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
                                Total: $13500.00
                            </Typography>
                            <Button variant="contained" color="primary" size="large" sx={{ color: "white" }}>
                                Proceder al Pago
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default CartPage


