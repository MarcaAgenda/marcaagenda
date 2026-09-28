# Marca Agenda — revisão pré-lançamento

Domínio oficial usado nesta revisão: **https://marcaagenda.distrito21.dev**

## Correções críticas encontradas

1. O repositório tinha um arquivo chamado `marcaagenda.distrito21.dev`, mas GitHub Pages exige um arquivo chamado **`CNAME`** contendo o domínio. O pacote inclui o `CNAME` correto.
2. Os ícones PWA estão na raiz (`icon-180.png`, `icon-192.png`, `icon-512.png`), porém várias páginas apontavam para `./icons/...`. O manifesto e a página de instalação foram corrigidos para a raiz.
3. A marca aparecia misturada como `MarcaAgenda` e `Marca Agenda`. O pacote padroniza a apresentação pública como **Marca Agenda**.
4. A página inicial não tinha URL canônica nem `og:url`. Foram adicionados para o domínio oficial.
5. A página `404.html` era uma cópia da landing page. Foi transformada em uma página 404 real.
6. Foram adicionados `robots.txt` e `sitemap.xml`.
7. Os textos de Privacidade e Termos foram padronizados com a marca e data de revisão.

## Antes de publicar

- Remova do GitHub o arquivo antigo chamado `marcaagenda.distrito21.dev`.
- Envie o arquivo `CNAME` deste pacote para a raiz.
- Substitua os arquivos deste pacote na raiz do repositório.
- NÃO apague `app.js`, `admin.js`, `ativar.js`, `gestao.js`, `pagamento.js`, `styles.css`, `sw.js`, os PNGs de Pix nem os ícones atuais.
- Confirme no DNS que `marcaagenda.distrito21.dev` aponta para o GitHub Pages conforme a configuração do seu provedor.
- No GitHub Pages, confirme que o domínio personalizado exibido é `marcaagenda.distrito21.dev` e ative HTTPS quando disponível.
- Teste em aba anônima:
  1. Página inicial
  2. Demonstração
  3. Compra dos 3 planos
  4. QR Code / Copia e Cola
  5. Painel de gestão
  6. Confirmação manual do Pix
  7. Ativação
  8. Login do negócio
  9. Criação de serviço e profissional
  10. Agendamento público e bloqueio de horário duplicado

## Pontos que exigem atenção depois do lançamento

- O Pix ainda usa confirmação manual pelo painel de gestão.
- Tokens de autenticação são guardados em `localStorage`; mantenha o site livre de scripts externos não confiáveis.
- A chave Supabase presente no frontend é a chave publicável. A segurança depende das políticas/RPCs/RLS do Supabase.
- Antes de escalar vendas, faça revisão jurídica profissional dos Termos e da Política de Privacidade e defina um canal de suporte/privacidade.
