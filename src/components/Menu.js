import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import { StyleSheet, css } from 'aphrodite';
import NavigationDrawer from './NavigationDrawer';

class MenuInit {
    constructor(name) {
        this.name = name;
        this.value = name;
    }
}

const items = [
    new MenuInit('Продукция'),
    new MenuInit('Вакансии'),
    new MenuInit('Контакты')
]



class Menu extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        anchorEl: undefined,
        open: this.props.open || false,
        selectedIndex: 1,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.open && !this.state.open) {
            this.setState({ open: true });
        }
    }

    handleOpen = () => this.setState({open: true});
    handleClickListItem = (event) => this.setState({ open: true, anchorEl: event.currentTarget });
    handleMenuItemClick = (event, index) => this.setState({ selectedIndex: index, open: false });
    handleRequestClose = () => this.setState({ open: false });

    render() {   
        return (
            <nav className={css(styles.flexContainer)}>
                <AppBar />
                <NavigationDrawer 
                    open={this.state.open} docked={false} 
                    onRequestChange={open => this.setState({open})}
                >
                    {items.map((item, index) => (<MenuItem key={index}>{item.value}</MenuItem>))}
                </NavigationDrawer>           
            </nav>
        )
    }
}

export default Menu


const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        height: '100%',
    }
});