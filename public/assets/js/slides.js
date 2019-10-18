$.ajax({
    type: 'get',
    url: '/slides',
    success: function(res){
        var html = template('slidesTpl',{data:res});
        $('#slidesBox').html(html);
    }
})

$('#file').on('change',function(){
    var formData = new FormData();
    formData.append('avatar',this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function(res){
            $('.thumbnail').attr('src',res[0].avatar).show();
            $('#hiddenImage').val(res[0].avatar)
        }
    })
})

// 添加
$('#slidesForm').on('submit',function(){
    $.ajax({
        type: 'post',
        url: '/slides',
        data: $(this).serialize(),
        success: function(res){
            location.reload();
        }
    })
})

// 删除
$('#slidesBox').on('click','.delete',function(){
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'delete',
        url: `/slides/${id}`,
        success: function(){
            location.reload();
        }
    })
})
