# Node.js + Express.js RESTful API Boilerplate

이 프로젝트는 Node.js와 Express.js를 사용하여 RESTful API를 구축하는 보일러플레이트 프로젝트입니다. JWT 인증, MySQL 및 MongoDB 데이터베이스 연결, 다양한 라우팅 기능을 포함하고 있습니다.

## 🚀 시작하기

### 1. 클론

이 저장소를 클론하여 로컬 개발 환경에서 시작할 수 있습니다:

```bash
git clone https://github.com/RosieOh/Express_BoilerPlate.git
cd Express_BoilerPlate
```


### 2. 의존성 설치
프로젝트의 의존성을 설치하려면 아래 명령어를 실행하세요:

```bash
npm install
```

### 3. 환경 변수 설정
.env 파일을 루트 디렉토리에 생성하고, 다음 항목을 설정합니다:

```env
# 작성해주셔야해요
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
JWT_SECRET=
```

### 4. 서버 실행
서버를 실행하려면 아래 명령어를 사용합니다:

```bash
npm run start
```

또는 개발 중에는 nodemon을 사용할 수도 있습니다:

```bash
npm run dev
```

서버가 http://localhost:3000에서 실행됩니다.

### ⚙️ 기술 스택
- Node.js: 서버 사이드 JavaScript 실행 환경
- Express.js: RESTful API 구축을 위한 웹 프레임워크
- JWT (JSON Web Token): 사용자 인증을 위한 토큰 기반 인증
- MariaDB / MySQL: 관계형 데이터베이스 시스템
- MongoDB: NoSQL 데이터베이스 (추후 지원 예정)
- dotenv: 환경 변수를 로드하기 위한 모듈
- cors: 교차 출처 리소스 공유(CORS) 설정
- helmet: 보안을 강화하는 미들웨어


### 🛠 기능

#### 1. JWT 인증
> JWT를 사용하여 API 엔드포인트에 대한 사용자 인증을 처리합니다. 로그인 시 JWT 토큰을 발급하고, 이를 통해 보호된 API 엔드포인트에 접근할 수 있습니다.

#### 2. MySQL/MariaDB 연결
> mysql2 패키지를 사용하여 MariaDB/MySQL 데이터베이스와 연결합니다. 데이터베이스 설정은 .env 파일에서 관리되며, config/db.js에서 연결을 관리합니다.

#### 3. 라우팅
> RESTful API의 주요 라우팅 기능은 다음과 같습니다:

- GET /api/users: 모든 유저 정보 조회
- GET /api/users/:id: 특정 유저 정보 조회

추가적인 라우트는 routes/ 디렉토리에 정의되어 있으며, 새로운 기능을 쉽게 추가할 수 있습니다.

#### 4. 보안
- CORS: 클라이언트와 서버 간의 교차 출처 요청을 허용합니다.
- Helmet: 보안 강화를 위한 다양한 HTTP 헤더 설정을 제공합니다.

### 📁 파일 구조
```bash
Express_BoilerPlate/
├── bin/
│   └── www                  # 서버 실행 파일
├── config/
│   └── mariaDb.js             # MariaDB 연결 설정
│   └── mongoDb.js             # MongoDB 연결 설정
├── controllers/
│   └── userController.js    # 유저 관련 로직
├── routes/
│   └── index.js             # 기본 라우터 설정
│   └── users.js             # 유저 관련 API 라우터
│   └── auth.js              # 인증 관련 라우터
├── .env                     # 환경 변수 파일
├── .gitignore               # Git 무시 설정
├── package.json             # 프로젝트 설정 파일
└── README.md                # 프로젝트 설명
``` 

### 🚧 해야할 것들
- MongoDB 통합
- 더 많은 API 라우트 추가
- 사용자 인증 및 권한 처리 개선

