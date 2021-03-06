// InsightCards dynamiclly generates the apropriate insight cards
// given an array of insight types and text

import React from 'react'
import BlockCard from './BlockCard';
import Grid from '@material-ui/core/Grid';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import FiberNew from '@material-ui/icons/FiberNew';
import FindReplace from '@material-ui/icons/FindReplace';
import CallMerge from '@material-ui/icons/CallMerge';
import LocationOn from '@material-ui/icons/LocationOn';
import Grade from '@material-ui/icons/Grade';
import { Typography } from '@material-ui/core';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isMobileOnly
  } from "react-device-detect";


class InsightCards extends React.Component {
    constructor(props) {
        super(props);
        this.createInsightCard.bind(this);
        this.createInsightCards.bind(this)

    }

    // create insight card icons, colors, and text, insert them into a grid
    createInsightCard(i) {
        var iconType;
        switch (this.props.InsightsValues[i].type){
            case 'Trending Up':
                iconType = <TrendingUp fontSize = "large" nativeColor= "#00e676" />;
                break;
            case 'Trending Down':
                iconType = <TrendingDown fontSize = "large" nativeColor = "#f44336" />;
                break;
            case 'Flat':
                iconType = <TrendingFlat fontSize = "large" nativeColor = "#607d8b"/>;
                break;
            case 'New':
                iconType = <FiberNew fontSize = "large" nativeColor = "#2196f3"/>;
                break;
            case 'Replace':
                iconType = <FindReplace fontSize = "large" nativeColor = "#ffea00"/>;
                break;
            case 'Location Insight':
                iconType = <LocationOn fontSize = "large" nativeColor = "#000000"/>;
                break;
            case 'Correlation':
                iconType = <CallMerge fontSize = "large" nativeColor = "#008080"/>;
                break;
            case 'Dominant Skill':
                iconType = <Grade fontSize = "large" nativeColor = "#ffea00"/>;
                break;
        }
        if (isMobileOnly) {
            let insightCard =
            <Grid key={i} item xs={12}>
                <BlockCard 
                    payload={<Typography align="center" >{this.props.InsightsValues[i].insight} </Typography>}
                    actionsTop={iconType}
                />
            </Grid>;
        return insightCard
        }
        else {
            let insightCard =
            <Grid key={i} item xs={4}>
                <BlockCard 
                    payload={<Typography align="center" >{this.props.InsightsValues[i].insight} </Typography>}
                    actionsTop={iconType}
                />
            </Grid>;
        return insightCard
        }
    }

    createInsightCards() {

        let genCards = [];
        for (let i = 0; i < this.props.InsightsValues.length; i++) {
            let insightCard = this.createInsightCard(i);
            genCards.push(insightCard);
        }

        let insightGrid = 
            <Grid
                container 
                spacing={24}
                alignItems="center"
                justify="center"
                style={{
                    margin: 0,
                    width: '100%',
                }}
            >
            {genCards}
            </Grid>;
        return insightGrid;
    }

    render() {
        return (
            <div>
                {this.createInsightCards()}
            </div>
        );
    }
}

export default InsightCards
