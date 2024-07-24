// 함수 사용하기
// 문제 2번의 사자 객체를 가져옵니다.
const lion = {
  이름: '심바',
  나이: 3,
  주인공: true,
  대사: '하쿠나마타타',
};


// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
  lion.나이 = lion.나이 + 1;
}
// 함수 실행 이후 사자의 현재 나이를 출력합니다.
incrementAge(lion);
console.log(lion);


// 객체안에 속성 추가하는 함수 만들기
function addProperty(inputLion, a, b) {
  inputLion[a] = b;
}

addProperty(lion, '다리', '4개');
console.log(lion);
