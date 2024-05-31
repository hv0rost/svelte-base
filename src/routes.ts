import NotFound from './components/screens/NotFound.svelte'
import Home from './components/screens/home/Home.svelte'
import Restaurant from './components/screens/home/restaurant/Restaurant.svelte'

export const routes = {
	'/': Home,
	'/restaurant/:name': Restaurant,
	'*': NotFound
}
