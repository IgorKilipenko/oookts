import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './../actions'
import Header from './../components/Header'
import Menu from './../components/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MouseCoordinates from './../components/MouseCoordinates';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { StyleSheet, css } from 'aphrodite';

injectTapEventPlugin();


class App extends Component {
    constructor(props) {
        super(props);
    }

    addTrack() {
        if (this.trackInput.value) {
            this.props.actions.onAddTrack(this.trackInput.value);
            this.trackInput.value = '';
        }
        this.props.actions.onChangeVisible(false);
    }

    mouseMove(event) {
        this.props.actions.onMouseMove({x: event.pageX, y:event.pageY});
        this.props.actions.onToggleMenu(event.pageX <= 0);
    }

    componentWillMount() {
        document.onmousemove = this.mouseMove.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className={`${css(styles.flexContainer)} viewport`}>  
                    <Menu open={this.props.toggleMenu}/>
                    <Header />
                    <MouseCoordinates coords={this.props.mouseCoordinates}/>
                    <div>
                        {this.props.children}
                        <div>
                            <input type='text' ref={input => this.trackInput = input} />
                            <button onClick={this.addTrack.bind(this)}>Добавить трэк</button>
                            <ul>{this.props.tracks.map((track, index) =>
                                <li key={index}>{track}</li>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}



const mapStateToProps = state => ({
  //todos: state.todos
    tracks: state.tracks,
    visible: state.visible,
    playlists: state.playlists,

    mouseCoordinates: state.mouseMove,
    toggleMenu: state.toggleMenu
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        height: '100%',
    }
});

//export default connect(
//    state => ({
//        tracks: state.tracks,
//        visible: state.visible
//    }),
//    dispatch => ({
//        onAddTrack: trackName => {
//            dispatch({
//                type: actionTypes.ADD_TRACK,
//                payload: trackName
//            })
//        },
//        onChangeVisible: isVisible => {
//            dispatch({
//                type: actionTypes.CHANGE_VISIBBLE,
//                payload: isVisible
//            })
//        }
//    })
//)(App);
