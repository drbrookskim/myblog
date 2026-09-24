---
name: blog-orchestrator
description: "닥터브룩스 블로그 에이전트 팀(blog-architect, ui-designer-dev, blog-qa)을 조율하는 오케스트레이터 스킬. 블로그 구축, 새 포스트/소설/서비스 추가, 디자인 개편, 레이아웃 변경을 총괄. 후속 작업: 블로그 결과 수정, 부분 재실행, 업데이트, 보완, 다시 실행, 이전 결과 개선 요청 시에도 반드시 이 스킬을 사용할 것."
---

# Blog Orchestrator

닥터브룩스의 블로그 및 포털 사이트를 구축, 유지보수, 고도화하기 위해 에이전트 팀을 총괄 조율하는 통합 오케스트레이터 스킬이다.

## 실행 모드: 에이전트 팀 (Agent Teams)

## 에이전트 구성

| 팀원 | 역할 | 주요 스킬 | 주요 산출물 |
|------|------|----------|-----------|
| `blog-architect` | 콘텐츠 & 정보구조(IA) 아키텍트 | `content-architecture` | `_workspace/01_architect_ia_spec.md`, `src/data/*.json` |
| `ui-designer-dev` | UI/UX 디자이너 & 프론트엔드 엔지니어 | `modern-blog-design` | `_workspace/02_ui_implementation_report.md`, `index.html`, `src/styles/*`, `src/scripts/*` |
| `blog-qa` | 품질 보증 및 무결성 검증 테스터 | `blog-quality-audit` | `_workspace/03_qa_audit_report.md` |

---

## 워크플로우

### Phase 0: 컨텍스트 확인 (후속 작업 지원)
기존 산출물 존재 여부를 점검하여 실행 분기를 결정한다:
1. `_workspace/` 디렉토리 및 `src/data/*.json`, `index.html` 존재 여부 확인
2. 분기:
   - **초기 실행**: `_workspace/` 미존재 → Phase 1부터 전체 신규 구축
   - **부분 재실행**: `_workspace/` 존재 + 사용자가 특정 영역(예: "소설 추가", "다크모드 색상 변경") 수정 요청 → 해당 에이전트만 재호출하여 특정 컴포넌트나 데이터만 수정
   - **새 실행**: 기존 `_workspace/`를 `_workspace_{timestamp}/`로 아카이브 후 Phase 1 재진행

### Phase 1: 요구사항 및 리소스 분석
- 사용자 입력 분석: 블로그 주인공의 정체성, 외부 링크(브런치, 문피아 3작품, 웹서비스), 요구 기능 식별
- 디렉토리 준비: `_workspace/`, `src/data/`, `src/styles/`, `src/scripts/` 디렉토리 생성

### Phase 2: 에이전트 팀 구성 및 작업 할당
- `blog-architect`: 데이터 모델링 및 3대 축(글/소설/서비스) 구조화
- `ui-designer-dev`: 에디토리얼 모던 웹 디자인 및 반응형 인터랙션 구현
- `blog-qa`: 데이터 정합성, 링크 200 OK, 반응형 레이아웃, a11y 크로스 체크

### Phase 3: 콘텐츠 아키텍처 및 데이터 구축 (blog-architect)
- 닥터브룩스 핵심 바이오 및 모토 설정
- 브런치 글 아카이브, 문피아 소설 3작품 메타, 웹서비스 카탈로그 JSON 생성
- 산출물: `_workspace/01_architect_ia_spec.md`

### Phase 4: 프론트엔드 UI/UX 구현 (ui-designer-dev)
- 시맨틱 HTML5 구조와 모던 CSS 변수 기반 디자인 시스템 구축
- 탭 인터페이스 (All, Essays, Novels, Services, About)
- 반응형 뷰포트 최적화 및 다크/라이트 모드 토글
- 산출물: `_workspace/02_ui_implementation_report.md`

### Phase 5: 증거 기반 점진적 QA 감사 (blog-qa)
- 링크 유효성 검사 (브런치, 문피아 3건, Pages)
- DOM-데이터 바인딩 정합성 검사
- 결함 발견 시 `ui-designer-dev`에 즉시 수정 요청 후 재검증
- 산출물: `_workspace/03_qa_audit_report.md`

### Phase 6: 최종 산출물 통합 및 사용자 보고
- 최종 결과물 점검 및 로컬 프리뷰 방법 안내
- 정적 배포(Cloudflare Pages 등) 가이드 제공

---

## 데이터 전달 프로토콜
- **태스크 기반**: 상호 의존 관계(`architect` → `ui-dev` → `qa`) 조율
- **파일 기반**: 모든 중간 산출물은 `_workspace/`에 보존하고 최종 프로덕트는 `index.html`, `src/`에 위치
- **메시지 기반**: 버그 발견 시 `blog-qa` → `ui-designer-dev` 실시간 결함 전달

## 에러 핸들링
- 외부 링크 타임아웃 발생 시 1회 재시도, 지속 실패 시 경고 플래그 부여 후 보고서에 명시
- 스타일 깨짐 발견 시 CSS 격리 원칙에 따라 충돌하는 클래스 스코프 분리

## 테스트 시나리오
1. **정상 흐름**:
   - 프로필/소설/서비스 데이터 100% 정상 파싱
   - 탭 전환 시 카드 필터링 매끄러움
   - 다크모드 토글 시 화면 깜빡임 없이 즉시 전환
   - 외부 링크 클릭 시 새 탭 정상 연결
2. **에러/예외 흐름**:
   - 데이터 필드가 누락된 경우 빈 화면 대신 기본값 또는 스켈레톤 노출
   - 모바일(375px) 화면에서 텍스트 잘림이나 좌우 스크롤바 미발생
