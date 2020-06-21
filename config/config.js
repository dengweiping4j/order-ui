export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }],
    ],
    // 需要是一个数组，数组中的每一个对象是一个路由信息
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            { path: 'order', component: './order' },
        ]
    }],
}
