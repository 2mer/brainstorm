import { Stack, Title } from '@mantine/core';
import React from 'react';
import services from '../../data/services';
import Recipe from './Recipe';

export default function Recipes() {
	return (
		<Stack>
			<Title>Recipes</Title>
			<Recipe
				title="You do what you like, we'll do what you dont"
				services={[services.mindscape, services.autoPilot]}
			>
				Interact with the internet inside the Mindscape, while our
				autopilot handles cooking, getting dressed, taking a shower, etc
			</Recipe>
		</Stack>
	);
}
