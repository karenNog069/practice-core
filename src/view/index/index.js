import menuListInfo from "../../config/menu.json"
import MainCube from "@/view/mainCube/mainCube.vue";

export default {
    name: 'index',
    components: {MainCube},
    data() {
        return {
            menuList: menuListInfo.menuInfo,
            clickFlag: 0,
            menuTag: 'main',
            menuId: '1',
            pageUrl: ''
        }
    },

    created() {
        this.resetPage()
    },

    mounted() {

    },

    methods: {
        loginOut() {
            this.$router.replace('/login')
        },
        changeMenu(menuInfo, index) {
            this.clickFlag = index
            if (this.menuTag !== menuInfo.tag) {
                this.menuTag = menuInfo.tag;
                // console.log('点击了菜单----', menuInfo)
            }
        },
        resetPage() {
            this.menuId = this.menuList[0].id;
            // this.pageUrl='http://' + window.location.hostname + ':6969/#/' + this.menuList[0].path
        }
    }
}