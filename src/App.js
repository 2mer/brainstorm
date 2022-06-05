import './App.css';
import AppProviders from './components/Providers/AppProviders';
import {
	AppShell,
	Box,
	Burger,
	Header,
	Image,
	MediaQuery,
	Navbar,
	Stack,
	Text,
	useMantineTheme,
} from '@mantine/core';
import Splash from './components/Splash/Splash';
import Services from './components/Services/Services';
import { useState } from 'react';
import Intro from './components/Intro/Intro';
import Recipes from './components/Recipes/Recipes';
import License from './components/License/License';
import ScrollScene from './components/ScrollScene/ScrollScene';
import Page from './components/Page/Page';

function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppProviders>
			<AppShell
				styles={{
					main: {
						background:
							theme.colorScheme === 'dark'
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint='sm'
				asideOffsetBreakpoint='sm'
				fixed
				// navbar={
				// 	<Navbar
				// 		p='md'
				// 		hiddenBreakpoint='sm'
				// 		hidden={!opened}
				// 		width={{ sm: 200, lg: 300 }}
				// 	></Navbar>
				// }
				header={
					<Header height={70} p='md'>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								height: '100%',
								justifyContent: 'space-between',
							}}
						>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<MediaQuery
									largerThan='sm'
									styles={{ display: 'none' }}
								>
									<Burger
										opened={opened}
										onClick={() => setOpened((o) => !o)}
										size='sm'
										color={theme.colors.gray[6]}
										mr='xl'
									/>
								</MediaQuery>

								{/* title */}
								<Image
									// src='singularity_simplified.svg'
									src='singularity.svg'
									width='40px'
								/>
								<Text pl='1rem' size='xl'>
									BRAINSTORM
								</Text>
							</Box>
						</div>
					</Header>
				}
			>
				<ScrollScene>
					<Stack>
						<Page>
							<Splash />
						</Page>
						<Page position='left'>
							<Intro />
						</Page>
						<Page position='right'>
							<Services />
						</Page>
						<Page position='left'>
							<Recipes />
						</Page>
						<Page>
							<License />
						</Page>
					</Stack>
				</ScrollScene>
			</AppShell>
		</AppProviders>
	);
}

export default App;
