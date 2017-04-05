import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import AppBar from 'material-ui/AppBar'

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    },

    logoImg: {
        backgroundImage: 'url("./../../dist/img/logoHeader.jpg")',
        backgroundPositionX: 'left',
        backgroundPositionY: 'top',
        backgroundSize: 'cover'
    },

    logoHeight: {
        height: '250px'
    },

    fontFamily: {
        fontFamily: 'Lobster, cursive, Arial, "Liberation Sans", FreeSans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal'
    }
});

const Header = () => (
  {/*<header className={css(styles.logoImg, styles.fontFamily, styles.logoHeight)} >
      <div>Header</div>
  </header>*/},
  <TestCss>
      {/*console.log('css', css(styles.logoImg, styles.fontFamily, styles.logoHeight))*/}
      <AppBar/>
  </TestCss>
  
)

const TestCss = () => (
    <header className={css(styles.logoImg, styles.fontFamily, styles.logoHeight)}>
        ООО "КранТехСервис"
    </header>
)

export default Header