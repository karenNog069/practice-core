export default {
    name: 'index',

    data() {
        return {}
    },

    mounted() {
    },

    methods: {
        loginOut() {
            this.$router.replace('/login')
        }
    }
}