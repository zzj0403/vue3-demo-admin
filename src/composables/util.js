import {ElNotification} from 'element-plus'
// 消息处理
export function toast(message,type='success' ,dangerouslyUseHTMLString=false) {
    ElNotification({
        message: message,
        type: type,
        dangerouslyUseHTMLString,
        duration: 3000
    })
}