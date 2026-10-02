import { CharacterProfile, WorldRegion, GroupInfo, Language } from './types';

export const MAIN_CHARACTERS_KO: CharacterProfile[] = [
  {
    id: 'elior',
    name: '엘리오르 데 네프라달 비르자데 베르다니스',
    subName: '엘 (El)',
    role: '남자 주인공 (2황자, 네프라달 공작)',
    age: '28세',
    image: 'https://i.postimg.cc/XqqHB4dx/03.jpg',
    mbti: 'ISFJ (용감한 수호자)',
    themeColor: 'jade-dark',
    description: '그랜드 소드마스터이자 당신을 짝사랑하는 순정남',
    tags: ['203cm', '3대 770kg', '옥색 눈동자'],
    keywords: [
      '평화를 사랑하며 도덕적인 원칙을 준수함',
      '겉모습은 야수 같으나 속은 온화하고 신중함',
      '묵묵히 곁을 지키며 헌신하는 수호자적 성향임',
      '감정을 절제하지만 내 사람은 확실히 챙김'
    ],
    details: [
      {
        title: '성적 성향 & 행동',
        content: [
          '자발적으로 헌신하며 봉사하는 것을 기뻐함',
          '강압적이거나 거친 표현 없이 입술, 체온, 향기 위주의 부드러운 소유욕을 표현함',
          '숭배보다는 애정 어린 칭찬을 건네는 타입',
          '억지로 웃으면 무서워 보여서 무표정이 디폴트이나, 자기 사람이 모함받으면 참지 않음'
        ]
      },
      {
        title: '과거사',
        content: [
          '어릴 적엔 왜소하고 푸른 눈이라 황족 자질을 의심받으며 자랐음',
          '11살 때 이복형제들에 의해 창고에 감금되었으나 당신에게 구출됨. 이때부터 첫사랑 시작 (모태솔로)',
          '사춘기 이후 급성장하며 선명한 옥색 눈동자 발현',
          '북부 전쟁(821~824년)을 종식시킨 전쟁 영웅이자 그랜드 소드마스터',
          '전쟁 공로를 인정받아 북부의 새로운 영지를 하사받고 공작이 됨 (이때 이름 없던 야만인의 땅을 그의 미들네임을 따 "네프라달"로 명명함)',
          '전쟁귀라는 별명과 위압적인 외모 때문에 사람들이 무서워하지만 실제로는 대형견남'
        ]
      },
      {
        title: 'TMI (취향)',
        content: [
          '체향: 블랙티&베이 리프(탑) + 아이리스 루트(미들) + 앰버(베이스)',
          '말투: 신중하고 조곤조곤함',
          '목소리: 부드러운 극저음',
          '주량: 위스키 10병 이상 (말술)',
          '선호: 오리고기, 과일주, 푸딩',
          '취미: 피아노 연주, 독서, 가드닝 (의외로 섬세함)'
        ]
      }
    ]
  },
  {
    id: 'valeria',
    name: '발레리아 데 프리무스 비르자데 베르다니스',
    subName: '발레 (Vale)',
    role: '황태녀 (주요 조력자)',
    age: '30세',
    image: 'https://i.postimg.cc/3JWVdCFc/va.png',
    mbti: 'ESTP (모험을 즐기는 사업가)',
    themeColor: 'royal-gold',
    description: '6서클 마법사이자 마검사, 제국의 실질적 지배자',
    tags: ['175cm', '3대 300kg', '은발 옥안', '걸크러쉬'],
    keywords: [
      '자신감이 넘치며 카리스마 있는 지도자형임',
      '지배적이고 권위적이지만 내 사람에겐 다정함',
      '장난기가 많고 여유로운 큰언니 같은 성격임',
      '압도적인 무력으로 상대를 보호함'
    ],
    details: [
      {
        title: '행동 & 특징',
        content: [
          '고상한 말투로 뼈 때리는 "귀족적 돌려까기" 장인',
          '동생 엘리오르의 짝사랑을 응원하며 당신과 이어주려 노력함',
          '신분보다 능력 위주 인재 채용',
          '작은 소동물(그리고 당신)을 무척 귀여워함',
          '이상형: 호승심을 자극하는 털 북숭북숭한 산적 스타일 근육남'
        ]
      },
      {
        title: '과거사',
        content: [
          '태아 때 기운이 너무 강해 아들로 오인받았으나 딸로 태어남',
          '어릴 적부터 천재였으며 황후 소생의 정통성을 가짐',
          '8살 때 황후가 병사한 뒤 동생을 강하게 단련시키며 보호함',
          '이복형제들과의 경쟁에서 승리해 820년 황태녀 책봉'
        ]
      },
      {
        title: 'TMI (취향)',
        content: [
          '체향: 화이트 피치(탑) + 아몬드 블로썸(미들) + 밀크 어코트(베이스)',
          '말투: 호탕하고 시원함',
          '주량: 무한대',
          '선호: 고기, 독한 술, 달달한 디저트, 흰색',
          '비밀 취미: 로맨스 소설 읽기, 침실은 핑크색 털인형으로 가득함'
        ]
      }
    ]
  }
];

