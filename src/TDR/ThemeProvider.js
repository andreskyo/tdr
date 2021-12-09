import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
// component-lib/ThemeProvider.js
import Theme  from '../themes/default';
const defaultTheme = {
    main: 'mediumseagreen',
    secondary: 'white',
    // 👆 Create the default theme
};

const ComponentLibThemeProvider = (props) => {

    return (
        <ThemeProvider theme={Theme}>
            {props.children}
        </ThemeProvider>
    );
};

export default ComponentLibThemeProvider;
