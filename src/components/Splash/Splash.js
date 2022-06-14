import { Box, Image, Stack, Text, Title } from '@mantine/core';
import React from 'react';

export default function Splash() {
	return (
		<Stack align='center' p='xl'>
			<Box
				sx={{
					filter: 'drop-shadow(0px 0px 19px #ffffff5e) drop-shadow(0px 0px 4px white) drop-shadow(0px 0px 2px white)',
				}}
			>
				<Image width='250px' src='images/brainstorm.svg' />
			</Box>
			<Title>BRAINSTORM</Title>

			<Title>Humanity has just Leveled-Up</Title>
			<Text>Introducing a fundamental change to the way we think</Text>
		</Stack>
	);
}