export const SUB_CHARACTERS_KO: CharacterProfile[] = [
  {
    id: 'severian',
    name: '세베리안 데 인빅타 비르자데 베르다니스',
    role: '황제 (은퇴)',
    age: '65세',
    mbti: 'INTJ (용의주도한 전략가)',
    themeColor: 'stone-600',
    description: '백내장으로 요양 중인 전대 소드마스터',
    tags: ['197cm', '위압형 미남', '옥색 눈동자'],
    keywords: [
      '엄격한 원칙주의자이며 법을 중시함',
      '냉철하고 실용적인 사고방식을 가짐',
      '죽은 황후 카일리아를 깊이 사랑했음'
    ],
    details: [
      { title: '관계', content: ['황후 카일리아는 사랑했으나 현 황비 리비아와는 비즈니스 관계'] }
    ]
  },
  {
    id: 'kailia',
    name: '카일리아 폰 상크타',
    role: '황후 (고인)',
    age: '향년 39세',
    mbti: '-',
    themeColor: 'stone-400',
    description: '상크타 왕국 왕녀 출신의 6서클 마법사',
    tags: ['마법 천재', '비운의 황후'],
    keywords: ['마력 역류병으로 병사함', '발레리아와 엘리오르의 친모'],
    details: []
  },
  {
    id: 'livia',
    name: '리비아 암브로시아',
    role: '황비',
    age: '60세',
    mbti: 'ENTJ (대담한 통솔자)',
    themeColor: 'red-800',
    description: '남부 암브로시아 백작가 출신의 야심가',
    tags: ['163cm', '적안', '금발'],
    keywords: [
      '성취 지향적이며 전략적인 야망을 가짐',
      '황제 보필 중이나 권력욕이 있음'
    ],
    details: []
  },
  {
    id: 'cassian',
    name: '카시안 데 아욱토르 비르자데 베르다니스',
    role: '1황자',
    age: '29세',
    mbti: 'ENTJ (대담한 통솔자)',
    themeColor: 'yellow-600',
    description: '황비 소생의 5서클 마법사',
    tags: ['195cm', '금발 옥안', '뼈대 굵음'],
    keywords: [
      '왕관을 탐하며 권력을 갈구함',
      '허술하지만 남을 괴롭히는 성향이 있음'
    ],
    details: []
  },
  {
    id: 'floria',
    name: '플로리아 데 벨렌느 비르자데 베르다니스',
    role: '2황녀',
    age: '29세',
    mbti: 'ESFJ (사교적인 외교관)',
    themeColor: 'pink-500',
    description: '카시안의 쌍둥이 여동생, 마법 재능 없음',
    tags: ['166cm', '금발 옥안', '슬랜더'],
    keywords: [
      '질투심이 많고 어리광쟁이 성향임',
      '주목받기를 좋아함'
    ],
    details: []
  }
];

export const WORLD_DATA_KO: WorldRegion = {
  name: '베르다니스 (Verdanis) 제국',
  description: '대륙에서 가장 크고 번성한 국가.',
  cities: [
    {
      name: '첼사 베르데 (수도)',
      description: [
        '제국 중앙에 위치한 심장부.',
        '부촌인 [비렌티아]에는 황궁과 대성당, 행정 지구가 위치함.',
        '빈민가였던 [네파라]는 현재 도시정비 사업으로 재개발되어 치안이 개선됨.',
        '비렌티아와 네파라 사이에는 관공서가 밀집해 있어 은근한 경계가 형성됨.'
      ],
      features: ['비렌티아(부촌)', '네파라(재개발지구)', '관공서 밀집']
    },
    {
      name: '네프라달 (북부)',
      description: [
        '제국력 824년 복속된 "기회의 땅".',
        '야만인들의 땅이라 불렸으나, 전쟁 영웅인 엘리오르가 공작으로 부임한 후 신도시로 급부상함.',
        '거대 침엽수림 [실바 네프라]에서는 마물이 출몰하여 관련 아이템/식재료 산업이 발달함.'
      ],
      features: ['마력철도', '광산 발달', '신흥 부자 다수', '제국군 주둔']
    },
    {
      name: '아르카 (서부)',
      etymology: 'arcanum (신비)',
      description: [
        '마탑이 위치한 최첨단 마도 공학 도시.',
        '황폐한 사막이었으나 담수화 기술로 오아시스 도시가 됨.',
        '엘프 등 이종족이 많이 거주함.'
      ],
      features: ['마탑 자치구', '제국마법군', '최첨단 마도기술']
    },
    {
      name: '그라니비노 (동부)',
      etymology: 'granum(곡식) + vino(와인)',
      description: [
        '거대한 곡창 지대와 양조장이 즐비한 풍요의 도시.',
        '곡주 무역이 활발하여 세수가 높고 현금 부자가 많음.',
        '동부 귀족들의 중앙 정계 영향력이 강함.'
      ],
      features: ['대형 도매 시장', '풍차', '와인 양조장']
    },
    {
      name: '포르토아우렐리 (남부)',
      etymology: 'portus(항구) + aureus(황금)',
      description: [
        '제국 최대의 항만 무역 도시이자 해군 요충지.',
        '제2의 수도라 불릴 만큼 화려하고 번성함.',
        '저렴한 향신료 덕분에 미식 문화가 고도로 발달함.'
      ],
      features: ['해군 본부', '거대 상단', '미식 여행지']
    }
  ]
};

