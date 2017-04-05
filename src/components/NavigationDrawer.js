import React from 'react';
import Drawer from 'material-ui/Drawer';
import EventListener from 'react-event-listener';
import Paper from 'material-ui/Paper';
import Overlay from 'material-ui/internal/Overlay';
import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
  </SvgIcon>
);

export default class NavigationDrawer extends Drawer {
    constructor(props) {
        super(props);
    }

 render() {
    const {
      children,
      className,
      containerClassName,
      containerStyle,
      docked,
      openSecondary,
      overlayClassName,
      overlayStyle,
      style,
      zDepth,
    } = this.props;

    const styles = this.getStyles();

    let overlay;
    if (!docked) {
      overlay = (
        <Overlay
          ref='overlay'
          show={this.shouldShow()}
          className={overlayClassName}
          style={Object.assign(styles.overlay, overlayStyle)}
          transitionEnabled={!this.state.swiping}
          onTouchTap={this.handleTouchTapOverlay}
        />
      );
    }

    return (
      <div
        className={className}
        style={style}
      >
        <EventListener target='window' onKeyUp={this.handleKeyUp} />
        {overlay}
        <Paper
          ref='clickAwayableElement'
          zDepth={zDepth}
          rounded={false}
          transitionEnabled={!this.state.swiping}
          className={containerClassName}
          style={Object.assign(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)}
        >
            {children}
        </Paper>
        <HomeIcon style={{...styles.root, left: styles.root.width, width: '50px', height: '50px', paddingLeft: '1px'}}/>
      </div>
    );
  }
}