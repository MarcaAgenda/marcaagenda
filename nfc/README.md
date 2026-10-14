# Central NFC — página de links
Página estática para plaquinhas e cartões NFC, sem marca d'água nem dependência do Floot.

## Configurar os botões
Abra `nfc/index.html` no GitHub, pressione o lápis **Edit this file** e encontre o bloco `const CONFIG = {...}` perto do final.
- Altere `nome`, `iniciais`, `categoria` e `descricao`.
- Cole os endereços completos começando por `https://` em `google`, `instagram`, `whatsapp`, `cardapio`, `localizacao` e `wifi`.
- **Google:** use o link de pedir avaliações do Perfil da Empresa no Google, não só a página inicial do Google.
- **Instagram:** `https://www.instagram.com/usuario/`.
- **WhatsApp:** `https://wa.me/55DDDNÚMERO` (sem símbolos nem espaços).
- **Wi-Fi:** use um link público de instruções/QR; **não insira senha de Wi-Fi no código**. NFC de associação Wi-Fi não é universal no iPhone.
- Deixe o valor `""` para não exibir um link ativo.
- Depois clique em **Commit changes**. Os clientes verão as alterações mantendo a URL da tag.

## Publicar com GitHub Pages
1. Abra **Settings → Pages** deste repositório.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Selecione a branch **pagina-nfc** e a pasta **/(root)**. Salve.
4. Depois que o GitHub Pages mostrar o endereço publicado, abra a subpasta `/nfc/` do site.
   - Exemplo se não houver domínio personalizado: `https://marcaagenda.github.io/marcaagenda/nfc/`.
   - Se o repositório tiver domínio personalizado, use o endereço efetivamente mostrado pelo GitHub.
5. **Só grave a tag depois de confirmar que a página publicada abre.**

## Gravar a tag NFC
NFC Tools → Escrever → Adicionar registro → URL → cole o link público de `/nfc/` → Escrever. Faça o teste com outro telefone antes de colar a tag sob o adesivo.

## Usar para vários clientes
O ideal é criar uma pasta com uma cópia do `index.html` para cada estabelecimento (`/nfc/cliente-1/`, `/nfc/cliente-2/`), cada um com seus próprios links; isso dá uma URL estável e independente por plaquinha. Para uso comercial, considere um repositório próprio só para essas páginas.

### Importante
A página é pública. Não hospede senhas, tokens ou dados pessoais aqui. GitHub Pages oferece hospedagem estática, não administração de clientes ou armazenamento de formulários.
