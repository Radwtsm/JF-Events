<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle color="none">
	<NavBrand href="/">
		<a href="/" class="self-center whitespace-nowrap text-xl font-semibold text-white">
			JF Events
		</a>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl color="primary" {hidden}>
		<!-- <NavLi href="/" active={true}>Home</NavLi> -->

		<NavLi on:click={toggle} href="/cinema">Cinema</NavLi>
		<NavLi on:click={toggle} href="/televisione">Televisione</NavLi>
		<NavLi on:click={toggle} href="/grandieventi">Grandi Eventi</NavLi>
	</NavUl>
</Navbar>
