import React, { useState, useEffect } from "react";
import { Tab, Tabs,  makeStyles, withStyles } from "@material-ui/core";
import { Link, Events } from "react-scroll";
import LangSelector from "./LangSelector";

const smoothScrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
};

const Menu = ({homeIsActive}) => {
    const classes = useStyles();
    const [value, setValue] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            setIsScrolling(true);
        });

        Events.scrollEvent.register("end", (to, element) => {
            setIsScrolling(false);
        });
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const spyHandleChange = (index) => {
        if (!isScrolling) {
            setValue(index);
        }
    };

    useEffect(() => {
        if (homeIsActive){
            setValue(false)
        }
    }, [homeIsActive])

    return (
        <div className={classes.wrapper}>
            <StyledTabs
                className={classes.tabs}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <StyledTab component={Link} {...smoothScrollProps} to="section1" label="Section 1" onSetActive={() => spyHandleChange(0)} />
                <StyledTab component={Link} {...smoothScrollProps} to="section2" label="Section 2" onSetActive={() => spyHandleChange(1)} />
                <StyledTab component={Link} {...smoothScrollProps} to="section3" label="Section 3" onSetActive={() => spyHandleChange(2)} />
                
            </StyledTabs>
            <LangSelector style={{ marginLeft: "32px" }} />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
    },
    tabs: {
        marginRight: theme.spacing(4),
    },
}));

const StyledTab = withStyles((theme) => ({
    root: {
        transition: ".2s",
        minWidth: 120,
        "&:hover": {
            color: theme.palette.text.primary,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        "& > span": {
            maxWidth: 20,
        },
    },
})((props) => <Tabs {...props} variant="fullWidth" TabIndicatorProps={{ children: <span /> }} />);

export default Menu;
