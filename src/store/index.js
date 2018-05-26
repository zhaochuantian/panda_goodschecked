import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";

const INIT_DATA = {
    category : {
        navList : [
            {
                name: "女装",
                path: "/woman"
            },
            {
                name: "美妆护肤",
                path: "/beauty"
            },
            {
                name: "男装",
                path: "/man"
            },
            {
                name: "配饰",
                path: "/acc"
            },
            {
                name: "女鞋",
                path: "/womanshoe"
            },
            {
                name: "零食王国",
                path: "/womaneat"
            },
            {
                name: "箱包",
                path: "/bag"
            },
            {
                name: "个人洗护",
                path: "/person"
            },
            {
                name: "男鞋",
                path: "/manshoe"
            },
            {
                name: "手机周边",
                path: "/phone"
            },
            {
                name: "数码家电",
                path: "/homephone"
            },
            {
                name: "内衣袜子",
                path: "/cloth"
            },
            {
                name: "成人用品",
                path: "/manuse"
            },
            {
                name: "日用家居",
                path: "/day"
            },
            {
                name: "文体娱乐",
                path: "/chinese"
            },
        ]
    },
    sort : {
        bottomList : [
            {
                path: "/home",
                icon: "icon-shouye",
                text: "首页"
            },
            {
                path: "/sort",
                icon: "icon-fenlel",
                text: "分类"
            },
            {
                path: "/collect",
                icon: "icon-shoucang1",
                text: "收藏"
            },
            {
                path: "/person",
                icon: "icon-icon-test",
                text: "我的"
            },
        ] 
    },
    goods : {
        goodsList: [
            {
                goodsId: 1,
                goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                goodsPrice: "5.9",
                goodsBuy: "2222",
                chit: "15元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg"
            },
            {
                goodsId: 2,
                goodsName: "韩国丝绒雾面唇釉染唇液口红水润持久保湿不脱色不沾杯唇彩唇蜜",
                goodsPrice: "59.9",
                goodsBuy: "2.4万",
                chit: "65元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20043371.jpeg"
            },
            {
                goodsId: 3,
                goodsName: "ZUZU口红保湿防水滋润不易脱色学生哑光官网柔润唇彩精油润唇膏",
                goodsPrice: "19.9",
                goodsBuy: "1.2万",
                chit: "10元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20044178.jpeg"
            },
            {
                goodsId: 4,
                goodsName: "韩国丝绒雾面哑光唇釉五件套装染唇液口红持久保湿不脱色唇彩唇蜜",
                goodsPrice: "46.9",
                goodsBuy: "1.5万",
                chit: "20元券",
                goodsImg:"http://gaitaobao1.alicdn.com/tfscom/i2/2873055628/TB2AMIaquOSBuNjy0FdXXbDnVXa_!!2873055628.jpg"
            },
            {
                goodsId: 5,
                goodsName: "隐形眼镜盒双联盒美瞳盒子隐形近视眼镜盒伴侣盒收纳护理盒两副装",
                goodsPrice: "146.9",
                goodsBuy: "1.7万",
                chit: "50元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20024858.jpeg"
            },
            {
                goodsId: 6,
                goodsName: "莱姿素颜霜学生裸妆遮瑕面霜补水保湿护肤",
                goodsPrice: "146.9",
                goodsBuy: "2.7万",
                chit: "10元券",
                goodsImg:"http://img.alicdn.com/imgextra/i4/1703155368/TB25zhirDlYBeNjSszcXXbwhFXa_!!1703155368-0-item_pic.jpg"
            },
        ]
    }
}

export default createStore(reducer,INIT_DATA,applyMiddleware(thunk))

