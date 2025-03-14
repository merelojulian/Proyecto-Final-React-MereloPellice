import React from "react";
import { AppBar, Box, Toolbar, IconButton, Button, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar
        position="fixed"
        sx={{
          display: "flex", justifyContent: "space-between",
          alignContent: "center",
          backgroundColor: "rgba(44, 14, 20, 0.9)",
          color: "#F6EFC6",
          width: "100%",
          boxShadow: 3,
          gap: 2,
          transition: "background-color 0.3s ease",

        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            paddingX: 2,
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <IconButton size="large" color="inherit" sx={{ p: 0 }}>
                <FastfoodIcon fontSize="large" />
              </IconButton>
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", fontWeight: "bold", lineHeight: 1 }}
              >
                Burguesía
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/category/carne"
              sx={{ fontSize: { xs: "0.65rem", sm: "1rem" } }}
            >
              Carne
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/category/pollo"
              sx={{ fontSize: { xs: "0.65rem", sm: "1rem" } }}
            >
              Pollo
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/category/veggies"
              sx={{ fontSize: { xs: "0.55rem", sm: "1rem" } }}
            >
              Veggies
            </Button>
          </Box>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <IconButton size="large" sx={{ color: "#F6EFC6" }}>
              <CartWidget />
            </IconButton>
          </Link>
        </Toolbar>

      </AppBar>
    </Box>
  );
}

export default NavBar;