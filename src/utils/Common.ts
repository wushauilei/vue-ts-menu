/**
 * @class 公共方法
 */
class Common {

    /**
     * @function getScrollTop 获取滚动条在Y轴上的滚动距离
     * @returns 滚动条在Y轴上的滚动距离
     */
    public getScrollTop(): any {
        let scrollTop = 0;
        let bodyScrollTop = 0;
        let documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

    /**
     * @function getScrollHeight 获取文档的总高度
     * @returns 文档的总高度
     */
    public getScrollHeight(): any {
        let scrollHeight = 0;
        let bodyScrollHeight = 0;
        let documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

    /**
     * @function getWindowHeight 获取浏览器视口的高度
     * @returns 浏览器视口的高度
     */
    public getWindowHeight(): any {
        let windowHeight = 0;
        if (document.compatMode === 'CSS1Compat') {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }
}

export default Common;
