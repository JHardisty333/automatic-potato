async function commentFormHandler(event) {
    event.preventDefault();

    const newsupdate_text = document.querySelector('textarea[name="comment-body"]').nodeValue.trim();

    const newsfeed_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (newupdate_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                newsfeed_id,
                newsupdate_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);