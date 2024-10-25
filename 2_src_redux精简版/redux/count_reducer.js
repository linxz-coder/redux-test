/* 
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

const initState = 0 // 初始化状态
export default function countReducer(preState=initState, action) {

    // console.log('countReducer@#@preState:', preState);
    // console.log('countReducer@#@action:', action);

    // 从 action 对象中获取：type、data
    const {type, data} = action

    // 根据 type 来决定如何加工数据
    switch (type) {
        case 'increment': // 加法
            // console.log('@');
            return preState + data;
        case 'decrement': // 减法
            return preState - data;
        default:
            return preState;
    }
}