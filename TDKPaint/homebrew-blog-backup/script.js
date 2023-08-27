document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');

    var blogPosts = [
        {
            title: 'Homebrew Blog has just launched!',
            text: 'Click on this post to see more information...',
            url: 'blogs/12.06.2023/homebrew-blog-has-just-launched.html',
            authorIcon: 'author_data/author_icons/admin.png',
            url_author: 'author_pages/admin.html',
            verified: true
        }
    ];

function createBlogPreviews(posts) {
    var content = document.getElementById('content');
    content.innerHTML = '';

    if (posts.length === 0) {
        var noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No results found...';
        content.appendChild(noResultsMessage);
    } else {
        for (var i = posts.length - 1; i >= 0; i--) {
            var blog = posts[i];
            var blogPreview = document.createElement('div');
            blogPreview.className = 'blog-preview';

            var blogHeader = document.createElement('div');
            blogHeader.className = 'blog-header';

            var blogTitle = document.createElement('h2');
            blogTitle.textContent = blog.title;

            if (blog.verified) {
                var verificationIcon = document.createElement('img');
                verificationIcon.src = 'verify.png';
                verificationIcon.alt = verificationIcon.src;
                verificationIcon.className = 'verification-icon';
                blogHeader.appendChild(verificationIcon);
            }

            var blogAuthorIconLink = document.createElement('a');
            blogAuthorIconLink.href = blog.url_author;

            var blogAuthorIcon = document.createElement('img');
            blogAuthorIcon.src = blog.authorIcon;
            blogAuthorIcon.alt = 'Author Icon';
            blogAuthorIcon.className = 'author-icon';

            blogAuthorIconLink.appendChild(blogAuthorIcon);
            blogHeader.appendChild(blogAuthorIconLink);

            blogHeader.appendChild(blogTitle);
            blogHeader.appendChild(blogAuthorIcon);

            var blogText = document.createElement('p');
            blogText.textContent = blog.text;

            blogPreview.appendChild(blogHeader);
            blogPreview.appendChild(blogText);
          
            blogPreview.addEventListener('click', function() {
              window.location.href = blog.url;
            });


            content.appendChild(blogPreview);
        }
    }
}


    function navigateToBlog(url) {
        window.location.href = url;
    }

    function filterBlogPosts() {
        var searchQuery = searchInput.value.toLowerCase();
        var filteredBlogPosts = blogPosts.filter(function(blog) {
            return blog.title.toLowerCase().includes(searchQuery);
        });
        createBlogPreviews(filteredBlogPosts);
    }

    searchButton.addEventListener('click', function() {
        filterBlogPosts();
    });

    searchInput.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            filterBlogPosts();
        }
    });

    createBlogPreviews(blogPosts);
});
