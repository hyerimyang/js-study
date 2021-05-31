/* ////////// 구조분해 ////////// */
const cafe = {
  starbucks : "스타벅스",
  ediya : "이디야"
}

// 기준 문법에서의 구조 분해
const star = cafe.starbucks // 변수명 star
const edi = cafe.ediya
console.log(star, edi)

// 최신 문법에서의 구조 분해
const {starbucks, ediya} = cafe; // 이제 변수명됨!
console.log(starbucks, ediya) 


const getCoffee = ({starbucks}) => {
  console.log(`${starbucks}가서 커피 한잔 하자!`)
}

getCoffee(cafe) // {starbucks} = cafe 와 동일한 것임

/* ////////// 구조분해 ////////// */



/* ////////// 객체 리터럴 개선 ////////// */
const name = "국희"
const pattern = "고등어"

// name은 국희고, pattern은 고등어인 cat인 ☆객체☆를 만들 수 있다
const cat = {name, pattern}
console.log(cat)

/* ////////// 객체 리터럴 개선 ////////// */



/* ////////// 스프레드연산자 ////////// */
// dogs,cats 배열을 하나에 다 집어넣고싶다!
const dogs = ["시바견", "진돗개", "삽살개"]
const cats = ["고등어", "치즈", "카오스"]

const dogsNcats = [
  ...dogs, ...cats
]
console.log(dogsNcats) 

// birds 배열 추가
const birds = {
  birds : ["닭", "칠면조", "꿩", "오리"] 
}

const animals = { // dogsNcats 와 birds를 하나로
  ...birds,  
  dogsNcats
}

console.log(animals)
/* ////////// 스프레드연산자 ////////// */


/* ////////// 화살표 함수 ////////// */
// 원래 함수
function heFrom(town){
  return `${town} 출신입니다` 
}

// 화살표 함수
const sheFrom = (town) => `${town} 출신입니다` 

// ★화살표 뒤에 코드블록{} 이 있을 경우에는 return이 필요하다
const sheFrom = (town) => {
  return `${town} 출신입니다`
}

console.log(heFrom("서울"));
console.log(sheFrom("울산"));

/* ////////// 화살표 함수 ////////// */