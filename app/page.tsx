import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Building2, Check, Factory, MapPin, PackageCheck, Snowflake, Sparkles, Star, Truck, UserRound } from "lucide-react";
import { ProgressiveBlur } from "@/components/ProgressiveBlur";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MenuBuilder } from "@/components/MenuBuilder";

const heroImage = "/images/acai-raiz-hero.webp";
const premiumImage = "/images/acai-raiz-premium.webp";
const cupImage = "/images/acai-raiz-copo.webp";
const brandLogo = "/images/acai-raiz-logo.png";
const locationUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Sete+Lagoas%2C+283A%2C+Monte+Sinai%2C+Itabirito%2C+MG%2C+Brasil";
const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531986534493&text=Ol%C3%A1!%20%F0%9F%91%8B%20Vim%20pelo%20site%20do%20A%C3%A7a%C3%AD%20Raiz%20e%20gostaria%20de%20fazer%20um%20pedido.%20Poderia%20me%20ajudar%3F&type=phone_number&app_absent=0";
const aiqfomeUrl = "https://aiqfome.com/MG/itabirito/acai-raiz-brasil-ec0ab";
const products = [
  { name: "Açaí Premium", detail: "A base pura e concentrada. O padrão ouro de qualidade para quem busca o sabor real do açaí", size: "large", position: "center", image: premiumImage },
  { name: "Pronto para Saborear", detail: "Cremosidade imediata. A experiência completa do Açaí Raiz pronta para o consumo", size: "tall", position: "center", image: cupImage },
  { name: "Do seu jeito", detail: "Sua combinação favorita sobre a nossa base premium. Energia e sabor na medida certa", size: "wide", position: "80% center", image: heroImage },
];
const testimonials = [
  { quote: "Textura perfeita, o sabor da fruta é apuradíssimo. Corante zero. Não é doce, é no ponto.", context: "Feedback real · WhatsApp" },
  { quote: "É cremoso mesmo, não tem nem pedacinho de gelo e não tem aquele gosto de xarope. Bom demais!", context: "Feedback real · WhatsApp" },
  { quote: "Amamos. Um creme leve, suave e muito cremoso. Nada de gelo cristalizado. Muito gostoso mesmo.", context: "Feedback real · WhatsApp" },
  { quote: "Perfeito! Muito saboroso, textura leve e adocicado no ponto. Já virei fã e vou comprar mais vezes.", context: "Feedback real · WhatsApp" },
  { quote: "Uma delícia. Vou indicar para o pessoal da minha família e amigos.", context: "Feedback real · WhatsApp" },
  { quote: "O açaí é muito gostoso, nós adoramos!", context: "Feedback real · WhatsApp" },
];