export const GEMMA_CLUB_KO: GroupInfo = {
  name: '젬마 클럽 (Gemma Club)',
  description: [
    '카시안(1황자)과 플로리아(2황녀)가 주도하는 사교 모임.',
    '주로 남부 귀족 출신들이 모여 우르르 몰려다니는 경향이 있음.',
    '엘리오르에 대한 흉흉하고 악의적인 소문을 퍼뜨리는 근원지.',
    '당신을 타겟으로 찍어 은근히 시비를 거는 집단.'
  ],
  members: [
    {
      name: '알바로',
      role: '클럽 대표',
      desc: '푸엔테 후작 영식(31세). 녹발 금안. 강자에게 약하고 약자에게 강한 전형적인 강약약강.'
    },
    {
      name: '발로나',
      role: '플로리아의 시녀',
      desc: '린트 백작 영애. 적발 벽안의 글래머. 플로리아의 손발이 됨.'
    }
  ]
};

// ==================== ENGLISH DATA ====================

export const MAIN_CHARACTERS_EN: CharacterProfile[] = [
  {
    id: 'elior',
    name: 'Elior de Nefradal Virzade Verdanis',
    subName: 'El',
    role: 'Male Protagonist (2nd Prince, Duke of Nefradal)',
    age: '28 years old',
    image: 'https://i.postimg.cc/XqqHB4dx/03.jpg',
    mbti: 'ISFJ (Defender)',
    themeColor: 'jade-dark',
    description: 'A Grand Swordmaster and devoted pure-hearted man harboring an unrequited love for you',
    tags: ['203cm', 'S/B/D 770kg', 'Jade Eyes'],
    keywords: [
      'Loves peace and strictly adheres to moral principles',
      'Beast-like in appearance, but gentle and prudent at heart',
      'Silently remains by your side with devoted guardian instincts',
      'Restrains emotions, but fiercely protects his own people'
    ],
    details: [
      {
        title: 'Intimate Tendencies & Demeanor',
        content: [
          'Finds joy in voluntary dedication and serving his loved one',
          'Expresses gentle possessiveness centered around soft lips, body warmth, and scent without coercion or roughness',
          'Prefers affectionate praise and tenderness over worship',
          'Default expression is impassive because forced smiles look frightening, but never tolerates slander against his loved one'
        ]
      },
      {
        title: 'Background & Past',
        content: [
          'Grew up with his royal lineage questioned due to his frail build and blue eyes in childhood',
          'Locked in a warehouse by half-siblings at age 11 and rescued by you; fell in love for the first time then (never dated anyone)',
          'Underwent rapid growth after puberty, manifesting vivid jade eyes',
          'A war hero and Grand Swordmaster who ended the Northern War (821–824)',
          'Granted a new northern estate and made Duke for war merits (named the nameless barbarian land "Nefradal" after his middle name)',
          'Feared by people for his intimidating appearance and moniker "War Demon", but is actually a gentle puppy-dog at heart'
        ]
      },
      {
        title: 'Trivia (Preferences)',
        content: [
          'Scent: Black Tea & Bay Leaf (Top) + Iris Root (Middle) + Amber (Base)',
          'Speech: Deliberate, soft-spoken, and calm',
          'Voice: Gentle, rich ultra-deep bass',
          'Alcohol tolerance: 10+ bottles of whiskey (heavy drinker)',
          'Favorites: Duck meat, fruit wine, pudding',
          'Hobbies: Piano playing, reading, gardening (surprisingly delicate)'
        ]
      }
    ]
  },
  {
    id: 'valeria',
    name: 'Valeria de Primus Virzade Verdanis',
    subName: 'Vale',
    role: 'Crown Princess (Key Supporter)',
    age: '30 years old',
    image: 'https://i.postimg.cc/3JWVdCFc/va.png',
    mbti: 'ESTP (Entrepreneur)',
    themeColor: 'royal-gold',
    description: 'A 6th-circle mage and magic swordsman; the de facto ruler of the Empire',
    tags: ['175cm', 'S/B/D 300kg', 'Silver Hair & Jade Eyes', 'Girl Crush'],
    keywords: [
      'Full of confidence, a charismatic natural leader',
      'Dominant and authoritative, yet deeply affectionate to her inner circle',
      'Playful and easygoing with dependable big sister energy',
      'Shields loved ones with overwhelming martial prowess'
    ],
    details: [
      {
        title: 'Demeanor & Traits',
        content: [
          'Master of hitting where it hurts with refined "aristocratic sarcasm"',
          'Rooting for her brother Elior\'s unrequited love, actively trying to set you two up',
          'Appoints talent based strictly on merit rather than social standing',
          'Greatly adores small animals (and you)',
          'Ideal type: A rugged, bearded bandit-style muscular man who fuels her competitive spirit'
        ]
      },
      {
        title: 'Background & Past',
        content: [
          'Her prenatal aura was so powerful she was assumed to be male, but was born a daughter',
          'A prodigy from childhood holding full imperial legitimacy as the Empress\'s daughter',
          'After the Empress passed when she was 8, trained and protected her younger brother fiercely',
          'Triumphed over half-siblings in imperial succession, invested as Crown Princess in year 820'
        ]
      },
      {
        title: 'Trivia (Preferences)',
        content: [
          'Scent: White Peach (Top) + Almond Blossom (Middle) + Milk Accord (Base)',
          'Speech: Boisterous, refreshing, and straightforward',
          'Alcohol tolerance: Infinite (bottomless)',
          'Favorites: Meat, strong liquor, sweet desserts, white',
          'Secret hobby: Reading romance novels; bedroom filled with pink stuffed animals'
        ]
      }
    ]
  }
];

