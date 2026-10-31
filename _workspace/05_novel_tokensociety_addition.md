# 05. 문피아 신규 소설 《토큰사회》 등록 보고서

## 1. 요구사항
- 문피아 신규 연재 소설 《토큰사회》 등록 (`https://library.munpia.com/drbrooks/novel/detail?novelId=618110`)
- 블로그 메인 타임라인 및 Novels 상세 모달 쇼케이스에 신규 작품 반영

## 2. 작품 메타데이터
- **제목**: 토큰사회 (Token Society)
- **장르**: SF, 디스토피아, 인공지능
- **분류**: 연재 웹소설 / 하이퍼 리얼리스틱 SF
- **표지 이미지**: `https://cdn1.munpia.com/v2/files/tcover/2026/1030/23/FbqVRX--YAA`
- **플랫폼**: 문피아 (`https://library.munpia.com/drbrooks/novel/detail?novelId=618110`)
- **로그라인**: “질문에 돈이 드는 세상에서, 가장 비싼 질문은 진실이다.” AI 토큰 비용이 계층을 가르는 사회에서 벌어지는 계산의 서사.
- **상세 설명**: AI 기술이 보편화될수록 역설적으로 심화되는 정보 격차와 구조적 폭력. 주인공은 끝까지 토큰을 계산하며, 마지막 순간 자신의 잔고 전부를 태워 비로소 토큰으로 환산될 수 없는 인간의 가치를 증명합니다.
- **태그**: `#SF`, `#인공지능`, `#토큰사회`, `#정보격차`, `#디스토피아`, `#계산의 서사`

## 3. 수정 및 동기화 내역
1. `src/data/novels.json`: 4번째 작품 《토큰사회》를 최신순 맨 앞에 등록 (총 4작품).
2. `src/data/profile.json`: `stats.publishedNovels` 3 -> 4 갱신.
3. `src/scripts/main.js`: `INITIAL_DATA` 임베디드 폴백(novels, stats) 및 `renderNovelsModal()` 배너 텍스트 4작품 체계 동기화.
4. `index.html`: 메타 키워드 및 Novels 타임라인 본문 요약에 《토큰사회》 반영.
5. `src/data/translations.json`: 영문 번역 사전 토큰사회 및 SF 키워드 추가.
6. `README.md`, `CLAUDE.md`: 3대 축 소설 섹션 및 변경 이력 동기화.
7. `scripts/verify-blog.js`: 신규 URL 라이브 HTTP GET 테스트 대상 추가.
