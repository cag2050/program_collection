let html = `
    <div>
        test1
        <br/>
        <section id="query_expend">
            <i class="icon-double-angle-down"></i>
            <article>test2</article>
            <span id="query_expend_text">test3</span>
        </section>
        <section id="tabs1"></section>
    </div>`

html = html.replace(/<!--[\s\S]*?-->/g, '');  //ȥ��htmlע��
html = html.replace(/>\s+([^\s<]*)\s+</g, '>$1<').trim();  //ȥ��html��ǩ��Ķ���հ�

var pattern = /([^>]*)(<([a-z/][-a-z0-9_:.]*)[^>/]*(\/*)>)([^<]*)/g,
    matchArr,
    start = Date.now();

while ((matchArr = pattern.exec(html))) {
    console.log(matchArr);
    /**
    var textBefore = matchArr[1],  //��ȡ���ڱ�ǩǰ���ı�
        elem = matchArr[2],        //��ȡ��������ǩ��ձ�ǩ
        elemName = matchArr[3],    //��ȡ��ǩ��
        closeSign = matchArr[4],   //�ж��Ƿ�Ϊ�Ապϱ�ǩ���
        textAfter = matchArr[5];   //��ȡ���ڱ�ǩ����ı�

    matchArr.forEach(function (o, i) {
        if (i > 0 && o !== "") {
            console.log(o);  //���������
        }
    })
     **/
}

console.log(Date.now() - start);


