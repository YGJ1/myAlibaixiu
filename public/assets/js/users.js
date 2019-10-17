$.ajax({
    type: 'get',
    url: '/users',
    success: function(res){
        var html = template('userTpl',{data:res})
        $('#userBox').html(html);
    }
});

$('#userForm').on('submit',function(){
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function(){
            location.reload();
        },
        error: function(){
            alert('用户添加失败');
        }
    })
    return false;
});

$('#modifyBox').on('change','#avatar',function(){
    var formData = new FormData();
    formData.append('avatar',this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function(res){
            $('#hiddenImg').val(res[0].avatar);
            $('#preview').attr('src',res[0].avatar);
        }
    })
});

$('#userBox').on('click','.edit',function(){
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/users/'+id,
        success: function(res){
            var html = template('modifyTpl',res);
            $('#modifyBox').html(html);
        }
    })
});

$('#modifyBox').on('submit','#modifyForm',function(){
    var formData = $(this).serialize();
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/users/'+ id,
        data: formData,
        success: function(){
            location.reload();
        }
    })
    return false;
});

// 删除用户功能
$('#userBox').on('click','.delete',function(){
    if (confirm('您确定要删除这个用户吗')) {
        var id = $(this).attr('data-id');
        $.ajax({
            type: 'delete',
            url: '/users/'+id,
            success: function(){
                location.reload();
            }
        })
    }
});

// 批量删除
$('#checkAll').on('click',function(){
    var bool = $(this).prop('checked');
    $('#userBox input[type="checkbox"]').prop('checked',bool);
    if (bool) {
        $('#deleteAll').show();
    }else{
        $('#deleteAll').hide();
    }
});
$('#userBox').on('change','input[type="checkbox"]',function(){
    if ($('#userBox input[type="checkbox"]').length == $('#userBox input[type="checkbox"]:checked').length) {
        $('#checkAll').prop('checked',true);
    }else {
        $('#checkAll').prop('checked',false);
    }
    if ($('#userBox input[type="checkbox"]:checked').length>0) {
        $('#deleteAll').show();
    }else{
        $('#deleteAll').hide();
    }
});

$('#deleteAll').on('click',function(){
    var checkList = $('#userBox input[type="checkbox"]:checked');
    var str = '';
    checkList.each(function(index,item){
        str += $(item).attr('data-id')+'-'
    });
    console.log(str);
    str = str.substr(0,str.length-1);
    $.ajax({
        type: 'delete',
        url: '/users/'+str,
        success: function(){
            location.reload();
        }
    })
})