# 원티드 프리온보딩 6차 5-1 과제

## 9팀 소개

| <img src="https://avatars.githubusercontent.com/u/92010078?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92101831?v=4"/> | <img src="https://avatars.githubusercontent.com/u/69101321?v=4"/> | <img src="https://avatars.githubusercontent.com/u/85508157?v=4"/> | <img src="https://avatars.githubusercontent.com/u/97271725?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/many-yun">[팀장] 김다윤</a>           | <a href="https://github.com/blcklamb">김채정</a>                  | <a href="https://github.com/jaehyeon74">박재현</a>                | <a href="https://github.com/sacultang">오영재</a>                 | <a href="https://github.com/jungdeokwoo">정덕우</a>              |

## 목차

- [과제 소개](#과제-소개)
- [설치 및 실행](#설치-및-실행)
- [영상](#영상)
- [구현 기능](#구현-기능)
- [기술 스택](#기술-스택)
- [파일 구조](#파일-구조)

## 과제 소개

- 검색창 구현 + 검색어 추천 기능 구현
- 작업기간: 2022.09.27 ~ 2022.09.29

<br>

## 설치 및 실행

<br>

> git clone

```bash
> git clone https://github.com/wanted-9team/pre-onboarding-assignment-week-5-1-team-9

> cd pre-onboarding-assignment-week-5-1-team-9

# 동시실행 관련 패키지 설치
> npm install

# 서버 & 클라이언트 동시 실행
> npm run start
```

> 서버 및 데이터

```bash
# server directory
> cd server

# 관련 패키지 설치
> npm install

```

> 클라이언트

```bash
# client directory
> cd client

# 관련 패키지 설치
> npm install

```

## 데모

https://user-images.githubusercontent.com/85508157/192806655-a6c06ff7-3254-498e-9a68-76cb9f343388.mov

<br><br>

## 구현 기능

### ☑️ 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- [x] 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
- [x] 검색어가 없을 시 "검색어 없음" 표출

### ☑️ API 호출 최적화

### ☑️ 키보드만으로 추천 검색어들로 이동 가능하도록 구현

일단 컴포넌트 상에서 index를 확인하기위해 useState로 currentIndex 스테이트 생성한 후,
전체 container에 onKeyDown 이벤트를 통해서 event.code 를 통해 상하 화살표를 제외한 나머지 키코드가 입력되는 경우 early return 시키고, 검색결과의 경우 map을 돌릴경우 최상단이 index가 0에서 부터 1씩 증가하기 때문에 위쪽 화살표가 입력되는 경우에는 index를 1씩 감소, 아래쪽 화살표는 index를 1씩 증가시킨다,

추천검색의 리스트 컴포넌트에 isSelected={ index=== currentIndex} 를 통해 현재 state의 index값과 컴포넌트 자체의 index 값을 비교하여 isSelected의 값을 결정하고, isSelected가 true 일때 스타일 컴포넌트를 활용하여 배경색을 변경시켜주면 아래,위 화살표를 누를때마다 선택영역이 이동하게 됩니다.

input값을 입력할때 한글의 경우 조합어이기 때문에 한글을 입력하다가 다른키를 누르면 onKeyDown이 두번 작동하게 되는데 이때, onKeyDown 이벤트의 nativeEvent.isComposing(조합어를 작성하는지 여부를 확인)값이 true일때는 그냥 return 시키고, false일때(조합어를 작성하지 않는경우) 조건에 따라 index 가 변경되도록 하여 키보드를 통해 검색어들로 이동 가능하도록 구현하였습니다

#### Best Practices 👍

## 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>
<br>

## 파일구조

```bash
├─ server
└─ client
    ├─ public
    └─ src
        ├─ api
        │   ├─ base.js
        │   └─ searchAPI.js
        ├─ components
        │   ├─ Header.jsx
        │   ├─ Highlights.jsx
        │   ├─ Loading.jsx
        │   ├─ NoResults.jsx
        │   ├─ RecommendedKeyword.jsx
        │   ├─ Searchbar.jsx
        │   └─ Spinner.jsx
        ├─ consts
        │   └─ api.js
        ├─ hooks
        │   ├─ useCache.js
        │   └─ useDebounce.js
        ├─ styles
        │   └─ GlobalStyle.jsx
        ├─ App.js
        └─ index.js

```
