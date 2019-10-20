var id = getUrlParams('id');
$.ajax({
    type: 'get',
    url: `/posts/${id}`,
    success: function(res){
        var html = template('detailTpl',res);
        $('.article').html(html);
    }
})

$('.article').on('click','#like',function(){
    $.ajax({
        type: 'post',
        url: `/posts/fabulous/${id}`,
        success: function(){
            alert('点赞成功');
        }
    })
})
var state = 0;
$.ajax({
    type: 'get',
    url: '/settings',
    success: function(res){
        if (res.review == false) {
            state = 0;
        }else {
            state = 1;
        }
        if (res.comment == true) {
            $('.comment').show();
        }
    }
})


// 评论提交功能
$('.comment form').on('submit',function(){
    var content = $(this).find('textarea').val();
    var data = this;
    $.ajax({
        type: 'get',
        url: '/comments',
        data: {
            content: content,
            post: id,
            state: state
        },
        success: function(res){
            alert('评论成功');
            $(data).find('textarea').val('');
        }
    })
    return false;
})