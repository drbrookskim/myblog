## 하네스: 닥터브룩스 블로그 (Dr. Brooks Blog & Portal)

**목표:** 닥터브룩스의 세 가지 페르소나(12년차 제품기획자, 소설가, 웹 서비스 빌더)를 아우르는 모던 에디토리얼 블로그 및 포털을 구축, 관리, 고도화한다.

**트리거:** 블로그 제작, 콘텐츠(에세이/소설/웹서비스) 추가/수정, UI 디자인 개편, 다크모드 개선, 품질 검증 등 블로그 관련 모든 작업 요청 시 `blog-orchestrator` 스킬을 사용하라. 단순 질문은 직접 응답 가능.

**배포 엔드포인트:**
- GitHub 저장소: [https://github.com/drbrookskim/myblog.git](https://github.com/drbrookskim/myblog.git)
- Cloudflare Pages 메인: [https://drbrooks.pages.dev/](https://drbrooks.pages.dev/)
- 13개 웹 서비스 허브 포털: [https://drbrooks.pages.dev/services/](https://drbrooks.pages.dev/services/)
- 직접 배포 CLI: `npx wrangler pages deploy . --project-name=drbrooks`

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-09-24 | 초기 하네스 구성 및 블로그 아키텍처 수립 | 전체 | 신규 블로그 구축 요청 |
| 2026-09-24 | 드래그 텍스트 선택 시 영문 번역 팝오버 툴팁 기능 구현 | `src/scripts/main.js`, `src/styles/main.css`, `src/data/translations.json` | 마우스 드래그 선택 시 영어 버전 노출 요청 |
| 2026-09-25 | GitHub 원격 저장소(`drbrookskim/myblog.git`) 연결 및 Cloudflare Pages(`drbrooks.pages.dev`) 메인 배포 완료 | 전체, GitHub, Cloudflare Pages | 사용자 요청: myblog 메인 등록 및 GitHub 연결 |
| 2026-09-25 | LinkedIn 공인 자격증 및 이력 상세 링크 연동 | `src/data/profile.json`, `src/scripts/main.js`, `index.html`, `README.md` | 사용자 요청: LinkedIn Certifications 링크 추가 |