function GoldButton({ children, href = "#onde", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return <a className={`gold-button ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={18} /></a>;
}

function OrderActions({ labelWhatsApp = "Pedir via WhatsApp", labelAiqfome = "Pedir via aiqfome", className = "" }: { labelWhatsApp?: string; labelAiqfome?: string; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <GoldButton href={whatsappUrl}>{labelWhatsApp}</GoldButton>
      <GoldButton href={aiqfomeUrl} className="bg-white text-black hover:bg-gray-100 border border-gray-200">{labelAiqfome}</GoldButton>
    </div>
  );
}

export default function Home() {
  return <>
    <header className="site-header"><nav className="nav-shell" aria-label="Navegação principal">
      <a className="brand" href="#inicio" aria-label="Açaí Raiz Brasil — início"><Image className="brand-mark" src={brandLogo} alt="" width={44} height={44} priority /><span>AÇAÍ <b>RAIZ BRASIL</b></span></a>
      <div className="nav-pill"><a href="#inicio">Início</a><a href="#cardapio">Cardápio</a><a href="#atendimento">Para você e empresas</a><a href="#onde">Onde estamos</a></div>
      <OrderActions labelWhatsApp="Pedir agora" labelAiqfome="aiqfome" />
    </nav></header>

    <main id="inicio" className="page-shell">
      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <ScrollReveal direction="left"><p className="eyebrow"><span /> AÇAÍ RAIZ BRASIL · SABOR DE VERDADE</p></ScrollReveal>
          <ScrollReveal direction="left" delay={150}><h1 id="hero-title">O sabor que faz você <em>querer mais.</em></h1></ScrollReveal>
          <ScrollReveal direction="left" delay={300}><p className="hero-lead">Açaí de textura intensa, combinações generosas e aquele sabor que transforma qualquer pausa no melhor momento do dia.</p></ScrollReveal>
          <ScrollReveal direction="left" delay={450}><div className="hero-actions"><OrderActions labelWhatsApp="Pedir meu açaí" labelAiqfome="Pedir via aiqfome" /><a className="text-link" href="#cardapio">Montar meu açaí <ArrowDownRight size={18} /></a></div></ScrollReveal>
          <ScrollReveal delay={600}><div className="trust-row"><div><strong>4,9</strong><span><Star size={13} fill="currentColor" /> avaliação média</span></div><div><strong>100%</strong><span>feito para dar vontade</span></div><div><strong>+20</strong><span>combinações possíveis</span></div></div></ScrollReveal>
        </div>
        <ScrollReveal direction="right" delay={300} duration={800} className="hero-visual">
          <div className="hero-glow" /><Image src={heroImage} alt="Açaí Raiz Brasil cremoso servido em uma tigela escura" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="floating-card card-one"><Sparkles size={18} /><span><b>CREMOSIDADE</b> que dá para ver</span></div>
          <div className="floating-card card-two"><Check size={18} /><span><b>SABOR INTENSO</b> do começo ao fim</span></div>
        </ScrollReveal>
      </section>

      <section id="cardapio" className="menu-section section-pad">
        <ScrollReveal><p className="eyebrow"><span /> MONTE DO SEU JEITO</p></ScrollReveal>
        <ScrollReveal delay={100}><div className="section-heading"><h2>Seu açaí.<br /><em>Suas escolhas.</em></h2><p>Escolha o tamanho, adicione seus favoritos e veja o valor do pedido na hora.</p></div></ScrollReveal>
        <ScrollReveal delay={180} duration={850}><MenuBuilder /></ScrollReveal>
      </section>

      <section id="acai" className="products section-pad">
        <ScrollReveal><p className="eyebrow"><span /> EXPERIÊNCIA ÚNICA</p></ScrollReveal>
        <ScrollReveal delay={120}><div className="section-heading"><h2>Feito para ser<br /><em>memorável.</em></h2><p>Do açaí puro e concentrado às combinações mais completas, cada escolha entrega a textura e a intensidade que você merece.</p></div></ScrollReveal>
        <div className="bento-grid">{products.map((product, index) => <ScrollReveal key={product.name} delay={index * 150} className={`product-wrap ${product.size}`}><article className="product-card"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectPosition: product.position }} /><div className="product-shade" /><div className="product-copy"><span>0{index + 1}</span><h3>{product.name}</h3><p>{product.detail}</p></div></article></ScrollReveal>)}
          <ScrollReveal delay={450} className="accent-wrap"><article className="accent-card"><span className="mono">MONTE O SEU</span><h3>Sua combinação, nossa base premium.</h3><a href="#onde">Começar pedido <ArrowUpRight size={20} /></a></article></ScrollReveal>
        </div>
      </section>

      <section id="atendimento" className="audience section-pad">
        <ScrollReveal><p className="eyebrow"><span /> FÁBRICA PRÓPRIA · ITABIRITO/MG</p></ScrollReveal>
        <ScrollReveal delay={120}><div className="section-heading"><h2>Da nossa fábrica.<br /><em>Para você e seu negócio.</em></h2><p>Produzimos conforme a demanda para atender do pedido do dia a dia ao abastecimento de estabelecimentos.</p></div></ScrollReveal>
        <div className="audience-grid">
          <ScrollReveal direction="left" className="audience-wrap"><article className="audience-card individual"><div className="audience-icon"><UserRound size={25} /></div><span className="audience-kicker">PESSOA FÍSICA</span><h3>Para você saborear</h3><p>O sabor da fábrica direto para a sua casa. Pureza e cremosidade incomparáveis para o seu dia a dia.</p><ul><li><Truck size={18} /> Delivery em Itabirito</li><li><Factory size={18} /> Retirada direto na fábrica</li></ul></article></ScrollReveal>
          <ScrollReveal direction="right" delay={120} className="audience-wrap"><article className="audience-card business"><div className="audience-icon"><Building2 size={25} /></div><span className="audience-kicker">EMPRESAS · CNPJ</span><h3>Para você lucrar (Revenda)</h3><p>Uma oportunidade lucrativa para o seu negócio. Fornecimento constante de um produto premium que fideliza clientes.</p><div className="market-tags"><span>Supermercados</span><span>Mercearias</span><span>Restaurantes</span><span>Clubes</span><span>Outros negócios</span></div></article></ScrollReveal>
        </div>
        <ScrollReveal delay={180} duration={850} className="texture-wrap"><article className="texture-feature"><div className="texture-copy"><span className="texture-label"><Snowflake size={16} /> FORMULAÇÃO CONCENTRADA</span><h3>Do freezer à cremosidade em poucos minutos.</h3><p>Após cerca de 5 minutos fora do congelador, o Açaí Raiz Brasil começa a recuperar sua textura encorpada e cremosa — sem aquela sensação de produto excessivamente diluído.</p><div className="clean-recipe"><PackageCheck size={19} /><span><b>Receita mais natural</b>Sem adição de corantes e conservantes</span></div></div><div className="texture-visual"><Image src={premiumImage} alt="Açaí Raiz Brasil concentrado com textura cremosa" fill sizes="(max-width: 700px) 100vw, 48vw" /><div className="minute-badge"><strong>≈5</strong><span>minutos</span></div></div></article></ScrollReveal>
        <ScrollReveal delay={260}><div className="audience-cta"><div><Factory size={23} /><span><b>Produção própria em Itabirito</b><small>Para sua casa ou para abastecer o seu negócio.</small></span></div><OrderActions labelWhatsApp="Fazer pedido ou orçamento" labelAiqfome="Pedir via aiqfome" /></div></ScrollReveal>
      </section>

      <section id="experiencia" className="method section-pad section-grid"><div>
        <ScrollReveal direction="left"><p className="eyebrow"><span /> 01 / NOSSA RAIZ</p></ScrollReveal>
        <ScrollReveal direction="left" delay={120}><h2>Simples na essência.<br /><em>Marcante no sabor.</em></h2></ScrollReveal>
        <div className="steps">{["Sabor que chega primeiro", "Cremosidade que fica", "Combinações sem limite", "Experiência para repetir"].map((step, index) => <ScrollReveal key={step} direction="left" delay={index * 150} className="step"><span>0{index + 1}</span><p>{step}</p><ArrowUpRight size={18} /></ScrollReveal>)}</div>
      </div><ScrollReveal direction="right" delay={200} duration={800} className="method-image"><Image src={cupImage} alt="Copo de Açaí Raiz Brasil artesanal pronto para consumo" fill sizes="(max-width: 900px) 100vw, 45vw" /><div className="stamp"><span>DESDE</span><b>A RAIZ</b><span>ATÉ VOCÊ</span></div></ScrollReveal></section>

      <section className="proof section-pad"><ScrollReveal><p className="eyebrow dark"><span /> AVALIAÇÕES REAIS</p></ScrollReveal><ScrollReveal delay={100}><h2>Quem prova,<br /><em>recomenda.</em></h2></ScrollReveal>
        <div className="testimonial-grid">{testimonials.map((item, index) => <ScrollReveal key={item.quote} delay={(index % 3) * 120}><article className="testimonial"><div className="stars" aria-hidden="true">★★★★★</div><blockquote>“{item.quote}”</blockquote><footer><b>Cliente verificado</b><span>{item.context}</span></footer></article></ScrollReveal>)}</div>
      </section>

      <section id="onde" className="final-cta section-pad"><ScrollReveal><p className="eyebrow"><span /> SUA PAUSA MERECE MAIS</p></ScrollReveal><ScrollReveal delay={120}><h2>Deu <em>vontade?</em></h2></ScrollReveal><ScrollReveal delay={240}><p>Seu Açaí Raiz Brasil está te esperando.</p></ScrollReveal><ScrollReveal delay={350} duration={800}><address className="cta-card"><MapPin size={22} /><div><span>NOSSO ENDEREÇO</span><b>Rua Sete Lagoas, 283A</b><small>Monte Sinai · Itabirito, MG · Brasil</small></div><GoldButton href={locationUrl}>Abrir no mapa</GoldButton></address></ScrollReveal></section>
    </main>

    <footer className="footer"><div className="footer-watermark">AÇAÍ RAIZ BRASIL</div><div className="footer-content"><a className="brand" href="#inicio" aria-label="Açaí Raiz Brasil — início"><Image className="brand-mark" src={brandLogo} alt="" width={44} height={44} /><span>AÇAÍ <b>RAIZ BRASIL</b></span></a><p>Sabor de verdade, do nosso jeito.</p><div><a href="#acai">Nosso Açaí</a><a href="#experiencia">Experiência</a><a href="#onde">Contato</a></div><span className="copyright">© 2026 AÇAÍ RAIZ BRASIL</span></div></footer>
    <ProgressiveBlur />
  </>;
}
