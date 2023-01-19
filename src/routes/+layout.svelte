<script>
	import '../app.postcss';
	import '../styles.css';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Navbar />
<div class="content">
	<slot />
</div>
<Footer />

<style>
	.content {
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
