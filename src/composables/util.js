import {ElNotification, ElMessage, ElMessageBox} from 'element-plus'
import NProgress from 'nprogress'
// 消息处理
export function toast(message, type = 'success', dangerouslyUseHTMLString = false) {
    ElNotification({
        message: message,
        type: type,
        dangerouslyUseHTMLString,
        duration: 3000
    })
}


export function showModal(content = '提示内容', type = 'Warning', title = '') {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: type,
        }
    )
}

// 显示全屏loading
export function showFullLoading(){
    NProgress.start()
}
// 隐藏全屏loading
export function hideFullLoading(){
    NProgress.done()
}