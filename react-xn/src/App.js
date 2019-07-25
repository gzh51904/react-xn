import React,{Component} from 'react';

import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Mine from './pages/Mine';
import Xiangqing from './pages/Xiangqing';
import Reg from './pages/Reg';
import{Switch,Route,Redirect,withRouter,} from 'react-router-dom';
import { Menu, Icon, } from 'antd';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
// import { connect } from 'react-redux';
// import Item from 'antd/lib/list/Item';

import './index.css'

let AllRouter = {
  Home,
  List,
  Cart,
  Mine
}

class App extends Component{
  constructor(){
    super();
    this.state={
      navs:[
        {
          name: 'Home',
          path: '/home',
          icon: 'home',
          title: '首页'
        },
        {
          name: 'List',
          path: '/list',
          icon: 'unordered-list',
          title: '分类'
        },
        {
          name: 'Cart',
          path: '/cart',
          icon: 'shopping-cart',
          title: '购物车'
        },
        {
          name: 'Mine',
          path: '/mine',
          icon: 'user',
          title: '会员中心'
        }
      ],
      current:'Home'
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(data){
    this.setState({
      current:data.key
    })
// console.log(555)
    let currentRouter=this.state.navs.filter(item=>item.name===data.key)[0]
    this.props.history.push(currentRouter.path)
  }
  render(){
    let {navs}=this.state
    return <div className='App'>  

<Switch>
    {
      navs.map(item=><Route path={item.path} key={item.name} 
        component={AllRouter[item.name]} />)
    }
    <Route path='/xiangqing/:name' component={Xiangqing}/>
    <Route path='/reg/' component={Reg}/>
    <Redirect from='/' to='/home' exact/>
  </Switch>
<footer style={{position:"fixed",bottom:'0',border:'1px solid #ccc',width:'100%',}}>
     <Menu  onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
    {
      navs.map(item=>(
        <Menu.Item key={item.name} style={{position:'relative',margin:'10px 0 0 0' ,width:'25%'}}>
           <Icon type={item.icon} style={{position:'absolute',margin:"0 0 0 25% "}}></Icon>
         <div className='pss' style={{}}> {item.title}</div> 
        </Menu.Item>
      ))
    }
     </Menu>
     </footer>
    </div>
  }
}

App=withRouter(App)
export default App;

