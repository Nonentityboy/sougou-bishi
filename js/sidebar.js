    function getClass(tagName, className) //获得标签名为tagName,类名className的元素 
    {
        if (document.getElementsByClassName) //支持这个函数 
        {
            return document.getElementsByClassName(className);
        } else {
            var tags = document.getElementsByTagName(tagName); //获取标签 
            var tagArr = []; //用于返回类名为className的元素 
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].class == className) {
                    tagArr[tagArr.length] = tags[i]; //保存满足条件的元素 
                }
            }
            return tagArr;
        }
    }

    //侧边栏子菜单收缩扩展
    var oSet = getClass('div', 'set');
    var oSt = getClass('div', 'setting');
    var oMo = getClass('div', 'more');
    var oAb = getClass('div', 'aboutus');
    var oIc1 =document.getElementById('icon-set');
    var oIc2 =document.getElementById('icon-ab');
    var isClickS = false;
    var isClickM = false;
    var nowDisp, nowHei;

    //设定菜单
    function showset() {
        if (isClickS == false) {
            nowDisp = "block";
            nowHei = "150px";
            oIc1.setAttribute("src", "img/icon_up.png");
        } else {
            nowDisp = "none"
            nowHei = "80px";
            oIc1.setAttribute("src", "img/icon_down.png");
        }
        oSt[0].style.height = nowHei;
        for (var i = 0; i < oSet.length; i++) {
            oSet[i].style.display = nowDisp;
        }
        isClickS = !isClickS;
    }

    //LINE账号菜单
    function showmore() {
        if (isClickM == false) {
            nowDisp = "block";
            nowHei = "150px";
            oIc2.setAttribute("src", "img/icon_up.png");
        } else {
            nowDisp = "none"
            nowHei = "80px";
            oIc2.setAttribute("src", "img/icon_down.png");
        }
        oAb[0].style.height = nowHei;
        for (var i = 0; i < oSet.length; i++) {
            oMo[i].style.display = nowDisp;
        }
         
        isClickM = !isClickM;
    }

    //侧边栏收缩扩展
    var oSide = getClass('nav', 'sidebar');
    var oSbt = getClass('div', 'side-button');
    var oCon = getClass('div', 'container');
    var oAw = getClass('div', 'arrow');
    var isClickB = false;

    oSbt[0].onclick = function() {
        if (isClickB == false) {
            starMove(oSide[0], 'margin-left', -220);
            starMove(oCon[0], 'left', 29);
            oAw[0].style.borderRight = "none";
            oAw[0].style.borderLeft = "5px solid black";
            isClickB = !isClickB;
        } else {
            starMove(oSide[0], 'margin-left', 0);
            starMove(oCon[0], 'left', 249);
            oAw[0].style.borderLeft = "none";
            oAw[0].style.borderRight = "5px solid black";
            isClickB = !isClickB;
        }

    }
    