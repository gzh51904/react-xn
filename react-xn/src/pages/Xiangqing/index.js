import React, { Component } from 'react';
import './index.scss';

class Xiangqing extends Component {
    constructor() {
        super();
        this.state={

        }
    }
    render() {
        return (
            <>
                <header className='tit1'>
                    <div className='fluid1'>
                        <div className='row1'>
                            <div className='col-1'>
                                <span className='yjt'>
                                    
                                </span>
                            </div>
                            <div className='col-10'>
                                 <ul className='nav1'>
                                    <li className='active1'>
                                    <a href="#summary" data-toggle="pill">商品</a>
                                    </li>
                                    <li className='active1'>
                                    <a href="#detail" data-toggle="pill">详情</a>
                                    </li>
                                    <li className='active1'>
                                    <a href="#review" data-toggle="pill">评价</a>
                                    </li>
                                    <li className='active1'>
                                    <a href="#consultation" data-toggle="pill">咨询</a>
                                    </li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='main2'>

                </main>
            </>
        )
    }
}

export default Xiangqing;