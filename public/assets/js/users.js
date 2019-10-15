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
        success: function(res){
            location.reload();
        }
    })
});

$('#avatar').on('change',function(){
    var formData = new FormData();
    formData.append('avatar',this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function(res){
            console.log(res);
        }
    })
});