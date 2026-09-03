# Validação de layout mobile

- Screenshot mobile capturado em 390x844 com a página completa.
- O hero aparece em fluxo vertical, com texto e CTA antes da imagem do produto; não há sobreposição visível.
- O bloco de vídeos mantém cartões em faixa horizontal, com `touch-action: pan-x`, `overflow-y: hidden` e `overscroll-behavior-x: contain` aplicados no breakpoint mobile.
- A seção “O que você recebe” exibe o CTA abaixo da foto, sem cobrir o conteúdo visual da imagem.
- Screenshot desktop capturado em 1280x720 com a página completa; os overrides estão dentro de `@media (max-width: 620px)`, portanto não alteram as regras desktop.

## Evidência visual adicional

O screenshot mobile completo `webdev-preview-root-1788308594752071418-1854.png` foi inspecionado diretamente. No hero, o texto e o CTA aparecem antes da foto do produto, em fluxo vertical, e a foto ocupa um bloco separado abaixo. Na seção “O que você recebe”, a imagem aparece em seu próprio bloco e o CTA verde está em uma linha separada abaixo dela, sem cobrir a arte. O carrossel de vídeos aparece como faixa de cartões no eixo horizontal; a regra mobile `touch-action: pan-x` limita o gesto ao eixo horizontal e `overflow-y: hidden` impede deslocamento vertical dentro do contêiner, enquanto a página permanece rolável fora dele.

## Validação das páginas legais

As rotas `/politica-de-privacidade` e `/termos-de-uso` foram capturadas em tela cheia no desktop (1280x720). Ambas renderizam com o sistema visual Onyx Kinetic, navegação de retorno, conteúdo organizado em seções numeradas, e-mail clicável e links cruzados entre as páginas.

## Validação legal mobile

As rotas `/politica-de-privacidade` e `/termos-de-uso` foram capturadas em 390x844 com página completa. O conteúdo permanece legível, os títulos não cortam, o e-mail é acessível e os links cruzados ficam visíveis no rodapé de cada página.

## Validação dos avisos de frete no header e na oferta

Em desktop, o header exibe o aviso sob o CTA “COMPRAR AGORA”, mantendo a oferta do hero e o restante da composição. Em mobile, o aviso do header fica oculto junto ao CTA desktop, enquanto o aviso da barra fixa permanece visível; a seção de oferta mantém seu aviso abaixo do CTA próprio. A implementação contém exatamente quatro ocorrências do texto: header, hero, oferta do kit e barra fixa.

## Validação final dos quatro avisos de frete

As capturas mobile e desktop confirmaram o aviso no header, no hero, na seção de oferta e na barra fixa. No mobile, o aviso do header permanece visível sem exibir o CTA desktop; os demais pontos seguem preservados. O texto aparece exatamente quatro vezes no código, sem repetição adicional.
