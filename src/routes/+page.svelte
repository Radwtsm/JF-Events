<script>
	import Saos from 'saos';

	import { fade, fly } from 'svelte/transition';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="text-white">
	<div class="h-screen" in:fly={{ y: 200, duration: 1000 }} out:fade>
		<h1 class="text-7xl">Rendiamo speciali i tuoi momenti importanti xd.</h1>
		<button class="header-btn">Scopri di più</button>
	</div>

	<Saos animation={'fade-from-bottom 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="project">
			<h2 class="title">Progetto</h2>
			<img src="https://cdn.wallpapersafari.com/79/18/4Hifv8.jpg" alt="" />
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum earum quo aut, doloremque
				eaque voluptates a, officia delectus atque
			</p>
		</div>
	</Saos>

	<div class="team">
		<h2 class="title">team</h2>
		<p>da continuare...</p>
	</div>
</div>

<style>
	@keyframes -global-fade-from-bottom {
		0% {
			-webkit-transform: translateY(50px);
			transform: translateY(50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
