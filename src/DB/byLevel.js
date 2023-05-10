function levelBy(map) {
  let list = [
    "1시도_시", // 8개 광역시청
    "2시도_도", // 9개 도청
    "3시군구_시", // 79개 시청
    "4시군구_군", // 83개 군
    "5시군구_구", // 105개 구
    "6읍면동_읍", // 227개 읍
    "7읍면동_면", // 1203개 면
    "8읍면동_동", // 2083개 동
    "9읍면동_센터", // 4개
  ];

  let levelType;

  switch (true) {
    case [1, 2].includes(map.getLevel()):
      levelType = 9;
      break;
    case [3, 4, 5].includes(map.getLevel()): // 동 cf) 공원, 병원
      levelType = 9;
      break;
    case [6].includes(map.getLevel()): // 동 cf) 공원, 병원
      levelType = 8;
      break;
    case [7, 8].includes(map.getLevel()): // 구 cf) 산, 골프장
      levelType = 7;
      break;
    case [9, 10].includes(map.getLevel()): // 시
      levelType = 4;
      break;
    case [11].includes(map.getLevel()): // 시
      levelType = 3;
      break;
    case [12, 13].includes(map.getLevel()): // 도
      levelType = 2;
      break;
    case [14].includes(map.getLevel()): // 국가
      levelType = 0;
      break;
    default: 
      levelType = 2;
      break;
  }

  return levelType;
}

function levelControl(map, level) {
  let result = ''
  switch(level) {
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    // isActive = false 
    console.log('Level Control : 4 ~ 14 ..........')
    result = 'return'
      break;
    case 3: case 2: case 1:
      result = 'active'
      // isActive = true 
      console.log('Zoom Level : ', map.getLevel())
      break;
  }
  return result
}

export { levelBy, levelControl };
