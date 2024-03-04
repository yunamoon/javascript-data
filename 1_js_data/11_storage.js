/**
 * local storage 
 * 
 * 웹 브라우저에서 제공되는 웹 스토리지 메커니즘 중 하나
 * 이를 사용하면 웹 애플리케이션에서 클라이언트 측에 데이터를 저장하고, 
 * 나중에 동일한 도메인의 웹 페이지에서 그 데이터에 접근할 수 있다.
 */

const user = {
    name : "문유나",
    age : 29,
    emails : [
        "moonyuna@gmail.com",
        "moonyuna@naver.com"
    ]
}

// 저장
const strUser = JSON.stringify(user);
localStorage.setItem('user', strUser);

// 읽기
const getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser);

// 삭제
localStorage.removeItem('user')

// 수정
const updateTarget = localStorage.getItem('user')
const updateObj = JSON.parse(updateTarget)
updateObj.age = 100
localStorage.setItem('user', JSON.stringify(updateObj))

/**
 * session storage
 * 
 * 로컬 스토리지(Local Storage)와 비슷한 웹 브라우저 스토리지 메커니즘 중 하나
 * 로컬 스토리지와 마찬가지로 클라이언트 측에서 데이터를 저장하고 유지할 수 있지만, 
 * 세션 스토리지는 데이터를 세션(session) 동안에만 유지
 *  = 세션은 사용자가 브라우저를 닫을 때까지 유지되는 시간
 */