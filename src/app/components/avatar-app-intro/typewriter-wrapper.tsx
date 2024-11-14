"use client";

import React from "react";
import Typewriter from "typewriter-effect";

interface TypewriterWrapperProps {
	text: string[];
	typeDelay?: number;
	deleteDelay?: number;
	pauseDuration?: number;
	className?: string;
}

const TypewriterWrapper: React.FC<TypewriterWrapperProps> = ({
	text,
	typeDelay = 75,
	deleteDelay = 50,
	pauseDuration = 3000,
	className = "",
}) => {
	return (
		<Typewriter
			onInit={(typewriter) => {
				text.forEach((line) => {
					typewriter.typeString(line).pauseFor(pauseDuration).deleteAll(deleteDelay);
				});
				typewriter.start();
			}}
			options={{
				autoStart: true,
				loop: true,
				delay: typeDelay,
				wrapperClassName: className,
			}}
		/>
	);
};

export default TypewriterWrapper;
