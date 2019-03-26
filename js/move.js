    //运动框架
    function getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle
        } else {
            return getComputedStyle(obj, false)[name];
        }
    }
    //运动函数
    function starMove(obj, attr, iTarget) {
 
        clearInterval(obj.timer);
        obj.timer = setInterval(move, 30);

        function move() {
            var current = null;

            //如果传进来的样式是透明度
            if (attr == 'opacity') {
                //用浮点 并且乘以一百变成整数  0.3*100 ==30
                //Math.round 四舍五入
                current = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else { //其他样式 例如宽高 等数字是整数的
                current = parseInt(getStyle(obj, attr));
            }

            var speed = (iTarget - current) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (current == iTarget) {
                clearInterval(obj.timer);
            } else {
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + current + speed + ')';
                    obj.style.opacity = (current + speed) / 100;

                } else {
                    obj.style[attr] = current + speed + 'px';
                }
            }
        }
    }