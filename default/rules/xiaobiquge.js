let currVC = this;
_plugins['ruleid'] = {
    //自定义配置项
    vc: currVC,
    rule_id: 'ruleid',
    conf:   {
        search: 'https://novel.snssdk.com/api/novel/channel/homepage/search/search/v1/?aid=13&q={wd}',
        chapter: 'https://novel.snssdk.com/api/novel/book/reader/full/v1/?item_id={cid}',
    },
    //搜索书籍
    /*
    @wd 书名
    @author 匹配的作者名.  通常与 type 参数同用
    @type   vague 模糊匹配(匹配书名和作者名)   total 绝对匹配/匹配全部 (匹配书名以及作者名, 通常用于更换书源)
    @pg     页码
    */
    search(wd, author = '', type = 'vague', pg = 1){
        console.log('调用了书源规则的 search 方法', wd, this.vc.$req);
        let url = this.conf.search.replace('{wd}', wd);
        this.vc.$req({
            url: '/req/' + encodeURIComponent(url),
            method: 'get',
            responseType: 'html',
        }).then({
            response: function(response){
                console.log(JSON.parse(response.data));
                let data = JSON.parse(response.data);
                if(data.code == 0 && data.data.ret_data.length > 0){
                    let next_pg = data.data.offset;
                    
                }
            },
            error: function(error){
                console.log(error);
            }
        });
    },
    //获取书籍信息
    info: function(bid){
        
    },
    //获取章节列表
    list: function(bid){
        
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