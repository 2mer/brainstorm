import { Badge, Group, Image, Stack, Text, Title } from '@mantine/core';
import React from 'react';

export default function Recipe({ title, services, children }) {
	return (
		<Stack>
			<Group noWrap position='apart'>
				<Title order={3}>{title}</Title>
				<Group noWrap>
					{services.map((s) => (
						<Badge
							key={s.name}
							leftSection={
								<Image
									size='xl'
									radius='xl'
									width='16px'
									height='16px'
									src={s.icon}
								/>
							}
						>
							{s.name}
						</Badge>
					))}
				</Group>
			</Group>
			<Text>{children}</Text>
		</Stack>
	);
}
