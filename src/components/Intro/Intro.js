import { Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';

export default function Intro() {
	return (
		<Group>
			<Stack>
				<Title>Our hardware</Title>
				<Text>
					The Brainstorm StormLink is a low powered chip, acting as an
					interface between flesh and metal. emulating brain activity
					signals using electricity, allowing for both input and
					output to and from the brain. the chip contain little to no
					computational power, the computations are performed in the
					cloud.
				</Text>
				<Title>Our software</Title>
				<Text>
					We expose a simple developer API, abstracting away brain
					activity into simple events, and a realtime runtime that
					translates machine code to brain signals
				</Text>
				<Title>Core concepts</Title>
				<Text>
					Interaction with brain resources has been abstracted with
					the current code eco-system in mind, it speaks in the same
					way as most computers do. short term memory is equivalent to
					machine memory (RAM), and long term memory is the same as
					solid state memory
				</Text>
			</Stack>
		</Group>
	);
}
