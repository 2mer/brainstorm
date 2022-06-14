import { Box, Grid, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import services from '../../data/services';

export default function Services() {
	return (
		<Stack spacing='3rem'>
			<Stack spacing='sm'>
				<Title>Our Services</Title>
				<Text>
					We have ready-to-use services enabled with minimal effort.
					Let us think for you.
				</Text>
			</Stack>

			<Grid columns={2} gutter='xl'>
				{Object.values(services).map((service) => {
					return (
						<Grid.Col span={1} key={service.name}>
							<Group noWrap align='start'>
								{/* <Image
									width='100px'
									height='100px'
									src={service.icon}
									withPlaceholder
								/> */}
								<Box
									sx={{
										width: '100px',
										height: '100px',
										mask: `url(${service.icon})`,
										backgroundColor: 'black',
										flexShrink: 0,
										maskSize: 'contain',
									}}
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
