/*路由配置*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerCig from './router.json';
import statusBar from "@/components/statusBar/statusBar";

function getRouteDefine() {

    // 所有组件的路由，作为Index的子路由
    const subRouters = [{
        path: '',
        component: statusBar
    }];

    // 路由配置
    const routers = [];
    let routerList = routerCig.router;

    for (let i = 0; i < routerList.length; i++) {
        let ext = {
            meta: {
                name: routerList[i].meta.name,
                group: routerList[i].meta.group,
                isMenu: routerList[i].meta.isMenu
            },
            children: routerList[i].meta.isMenu ? subRouters : [],
        }
        if (routerList[i].alias) {
            ext.alias = routerList[i].alias
        }

        addToRoute(routers, routerList[i].path, routerList[i].title, ext);
    }

    console.log('初始化路由1--', routers)
    return routers;
}

/**
 * 添加路由到路由表
 * @param routers 路由表
 * @param path url路径
 * @param ext 额外的定义
 * @param title 导航标题
 */
function addToRoute(routers, path, title, ext) {
    let paths = path.split('/');
    let pageName;
    if (paths.length > 1) {
        pageName = paths[paths.length - 1];
    } else {
        pageName = path;
    }
    let r = {
        component: () => import('../view/' + path + '/' + pageName + '.vue'), // 路由懒加载
        path: '/' + path,
    };

    if (title) {
        if (!r.meta) {
            r.meta = {};
        }
        r.meta.title = title;
    }

    if (ext) {
        for (let key in ext) {
            let value = ext[key];
            if (value) {
                // children 子组件不可用 assign 赋值
                if (typeof value === 'object' && key !== 'children') {
                    r[key] = Object.assign({}, value);
                } else {
                    r[key] = value;
                }
            }
        }
    }

    routers.push(r);
}

export default {
    /** 初始化路由 */
    initRouter() {
        const originalPush = VueRouter.prototype.push;
        VueRouter.prototype.push = function push(location) {
            if (this.currentRoute.path === location) {
                // 如果重复点击同一路由，就添加随机参数让url不一样
                // console.debug('重复点击了同一个路由，添加随机参数');
                return originalPush.call(this, {
                    location,
                    query: {
                        _random: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
                    }
                });
            } else {
                // 如果点击了路由和当前不一样就调用原来方法
                return originalPush.call(this, location);
            }
        };

        Vue.use(VueRouter);

        const router = new VueRouter({
            mode: 'hash',
            routes: getRouteDefine(),
        });

        router.afterEach(function (to) {
            console.debug(`成功浏览到: ${to.path}`);
            Vue.nextTick(() => {
            });
            // 进入一个页面时，关闭所有层
        });

        router.beforeEach(function (to, from, next) {
            // console.debug(`准备从: ${to.path}, 跳到 ${from.path}`);
            next();
        });

        console.log('初始化路由--', router)
        return router;
    },
}