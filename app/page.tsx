import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Check, MapPin, Sparkles, Star } from "lucide-react";
import { ProgressiveBlur } from "@/components/ProgressiveBlur";
import { ScrollReveal } from "@/components/ScrollReveal";

const heroImage = "/images/acai-raiz-hero.webp";
const products = [
  { name: "Açaí clássico", detail: "Textura intensa · receita da casa", size: "large", position: "center" },
  { name: "Do seu jeito", detail: "Frutas, cremes e crocantes", size: "tall", position: "70% center" },
  { name: "Gelado de verdade", detail: "Cremosidade em cada colherada", size: "wide", position: "80% center" },
];
const testimonials = [
  { quote: "A textura é fora do normal. Cremoso, intenso e sem aquele gosto artificial.", name: "Marina A.", context: "Cliente Açaí Raiz" },
  { quote: "Virou nosso ritual depois do treino. Sempre chega gelado e muito bem montado.", name: "Rafael M.", context: "Cliente recorrente" },
  { quote: "Dá para sentir o cuidado em tudo — do sabor à apresentação.", name: "Beatriz C.", context: "Apaixonada por açaí" },
];

function GoldButton({ children, href = "#onde" }: { children: React.ReactNode; href?: string }) {
  return <a className="gold-button" href={href}>{children}<ArrowUpRight size={18} /></a>;
}

export default function Home() {
  return <>
    <header className="site-header"><nav className="nav-shell" aria-label="Navegação principal">
      <a className="brand" href="#inicio" aria-label="Açaí Raiz — início"><span className="brand-mark">R</span><span>AÇAÍ <b>RAIZ</b></span></a>
      <div className="nav-pill"><a href="#inicio">Início</a><a href="#acai">Nosso Açaí</a><a href="#experiencia">Experiência</a><a href="#onde">Onde estamos</a></div>
      <GoldButton>Pedir agora</GoldButton>
    </nav></header>

    <main id="inicio" className="page-shell">
      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <ScrollReveal direction="left"><p className="eyebrow"><span /> AÇAÍ RAIZ · SABOR DE VERDADE</p></ScrollReveal>
          <ScrollReveal direction="left" delay={150}><h1 id="hero-title">O sabor que faz você <em>querer mais.</em></h1></ScrollReveal>
          <ScrollReveal direction="left" delay={300}><p className="hero-lead">Açaí de textura intensa, combinações generosas e aquele sabor que transforma qualquer pausa no melhor momento do dia.</p></ScrollReveal>
          <ScrollReveal direction="left" delay={450}><div className="hero-actions"><GoldButton>Pedir meu açaí</GoldButton><a className="text-link" href="#acai">Conhecer sabores <ArrowDownRight size={18} /></a></div></ScrollReveal>
          <ScrollReveal delay={600}><div className="trust-row"><div><strong>4,9</strong><span><Star size={13} fill="currentColor" /> avaliação média</span></div><div><strong>100%</strong><span>feito para dar vontade</span></div><div><strong>+20</strong><span>combinações possíveis</span></div></div></ScrollReveal>
        </div>
        <ScrollReveal direction="right" delay={300} duration={800} className="hero-visual">
          <div className="hero-glow" /><Image src={heroImage} alt="Açaí Raiz cremoso servido em uma tigela escura" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="floating-card card-one"><Sparkles size={18} /><span><b>CREMOSIDADE</b> que dá para ver</span></div>
          <div className="floating-card card-two"><Check size={18} /><span><b>SABOR INTENSO</b> do começo ao fim</span></div>
        </ScrollReveal>
      </section>

      <section id="acai" className="products section-pad">
        <ScrollReveal><p className="eyebrow"><span /> ESCOLHA SEU MOMENTO</p></ScrollReveal>
        <ScrollReveal delay={120}><div className="section-heading"><h2>Feito para ser<br /><em>inesquecível.</em></h2><p>Do clássico bem cremoso às combinações mais completas, cada escolha entrega textura, frescor e personalidade.</p></div></ScrollReveal>
        <div className="bento-grid">{products.map((product, index) => <ScrollReveal key={product.name} delay={index * 150} className={`product-wrap ${product.size}`}><article className="product-card"><Image src={heroImage} alt={product.name} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectPosition: product.position }} /><div className="product-shade" /><div className="product-copy"><span>0{index + 1}</span><h3>{product.name}</h3><p>{product.detail}</p></div></article></ScrollReveal>)}
          <ScrollReveal delay={450} className="accent-wrap"><article className="accent-card"><span className="mono">MONTE O SEU</span><h3>Uma combinação com a sua cara.</h3><a href="#onde">Começar pedido <ArrowUpRight size={20} /></a></article></ScrollReveal>
        </div>
      </section>

      <section id="experiencia" className="method section-pad section-grid"><div>
        <ScrollReveal direction="left"><p className="eyebrow"><span /> 01 / NOSSA RAIZ</p></ScrollReveal>
        <ScrollReveal direction="left" delay={120}><h2>Simples na essência.<br /><em>Marcante no sabor.</em></h2></ScrollReveal>
        <div className="steps">{["Sabor que chega primeiro", "Cremosidade que fica", "Combinações sem limite", "Experiência para repetir"].map((step, index) => <ScrollReveal key={step} direction="left" delay={index * 150} className="step"><span>0{index + 1}</span><p>{step}</p><ArrowUpRight size={18} /></ScrollReveal>)}</div>
      </div><ScrollReveal direction="right" delay={200} duration={800} className="method-image"><Image src={heroImage} alt="Textura cremosa do açaí sendo servida" fill sizes="(max-width: 900px) 100vw, 45vw" /><div className="stamp"><span>DESDE</span><b>A RAIZ</b><span>ATÉ VOCÊ</span></div></ScrollReveal></section>

      <section className="proof section-pad"><ScrollReveal><p className="eyebrow dark"><span /> QUEM PROVA, ENTENDE</p></ScrollReveal><ScrollReveal delay={100}><h2>Tem sabor que a gente<br /><em>não esquece.</em></h2></ScrollReveal>
        <div className="testimonial-grid">{testimonials.map((item, index) => <ScrollReveal key={item.name} delay={index * 120}><article className="testimonial"><div className="stars">★★★★★</div><blockquote>“{item.quote}”</blockquote><footer><b>{item.name}</b><span>{item.context}</span></footer></article></ScrollReveal>)}</div>
      </section>

      <section id="onde" className="final-cta section-pad"><ScrollReveal><p className="eyebrow"><span /> SUA PAUSA MERECE MAIS</p></ScrollReveal><ScrollReveal delay={120}><h2>Deu <em>vontade?</em></h2></ScrollReveal><ScrollReveal delay={240}><p>Seu Açaí Raiz está te esperando.</p></ScrollReveal><ScrollReveal delay={350} duration={800}><div className="cta-card"><MapPin size={22} /><div><span>PEÇA AGORA</span><b>Encontre a unidade mais próxima</b></div><GoldButton>Ver onde estamos</GoldButton></div></ScrollReveal></section>
    </main>

    <footer className="footer"><div className="footer-watermark">AÇAÍ RAIZ</div><div className="footer-content"><a className="brand" href="#inicio"><span className="brand-mark">R</span><span>AÇAÍ <b>RAIZ</b></span></a><p>Sabor de verdade, do nosso jeito.</p><div><a href="#acai">Nosso Açaí</a><a href="#experiencia">Experiência</a><a href="#onde">Contato</a></div><span className="copyright">© 2026 AÇAÍ RAIZ</span></div></footer>
    <ProgressiveBlur />
  </>;
}