export const SUB_CHARACTERS_EN: CharacterProfile[] = [
  {
    id: 'severian',
    name: 'Severian de Invicta Virzade Verdanis',
    role: 'Emperor (Retired)',
    age: '65 years old',
    mbti: 'INTJ (Architect)',
    themeColor: 'stone-600',
    description: 'Former Swordmaster resting and recuperating due to cataracts',
    tags: ['197cm', 'Imposing Handsome Man', 'Jade Eyes'],
    keywords: [
      'Strict principled ruler who values the law',
      'Cool-headed and pragmatic mindset',
      'Deeply loved the late Empress Kailia'
    ],
    details: [
      { title: 'Relationships', content: ['Loved Empress Kailia, but maintains a purely business relationship with Imperial Consort Livia'] }
    ]
  },
  {
    id: 'kailia',
    name: 'Kailia von Sancta',
    role: 'Empress (Deceased)',
    age: 'Passed at age 39',
    mbti: '-',
    themeColor: 'stone-400',
    description: '6th-circle mage and former princess of the Sancta Kingdom',
    tags: ['Magical Genius', 'Tragic Empress'],
    keywords: ['Died from mana reflux disease', 'Birth mother of Valeria and Elior'],
    details: []
  },
  {
    id: 'livia',
    name: 'Livia Ambrosia',
    role: 'Imperial Consort',
    age: '60 years old',
    mbti: 'ENTJ (Commander)',
    themeColor: 'red-800',
    description: 'An ambitious lady from the Southern Ambrosia County',
    tags: ['163cm', 'Red Eyes', 'Blonde Hair'],
    keywords: [
      'Achievement-oriented with calculated political ambitions',
      'Assisting the Emperor while harboring a thirst for power'
    ],
    details: []
  },
  {
    id: 'cassian',
    name: 'Cassian de Auctor Virzade Verdanis',
    role: '1st Prince',
    age: '29 years old',
    mbti: 'ENTJ (Commander)',
    themeColor: 'yellow-600',
    description: '5th-circle mage born to the Imperial Consort',
    tags: ['195cm', 'Blonde & Jade Eyes', 'Heavy-boned'],
    keywords: [
      'Covets the crown and thirsts for power',
      'Careless and blundering, yet enjoys tormenting others'
    ],
    details: []
  },
  {
    id: 'floria',
    name: 'Floria de Belenne Virzade Verdanis',
    role: '2nd Princess',
    age: '29 years old',
    mbti: 'ESFJ (Consul)',
    themeColor: 'pink-500',
    description: 'Cassian\'s twin sister, possessing no magical aptitude',
    tags: ['166cm', 'Blonde & Jade Eyes', 'Slender'],
    keywords: [
      'Easily jealous and spoiled',
      'Craves being the center of attention'
    ],
    details: []
  }
];

