import { Button } from 'components/primitives';
import Image from 'next/image';
import Link from 'next/link';

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr';

export default function Page() {
	return (
		<>
			{/* Hero Section */}
			<div className='container mx-auto flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 bg-[url("/hero-bg.gif")] bg-center bg-cover bg-no-repeat'>
				<p className="font-medium text-sm uppercase tracking-widest">
					About Us
				</p>
				<h1 className="gradient-hero-title max-w-[24ch] text-center font-light text-7xl leading-tight">
					Get to know the brains behind Shodh.AI
				</h1>
				<p className="mb-6 max-w-[54ch] text-center opacity-80">
					Founded in 2024, our journey began with a vision to simplify
					and accelerate AI adoption for businesses across diverse
					industries. Our founders, inspired by the transformative
					potential of small language models (SLMs), set out to create
					a platform that would bridge the gap between cutting-edge AI
					research and practical applications.
				</p>
			</div>

			{/* Mission and Expertise Section */}
			<div className="container flex flex-col gap-16 py-28">
				<h2 className="font-light text-7xl text-gray">
					Mission and Expertise
				</h2>

				<div className="grid grid-cols-2">
					<div className="z-10">
						<div className="gradient-border translate-x-16 translate-y-64 bg-white/[0.06] p-8 backdrop-blur-2xl">
							<h3 className="mb-6 font-light text-4xl text-gray">
								Our Mission
							</h3>
							<p className="text-gray/80">
								At Shodh.ai, we believe that SLMs will
								revolutionize how enterprises build AI
								applications. Our mission is to provide a
								robust, user-friendly platform that addresses
								the common challenges faced by businesses in
								adopting AI.
							</p>
						</div>
					</div>

					<div className="relative">
						<Image
							src="/our-mission.svg"
							alt="Our Mission"
							width={100}
							height={100}
							className="aspect-square w-full"
						/>
					</div>
				</div>

				<div className="grid grid-cols-2">
					<div className="relative">
						<Image
							src="/what-we-do.svg"
							alt="Our Mission"
							width={100}
							height={100}
							className="aspect-square w-full"
						/>
					</div>

					<div>
						<div className="gradient-border translate-x-[-64px] translate-y-64 bg-white/[0.06] p-8 backdrop-blur-2xl">
							<h3 className="mb-6 font-light text-4xl text-gray">
								What We Do
							</h3>
							<p className="text-gray/80">
								We offers the first app store for AI models
								tailored for enterprises. Our platform is
								designed to cater to specific needs, with a
								strong focus on LLMs but extending beyond them.
								We provide tools & resources to work
								efficiently.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Leadership Section */}
			<div className="container flex flex-col gap-32">
				<h2 className="font-light text-7xl text-gray">Leadership</h2>

				<div className="gradient-border grid grid-cols-2">
					<div className="flex flex-col gap-4 p-12">
						<div className="flex items-center justify-between">
							<h4 className="text-3xl">Dr. Arastu Sharma</h4>

							<Link href="/">
								<LinkedinLogo size={24} />
							</Link>
						</div>

						<span className="mt-[-10px] self-start rounded-md bg-blue/20 p-1.5 font-medium text-blue tracking-widest">
							CEO
						</span>

						<p className="opacity-70">
							Dr. Arastu Sharma holds a PhD in Machine Learning
							from the University of Cambridge. During his tenure
							at Microsoft, he led a significant project that
							successfully reduced Azure data warehouse costs by
							over $100 million per month. Additionally, he
							developed a cutting-edge computer vision tool that
							was subsequently acquired by GSK.
						</p>
					</div>

					<Image
						src="/arastu.svg"
						alt="Dr. Arastu Sharma"
						height={1024}
						width={1024}
						className="scale-105"
					/>
				</div>

				<div className="gradient-border grid grid-cols-2">
					<Image
						src="/neeta.svg"
						alt="Dr. Neeta Trivedi"
						height={1024}
						width={1024}
						className="scale-105"
					/>

					<div className="flex flex-col gap-4 p-12">
						<div className="flex items-center justify-between">
							<h4 className="text-3xl">Dr. Neeta Trivedi</h4>

							<Link href="/">
								<LinkedinLogo size={24} />
							</Link>
						</div>

						<span className="mt-[-10px] self-start rounded-md bg-blue/20 p-1.5 font-medium text-blue tracking-widest">
							CTO
						</span>

						<p className="opacity-70">
							Dr. Neeta Trivedi earned her PhD in Sensor Networks
							from the Indian Institute of Science (IISc). She has
							over 20 years of experience at DRDO, where she led
							AI projects for fighter jets and drones. She is also
							the founder of InferQ, a company specializing in
							defense AI projects.
						</p>
					</div>
				</div>

				<div className="gradient-border grid grid-cols-2">
					<div className="flex flex-col gap-4 p-12">
						<div className="flex items-center justify-between">
							<h4 className="text-3xl">Marc Sommer</h4>

							<Link href="/">
								<LinkedinLogo size={24} />
							</Link>
						</div>

						<span className="mt-[-10px] self-start rounded-md bg-blue/20 p-1.5 font-medium text-blue tracking-widest">
							CPO
						</span>

						<p className="opacity-70">
							Marc Sommer holds an MSc in Information Systems from
							the Technical University of Munich (TUM). He has
							experience consulting financial companies in Quantum
							Computing at Sopra Steria. Additionally, he is the
							founder of Machbarschaft, an award-winning ML-driven
							NGO.
						</p>
					</div>

					<Image
						src="/marc.svg"
						alt="Marc Sommer"
						height={1024}
						width={1024}
						className="scale-105"
					/>
				</div>
			</div>

			{/* Meet the Team Section */}
			<div className="container flex flex-col gap-16 py-28">
				<h2 className="font-light text-7xl text-gray">Meet the team</h2>

				<div className="flex gap-8">
					<Button
						rounded
						twStyles="!bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						View All
					</Button>

					<Button
						rounded
						twStyles="bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						Product
					</Button>

					<Button
						rounded
						twStyles="bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						Research
					</Button>

					<Button
						rounded
						twStyles="bg-white/25 uppercase text-white tracking-widest text-sm"
					>
						Application
					</Button>
				</div>

				<div className="grid grid-cols-3 gap-8">
					<div className="gradient-border flex flex-col gap-2 p-6">
						<Image
							src="/marc.svg"
							alt="Marc Sommer"
							height={512}
							width={512}
						/>

						<p className="my-1">"Never give up until it's done"</p>

						<div>
							<h4 className="font-medium text-2xl text-white/90">
								Marc Sommer
							</h4>
							<p className="text-white/60">ML Intern</p>
						</div>
					</div>

					<div className="gradient-border flex flex-col gap-2 p-6">
						<Image
							src="/marc.svg"
							alt="Marc Sommer"
							height={512}
							width={512}
						/>

						<p className="my-1">"Never give up until it's done"</p>

						<div>
							<h4 className="font-medium text-2xl text-white/90">
								Marc Sommer
							</h4>
							<p className="text-white/60">ML Intern</p>
						</div>
					</div>

					<div className="gradient-border flex flex-col gap-2 p-6">
						<Image
							src="/marc.svg"
							alt="Marc Sommer"
							height={512}
							width={512}
						/>

						<p className="my-1">"Never give up until it's done"</p>

						<div>
							<h4 className="font-medium text-2xl text-white/90">
								Marc Sommer
							</h4>
							<p className="text-white/60">ML Intern</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
