export default {
    name: 'login',

    data() {
        return {
            loginForm: {
                userName: '',
                passWord: ''
            },
            loginFormRules: {
                userName: [{required: true, message: '请填写用户名', trigger: 'blur'}],
                passWord: [{required: true, message: '请填写密码', trigger: 'blur'}],
            }
        }
    },

    mounted() {

    },

    methods: {
        doLogin(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$router.replace('/')
                    this.loginForm.passWord = ''
                } else {
                    return false;
                }
            })
        }
    }
}