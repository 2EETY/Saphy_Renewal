// 랜딩페이지에 표시되는 문구와 링크를 한곳에서 관리합니다.

// 사이드 프로젝트 리뉴얼: 연락처와 저장소는 리뉴얼 담당자 기준, 원 팀 저장소는 출처로 표기
export const LINKS = {
  github: 'https://github.com/2EETY/Saphy_Renewal',
  originalTeam: 'https://github.com/2024-Saphy',
  email: 'lty9251@gmail.com',
};

// 앱은 창업 아이디어 단계에서 마무리되어 스토어에 출시되지 않았으므로 '출시 예정'으로 표시
export const APP_RELEASED = false;

export const NAV_ITEMS = [
  { id: 'about', label: '소개' },
  { id: 'features', label: '특징' },
  { id: 'service', label: '서비스' },
  { id: 'download', label: '다운로드' },
];

export const HERO = {
  eyebrow: '중고 전자기기 거래 마켓플레이스',
  title: ['안심하고 거래하는', '중고 전자기기 플랫폼'],
  description:
    '판매자와 구매자 모두가 신뢰할 수 있도록, SAPHY의 검수를 통과한 기기만 거래합니다.',
};

export const ABOUT = {
  question: '사피/Saphy는 무엇을 하는 곳인가요?',
  paragraphs: [
    '사피/Saphy는 중고 전자기기 수리 및 판매를 주선하는 마켓 플레이스입니다.',
    '사용자 분들에게 신뢰를 드리기 위한, 그리고 상품의 품질을 위한 일환으로써, 저희 플랫폼에 등록된 판매자는 사피의 엄격한 검수과정에 의거한 품질 기준을 통과한 상품들을 구매자분들께 제공합니다.',
    '사피는 판매자, 구매자 분들에게 최적의 상품, 검수 과정의 안정성, 신뢰성 및 품질에 관해 최선의 서비스를 제공드리고자 합니다.',
  ],
  points: ['엄격한 검수 기준', '검증된 판매자', '안전한 거래'],
};

export const FEATURES = [
  {
    id: 'quality',
    title: '품질',
    description:
      '상품의 외관, 성능 및 완전 작동 기기만을 판매하며, 철저한 검수를 통해 고품질 제품을 제공합니다.',
  },
  {
    id: 'price',
    title: '가격',
    description:
      '배송비 및 검수비를 포함하여, 중고 전자기기의 저렴한 가격을 통해 정가보다 더더욱 할인된 가격으로 판매합니다.',
  },
  {
    id: 'transparency',
    title: '투명성',
    description:
      '사피에서 제공되는 엄격한 검수 기준을 적용해 각 상품에 맞게 항목별로 평가된, 그리고 사용자분들의 의견을 수용하여 지속적인 발전을 추구합니다.',
  },
];

// 2024-Saphy 조직 소개(README)의 주요 기능을 판매 · 구매로 나눠 정리
export const SERVICES = [
  {
    id: 'sell',
    label: '판매자',
    title: '간단하게 등록하고, 안전하게 판매하세요',
    items: [
      '몇 단계의 간단한 절차로 판매할 전자기기를 등록',
      '안전 결제 시스템으로 사기 · 불공정 거래 방지',
      '거래 후기로 판매자 평판 관리',
      '구매자와 직접 소통하고 판매 알림 받기',
    ],
  },
  {
    id: 'buy',
    label: '구매자',
    title: '검증된 판매자에게, 합리적인 가격으로',
    items: [
      '최신 전자기기부터 빈티지 가전까지 다양한 카테고리',
      '상세 검색으로 원하는 조건의 제품을 빠르게 찾기',
      '후기로 신뢰도가 평가된 판매자에게 안심 구매',
      '시중가보다 저렴한 가격으로 원하던 기기 구매',
    ],
  },
];
