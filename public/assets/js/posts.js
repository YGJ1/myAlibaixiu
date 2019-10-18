$.ajax({
    type: 'get',
    url: '/posts',
    success: function(res){
        var html = template('postsTpl',res);
        $('#postsBox').html(html);
        var page = template('pageTpl',res);
        $('.pagination').html(page);
    }
})
function dateFormat(date){
    var data = new Date(date)
    return data.getFullYear()+'/'+(data.getMonth()+1)+'/'+data.getDate();
}
template.defaults.imports.dateFormat = dateFormat;


function changePage(pageNum){
    $.ajax({
        type: 'get',
        url: '/posts',
        data: {
            page: pageNum
        },
        success: function(res){
            var html = template('postsTpl',res);
            $('#postsBox').html(html);
            var page = template('pageTpl',res);
            $('.pagination').html(page);
        }
    })
}

$.ajax({
    type: 'get',
    url: '/categories',
    success: function(res){
        var html = template('categoryTpl',{data:res});
        $('#categoryBox').html(html);
    }
});

$('#filterForm').on('submit',function(){
    var formData = $(this).serialize();
    $.ajax({
        type: 'get',
        url: '/posts',
        data: formData,
        success: function(res){
            var html = template('postsTpl',res);
            $('#postsBox').html(html);
            var page = template('pageTpl',res);
            $('.pagination').html(page);
        }
    })
    return false;
})