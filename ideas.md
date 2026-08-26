# Direção de Design — Kit 2 Joelheiras de Compressão

## Três direções consideradas

| Tema | Introdução breve | Probabilidade |
| --- | --- | --- |
| **Onyx Kinetic** | Performance premium em preto mineral, verde elétrico e camadas translúcidas que sugerem movimento contínuo e engenharia têxtil. | 0.08 |
| **Field Utility** | Linguagem de equipamento esportivo utilitário, com chapas técnicas claras, medidas destacadas e energia de treino funcional. | 0.03 |
| **Night Court Editorial** | Direção editorial escura, com enquadramentos grandes e contraste de campanha esportiva contemporânea. | 0.07 |

## Abordagem selecionada: Onyx Kinetic

### Movimento de design

**Performance editorial tecnológica**, combinando a intensidade visual de lançamentos de running com a precisão gráfica de wearables premium. A página deve parecer um sistema em movimento, não uma vitrine de marketplace.

### Princípios centrais

1. **Movimento como composição:** faixas diagonais, blocos assimétricos e imagens em diferentes escalas conduzem o olhar para o CTA.
2. **Produto como protagonista:** os assets reais recebem destaque em campos escuros, luz verde e sobreposições de interface discretas, sem alterar a aparência do produto.
3. **Contraste funcional:** textos claros sobre fundos escuros; verde neon apenas para pontos de decisão, métricas e estados de interação.
4. **Credibilidade visível:** especificações, avaliações e vídeos reais aparecem com grande presença e hierarquia editorial.

### Filosofia de cor

O preto carvão estabelece foco e sensação de tecnologia; o grafite cria profundidade entre seções; o branco frio mantém leitura precisa. O **verde assinatura #67E636** deriva da costura e do acabamento real da joelheira, criando unidade entre produto e interface sem recorrer a efeitos chamativos excessivos.

### Paradigma de layout

Uma narrativa de trilha: o conteúdo alterna entre faixas horizontais de alta energia, painéis assimétricos e cartões técnicos inclinados. Em vez de uma coluna central uniforme, cada seção assume uma composição própria com tensão entre conteúdo, imagem e vazio funcional.

### Elementos de assinatura

1. **Linha cinética verde:** fio fino em curva e gradiente que percorre seções e representa continuidade de movimento.
2. **Grade têxtil:** textura pontilhada sutil, inspirada no tecido elástico, aplicada aos fundos e aos painéis técnicos.
3. **Etiquetas de sistema:** pequenos rótulos em caixa alta com bordas verdes para especificações, etapas e provas reais.

### Filosofia de interação

Interações devem confirmar decisão e direção: CTAs comprimem levemente no clique, mídias ganham foco sem saltos e carrosséis respondem ao arraste com inércia controlada. O movimento é orientado à leitura, nunca decorativo.

### Animação

Entradas de seção combinam opacidade e deslocamento vertical curto, em cascata de 50 a 80 ms. O hero utiliza parallax sutil de camadas; a seção de produto usa sticky scroll com escala, máscara e blur reduzidos. Hovers ficam entre 160 e 240 ms, utilizando uma curva de saída firme. Todos os movimentos respeitam `prefers-reduced-motion` e são suavizados no mobile.

### Sistema tipográfico

**Barlow Condensed** em caixa alta e peso 700–900 para chamadas de alto impacto e preços. **Manrope** em peso 400–700 para texto corrido e elementos funcionais. Headlines terão tracking levemente negativo; rótulos e microinformações usarão caixa alta, tamanho reduzido e espaçamento generoso.

### Essência da marca

**Uma solução de suporte e compressão para quem quer manter o corpo acompanhando a própria rotina.** Personalidade: **firme, técnica e motivadora**.

### Voz da marca

A linguagem é direta, humana e confiante; fala em acompanhar o ritmo, não em prometer cura. CTAs usam verbos de movimento e decisão.

> "Seu próximo movimento começa aqui."

> "Suporte para acompanhar o que faz você se mover."

### Wordmark e logo

O símbolo será um **arco de compressão aberto**: duas faixas curvas em verde que envolvem um núcleo preto, remetendo à anatomia do joelho e ao ajuste da joelheira. Não haverá texto incorporado ao ícone; o nome é composto em Barlow Condensed com espaçamento técnico.

### Cor assinatura

**Verde Kinetic — #67E636**.

## Style Decisions

- **Hierarquia tipográfica:** Barlow Condensed permanece como voz de display, mas headlines de campanha, títulos de seção, etiquetas técnicas, métricas e corpo de texto possuem escalas e pesos distintos para criar ritmo editorial.
- **Motivo cinético contínuo:** o arco/linha de compressão e a textura de grade têxtil conectam hero, demonstração de produto, conteúdo real, especificações e CTAs como um único sistema visual.
- **Disciplina de verde:** Verde Kinetic é reservado para CTAs, métricas decisivas, etiquetas ativas, linhas de movimento e ênfase derivada do produto; estrutura e respiro visual são construídos principalmente com grafite, preto e branco frio.
