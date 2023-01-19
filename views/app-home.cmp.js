export default {
    template: `
        <section class="home-page">
            <div class="img-container">
                <img :src="backgroundImg" alt="background-img" />
            </div>
            <div class="about">
                <h3>AppSus Mail is a game-changer in the world of technology.</h3>
                <p>Easily search through your inbox</p>
                <p>Categorize your messages by bookmarks and stars</p>
                <p>Compose and send new emails with ease</p> 
                <p style="fontWeight: 600">Say goodbye to cluttered inboxes and hello to a more organized and efficient email experience with AppSus Mail.</p>
                <nav>
                    <router-link to="/mail"><p class="mail">Try it now!</p></router-link>
                </nav>
                <img class="home-page-img" src="./miss-books/img/illustration-reporting.0215bbf2f950.svg" alt="" />

            </div>
        </section>
    `,
    data() {
        return {
            imgIdx: 1,
        }
    },
    computed: {
        backgroundImg() {
            return `./assets/img/header-background/${this.imgIdx}.jpg`
        }
    },
    created() {
        setInterval(() => {
            if (this.imgIdx === 5) this.imgIdx = 0
            this.imgIdx++
        }, 9000)
    },
}
