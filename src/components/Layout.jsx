import { Box } from "@mui/material";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{maxWidth: 1250, mx: 'auto', pt: 8}}>
            <AppBar />
            <Box component='div' sx={{m: 1}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout;