import React from "react";
import { Typography } from "@material-ui/core";
import HomeContainer from "../../containers/HomeContainer";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } =useTranslation()

    return (
        <HomeContainer id="home">
            <Typography variant="h1">{t('welcome')} </Typography>
        </HomeContainer>
    );
};


export default Home;
