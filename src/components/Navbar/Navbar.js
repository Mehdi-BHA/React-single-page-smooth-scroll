import React, { useState } from "react";
import { makeStyles, useMediaQuery, AppBar, Toolbar, Hidden } from "@material-ui/core";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
    const [homeIsActive, setHomeIsActive]=useState(true)
    const isMobile = useMediaQuery("(max-width:700px)");
    const classes = useStyles({ isMobile });
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed" elevation={0} className={classes.navbar} component="nav">
                <Toolbar className={classes.toolbar}>
                    <Logo className={classes.logo} setHomeIsActive={setHomeIsActive} />
                    <Hidden smDown>
                        <Menu homeIsActive={homeIsActive} />
                    </Hidden>
                    <Hidden mdUp>
                        <HamburgerIcon isOpen={mobileNavIsOpen} onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)} />
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden mdUp>
                <MobileMenu
                    open={mobileNavIsOpen}
                    onClose={() => setMobileNavIsOpen(false)}
                    onOpen={() => setMobileNavIsOpen(true)}
                />
            </Hidden>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "150px",
    },
    navbar: {
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: (props) => (props.isMobile ? theme.spacing(0, 2) : theme.spacing(0, 6)),
    },
}));

export default Navbar;
