export default {
	template: `
        <header class="app-header flex justify-between align-center">
            <img @click="goHome" src="./assets/img/app-sus-logo.png" alt="app-sus-logo" title="Appsus"/>
            <nav class="flex justify-between align-center">
                <div class="flex align-center"><router-link to="/">Home</router-link></div>
                <div class="flex align-center"><router-link to="/mail">Mail</router-link></div>
            </nav>
        </header>
    `,
    methods: {
        goHome() {
            this.$router.push(`/`)
        }
    },
}
