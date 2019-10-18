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