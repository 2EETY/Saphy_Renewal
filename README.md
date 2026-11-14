# SAPHY FrontEnd

## 🔄 Renewal

> [2024-Saphy/FE](https://github.com/2024-Saphy/FE)의 랜딩페이지를 사이드 프로젝트로 리뉴얼한 저장소입니다.
> 원 저장소의 커밋 기록과 컨벤션을 그대로 이어갑니다.

- 배포: https://saphy.vercel.app (Vercel, Root Directory: `frontend`, Node.js 24.x)
- 리뉴얼 내용: 전체 화면 섹션, CTA 버튼, 브랜드 블루(`#9ABCFF`) + 메탈릭 실버 톤, Pretendard 폰트, 반응형 모바일 메뉴
- 앱은 창업 아이디어 단계에서 마무리되어 스토어에 출시되지 않았으므로, 다운로드 버튼은 '출시 예정'으로 표시합니다.
- 작업 흐름: `feat/SAPHY-{번호}-{기능}` → `develop` PR → `main` 배포

## 📠 Convention

### 🤝 Branch Naming Convention

| 머릿말  | 설명                               |
| ------- | ---------------------------------- |
| main    | 서비스 브랜치                      |
| develop | 배포 전 작업 기준                  |
| feat | 기능 단위 구현                     |
| hotfix  | 서비스 중 긴급 수정 건에 대한 처리 |

<details>
<summary>Branch Naming Convention Detail</summary>
<div markdown="1">

```
master(main) ── develop ── feature
└── hotfix
```

- [ ] [깃 플로우](https://techblog.woowahan.com/2553/)를 베이스로 하여 프로젝트 사이즈에 맞게 재정의했습니다.
- [ ] 브랜치 이름은 `cabab-case`를 따릅니다.
- [ ] 이슈 번호는 가장 마지막에 적습니다.

#### master(main)

- [ ] 실제 서비스가 이루어지는 브랜치입니다.
- [ ] 이 브랜치를 기준으로 develop 브랜치가 분기됩니다.
- [ ] 배포 중, 긴급하게 수정할 건이 생길시 hotfix 브랜치를 만들어 수정합니다.

#### develop

- [ ] 개발, 테스트, 릴리즈 등 배포 전 작업의 기준이 되는 브랜치입니다.
- [ ] 해당 브랜치를 default로 설정합니다.
- [ ] 이 브랜치에서 feature 브랜치가 분기됩니다.

#### feature

- [ ] 개별 개발자가 맡은 작업을 개발하는 브랜치입니다.
- [ ] feat/(feat-name) 과 같이 머릿말을 feat, 꼬릿말을 개발하는 기능으로 명명합니다.
- [ ] feat-name의 경우 cabab-case를 따릅니다.
- [ ] ex) feat/login-validation-#23

#### hotfix

- [ ] 서비스 중 긴급히 수정해야 할 사항이 발생할 때 사용합니다.
- [ ] master에서 분기됩니다.

</div>
</details>

### 🤝 Commit Convention

| 머릿말           | 설명                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| feat             | 새로운 기능 추가                                                          |
| fix              | 버그 수정                                                                 |
| design           | CSS 등 사용자 UI 디자인 변경                                              |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                    |
| !HOTFIX          | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
| refactor         | 프로덕션 코드 리팩토링업                                                  |
| comment          | 필요한 주석 추가 및 변경                                                  |
| docs             | 문서 수정                                                                 |
| test             | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)                        |
| setting          | 패키지 설치, 개발 설정                                                    |
| chore            | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| remove           | 파일을 삭제하는 작업만 수행한 경우                                        |

<details>
<summary>Commit Convention Detail</summary>
<div markdown="1">

- `<타입>`: `<제목> (<이슈번호>)` 의 형식으로 제목을 아래 공백줄에 작성
- 제목은 50자 이내 / 변경사항이 "무엇"인지 명확히 작성 / 끝에 마침표 금지
- 예) feat: 로그인 기능 추가 (#2)
- 본문(구체적인 내용)을 아랫줄에 작성
- 여러 줄의 메시지를 작성할 땐 "*"로 구분 (한 줄은 72자 이내)
- 제목과 본문은 한 줄 띄워 분리

</div>
</details>

---
