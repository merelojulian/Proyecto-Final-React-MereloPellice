import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB7B13",
      dark: "#FB6825",
      light: "#E55C20",
      contrastText: "#FAF3C9",
    },
    secondary: {
      main: "#2C0E14",
      contrastText: "#FAF3C9",
    },
    background: {
      default: "#F6EFC6",
      paper: "#FAF3C9",
    },
    text: {
      primary: "#2C0E14",
      secondary: "#E55C20",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", 
    h4: {
      fontWeight: 600,
      color: "#2C0E14",
    },
    h6: {
      fontWeight: 600,
      color: "#2C0E14",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#FB7B13",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#FB7B13",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#E55C20",
          "&.Mui-checked": {
            color: "#FB7B13",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#E55C20",
          opacity: 0.2,
        },
      },
    },
  },
});


export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

