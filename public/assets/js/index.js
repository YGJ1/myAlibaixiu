$.ajax({
    type: 'get',
    url: '/posts/count',
    success: function(res){
        $('#postsBox').html(`<strong>${res.postCount}</strong>篇文章（<strong>${res.draftCount}</strong>篇草稿）`)
    }
})

$.ajax({
    type: 'get',
    url: '/comments/count',
    success: function(res){
        $('#commentsBox').html(`<strong>${res.commentCount}</strong>条评论（<strong>0</strong>条待审核）`)
    }
})

$.ajax({
    type: 'get',
    url: '/categories/count',
    success: function(res){
        $('#categoriesBox').html(`<strong>${res.categoryCount}</strong>个分类`)
    }
})