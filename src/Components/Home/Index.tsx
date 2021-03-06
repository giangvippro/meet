import { makeStyles } from "@mui/styles"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import HeaderComponent from "./Header/Header"
import IndexMainSection from "./Case/Index"
const useStyles= makeStyles({
    rootHeader: {
        width: '100%',
        height: '100%',
    }
})
const theme= createTheme({
    typography: {
        fontFamily: [
            'Product Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
        ].join(','),
    }
})

const HomeRoot = (props: any) => {
    const classes= useStyles()
    return (
        <ThemeProvider theme={theme}>
            <div className={`_urjefdas3 ${classes.rootHeader}`}>
                <HeaderComponent />
                <IndexMainSection />
            </div>
        </ThemeProvider>
    )
}

export default HomeRoot