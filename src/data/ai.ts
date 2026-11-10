export interface AiItem {
  icon: 'sparkles' | 'puzzle' | 'workflow' | 'plug';
  title: string;
  description: string;
  tags: string[];
}

export const aiIntro =
  'Integro la IA en mi día a día como una herramienta más del stack: no solo para escribir código más rápido, sino para estandarizar procesos, automatizar tareas repetitivas y mantener la calidad de lo que entrego.';

export const aiItems: AiItem[] = [
  {
    icon: 'sparkles',
    title: 'Desarrollo asistido con Claude Code',
    description:
      'Uso Claude Code como compañero de desarrollo para planear features, refactorizar, depurar y hacer migraciones completas, como este mismo portafolio, que pasó de React a Astro.',
    tags: ['Claude Code', 'Plan mode', 'Refactors'],
  },
  {
    icon: 'puzzle',
    title: 'Creación de Skills',
    description:
      'Diseño skills personalizadas (SKILL.md) que empaquetan conocimiento y pasos de un proceso para que la IA los siga igual cada vez, por ejemplo para generar documentos PDF con QuestPDF o aplicar guías de diseño.',
    tags: ['Agent Skills', 'SKILL.md', 'Prompt engineering'],
  },
  {
    icon: 'workflow',
    title: 'IA en flujos de trabajo',
    description:
      'Configuro reglas de proyecto con CLAUDE.md y hooks que validan automáticamente la calidad del código y del diseño, para que la IA trabaje con las mismas convenciones que el equipo.',
    tags: ['CLAUDE.md', 'Hooks', 'Automatización'],
  },
  {
    icon: 'plug',
    title: 'Integraciones con MCP',
    description:
      'Conecto a Claude con herramientas externas mediante Model Context Protocol (Figma, Google Drive, documentación) para trabajar con contexto real en lugar de copiar y pegar.',
    tags: ['MCP', 'Integraciones', 'Contexto'],
  },
];
