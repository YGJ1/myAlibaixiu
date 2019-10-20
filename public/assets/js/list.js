
var categoryId = getUrlParams('categoryId');
$.ajax({
    type: 'get',
    url: `/posts/category/${categoryId}`,
    success: function(res){
        var html = template('listTpl',{data:res});
        $('#listBox').html(html);
        $('.new h3').text(res[0].category.title);
    }
})