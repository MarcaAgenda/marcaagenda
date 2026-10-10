(function(){
'use strict';
const unitPrice=39.99, productName='Combo de dois hambúrgueres', currency=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
let quantity=0;
try{ quantity=Math.min(99,Math.max(0,Number.parseInt(sessionStorage.getItem('mari_combo_qty')||'0',10)||0));}catch{}
const qs=id=>document.getElementById(id), bar=qs('cart-bar'), dialog=qs('cart-dialog');
const money=n=>currency.format(n);
function save(){try{sessionStorage.setItem('mari_combo_qty',String(quantity));}catch{}}
function render(){
 bar.hidden=quantity===0;
 qs('cart-quantity').textContent=quantity+' '+(quantity===1?'item':'itens');
 qs('cart-total').textContent=money(unitPrice*quantity);
 qs('modal-total').textContent=money(unitPrice*quantity);
 const container=qs('cart-items');container.replaceChildren();
 if(!quantity){const empty=document.createElement('p');empty.textContent='Nenhum item adicionado.';container.append(empty);return;}
 const row=document.createElement('div');row.className='cart-row';
 const label=document.createElement('span');label.textContent=quantity+'× '+productName;
 const controls=document.createElement('div');
 const less=document.createElement('button');less.textContent='−';less.setAttribute('aria-label','Remover uma unidade');less.addEventListener('click',()=>change(-1));
 const more=document.createElement('button');more.textContent='+';more.setAttribute('aria-label','Adicionar uma unidade');more.addEventListener('click',()=>change(1));
 controls.append(less,more);row.append(label,controls);container.append(row);
}
function change(delta){quantity=Math.max(0,Math.min(99,quantity+delta));save();render();}
qs('add-combo').addEventListener('click',()=>{change(1);qs('add-combo').textContent='Adicionado ✓';setTimeout(()=>{qs('add-combo').innerHTML='Adicionar <span aria-hidden="true">+</span>';},1200);});
qs('open-cart').addEventListener('click',()=>{render();if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');});
qs('close-cart').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
qs('copy-order').addEventListener('click',async()=>{
 const name=qs('customer-name').value.trim(),notes=qs('order-notes').value.trim();
 if(!quantity){qs('copy-feedback').textContent='Adicione um item primeiro.';return;}
 const msg=['MARI LANCHES — RESUMO DO PEDIDO',name?'Nome: '+name:null,quantity+'x '+productName,money(unitPrice*quantity),'',notes?'Observações: '+notes:null,'', 'Aguardando confirmação de disponibilidade, valor e atendimento.'].filter(x=>x!==null).join('\n');
 try{
 if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(msg);
 else{const tmp=document.createElement('textarea');tmp.value=msg;tmp.style.position='fixed';tmp.style.opacity='0';document.body.append(tmp);tmp.select();if(!document.execCommand('copy'))throw Error('copy failed');tmp.remove();}
 qs('copy-feedback').textContent='Resumo copiado! Envie à Mari Lanches pelo canal de atendimento.';
 }catch{qs('copy-feedback').textContent='Não foi possível copiar automaticamente. Selecione e copie o resumo manualmente: '+msg;}
});
qs('year').textContent=String(new Date().getFullYear());render();
})();