export const WORLD_DATA_EN: WorldRegion = {
  name: 'Verdanis Empire',
  description: 'The largest and most prosperous nation on the continent.',
  cities: [
    {
      name: 'Celsa Verde (Capital)',
      description: [
        'The heartland located at the center of the empire.',
        'The affluent district [Virentia] is home to the Imperial Palace, the Grand Cathedral, and administrative districts.',
        'The former slum [Nefara] is currently redeveloped under urban renewal projects, improving security.',
        'Government offices are clustered between Virentia and Nefara, forming a subtle boundary.'
      ],
      features: ['Virentia (Affluent District)', 'Nefara (Redevelopment Zone)', 'Clustered Government Offices']
    },
    {
      name: 'Nefradal (North)',
      description: [
        'The "Land of Opportunity," annexed in Imperial Year 824.',
        'Once called a land of barbarians, it rapidly surged as a bustling new city after war hero Elior took office as Duke.',
        'Monsters roam the vast coniferous forest [Silva Nefra], fostering thriving industries for monster ingredients and materials.'
      ],
      features: ['Mana Railway', 'Booming Mining', 'Emerging Wealthy Class', 'Imperial Army Garrison']
    },
    {
      name: 'Arca (West)',
      etymology: 'arcanum (mystery)',
      description: [
        'A cutting-edge magitech engineering city where the Magic Tower is situated.',
        'Once a desolate desert, it transformed into an oasis city through water desalination technology.',
        'Home to many diverse races such as elves.'
      ],
      features: ['Magic Tower Autonomous District', 'Imperial Magic Corps', 'Cutting-edge Magitech']
    },
    {
      name: 'Granivino (East)',
      etymology: 'granum (grain) + vino (wine)',
      description: [
        'A bountiful city lined with vast granaries and famed wineries.',
        'Brisk grain liquor trade yields high tax revenues and numerous cash-wealthy merchants.',
        'Eastern nobles hold formidable sway over central imperial politics.'
      ],
      features: ['Large Wholesale Market', 'Windmills', 'Wine Breweries']
    },
    {
      name: 'Porto Aureli (South)',
      etymology: 'portus (port) + aureus (golden)',
      description: [
        'The empire\'s premier port trade hub and vital naval strategic base.',
        'So glamorous and prosperous it is hailed as the secondary capital.',
        'Culinary culture is highly refined thanks to affordable exotic spices.'
      ],
      features: ['Naval Headquarters', 'Great Merchant Guilds', 'Gourmet Destination']
    }
  ]
};

export const GEMMA_CLUB_EN: GroupInfo = {
  name: 'Gemma Club',
  description: [
    'A high-society club led by Cassian (1st Prince) and Floria (2nd Princess).',
    'Consists mainly of southern aristocrats who tend to move around in cliques.',
    'The hotbed spreading sinister and malicious rumors about Elior.',
    'A faction targeting you and picking subtle quarrels.'
  ],
  members: [
    {
      name: 'Alvaro',
      role: 'Club Representative',
      desc: 'Son of Marquis Fuente (31 years old). Green hair, gold eyes. Servile to the strong and arrogant to the weak.'
    },
    {
      name: 'Valona',
      role: 'Floria\'s Lady-in-Waiting',
      desc: 'Daughter of Count Lindt. Red hair, blue eyes, glamorous. Acts as Floria\'s right hand.'
    }
  ]
};

// ==================== JAPANESE DATA ====================

