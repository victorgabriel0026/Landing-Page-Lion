# Documentação do Projeto — Landing Page do Lions Clube Tabaporã

## 1. Apresentação

Este projeto consiste em uma Landing Page (LP) para o Lions Clube de Tabaporã. A página tem como objetivo apresentar a instituição, divulgar suas ações, oferecer um espaço para informações sobre como ajudar e facilitar o acesso à localização.

A implementação fornecida utiliza HTML para estruturar o conteúdo e CSS para definir a apresentação visual. O HTML também referencia um arquivo JavaScript (`index.js`), mas o código desse arquivo ainda não foi finalizado; por isso, suas funcionalidades não são descritas nesta documentação.

## 2. Objetivos

- Apresentar a instituição e sua atuação na comunidade.
- Divulgar as principais ações e iniciativas sociais.
- Reservar uma área para informações sobre doações e formas de contato.
- Exibir um carrossel de fotos das ações realizadas pela instituição
- Facilitar a consulta à localização por meio do Google Maps.
- Construir uma página simples, organizada e de fácil navegação.

## 3. Tecnologias utilizadas

- **HTML5:** estrutura o documento, o menu, o cabeçalho, as seções, a lista de atividades, os links e o rodapé.
- **CSS3:** define cores, fontes, espaçamentos, alinhamentos, bordas, sombras e efeitos de interação.
- **JavaScript:** o HTML referencia `index.js`; Configuração do carrosel, utilizando a variavel `indice` para definir qual será a proxima imagem. Uma função `proximaImagem` que define o o avanço para a proxima imagem. A função `setIntervaltempo` define o intervalo de 3 segundos que de cada imagem que é passada.
- **Vercel:** Plataforma utilizada para hospedagem da pagina.

## 4. Estrutura de arquivos prevista

```text
LP-Lions-Tabapora/
├── fotos-Lions/
|   ├── Lions-1.jpeg
|   ├── Lions-2.jpeg
|   ├── Lions-3.jpeg
|   └── Logo-Lion.jpg
├── index.html
├── style.css
└── index.js
```

- `fotos-Lions/`: pasta que armazena as imagens utilizadas na pagina
- ` ├ Lions-1.jpeg`:foto mostrado no carrossel
- ` ├ Lions-2.jpeg`:foto mostrado no carrossel
- ` ├ Lions-3.jpeg`:foto mostrado no carrossel
- ` └ Logo-Lion.jpg`: imagem da logo apresentada no cabeçalho.
- `index.html`: documento principal da página.
- `style.css`: regras de apresentação visual.
- `index.js`: arquivo JavaScript referenciado pelo HTML.

Essa estrutura considera que o HTML fornecido será salvo como `index.html` e que os arquivos estão na mesma pasta, conforme os caminhos relativos usados no documento.

## 5. Estrutura e funcionamento do HTML

### 5.1. Cabeçalho do documento (`head`)

O elemento `head` define a codificação UTF-8, a configuração da viewport para dispositivos móveis, o título da página e a referência à folha de estilos `style.css`.

### 5.2. Menu de navegação (`nav`)

O menu apresenta quatro links internos:

- **Quem Somos:** direciona para `#sobre`.
- **O que realizamos:** direciona para `#acoes`.
- **Como ajudar:** está configurado para `#doacoes`.
- **Onde encontrar:** direciona para `#localizacao`.

Os links utilizam identificadores de seções para navegar dentro da própria página.

### 5.3. Cabeçalho visual (`header`)

A área `header.cabecalho` contém a imagem `Logo-Lion.jpg`. A classe `imagem-logo` define sua largura e mantém a proporção original por meio de `height: auto`.

### 5.4. Conteúdo principal (`main`)

O elemento `main.container` agrupa as seções de conteúdo. A classe `container` limita a largura máxima a 800 pixels, centraliza o conteúdo e aplica espaçamento lateral.

#### Seção “Quem somos?”

Identificada por `id="sobre"`, apresenta um título e um texto introdutório sobre a instituição, sua atuação social, educação, esporte e liderança comunitária.

#### Seção “O que realizamos”

Identificada por `id="acoes"`, descreve a atuação da instituição e apresenta uma lista com duas iniciativas: planejamento de ações e programas de apoio; e rede de parcerias, voluntariado e doações.

#### Seção de ajuda e doações

Identificada atualmente por `id="doacoes"`, foi preparada para receber um título, uma imagem de QR Code, um link e informações de contato. No código fornecido, o título e o contato são marcadores provisórios, e os atributos `src` da imagem e `href` do link estão vazios. Esses campos precisam ser preenchidos com informações confirmadas pela instituição.

### Div de Carrosel 



#### Seção de localização

Identificada por `id="localizacao"`, convida o visitante a conhecer a instituição e contém um link para o Google Maps. O link abre em uma nova aba com `target="_blank"`; o atributo `rel="noopener noreferrer"` complementa essa configuração de segurança.

### 5.5. Rodapé (`footer`)

O rodapé exibe a identificação “Lions Clube Tabaporã • Nós Servimos” e uma observação de que a página é demonstrativa e possui finalidade educativa.

### 5.6. Referência ao JavaScript

Antes do fechamento do `body`, o HTML referencia `index.js`. O código JavaScript define a proxima imagem a entrar na visualização 

## 6. Documentação do CSS

### 6.1. Reset global

O seletor universal remove margens e espaçamentos internos padrão e aplica `box-sizing: border-box`, facilitando o cálculo das dimensões dos elementos.

### 6.2. Corpo da página (`body`)

