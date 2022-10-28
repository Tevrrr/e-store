/** @format */

import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import React, { createContext, useState } from 'react';
import { ReactNode, useMemo } from 'react';

interface ThemeModeProviderProps {
	children: ReactNode;
}

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ... {
            // palette values for light mode
            primary: {
                main: '#70908B',
                dark: '#07484A',
            },
            secondary: {
                main: '#EEEBFF',
                dark: '#FFF4E7',
                light: '#FDFBF8',
            },
            success: {
                main: '#CAF3E5',
            },
        }
    }
})


export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeModeProvider: NextPage<ThemeModeProviderProps> = ({ children }) => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	const toggleColorMode = () => {
		setMode(mode === 'light' ? 'dark' : 'light');
	};

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	return (
		<ColorModeContext.Provider value={{ toggleColorMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ThemeModeProvider;
