// eslint-disable-next-line no-unused-vars
import req from "../http/request"

export function selectTodoList(){
    return req({
        url: '/todo/queryTodoList',
        method: 'get'
    })
}

// 工具方法
export function sendMsg(data) {
    return req({
        url: '/AssemblyData/sendMsg',
        method: 'post',
        data: data
    })
}
