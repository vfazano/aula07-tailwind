import { useState } from 'react';

const entries = [
  { id: 1, title: 'Caderno de observação', type: 'Papelaria', price: 'R$ 38', color: 'bg-[#d8b08c]', note: 'Papel pólen · 96 páginas', icon: '01' },
  { id: 2, title: 'Caneta de desenho', type: 'Desenho', price: 'R$ 24', color: 'bg-[#b8c5a5]', note: 'Ponta fina · tinta preta', icon: '02' },
  { id: 3, title: 'Pasta arquivo', type: 'Organização', price: 'R$ 42', color: 'bg-[#d9c7aa]', note: 'Cartão reciclado · A4', icon: '03' },
  { id: 4, title: 'Bloco quadriculado', type: 'Papelaria', price: 'R$ 19', color: 'bg-[#b6c8c4]', note: 'Grade leve · 80 folhas', icon: '04' },
  { id: 5, title: 'Lápis grafite', type: 'Desenho', price: 'R$ 12', color: 'bg-[#d6a394]', note: 'Graduação HB · madeira', icon: '05' },
  { id: 6, title: 'Estojo modular', type: 'Organização', price: 'R$ 31', color: 'bg-[#c3bdd0]', note: 'Lona · compartimento único', icon: '06' }
];

export default function App() {
  const [filter, setFilter] = useState('Tudo');
  const categories = ['Tudo', 'Papelaria', 'Desenho', 'Organização'];
  const visible = filter === 'Tudo' ? entries : entries.filter((entry) => entry.type === filter);

  return (
    <main className="min-h-screen bg-[#efece3] font-sans text-[#252a26]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-black/10 px-5 py-5 md:px-8">
        <a className="flex items-center gap-3 text-sm font-extrabold tracking-tight" href="#inicio"><span className="grid size-9 place-items-center bg-[#ad563d] text-white">A.</span> ARQUIVO DE CAMPO</a>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-[#76796e] sm:block">OBJETOS PARA PENSAR</span>
      </header>
      <section id="inicio" className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-8 md:py-20">
        <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#ad563d]">ESTÚDIO 01 · SELEÇÃO DE MATERIAIS</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">Ferramentas para <span className="font-serif font-medium italic text-[#ad563d]">reparar.</span></h1></div>
        <p className="max-w-sm text-sm leading-7 text-[#666b60] md:justify-self-end">Peças simples para registrar ideias, organizar referências e dar forma às coisas que ainda estão começando.</p>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">{categories.map((category) => <button key={category} type="button" onClick={() => setFilter(category)} className={`border px-3 py-2 text-xs transition-colors ${filter === category ? 'border-[#252a26] bg-[#252a26] text-white' : 'border-black/15 text-[#666b60] hover:border-[#ad563d] hover:text-[#ad563d]'}`}>{category}</button>)}</div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#76796e]">{visible.length} ITENS</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map((entry) => <article key={entry.id} className="group border border-black/10 bg-[#f7f5ef] p-3 transition-transform duration-200 hover:-translate-y-1">
          <div className={`relative flex aspect-[1.45] items-center justify-center overflow-hidden ${entry.color}`}><span className="font-serif text-7xl italic text-black/20">{entry.icon}</span><span className="absolute left-3 top-3 font-mono text-[10px] text-black/55">OBJETO / {entry.id.toString().padStart(2, '0')}</span><span className="absolute bottom-3 right-3 size-8 rounded-full border border-black/20 bg-white/30 transition-transform group-hover:scale-110" /></div>
          <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-4"><div><p className="font-mono text-[10px] uppercase tracking-wider text-[#ad563d]">{entry.type}</p><h2 className="mt-1 text-base font-semibold">{entry.title}</h2><p className="mt-2 text-xs text-[#76796e]">{entry.note}</p></div><strong className="whitespace-nowrap text-sm">{entry.price}</strong></div>
        </article>)}</div>
      </section>
      <footer className="border-t border-black/10 px-5 py-5 font-mono text-[10px] uppercase tracking-wider text-[#76796e] md:px-8"><div className="mx-auto flex max-w-6xl justify-between"><span>CATÁLOGO DE ESTUDO</span><span>TAILWIND CSS · AULA 07</span></div></footer>
    </main>
  );
}
