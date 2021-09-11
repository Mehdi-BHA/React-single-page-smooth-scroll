import React, { useEffect } from "react";
import { makeStyles, Container } from "@material-ui/core";
import { useInView } from "react-intersection-observer";

const SectionContainer = ({ children, ...rest }) => {
    const classes = useStyles();
    const [sectionRef, sectionInView] = useInView();

    useEffect(() => {
        if (sectionInView){
            console.log("New section in view")
        }
    }, [sectionInView])

    return (
        <Container ref={sectionRef} component="section" className={classes.container} {...rest}>
            {children}
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:`calc( 100vh - ${theme.navbarHeight})`,
    },
}));

export default SectionContainer;
