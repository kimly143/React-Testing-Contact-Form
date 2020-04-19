import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

test.afterEach(cleanup);

test('renders App without crashing', () => {
	render(<App />);
});
