import React, { Component,  } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import {api} from '../../utils';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            recommend: [

                { img: require("../../assets/img/index_slider1.jpg") },
                { img: require("../../assets/img/index_slider2.jpg") },
                { img: require("../../assets/img/index_slider3.jpg") }
            ],
            navs: [
                {
                    name: '积分乐园',
                    img1: require("../../assets/img/index_nav_1.png")
                },
                {
                    name: '乐值中心',
                    img1: require("../../assets/img/index_nav_2.png")
                },
                {
                    name: '办公充电',
                    img1: require("../../assets/img/index_nav_3.png")
                },
                {
                    name: '平板来袭',
                    img1: require("../../assets/img/index_nav_4.png")
                },
                {
                    name: '手机专场',
                    img1: require("../../assets/img/index_nav_5.png")
                },
                {
                    name: '心随乐动',
                    img1: require("../../assets/img/index_nav_6.png")
                },
                {
                    name: '发现好货',
                    img1: require("../../assets/img/index_nav_7.png")
                },
                {
                    name: '乐享视界',
                    img1: require("../../assets/img/index_nav_8.png")
                },
            ],
            ulimg: [
                { img3: require("../../assets/img/row3_slider_1.jpg") },
                { img3: require("../../assets/img/row3_slider_2.jpg") },
                { img3: require("../../assets/img/row3_slider_3.jpg") },
                { img3: require("../../assets/img/row3_slider_4.jpg") },
            ],
            xiang: [
                {
                    id: 1,
                    name: 'Apple MacBook 12英寸笔记本电脑 玫瑰金色（2017款Core m3 处理器/8GB内存/256GB闪存 MNYM2CH/A）',
                    img4: require("../../assets/img/c5f523f2-0b5a-468a-ab0c-470649300fb8-thumbnail.jpg")
                }
            ],
            res:[
                
            ]

        }

        // this.goto=this.goto.bind(this)
    }
    async componentWillMount() {

        let {data} =await api.get("/goods",{params:{name:'res'}})
        // console.log(data.data);
        this.setState({res:data.data.filter(item=>item.id==='7')})
        // console.log(this.state.res);
        console.log('778',this.state.res[0]);
    }

    goto(name){
        // this.props.history.push('/xiangqing/')
        // console.log(name);
        let {history} = this.props;
        let pathname='/xiangqing/' +name;
        history.push({
            pathname
        })
    }
    
    render() {

        // console.log(this.state.navs);
        
        
        return (
            <>

                <header className="tit123">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-2 text-center">
                                <span id="searchIcon" className="glyphicon glyphicon-th-large"></span>
                            </div>
                            <div className="col-xs-8">
                                <div className="search-placeholder">
                                    商品搜索
                                    <span className="glyphicon glyphicon-search">

                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-2 text-center">
                                <span className="login">登录</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div style={{ width: '100%', height: '30px' }}></div>
                <main className="main123">
                    <div className="container-fluid">
                        <Carousel autoplay>
                            {
                                this.state.recommend.map((item, i) => {
                                    return (<div key={i}>
                                        <img src={item.img} style={{ width: '100%', height: '100%' }} alt=""/>
                                    </div>)
                                })
                            }
                        </Carousel>
                    </div>
                    <nav>
                        {/* <div className="row">
                            <div className="col-xs-3 text-center">
                                <span>
                                    <img src={item.img1} />
                                    {item.name}
                                </span>
                            </div>
                        </div> */}
                        {
                            this.state.navs.map((item, idx) => {
                                return (<div key={idx} className="row">
                                    <div className="col-xs-3 text-center">
                                        <span>
                                            <img src={item.img1} style={{ width: '50px', height: '50px' }} alt="" />
                                            {item.name}
                                        </span>
                                    </div>
                                </div>)
                            })

                        }
                    </nav>
                    <div className="promotion">
                        <div className="row">
                            <div className="col-xs-2 text-center">
                                <span className="glyphicon glyphicon-gift red-dark"></span>
                            </div>
                            <div className="col-xs-10">
                                <div className="carousel">
                                    <ul>
                                        <li className="item">
                                            <em className="blue-dark">苹果产品促销专场，全部最低价</em>
                                            以旧换新最高可抵2000元
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ad">
                        <ul>
                            {
                                this.state.ulimg.map((item, d) => {
                                    return <div key={d}>
                                        <li>
                                            <img src={item.img3} alt=""/>
                                        </li>
                                    </div>
                                })
                            }
                        </ul>
                    </div>
                    <div className="products panel panel-flat panel-condensed">
                        <div className="panel-heading orange">
                            电脑
                   </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-4">
                                    {
                                        this.state.xiang.map((item, x) => {
                                            return (<div key={x} className="thumbnail thumbnail-flat thumbnail-condensed" onClick={this.goto.bind(this,'1')}>
                                                <img src={item.img4} style={{ display: 'block' }} alt=""/>
                                                <h4>{item.name}</h4>
                                            </div>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}


export default Home;