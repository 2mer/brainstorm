import { Box, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import services from '../../data/services';

export default function Services() {
	return (
		<Stack>
			<Title>Our Services</Title>
			<Text>
				We have ready-to-use services enabled with minimal effort. Let
				us think for you.
			</Text>

			<Grid columns={2}>
				{Object.values(services).map((service) => {
					return (
						<Grid.Col span={1} key={service.name}>
							<Group noWrap align='start'>
								<Image
									width='100px'
									height='100px'
									src={service.icon}
									withPlaceholder
								/>
								<Stack>
									<Title order={3}>{service.name}</Title>
									<Text>{service.description}</Text>
								</Stack>
							</Group>
						</Grid.Col>
					);
				})}
			</Grid>
		</Stack>
	);
}
