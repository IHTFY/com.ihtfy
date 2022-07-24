<script>
	import Card from '../base/card.svelte';
	import Section from '../layout/section.svelte';
	import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
	import ThreeTwoOneGrid from '$lib/components/layout/3-2-1-grid.svelte';
	import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
	import ExternalLinkIcon from '$lib/svg/external-link.svelte';
	import Github from '$lib/svg/socials/github.svelte';
	import Blobs from '../layout/blobs.svelte';
	import Image from '../base/image.svelte';
	import Tag from '../base/tag.svelte';
</script>

<section id="projects">
	<Section
		align="top"
		title="Projects"
		description="Games, tools, and other projects I've worked on."
	>
		<OneByOneGrid>
			<ProjectsGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="domination" alt="Domination" />
					</div>
					<div slot="content">
						<div class="title">
							Domination
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/chess-domination"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://domination.ihtfy.com"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A place to play around with some chess puzzles.
							<a class="project-post-button button secondary-light transparent" href="/domination">
								Read blog post
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Game</Tag>
							<Tag>PWA</Tag>
							<Tag color="secondary">Vanilla JS</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="empire" alt="Empire" />
					</div>
					<div slot="content">
						<div class="title">
							Empire
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/Empire"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://empire.ihtfy.com"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">An automated gamemaster for the party game, Empire.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Game</Tag>
							<Tag>PWA</Tag>
							<Tag color="secondary">Vanilla JS</Tag>
							<Tag color="secondary">Firebase</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="vortex" alt="Vortex" />
					</div>
					<div slot="content">
						<div class="title">
							Vortex
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/vortex"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://vortex.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							An implementation of the modular times table.
							<a class="project-post-button button secondary-light transparent" href="/overflow">
								Read blog post
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Math Visualization</Tag>
							<Tag color="secondary">D3</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="knight-puzzle" alt="Knight Puzzle" />
					</div>
					<div slot="content">
						<div class="title">
							Knight Puzzle
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/knight-puzzle"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://knightpuzzle.ihtfy.com"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A puzzle game using just a knight and a queen.
							<a class="project-post-button button secondary-light transparent" href="/knight">
								Read blog post
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Game</Tag>
							<Tag>PWA</Tag>
							<Tag color="secondary">Bulma</Tag>
							<Tag color="secondary">chessboard.js</Tag>
							<Tag color="secondary">jquery</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="svg-scale" alt="SVG Scale" />
					</div>
					<div slot="content">
						<div class="title">
							SVG Scale
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/svg-scale"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://scale.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">An online tool to directly scale the path of an SVG file.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">Vanilla JS</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="optics" alt="Optics" />
					</div>
					<div slot="content">
						<div class="title">
							Optics
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/Optics"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://optics.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A web game based on the card game, Illusion.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Game</Tag>
							<Tag>PWA</Tag>
							<Tag color="secondary">Svelte</Tag>
							<Tag color="secondary">SortableJS</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="workout" alt="Workout" />
					</div>
					<div slot="content">
						<div class="title">
							Workout
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/workout"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://workout.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">An online workout tracker.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">VanillaJS</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
							<Tag color="secondary">ChartJS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="phonetic" alt="Phonetic" />
					</div>
					<div slot="content">
						<div class="title">
							Phonetic
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/Phonetic"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://nato.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A tool to learn the phonetic alphabet.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">VanillaJS</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="mandelbrot" alt="Mandelbrot" />
					</div>
					<div slot="content">
						<div class="title">
							Mandelbrot
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/mandelbrot"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://mandelbrot.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A tool to view the Mandelbrot set to arbitrary depth.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Math Visualization</Tag>
							<Tag color="secondary">VanillaJS</Tag>
							<Tag color="secondary">HTML Canvas</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="curious-copy-cat" alt="Curious Copy Cat" />
					</div>
					<div slot="content">
						<div class="title">
							Curious Copy Cat
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/curiousCopyCat"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
							</div>
						</div>
						<div class="text">A tool to save a curiouscat.me page as a JSON.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">Node</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="js-bookmarklets" alt="JS Bookmarklets" />
					</div>
					<div slot="content">
						<div class="title">
							JS Bookmarklets
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/JavaScript-Bookmarklets"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://jslinks.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A collection of scripts you can run from a browser bookmark.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">VanillaJS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="chess-engine" alt="Chess Engine" />
					</div>
					<div slot="content">
						<div class="title">
							Chess Engine
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/chess"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://chess.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A custom chess engine.
							<a
								class="project-post-button button secondary-light transparent"
								href="/chess-engine"
							>
								Read blog post
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Game</Tag>
							<Tag color="secondary">chess.js</Tag>
							<Tag color="secondary">Webpack</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="calendar-maker" alt="Calendar Maker" />
					</div>
					<div slot="content">
						<div class="title">
							Calendar Maker
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/calendar-maker"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://cmaker.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A custom calendar maker. In progress...</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">Svelte</Tag>
							<Tag color="secondary">DexieJS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="telewave" alt="Telewave" />
					</div>
					<div slot="content">
						<div class="title">
							Telewave
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/telewave"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://telewave.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">Based on the board game, Wavelength.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Game</Tag>
							<Tag color="secondary">Vanilla JS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="cellular-automata" alt="Cellular Automata" />
					</div>
					<div slot="content">
						<div class="title">
							Cellular Automata
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/Cellular-Automata"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://ihtfy.github.io/Cellular-Automata/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">An implementation of Conway's Game of Life.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Math Visualization</Tag>
							<Tag color="secondary">VanillaJS</Tag>
							<Tag color="secondary">HTML Canvas</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="website" alt="Website" />
					</div>
					<div slot="content">
						<div class="title">
							Website
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/com.ihtfy"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://ihtfy.com"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">This website.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Website</Tag>
							<Tag color="secondary">SvelteKit</Tag>
							<Tag color="secondary">SASS</Tag>
							<Tag color="secondary">MDsveX</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="teas-test" alt="TEAS Test" />
					</div>
					<div slot="content">
						<div class="title">
							TEAS Test
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/TEAS"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://ihtfy.github.io/TEAS/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A tool to practice the Math portion of the TEAS test.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">VanillaJS</Tag>
							<Tag color="secondary">MaterializeCSS</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="cups" alt="Cups" />
					</div>
					<div slot="content">
						<div class="title">
							Cups
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/cups"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://cups.ihtfy.com/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">A tool to play around with the Three Cups Problem.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Math Visualization</Tag>
							<Tag color="secondary">VanillaJS</Tag>
							<Tag color="secondary">Bootstrap</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="timer" alt="Timer" />
					</div>
					<div slot="content">
						<div class="title">
							Timer
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/IHTFY/timer"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://timer.ihtfy.com"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">An online timer to track a habit.</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Web Tool</Tag>
							<Tag color="secondary">VanillaJS</Tag>
						</div>
					</div>
				</Card>
			</ProjectsGrid>
		</OneByOneGrid>
	</Section>
	<Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			a {
				width: 30px;
				height: 30px;
				padding: 3px;

				&:hover {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}

	.project-post-button {
		width: fit-content;
		margin: 10px auto 0;
		font-weight: 500;
	}
</style>
