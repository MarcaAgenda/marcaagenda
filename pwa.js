(() => {
  let installPrompt;
  const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const button = document.querySelector('[data-install-app]');
  const message = document.querySelector('[data-install-message]');
  function render() {
    if (!button) return;
    button.hidden = standalone();
    button.textContent = installPrompt ? 'Instalar Marca Agenda' : 'Como instalar';
    if (message && standalone()) message.textContent = 'Você já está usando a Marca Agenda como aplicativo.';
  }
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); installPrompt = event; render();
  });
  window.addEventListener('appinstalled', () => { installPrompt = null; render(); });
  button?.addEventListener('click', async () => {
    if (!installPrompt) {
      document.querySelector('#instrucoes')?.scrollIntoView({behavior:'smooth'});
      return;
    }
    try { await installPrompt.prompt(); await installPrompt.userChoice; }
    finally { installPrompt = null; render(); }
  });
  render();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'}).catch(() => {
      if (message) message.textContent = 'Não foi possível preparar a instalação. Recarregue a página e tente novamente.';
    });
  }
  const notice = document.createElement('div');
  notice.className = 'ma-connection'; notice.setAttribute('role','status');
  notice.textContent = 'Sem conexão. Reconecte-se para consultar ou alterar agendamentos.';
  document.body.prepend(notice);
  const connection = () => { notice.hidden = navigator.onLine; };
  window.addEventListener('online', connection); window.addEventListener('offline', connection); connection();
})();
