import React from "react";
import { makeStyles, Drawer, List, ListItem } from "@material-ui/core";
import { Link } from "react-scroll";
import LangSelector from "./LangSelector";

const MobileMenu = ({ open, onClose, onOpen }) => {
    const classes = useStyles();
    const listItemProps = {
        button: true,
        component: Link,
        onClick: onClose,
        onKeyDown: onClose,
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        className: classes.listItem,
        activeClass: classes.active,
    };

    return (
        <Drawer anchor="left" open={open} onClose={onClose} classes={{ paper: classes.drawer }}>
            <div className={classes.list} role="presentation">
                <List className={classes.fullList}>
                    <ListItem {...listItemProps} to="section1">
                        Section 1
                    </ListItem>
                    <ListItem {...listItemProps} to="section2">
                        Section 2
                    </ListItem>
                    <ListItem {...listItemProps} to="section3">
                        Section 3
                    </ListItem>
                    <ListItem className={classes.btnContainer}>
                        <LangSelector onClose={onClose} />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        backgroundColor: theme.palette.background.default,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
        marginTop: theme.spacing(4),
    },
    listItem: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(2, 0),
        "&:hover": {
            backgroundColor: "rgb(80,80,80)",
        },
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(1),
    },
    active: {
        backgroundColor: theme.palette.primary.main,
    },
}));

export default MobileMenu;
