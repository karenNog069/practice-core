import menuListInfo from "../../config/menu.json"

export default {
    name: 'index',

    data() {
        return {
            menuList: menuListInfo.menuInfo,
            clickFlag: 0,
        }
    },

    created() {

    },

    mounted() {

    },

    methods: {
        loginOut() {
            this.$router.replace('/login')
        },
        changeMenu(menuInfo, index) {
            this.clickFlag = index
        }
    }
}