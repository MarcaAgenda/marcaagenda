# Central NFC — Site de links

Esta é a página principal pública de links para cartões e plaquinhas NFC, hospedada via GitHub Pages, sem dependência do Floot.

## Arquivos e endereço
- Página principal: `index.html`.
- Cópia em `nfc/index.html` e instruções em `nfc/README.md`.
- O CNAME preservado é `marcaagenda.distrito21.dev.br`. O endereço só funciona se DNS e GitHub Pages estiverem configurados corretamente.

## Personalizar a empresa
Edite no `index.html` o objeto `CONFIG` ao final do arquivo: `nome`, `iniciais`, `categoria`, `descricao` e `links`. Insira URLs completas, com https, para Google Avaliações, Instagram, WhatsApp, cardápio, localização e instruções de Wi-Fi. Links vazios ficam desativados como “Em breve”. Para o Google, use o link de solicitação de avaliações da ficha da empresa. Não publique senhas, tokens ou dados sensíveis.

## Tags NFC
Depois que o site abrir no domínio público, grave somente o endereço da página em cada tag usando NFC Tools → Escrever → URL. Mudar os links no GitHub não exige regravar as tags enquanto o endereço continuar igual.

## Backup e histórico
O site anterior da Mari Lanches foi preservado em `backup-mari-lanches-2026-10-14`. A versão do Marca Agenda anterior à Mari Lanches já estava em `backup-marcaagenda-2026-10-10`. Evite renomear o domínio depois de gravar tags, ou elas apontarão para o endereço antigo.

## Publicação
Em GitHub → Settings → Pages, verifique se a publicação usa a branch `main` e a pasta raiz `/(root)`. Aguarde o estado da publicação e valide o HTTPS do domínio antes de utilizar as plaquinhas.