export const MAIN_CHARACTERS_JA: CharacterProfile[] = [
  {
    id: 'elior',
    name: 'エリオール デ ネフラダル ヴィルザーデ ヴェルダニス',
    subName: 'エル (El)',
    role: '男主人公 (第2皇子、ネフラダル公爵)',
    age: '28歳',
    image: 'https://i.postimg.cc/XqqHB4dx/03.jpg',
    mbti: 'ISFJ (擁護者)',
    themeColor: 'jade-dark',
    description: 'グランドソードマスターであり、あなたに片思いする純情な男',
    tags: ['203cm', 'BIG3 770kg', '翡翠色の瞳'],
    keywords: [
      '平和を愛し、道徳的原則を重んじる',
      '外見は野獣のようだが、内面は温和で慎重',
      '黙って側に寄り添い献身する守護者的気質',
      '感情を抑制するが、自分の大切な人は断固として守る'
    ],
    details: [
      {
        title: '性向・振る舞い',
        content: [
          '自発的に献身し、尽くすことに喜びを感じる',
          '強圧的・粗野な表現はなく、唇や体温、香りを中心とした穏やかな独占欲を示す',
          '崇拝よりも愛情のこもった賛辞を贈るタイプ',
          '無理に笑うと威圧感を与えるため無表情が基本だが、身内が陥れられると容赦しない'
        ]
      },
      {
        title: '過去の経歴',
        content: [
          '幼少期は小柄で青い瞳だったため、皇族の資質を疑われながら育った',
          '11歳の時、異母兄弟によって倉庫に監禁されたがあなたに救出される。その時から初恋が始まる(交際経験ゼロ)',
          '思春期以降に急成長し、鮮やかな翡翠色の瞳が発現',
          '北方戦争(821〜824年)を終結させた戦争の英雄であり、グランドソードマスター',
          '軍功を認められて北方の新領地を賜り公爵となる(この時、名もなき蛮族の地を彼のミドルネームにちなんで「ネフラダル」と命名)',
          '「戦争鬼」の異名と威圧的な外見から恐れられているが、実際は大型犬系男子'
        ]
      },
      {
        title: 'TMI (好み・設定)',
        content: [
          '体香: ブラックティー＆ベイリーフ(トップ) + アイリスルート(ミドル) + アンバー(ベース)',
          '話し方: 慎重で物静か',
          '声: 柔らかく響く超低音',
          '酒量: ウイスキー10本以上 (大酒豪)',
          '好物: 鴨肉、果実酒、プリン',
          '趣味: ピアノ演奏、読書、ガーデニング (意外にも繊細)'
        ]
      }
    ]
  },
  {
    id: 'valeria',
    name: 'ヴァレリア デ プリムス ヴィルザーデ ヴェルダニス',
    subName: 'ヴァレ (Vale)',
    role: '皇太女 (主要な協力者)',
    age: '30歳',
    image: 'https://i.postimg.cc/3JWVdCFc/va.png',
    mbti: 'ESTP (起業家)',
    themeColor: 'royal-gold',
    description: '6サークルの魔法使い兼魔剣士、帝国の実質的な支配者',
    tags: ['175cm', 'BIG3 300kg', '銀髪・翡翠色の瞳', 'ガールクラッシュ'],
    keywords: [
      '自信に満ち溢れ、カリスマ性のある指導者肌',
      '支配的で威厳があるが、味方には極めて優しい',
      '茶目っ気があり、余裕のある頼れる姉御肌',
      '圧倒的な武力で相手を守り抜く'
    ],
    details: [
      {
        title: '行動・特徴',
        content: [
          '高貴な言葉遣いで痛烈に突く「貴族流の皮肉」の達人',
          '弟エリオールの片思いを応援し、あなたと結ばれるよう画策する',
          '身分よりも実力を重視した人材登用',
          '小動物(そしてあなた)をやたらと可愛がる',
          '理想のタイプ: 闘争心を刺激する毛深い山賊風のマッチョ'
        ]
      },
      {
        title: '過去の経歴',
        content: [
          '胎児の時の気が強すぎて男児と誤認されたが、息女として誕生',
          '幼少期から神童であり、皇后所生の正統性を持つ',
          '8歳の時に皇后が病没した後、弟を厳しく鍛え上げながら守り抜いた',
          '異母兄弟たちとの後継者争いに勝利し、820年に皇太女に冊封'
        ]
      },
      {
        title: 'TMI (好み・設定)',
        content: [
          '体香: ホワイトピーチ(トップ) + アーモンドブロッサム(ミドル) + ミルクアコード(ベース)',
          '話し方: 豪快でさっぱりとしている',
          '酒量: 無限大',
          '好物: 肉、強い酒、甘いデザート、白',
          '秘密の趣味: 恋愛小説の読書、寝室はピンクのぬいぐるみでいっぱい'
        ]
      }
    ]
  }
];

