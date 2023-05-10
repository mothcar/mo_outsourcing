export let fake = [
  {
    version: "v 3.6.150", // 'v 1.23, 1.30.3'
    curPlaceData: {
      _id: "1234",
      place_name: "장소이름",
      type: "BUILDING", // BUILDING, PUBLIC(공공기관),POLICESTATION,FIRESTATION,JUMINCENTER,GUCENTER,CITYHALL,
      address: "서울시 동작구 신대방동 336-21",
      address_road: "서울시 동작구 여의대방로22나길 74",
      latLng: [37.4953794, 126.9232674],
      square: 84, //면적
      price_data: [
        {
          date: "2022.05.31",
          price: 100,
        },
      ],
      owner: "mothcar",
      possess: [
        {
          floor: 1,
          facility_name: "CU",
          type: "편의점",
        },
        {
          floor: 1,
          facility_name: "스타벅스",
          type: "카페",
        },

        {
          floor: 2,
          facility_name: "금성",
          type: "주식회사",
        },
        {
          floor: 1,
          facility_name: "예쁜꼿",
          type: "화훼",
        },
        {
          floor: 130,
          facility_name: "페이스북",
          type: "주식회사",
        },
        {
          floor: 2,
          facility_name: "넥스트데이",
          type: "주식회사",
        },
        {
          floor: 3,
          facility_name: "태평양물산",
          type: "주식회사",
        },

        {
          floor: 3,
          facility_name: "관리실",
          type: "시설",
        },
        {
          floor: 5,
          facility_name: "하이",
          type: "주식회사",
        },
        {
          floor: 5,
          facility_name: "광물",
          type: "주식회사",
        },
      ],
    },
    // 가중치 update 어떻게 처리할지?
    weight: {
      seoul: 1,
      inchon: 0.2, // 3,000개 동 적용
    },

    type: "my",
    name: "김정태",
    contents: [
      {
        date: "2022-05-10",
        desc: "가입기념",
        qnt: 100,
      },
      {
        date: "2022-05-13",
        desc: "추천보상",
        qnt: 500,
      },
      {
        date: "2022-05-14",
        desc: "추천보상",
        qnt: 700,
      },
    ],
  },
  {
    type: "holders",
    list: [
      {
        name: "황oo",
        idNum: "71xxxx-1xxxxxxx",
        qnt: 5600,
      },
      {
        name: "신oo",
        idNum: "78xxxx-1xxxxxxx",
        qnt: 3400,
      },
      {
        name: "김oo",
        idNum: "73xxxx-1xxxxxxx",
        qnt: 100,
      },
      {
        name: "강oo",
        idNum: "73xxxx-1xxxxxxx",
        qnt: 100,
      },
    ],
    commu: [
      // { type: 'subheader', title: 'Today' },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "이 빌딩 가치가 금방 올라가나요?",
        subtitle: `<span class="font-weight-bold">홍길동</span> &mdash; 경관좋은 산등성에 지은 18평 목조 주말주택`,
      },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "이곳이 가장 비싼가요?",
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; 노인인데 저런 곳에 살고 픈 마음이 잠깐씩은 든다 그렇지만 낙엽 떨어지고 삭막한 겨울 춥고 난방비 많이 들고 여름이면 벌레 모기 얼마나 힘들까 지금 아파트인데 2층인데 모기 장치고 잔다 그래야 마음 놓고 잠이 든다`,
      },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "서초동은 실제 가격처럼 금방 오릅니다.",
        subtitle:
          '<span class="font-weight-bold">Sandra Adams</span> &mdash; 이뿌네요 충북 단양 ...이정도면 나도 호사하고 싶은데 비용이 ..궁금하네요',
      },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "빨리 사야겠다",
        subtitle:
          '<span class="font-weight-bold">Trevor Hansen</span> &mdash; 일산 후곡에저단가 실용적인 모던한 증축 소형주택(모듈러주택) 7평형입니다',
      },
      // { type: 'divider', inset: true },
      {
        prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "영끌하자",
        subtitle:
          '<span class="font-weight-bold">Britta Holt</span> &mdash; 확 트인 평지가 편안해 보이네요.. 나이든 사람들에게는 언덕배기에 있는집보다 이런집이 살기좋은 집입니다',
      },
    ],
    posts: [
      {
        post_type:'LINK',
        og_image:
          "https://cdn.mediatoday.co.kr/news/thumbnail/202206/304341_413145_1517_v150.jpg",
        og_title:
          "[이상민의 경제기사비평] 감세하면 또는 증세하면, 물가가 잡힐까?",
        og_url:
          "http://www.mediatoday.co.kr/news/articleView.html?idxno=304341",
        comment: "페이크 데이타 입니다. ",
      },
      {
        post_type:'LINK',
        og_image:
          "https://cdn.mediatoday.co.kr/news/thumbnail/202206/304528_413463_024_v150.jpg",
        og_title:
          '[영상]  민주당 토론회 "워라벨 진보 꼰대 문화" "기재부 공무원 같다"',
        og_url:
          "http://www.mediatoday.co.kr/news/articleView.html?idxno=304528",
        comment: "페이크 데이타 입니다. ",
      },
    ],
  },
];
