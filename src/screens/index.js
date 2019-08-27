import React, { Component } from "react";

import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Main from "./Main";
import Setting from "./settings/Setting";
// import SplashScreen from "./SplashScreen";
export default Actions.create(
    <Router>
        <Stack key='root'>

            {/* <Scene key='splashScreen'
                animation='fade'
                component={SplashScreen}
                panHandlers={null}
                hideNavBar={true} /> */}
            <Scene key='main'
                animation='fade'
                component={Main}
                panHandlers={null}
                hideNavBar={true}
                initial
            />
            <Scene key='setting'
                animation='fade'
                component={Setting}
                panHandlers={null}
                hideNavBar={true}
        
            />
            {/* <Scene key='splashScreen'
                animation='fade'
                component={SplashScreen}
                panHandlers={null}
                hideNavBar={true} /> */}

        </Stack>
    </Router>
)

