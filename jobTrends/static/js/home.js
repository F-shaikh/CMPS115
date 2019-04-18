// adds the navbar and react router routing

import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import GraphForm from './GraphForm.js';
import ManualGraphForm from './ManualGraphForm.js';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Switch, Route} from 'react-router'
import TileCardGrid from './TileCardGrid.js';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


const styles = {
    root: {
        flexGrow: 1,
        top: 0,
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Home extends React.Component {
    //state = {};
    constructor(props) {
        super(props);
        this.state = {
            signed_in: false,
            user_name: ''
        };
        this.createAppBar.bind(this);
    }

    componentDidMount() {
        axios.get('user_info', {
            responseType: 'json'
        }).then(response => {
            console.log(response);
            if (response.data.signed_in) {
                this.setState({signed_in: true, user_name: response.data.first + ' ' + response.data.last});
            } else {

            }
        });
    }

    createSignIn() {
        if (this.state.signed_in) {
            return (
                <Typography paragraph>{this.state.user_name}</Typography>
            );
        } else {
            return (
                <div>
                    <a href="/accounts/linkedin_oauth2/login/?process=login">
                        <img src="/static/images/signin-button.png"/>
                    </a>
                </div>
            );
        }
    }

    createAppBar() {
        return (
            <div className={this.props.root}>
                <AppBar position="static" style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
                    <Toolbar>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <IconButton
                                className={this.props.menuButton}
                            >
                                <HomeIcon style={{color: '#424242'}}/>
                            </IconButton>
                        </Link>
                        {this.createSignIn()}
                    </Toolbar>
                </AppBar>
                <Typography paragraph></Typography>
            </div>
        );
    }

    render() {
        return (
            <Router>
                <div>
                    {this.createAppBar()}
                    <Switch>
                        <Route exact path="/" component={TileCardGrid}/>

                        <Route
                            path="/amazon"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={"amazon.com"}
                                        titles={""}
                                        data_component={"bar_graph"}
                                        name={"amazon"}
                                        title={"Top Skills for Amazon"}
                                    />
                            }
                        />

                        <Route
                            path="/apple"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={"apple"}
                                        titles={""}
                                        data_component={"bar_graph"}
                                        name={"apple"}
                                        title={"Top Skills for Apple"}
                                    />
                            }
                        />

                        <Route
                            path="/google"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={"google"}
                                        titles={""}
                                        data_component={"bar_graph"}
                                        name={"google"}
                                        title={"Top Skills for Google"}
                                    />
                            }
                        />

                        <Route
                            path="/microsoft"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={"microsoft"}
                                        titles={""}
                                        data_component={"bar_graph"}
                                        name={"microsoft"}
                                        title={"Top Skills for Microsoft"}
                                    />
                            }
                        />

                        <Route
                            path="/frontend"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={""}
                                        titles={["frontend", "front end"]}
                                        data_component={"bar_graph"}
                                        name={"frontend"}
                                        title={"Top Front End Skills"}
                                    />
                            }
                        />

                        <Route
                            path="/backend"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={""}
                                        titles={["backend", "back end"]}
                                        data_component={"bar_graph"}
                                        name={"backend"}
                                        title={"Top Back End Skills"}
                                    />
                            }
                        />

                        <Route
                            path="/fullstack"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={""}
                                        titles={["fullstack", "full stack"]}
                                        data_component={"bar_graph"}
                                        name={"fullstack"}
                                        title={"Top Full Stack Skills"}
                                    />
                            }
                        />

                        <Route
                            path="/cybersecurity"
                            render={
                                (props) =>
                                    <GraphForm
                                        {...props}
                                        filters={[]}
                                        period={"week"}
                                        age={"all_time"}
                                        raw_bool={false}
                                        locations={""}
                                        companies={""}
                                        titles={['cyber security', 'malware', 'infosec', 'security', 'penetration', 'pen tester']}
                                        data_component={"bar_graph"}
                                        name={"cybersecurity"}
                                        title={"Top Cyber Security Skills"}
                                    />
                            }
                        />

                        <Route
                            path="/manual"
                            component={ManualGraphForm}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Home;

