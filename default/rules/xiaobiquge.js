let currVC = this;
_plugins['{ruleid}'] = {
    vc: currVC,
    //自定义配置项
    conf: {
        host: 'https://www.jhssd.com',
        search: this.conf.host + '/search.html?ie=utf-8&word={wd}',
        chapter: this.conf.host + '/{bid}/{cid}.html',
    },
    header: {
        
    },
    method: 'get',
    //搜索书籍
    /*
    @wd 书名
    @author 匹配的作者名.  通常与 type 参数同用
    @type   vague 模糊匹配(匹配书名和作者名)   total 绝对匹配/匹配全部 (匹配书名以及作者名, 通常用于更换书源)
    @pg     页码
    */
    search(wd, opction){
        let author = '', type = 'vague', pg = 1;
        for(var index in opction){
            var data = '';
            switch(typeof opction[index]){
                case 'number':
                    data = opction[index];
                break;
                case 'string':
                    data = '"' + opction[index] + '"';
                break;
                case 'function':
                    data = opction[index];
                break;
                default:
                    data = JSON.stringify(opction[index]);
                break;
            }
            var _bl = 'var ' + index + ' = ' + data + ';';
            eval(_bl);
        }
        
        console.log('调用了书源规则的 search 方法', wd, this.vc.$req);
        let url = this.conf.search.replace('{wd}', wd);
        this.vc.$req({
            url: '/req/' + encodeURIComponent(url),
            method: 'post',
            data: {method, header},
        }).then({
            response: function(response){
                callback(response.data);
            },
            error: function(error){
                error(error);
            }
        });
    },
    //获取书籍信息
    info: function(bid){
        
    },
    //获取章节列表
    chapterlist: function(bid){
        
    },
    //获取章节内容
    contents: function(bid, cid){
        
    },
    //获取分类列表
    typelist: function(){
        
    },
    //获取分类下的书籍列表
    typebooklist: function(type_item){
        
    },
};