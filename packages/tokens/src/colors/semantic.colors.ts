import { primitiveColors } from './primitive.colors';

export const semanticColors = {
  /**
   * Primary (주요 액션 – 파랑)
   */
  'primary.base': { value: primitiveColors.blue[500] },
  'primary.hover': { value: primitiveColors.blue[600] },
  'primary.active': { value: primitiveColors.blue[700] },
  'primary.subtle': { value: primitiveColors.blue[50] },

  /**
   * Success (성공 – 초록)
   */
  'success.base': { value: primitiveColors.green[500] },
  'success.hover': { value: primitiveColors.green[600] },
  'success.active': { value: primitiveColors.green[700] },
  'success.subtle': { value: primitiveColors.green[50] },

  /**
   * Danger (에러/위험 – 빨강)
   */
  'danger.base': { value: primitiveColors.red[500] },
  'danger.hover': { value: primitiveColors.red[600] },
  'danger.active': { value: primitiveColors.red[700] },
  'danger.subtle': { value: primitiveColors.red[50] },

  /**
   * Warning (주의 – 노랑)
   */
  'warning.base': { value: primitiveColors.yellow[500] },
  'warning.hover': { value: primitiveColors.yellow[600] },
  'warning.active': { value: primitiveColors.yellow[700] },
  'warning.subtle': { value: primitiveColors.yellow[50] },

  /**
   * Info (정보 – 청록)
   */
  'info.base': { value: primitiveColors.teal[500] },
  'info.hover': { value: primitiveColors.teal[600] },
  'info.active': { value: primitiveColors.teal[700] },
  'info.subtle': { value: primitiveColors.teal[50] },

  /**
   * Content (텍스트/아이콘)
   */
  'content.base': { value: primitiveColors.grey[900] }, // 기본 본문
  'content.subtle': { value: primitiveColors.grey[700] }, // 서브 텍스트
  'content.muted': { value: primitiveColors.grey[500] }, // 설명, placeholder
  'content.disabled': { value: primitiveColors.greyOpacity[500] },
  'content.inverse': { value: '#ffffff' }, // 어두운 배경 위

  /**
   * On (의미 컬러 위 텍스트)
   */
  'on.primary': { value: '#ffffff' },
  'on.success': { value: '#ffffff' },
  'on.danger': { value: '#ffffff' },
  'on.warning': { value: primitiveColors.grey[900] },
  'on.info': { value: '#ffffff' },

  /**
   * Surface (배경)
   */
  'surface.base': { value: primitiveColors.background.base }, // 페이지 배경
  'surface.alt': { value: primitiveColors.background.grey }, // 섹션 배경
  'surface.raised': { value: primitiveColors.background.float }, // 카드/모달
  'surface.layer': { value: primitiveColors.background.layered }, // 한 단계 위 레이어

  /**
   * Overlay (딤 처리)
   */
  'overlay.base': { value: primitiveColors.overlay.light },

  /**
   * Border
   */
  'border.base': { value: primitiveColors.border.lightHairline }, // 기본 라인
  'border.strong': { value: primitiveColors.grey[300] }, // 강조 라인
  'border.inverse': { value: primitiveColors.border.darkHairline }, // 어두운 테마용

  /**
   * Tag / Badge 포인트용 색들
   */
  'tag.orange': { value: primitiveColors.orange[500] },
  'tag.teal': { value: primitiveColors.teal[500] },
} as const;

export type SemanticColorKey = keyof typeof semanticColors;
