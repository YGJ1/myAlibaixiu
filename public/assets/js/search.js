
var key = getUrlParams('key');
$.ajax({
    type: 'get',
    url: `/posts/search/${key}`,
    success: function(res){
        var html = template('listTpl',{data:res});
        $('#listBox').html(html);
    }
})