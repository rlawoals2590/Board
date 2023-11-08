# Nest JS 기본 구조 설명

## eslintrc.js
개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤수있게 도와주는 라이브러리
타입스크립트를 쓰는 가이드 라인 제시, 문법에 오류가 나면 알려주는 역할 등등

## .prettierrc
주로 코드 형식을 맞추는데 사용.
작은따음표(')를 사용할지 큰따음표(")를 사용할지, index 값을 2로 줄지 4로 줄지 등등
에러 찾는 것이 아닌 코드 포맷터 역할

## nest-cli.json
nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일

## tsconfig.json
어떻게 타입스크립트를 컴파일 할지 설정

## tsconfig.build.json
tsconfig.json의 연장선상 파일이며 build를 할 때 필요한 설정들
"excludes"에서는 빌드할 때 필요없는 파일들 명시

## package.json
build: 운영환경을 위한 빌드

format: 린트에러가 났을시 수정

start: 앱 시작

## src 폴더

### main.ts
앱을 생성하고 실행

### app.module.ts
앱 모듈을 정의