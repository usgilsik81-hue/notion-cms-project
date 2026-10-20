# PRD: 개인 개발 블로그 (Notion CMS 기반)

## 1. 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | 개인 개발 블로그 |
| 목적 | Notion을 CMS로 활용한 개인 기술 블로그 |
| CMS 선택 이유 | Notion에서 글을 작성하면 자동으로 블로그에 반영되어, 별도의 어드민 페이지나 DB 구축 없이 콘텐츠를 관리할 수 있음 |

## 2. 주요 기능

1. Notion 데이터베이스에서 블로그 글 목록 가져오기
2. 개별 글 상세 페이지 표시
3. 카테고리별 필터링
4. 검색 기능
5. 반응형 디자인

## 3. 기술 스택

| 영역 | 기술 |
| --- | --- |
| Frontend | Next.js 15, TypeScript |
| CMS | Notion API (`@notionhq/client`) |
| Styling | Tailwind CSS, shadcn/ui |
| Icons | Lucide React |
| Deployment | Vercel |

## 4. Notion 데이터베이스 구조

| 속성명 | 설명 | Notion 타입 |
| --- | --- | --- |
| Title | 제목 | `title` |
| Category | 카테고리 | `select` |
| Tags | 태그 | `multi_select` |
| Published | 발행일 | `date` |
| Status | 상태 (초안 / 발행됨) | `select` |
| Content | 본문 | page content |

## 5. 화면 구성

| 화면 | 설명 |
| --- | --- |
| 홈 | 최근 글 목록 표시 |
| 글 상세 | 개별 글 내용 표시 |
| 카테고리 | 카테고리별 글 목록 표시 |

## 6. MVP 범위

- Notion API 연동
- 글 목록 및 상세 페이지
- 기본 스타일링
- 반응형 디자인

## 7. 구현 단계

1. Notion API 패키지 설치 및 환경 설정
2. Notion 데이터베이스 생성 및 API 키 설정
3. 글 목록 페이지 구현
4. 글 상세 페이지 구현
5. 스타일링 및 최적화
