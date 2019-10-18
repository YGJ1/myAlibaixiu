$.ajax({
    type: 'get',
    url: '/comments',
    success: function(res){
        var html = template('commentsTpl',res);
        $('#commentsBox').html(html);
        var page = template('pageTpl',res);
        $('.pagination').html(page);
    }
})

function dateFormat(data){
    var date = new Date(data)
    return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
}
// template.defaults.imports.dateFormat = dateFormat;
function changePage(data){
    $.ajax({
        type: 'get',
        url: '/comments',
        data: {
            page: data
        },
        success: function(res){
            var html = template('commentsTpl',res);
            $('#commentsBox').html(html);
            var page = template('pageTpl',res);
            $('.pagination').html(page);
        }
    })
}

$('#commentsBox').on('click','.status',function(){
    var id = $(this).parent().attr('data-id');
    var status = $(this).parent().attr('data-status');
    $.ajax({
        type: 'put',
        url: `/comments/${id}`,
        data: {
            state: status == 1 ? 0:1
        },
        success: function(res){
            location.reload();
        }
    })
})
// 删除功能
$('#commentsBox').on('click','.delete',function(){
    if (confirm('确定要删除吗')) {
        var id = $(this).parent().attr('data-id');
        $.ajax({
            type: 'delete',
            url: `/comments/${id}`,
            success: function(res){
                location.reload();
            }
        })
    }
    
})