import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/es/styles/createMuiTheme';
import AppBar from "@material-ui/core/AppBar/AppBar";
import classNames from "classnames";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import {mailFolderListItems, otherMailFolderListItems} from "./components/tileData";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const maintheme = createMuiTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#cddc39',
        }
    },
});
const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});
class App extends Component {
    state = {
        anchor: 'left',
    };
  render() {
      const { classes } = this.props;
      const { anchor } = this.state;
      const drawer = (
          <Drawer variant="permanent"
                  classes={{
                      paper: classes.drawerPaper,
                  }}
                  anchor={anchor}>
              <div className={classes.toolbar} />
              <Divider />
              <List>{mailFolderListItems}</List>
              <Divider />
              <List>{otherMailFolderListItems}</List>
          </Drawer>
      );
    return (
      <div className="App">
          <MuiThemeProvider theme={maintheme}>
              <div className={classes.root}>
                  <div className={classes.appFrame}>
                      <AppBar position="absolute" className={classNames(classes.appBar, classes[`appBar-${anchor}`])}>
                          <Toolbar>
                              <Typography variant="title" color="inherit" noWrap>
                                  Title goes here
                              </Typography>
                          </Toolbar>
                      </AppBar>
                      {drawer}
                      <main className={classes.content}>
                          <div className={classes.toolbar} />
                          <Typography>{'Content all here'}</Typography>
                      </main>
                  </div>
              </div>
          </MuiThemeProvider>
      </div>
    );
  }
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
