$('#login').on('change',function(){
    var fd = new FormData();
    fd.append('logo',this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: fd,
        processData: false,
        contentType: false,
        success: function(res){
            $('#logoImage').attr('src',res[0].logo);
            $('#hiddenLogo').val(res[0].logo);
        }
    })
})
$('#settingsForm').on('submit',function(){
    $.ajax({
        type: 'post',
        url: '/settings',
        data: $(this).serialize(),
        success: function(){
            location.reload();
        }
    })
    return false;
})

$.ajax({
    type: 'get',
    url: '/settings',
    success: function(response){
        //将logo地址存在隐藏域中
        $('#hiddenLogo').val(response.logo);
        //将logo显示出来
        $('#logoImage').attr('src', response.logo);
        //将网站标题显示在页面中
        $('input[name="title"]').val(response.title);
        //将是否开启评论功能显示在页面中
        $('input[name="comment"]').prop('checked', response.comment);
        //将评论是否经过人工审核显示在页面中
        $('input[name="review"]').prop('checked', response.review);

    }
})