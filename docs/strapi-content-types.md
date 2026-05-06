# Strapi Content Types

## Collection Type: Project

| Campo | Tipo sugerido | Observações |
| --- | --- | --- |
| `title` | Text | Nome do projeto |
| `slug` | UID | Gerado a partir de `title` |
| `shortDescription` | Text | Resumo para card e SEO |
| `fullDescription` | Rich Text ou Long Text | Texto completo da página do projeto |
| `category` | Enumeration | Interiores, Arquitetônico, Industrial, Paisagismo, Reforma e restauro, Renderização, CAD/BIM |
| `client` | Text | Cliente ou `Setor privado`, se não puder divulgar |
| `sector` | Text | Corporativo, Industrial, Agroindustrial etc. |
| `year` | Text ou Number | Opcional |
| `coverImage` | Media single | Imagem principal |
| `gallery` | Media multiple | Galeria do projeto |
| `softwareUsed` | JSON ou Text | Lista: AutoCAD, Revit, SketchUp, Lumion, Adobe Photoshop |
| `servicesProvided` | JSON ou Text | Lista de serviços executados |
| `featured` | Boolean | Para destaque futuro |
| `order` | Number | Controle manual da ordem |
| `highlights` | JSON ou Text | Lista de destaques técnicos |
| `seoTitle` | Text | Opcional |
| `seoDescription` | Text | Opcional |

## Collection Type: Experience

| Campo | Tipo sugerido |
| --- | --- |
| `company` | Text |
| `role` | Text |
| `startDate` | Text ou Date |
| `endDate` | Text ou Date |
| `current` | Boolean |
| `description` | Long Text |
| `responsibilities` | JSON ou Text |

## Collection Type: Skill

| Campo | Tipo sugerido |
| --- | --- |
| `name` | Text |
| `category` | Enumeration ou Text |
| `level` | Text ou Number |
| `icon` | Text |

## Single Type: Profile

| Campo | Tipo sugerido |
| --- | --- |
| `name` | Text |
| `headline` | Text |
| `professionalSummary` | Long Text |
| `phone` | Text |
| `email` | Email |
| `location` | Text |
| `linkedin` | Text |
| `portfolioUrl` | Text |
| `whatsapp` | Text |
| `profileImage` | Media single |
| `heroImage` | Media single |

## Permissões

No Strapi, habilite permissões públicas de leitura para `find` e `findOne` em `Project`, `Experience`, `Skill` e `Profile`, ou configure `STRAPI_TOKEN` no Nuxt para usar API token privado.
