async function getPost(postNum) {
  try {
    let response = await fetch(
      `https://jsonplaceholderfdfdfdfdfdf.typicode.com/posts/${postNum}`
    );
    console.log(response);
    // let data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
    alert("에러: " + error.message);
  }
}
getPost("fdfd");

//"https://jsonplaceholder.typicode.com/posts/2"  --> 포스트가 100까지 밖에 없음