export const SUB_CHARACTERS_JA: CharacterProfile[] = [
  {
    id: 'severian',
    name: 'セヴェリアン デ インヴィクタ ヴィルザーデ ヴェルダニス',
    role: '皇帝 (引退)',
    age: '65歳',
    mbti: 'INTJ (建築家)',
    themeColor: 'stone-600',
    description: '白内障で療養中の先代ソードマスター',
    tags: ['197cm', '威圧的イケメン', '翡翠色の瞳'],
    keywords: [
      '厳格な原則主義者で法を重んじる',
      '冷徹で実用的な思考の持ち主',
      '亡き皇后カイリアを深く愛していた'
    ],
    details: [
      { title: '関係', content: ['皇后カイリアは愛していたが、現在の皇妃リヴィアとはビジネス上の関係'] }
    ]
  },
  {
    id: 'kailia',
    name: 'カイリア フォン サンクタ',
    role: '皇后 (故人)',
    age: '享年39歳',
    mbti: '-',
    themeColor: 'stone-400',
    description: 'サンクタ王国王女出身の6サークル魔法使い',
    tags: ['魔法の天才', '悲運の皇后'],
    keywords: ['魔力逆流病により病没', 'ヴァレリアとエリオールの実母'],
    details: []
  },
  {
    id: 'livia',
    name: 'リヴィア アンブロシア',
    role: '皇妃',
    age: '60歳',
    mbti: 'ENTJ (指揮官)',
    themeColor: 'red-800',
    description: '南部アンブロシア伯爵家出身の野心家',
    tags: ['163cm', '赤眼', '金髪'],
    keywords: [
      '達成志向で戦略的な野心を持つ',
      '皇帝を補佐しているが権力欲が強い'
    ],
    details: []
  },
  {
    id: 'cassian',
    name: 'カシアン デ アウクトル ヴィルザーデ ヴェルダニス',
    role: '第1皇子',
    age: '29歳',
    mbti: 'ENTJ (指揮官)',
    themeColor: 'yellow-600',
    description: '皇妃所生の5サークル魔法使い',
    tags: ['195cm', '金髪・翡翠色の瞳', '骨太'],
    keywords: [
      '王冠を狙い権力を渇望する',
      '隙が多いが他者を虐げる気質がある'
    ],
    details: []
  },
  {
    id: 'floria',
    name: 'フロリア デ ベレンヌ ヴィルザーデ ヴェルダニス',
    role: '第2皇女',
    age: '29歳',
    mbti: 'ESFJ (領事官)',
    themeColor: 'pink-500',
    description: 'カシアンの双子の妹、魔法の才能はない',
    tags: ['166cm', '金髪・翡翠色の瞳', 'スレンダー'],
    keywords: [
      '嫉妬深く甘えん坊な気質',
      '注目されることを好む'
    ],
    details: []
  }
];

export const WORLD_DATA_JA: WorldRegion = {
  name: 'ヴェルダニス (Verdanis) 帝国',
  description: '大陸で最も大きく繁栄した国家。',
  cities: [
    {
      name: 'チェルサ・ヴェルデ (首都)',
      description: [
        '帝国中央に位置する心臓部。',
        '富裕街［ヴィレンティア］には皇宮や大聖堂、行政区が位置する。',
        'スラム街だった［ネファラ］は現在、都市整備事業で再開発され治安が改善。',
        'ヴィレンティアとネファラの間には官公庁が密集し、暗黙の境界が形成されている。'
      ],
      features: ['ヴィレンティア(富裕街)', 'ネファラ(再開発地区)', '官公庁密集']
    },
    {
      name: 'ネフラダル (北部)',
      description: [
        '帝国歴824年に服属した「機会の地」。',
        '蛮族の地と呼ばれていたが、戦争の英雄エリオールが公爵として赴任した後に新興都市として急浮上。',
        '巨大な針葉樹林［シルヴァ・ネフラ］には魔物が出没し、関連アイテムや食材産業が発展。'
      ],
      features: ['魔力鉄道', '鉱山産業の発展', '新興富裕層多数', '帝国軍駐屯']
    },
    {
      name: 'アルカ (西部)',
      etymology: 'arcanum (神秘)',
      description: [
        '魔塔が位置する最先端魔導工学都市。',
        '荒廃した砂漠だったが、淡水化技術によりオアシス都市となった。',
        'エルフなど異種族が多く居住。'
      ],
      features: ['魔塔自治特区', '帝国魔法軍', '最先端魔導技術']
    },
    {
      name: 'グラニヴィーノ (東部)',
      etymology: 'granum(穀物) + vino(ワイン)',
      description: [
        '広大な穀倉地帯と醸造所が立ち並ぶ豊穣の都市。',
        '穀物酒の貿易が盛んで税収が高く、富裕層が多い。',
        '東部貴族の中央政界への影響力が強い。'
      ],
      features: ['大型卸売市場', '風車', 'ワイン醸造所']
    },
    {
      name: 'ポルトアウレリ (南部)',
      etymology: 'portus(港) + aureus(黄金)',
      description: [
        '帝国最大の港湾貿易都市であり、海軍の要衝。',
        '「第二の首都」と称されるほど華やかで繁栄している。',
        '安価な香辛料のおかげで美食文化が高度に発達。'
      ],
      features: ['海軍本部', '巨大商団', '美食の観光地']
    }
  ]
};

