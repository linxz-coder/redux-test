import React, { Component } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {

    state = {carName:'奔驰c63'}

/*     componentDidMount(){
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({})
        })
    } */


    // 加法
    increment = () => {
        const {value} = this.selectNumber //selectNumber是一个动态渲染的DOM对象，在select组件渲染后就自动获取，不用显性定义，比如在componentDidMount中定义：this.selectNumber = document.getElementById('selectNumber')

        // 通知redux加value
        store.dispatch({type:'increment',data:value*1})
    }

    // 减法
    decrement = () => {
        const {value} = this.selectNumber

        // 通知redux减value
        store.dispatch({type:'decrement',data:value*1})
    }

    // 奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState().count
        if(count % 2 !== 0){
            store.dispatch({type:'increment',data:value*1})
        }
    }

    // 异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch({type:'increment',data:value*1})
        },1000)
    }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState().count}</h1>
        <select ref={c=>this.selectNumber = c}> 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
