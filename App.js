import React from 'react';

import { View, StatusBar } from 'react-native';

import Router from './Router';
import constants from './src/utils/constants';

const assets = [];

const App = () => {
	return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle={'dark-content'}></StatusBar>
				<Router></Router>
			</View>
	);
};

export default App;