export const GEMMA_CLUB_JA: GroupInfo = {
  name: 'ジェンマ・クラブ (Gemma Club)',
  description: [
    'カシアン(第1皇子)とフロリア(第2皇女)が主導する社交サロン。',
    '主に南部貴族出身者が集まり群がる傾向がある。',
    'エリオールに関する不穏で悪意ある噂の発信源。',
    'あなたを標的に定め、それとなく難癖をつけてくる集団。'
  ],
  members: [
    {
      name: 'アルバロ',
      role: 'クラブ代表',
      desc: 'プエンテ侯爵子息(31歳)。緑髪・金色の瞳。強きに諂い弱きを挫く典型的な腰巾着。'
    },
    {
      name: 'ヴァローナ',
      role: 'フロリアの侍女',
      desc: 'リント伯爵令嬢。赤髪・碧眼のグラマー。フロリアの手足となって動く。'
    }
  ]
};

// UI Translations
export interface UiTranslations {
  appTitle: string;
  tabs: {
    main: string;
    sub: string;
    world: string;
    group: string;
  };
  quote: string;
  familyTreeTitle: string;
  emperorLabel: string;
  empressLabel: string;
  consortLabel: string;
  severianTree: string;
  kailiaTree: string;
  liviaTree: string;
  mapAlt: string;
  keyFigures: string;
  footerNote: string;
}

export const UI_TRANSLATIONS: Record<Language, UiTranslations> = {
  ko: {
    appTitle: '황태녀에게 간택당했다',
    tabs: {
      main: '주연',
      sub: '조연',
      world: '세계관',
      group: '사교계'
    },
    quote: '"그대는 나의 구원이자, 유일한 평화입니다."',
    familyTreeTitle: '황실 가계도',
    emperorLabel: '황제',
    empressLabel: '황후',
    consortLabel: '황비',
    severianTree: '세베리안 (은퇴)',
    kailiaTree: '카일리아 (작고) → 발레리아, 엘리오르',
    liviaTree: '리비아 (섭정) → 카시안, 플로리아',
    mapAlt: '제국 지도',
    keyFigures: '주요 인물',
    footerNote: '더 많은 정보는 RP 내에서 확인하세요.'
  },
  en: {
    appTitle: 'Chosen by the Crown Princess',
    tabs: {
      main: 'Main',
      sub: 'Supporting',
      world: 'Worldview',
      group: 'High Society'
    },
    quote: '"You are my salvation, and my only peace."',
    familyTreeTitle: 'Imperial Family Tree',
    emperorLabel: 'Emperor',
    empressLabel: 'Empress',
    consortLabel: 'Imperial Consort',
    severianTree: 'Severian (Retired)',
    kailiaTree: 'Kailia (Deceased) → Valeria, Elior',
    liviaTree: 'Livia (Regent) → Cassian, Floria',
    mapAlt: 'Empire Map',
    keyFigures: 'Key Figures',
    footerNote: 'More details can be explored within the RP.'
  },
  ja: {
    appTitle: '皇太女に選ばれました',
    tabs: {
      main: '主演',
      sub: '助演',
      world: '世界観',
      group: '社交界'
    },
    quote: '「貴方は私の救いであり、唯一の平穏です。」',
    familyTreeTitle: '皇室系図',
    emperorLabel: '皇帝',
    empressLabel: '皇后',
    consortLabel: '皇妃',
    severianTree: 'セヴェリアン (引退)',
    kailiaTree: 'カイリア (逝去) → ヴァレリア、エリオール',
    liviaTree: 'リヴィア (摂政) → カシアン、フロリア',
    mapAlt: '帝国地図',
    keyFigures: '主要人物',
    footerNote: '詳細はRP内にてご確認ください。'
  }
};

export const DATA_BY_LANGUAGE: Record<
  Language,
  {
    mainCharacters: CharacterProfile[];
    subCharacters: CharacterProfile[];
    worldData: WorldRegion;
    gemmaClub: GroupInfo;
  }
> = {
  ko: {
    mainCharacters: MAIN_CHARACTERS_KO,
    subCharacters: SUB_CHARACTERS_KO,
    worldData: WORLD_DATA_KO,
    gemmaClub: GEMMA_CLUB_KO
  },
  en: {
    mainCharacters: MAIN_CHARACTERS_EN,
    subCharacters: SUB_CHARACTERS_EN,
    worldData: WORLD_DATA_EN,
    gemmaClub: GEMMA_CLUB_EN
  },
  ja: {
    mainCharacters: MAIN_CHARACTERS_JA,
    subCharacters: SUB_CHARACTERS_JA,
    worldData: WORLD_DATA_JA,
    gemmaClub: GEMMA_CLUB_JA
  }
};

// Default backwards compatibility exports (Korean default)
export const MAIN_CHARACTERS = MAIN_CHARACTERS_KO;
export const SUB_CHARACTERS = SUB_CHARACTERS_KO;
export const WORLD_DATA = WORLD_DATA_KO;
export const GEMMA_CLUB = GEMMA_CLUB_KO;
