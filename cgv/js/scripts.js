document.addEventListener('DOMContentLoaded', function () {
    const nowShowingContainer = document.getElementById('now-showing');
    const comingSoonContainer = document.getElementById('coming-soon');
    const reviewListContainer = document.getElementById('review-list');
    const reviewForm = document.getElementById('review-form');

    const nowShowingMovies = [
        {
            title: "명탐정 코난 VS 괴도 키드",
            releaseDate: "2024.06.05",
            // imageUrl: "https://via.placeholder.com/150x225"
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88272/88272_320.jpg"
        },
        {
            title: "원더랜드",
            releaseDate: "2024-06-05",
            // imageUrl: "https://via.placeholder.com/150x225"
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88266/88266_320.jpg"
        },
        {
            title: "존 오브 인터레스트",
            releaseDate: "2024.06.05",
            // imageUrl: "https://via.placeholder.com/150x225"
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88270/88270_320.jpg"
        },
        {
            title: "다섯 번째 방",
            releaseDate: "2024.06.05",
            // imageUrl: "https://via.placeholder.com/150x225"
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88284/88284_320.jpg"
        }
    ];

    const comingSoonMovies = [
        {
            title: "원더랜드",
            releaseDate: "2024-07-01",
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88266/88266_320.jpg"
        },
        {
            title: "극장판 하이큐!! 쓰레기장의 결전",
            releaseDate: "2024-07-05",
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88214/88214_320.jpg"
        },
        {
            title: "퓨리오사-매드맥스 사가",
            releaseDate: "2024-07-10",
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88148/88148_320.jpg"
        },
        {
            title: "명탐정 코난 VS 괴도 키드",
            releaseDate: "2024-07-15",
            imageUrl: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88272/88272_320.jpg"
        }
    ];

    const reviews = [
        {
            reviewer: "John Doe",
            text: "Great movie, highly recommended!"
        },
        {
            reviewer: "Jane Smith",
            text: "Not bad, but could be better."
        }
    ];

    function displayMovies(container, movies) {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.imageUrl}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Release Date: ${movie.releaseDate}</p>
                <div class="desc_box"><a href="#n" class="detail_view">상세 보기</a></div>
            `;
            container.appendChild(movieItem);
        });
    }

    function displayReviews(container, reviews) {
        container.innerHTML = '';
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <h4>${review.reviewer}</h4>
                <p>${review.text}</p>
            `;
            container.appendChild(reviewItem);
        });
    }

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const reviewerName = document.getElementById('reviewer-name').value;
        const reviewText = document.getElementById('review-text').value;

        if (reviewerName && reviewText) {
            reviews.push({
                reviewer: reviewerName,
                text: reviewText
            });
            displayReviews(reviewListContainer, reviews);
            reviewForm.reset();
        }
    });

    displayMovies(nowShowingContainer, nowShowingMovies);
    displayMovies(comingSoonContainer, comingSoonMovies);
    displayReviews(reviewListContainer, reviews);
});
