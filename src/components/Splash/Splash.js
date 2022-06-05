import { Image, Stack, Text, Title } from '@mantine/core';
import React from 'react';

export default function Splash() {
	return (
		<Stack align='center' p='xl'>
			<Image width='250px' src='singularity.svg' />
			<Title>BRAINSTORM</Title>

			<Title>Humanity has just Leveled-Up</Title>
			<Text>Introducing a fundamental change to the way we think</Text>
		</Stack>
	);
}
