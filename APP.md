# MarcaAgenda instalável

Abra `instalar.html` pelo HTTPS do site publicado. O manifesto inicia em `admin.html` e mantém todas as chamadas do painel ao mesmo backend. Não há banco paralelo nem cópia de clientes.

O service worker guarda somente a página genérica `offline.html`. Não armazena respostas de API, páginas autenticadas ou credenciais em Cache Storage. Navegações usam a rede e só mostram o aviso offline se a conexão falhar. Não existe fila de alterações offline.

A agenda no painel pode ser atualizada manualmente, ao voltar ao app e a cada minuto enquanto a página está visível. Não se trata de atualização instantânea.

Acesso, permissões, proteção de conflitos e validade de sessão continuam sob responsabilidade das regras existentes do backend. Esta mudança não altera políticas, dados nem a lógica de reserva.

Os caminhos relativos funcionam tanto no GitHub Pages com subpasta quanto em domínio próprio. Ao trocar de domínio, instalar novamente no endereço definitivo; armazenamento de login não é compartilhado entre domínios.
