function newMovies() {
  let movies = [
    {
      title: "슈퍼맨",
      nation: "미국",
      year: 2025,
      genre: "모험",
    },
    {
      title: "쥬라기 월드: 새로운 시작",
      nation: "미국",
      year: 2025,
      genre: "액션",
    },
    {
      title: "드래곤 길들이기",
      nation: "미국",
      year: 2025,
      genre: "모험",
    },
    {
      title: "엘리오",
      nation: "미국",
      year: 2025,
      genre: "애니메이션",
    },
    {
      title: "소울메이트",
      nation: "대한민국",
      year: 2023,
      genre: "드라마",
    },
    {
      title: "20세기 소녀",
      nation: "대한민국",
      year: 2022,
      genre: "드라마",
    },
    {
      title: "쿵푸팬더4",
      nation: "",
      year: 2024,
      genre: "애니메이션",
    },
  ];
  return movies;
}

// newMovies
function addMovies(...movies) {
  console.log("Movie Collection:");

  for (let i = 0; i < movies.length; i++) {
    console.log(`[${i}]`, movies[i]);
    // console.log([i], movies[i]);
  }
  console.log("Total Movies: ", movies.length);

  return movies;
}

// addMovies(...newMovies());

function validSystem() {
  let movies = newMovies();

  for (let i = 0; i < movies.length; i++) {
    if (!movies[i].nation) {
      movies[i].nation = "Unknown";
      console.log("Eror message :");
      console.log(
        `The nation for "${movies[i].title}" is unknown. Set to "Unknown".`
      );
      console.log("");
    }
  }
  addMovies(...movies);
}

// 실행
validSystem();

// ex)
// 빈 속성 확인 후 기본값 설정(예: if (!movie.title) movie.title = "Unknown";
// JS는 if 다음에 중괄호 없이 한 줄이면 괜찮지만,
// 여러 줄이면 **중괄호 {}**가 있어야 합니다.

//도전과제

function dramaMovies() {
  let movies = newMovies();
  let found = false;

  for (let j = 0; j < movies.length; j++) {
    if (movies[j].genre === "드라마") {
      console.log("Drama Movies: ", movies[j].title);
      found = true;
    }
  }
  if (!found) {
    console.log(`"No movies found for genre: 드라마."`);
  }
}

dramaMovies();

//변수 j
//for (j = 0; ... ) 이렇게 쓰면 전역변수로 선언돼서 좋지 않음
// let j = 0 으로 써야 안전함

// 드라마가 한 편도 없을 경우를 대비해 found 변수를 둬서 처리.