Define fundo branco, cor padrão dos textos, fontes do sistema e espaçamento entre linhas. O layout utiliza Flexbox em coluna e `min-height: 100vh`, ajudando a manter o rodapé na parte inferior da janela quando há pouco conteúdo.

### 6.3. Seções (`.secao`)

As seções têm fundo branco, cantos arredondados, espaçamento interno, margem inferior, sombra discreta e borda cinza-clara. O conteúdo é centralizado por padrão.

### 6.4. Títulos e parágrafos

As regras `.secao h1`, `.secao h2` e `.secao p` definem tamanho, peso, cor e espaçamento dos textos. O título principal utiliza azul institucional; subtítulos usam um tom escuro; parágrafos usam cinza azulado.

### 6.5. Menu (`.menu`, `.menu-link` e `.menu a`)

O menu utiliza fundo azul. Os links são centralizados em um contêiner de largura máxima de 800 pixels e usam `flex-wrap: wrap`, permitindo que quebrem para outra linha quando necessário. O estado `:hover` altera a cor do texto para amarelo e adiciona um fundo sutil.

### 6.6. Botões (`.btn`, `.btn-destaque` e `.btn-outline`)

A classe `.btn` define o estilo-base, o espaçamento, a tipografia e as transições. `.btn-destaque` cria um botão amarelo com texto escuro; `.btn-outline` cria um botão transparente com contorno azul. As regras `:hover` aplicam mudanças visuais durante a interação com o cursor. No HTML enviado, o botão do Google Maps utiliza `.btn` e `.btn-outline`.

### 6.7. Lista (`.lista` e `.lista li`)

A lista remove os marcadores padrão e organiza os itens em coluna com espaçamento entre eles. Cada item tem fundo cinza-claro, preenchimento interno, borda amarela à esquerda e texto alinhado à esquerda.

### 6.8. Rodapé (`.rodape`)

O rodapé possui fundo azul, texto branco, alinhamento central e espaçamento interno. O elemento `small` utiliza uma cor cinza-azulada e uma margem superior.

### 6.9. Responsividade

A meta tag `viewport` permite que a página use a largura do dispositivo. O contêiner tem largura de 100% com limite máximo de 800 pixels, e o menu pode quebrar linhas. Não foram fornecidas regras `@media`; portanto, é recomendável testar a página em telas pequenas e adicionar ajustes específicos se necessário.

### 6.10. Classe `.principal`

A classe `.principal` define uma cor de fundo, mas não está aplicada a nenhum elemento do HTML enviado. Pode ser removida caso não seja necessária ou aplicada ao elemento apropriado se fizer parte do layout planejado.

## 7. Identidade visual

| Cor | Código hexadecimal | Uso identificado no CSS |
|---|---|---|
| Azul institucional | `#00338D` | Menu, rodapé, título principal e contorno de botão. |
| Amarelo | `#FDB913` | Destaques, hover do menu e borda dos itens da lista. |
| Branco | `#FFFFFF` | Fundo da página e das seções, além de textos no rodapé. |
| Azul muito escuro | `#0F172A` | Subtítulos e texto do botão destacado. |
| Cinza azulado | `#475569` | Texto dos parágrafos. |
| Cinza claro | `#E2E8F0` | Bordas e links do menu. |
| Cinza de fundo | `#F8FAFC` | Fundo dos itens da lista. |
| Azul claro | `#EBF3FF` | Fundo da etiqueta de contato. |
| Cinza secundário | `#94A3B8` | Texto secundário do rodapé. |

## 8. Recursos externos

- **Google Maps:** link externo para consultar a localização de Tabaporã, Mato Grosso.
- **Fontes do sistema:** a página utiliza uma lista de fontes disponíveis nos sistemas operacionais, sem importar uma fonte de um serviço externo.
- **Logo local:** a imagem `Logo-Lion.jpg` é carregada a partir dos arquivos do projeto.

A imagem do QR Code e o link da seção de doações ainda não estão configurados no HTML fornecido.

## 9. Pendências e recomendações

1. **Corrigir o link “Como ajudar”:** alterar o destino para `#ajuda` ou renomear o identificador da seção para `doacoes`, mantendo os dois valores iguais.
2. **Substituir textos provisórios:** revisar `titulo`, `[titulo]`, `(contato)` e o início incompleto “lá!”; corrigir também a redação e a ortografia dos textos finais.
3. **Preencher a seção de doações:** inserir o caminho correto da imagem de QR Code, o destino do link e as informações de contato confirmadas.
4. **Enviar e analisar `index.js`:** documentar apenas as funções realmente presentes no arquivo.
5. **Adicionar uma descrição da página:** considerar `meta name="description"` no `head` para fornecer um resumo do conteúdo em mecanismos de busca.
6. **Revisar a hierarquia dos títulos:** substituir o título genérico e verificar se os níveis de títulos representam corretamente a estrutura do conteúdo.
7. **Testar em dispositivos móveis:** conferir menu, espaçamentos, botões e legibilidade em diferentes larguras de tela; criar regras `@media` caso sejam necessárias.
8. **Revisar a classe `.principal`:** ela está definida no CSS, mas não é utilizada no HTML fornecido.

## 10. Considerações finais

A Landing Page apresenta uma base organizada para divulgar o Lions Clube Tabaporã. A separação entre HTML e CSS facilita a manutenção da estrutura e da aparência visual. Para concluir o projeto, recomenda-se corrigir os links internos, substituir os textos provisórios, completar as informações de doação e contato, validar a apresentação em dispositivos móveis e analisar o arquivo JavaScript.

**Observação:** 