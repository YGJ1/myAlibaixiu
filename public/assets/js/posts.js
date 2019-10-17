$.ajax({
    type: 'get',
    url: '/posts',
    success: function(res){
        console.log(res);
        var html = template('postsTpl',res);
        $('#postsBox').html(html);
    }
})
function dateFormat(date){
    var data = new Date(date)
    return data.getFullYear()+'/'+(data.getMonth()+1)+'/'+data.getDate();
}
// template.defaults.imports.dateFormat = dateFormat();