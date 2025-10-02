export default {
    publicDir: './static/', // Path from "root" to static assets (files that are served as they are)
    base: process.env.NODE_ENV === 'production' ? '/Shark-Tank-Pitch-Generator/' : '',
}