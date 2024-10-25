/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 从 @reduxjs/toolkit 中引入 configureStore
import { configureStore } from '@reduxjs/toolkit';

// 引入为Count组件服务的reducer
import countReducer from './count_reducer';

// 使用 configureStore 创建 store
const store = configureStore({
  reducer: {
    count: countReducer  // 可以直接传入 reducer 对象
  }
});

// 暴露 store 对象
export default store; 