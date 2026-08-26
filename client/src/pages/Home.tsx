/**
 * ONYX KINETIC — Performance editorial tecnológica.
 * Preto mineral, Verde Kinetic (#67E636), assimetria e textura têxtil.
 * Cada interação reforça movimento, suporte e credibilidade com assets reais.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleGauge,
  Dumbbell,
  Expand,
  Menu,
  MoveRight,
  Play,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CHECKOUT_URL = "https://pay.kaiross.com.br/fVx61rsyRSyj";
const GREEN = "#67E636";

const media = {
  video1: "/manus-storage/VIDEOUGC1_a46f06a3.MP4",
  video2: "/manus-storage/VIDEOUGC2_ea2e3a10.mp4",
  video3: "/manus-storage/VIDEOUGC3USANDOREAL_e097c66d.MP4",
  social1: "/manus-storage/provasocial1_bff3f59a.jpeg",
  social2: "/manus-storage/provasocial2_620a163b.jpeg",
  social3: "/manus-storage/provasocial3_2dd6620b.jpg",
  social4: "/manus-storage/provasocial4_5fd80fff.JPG",
  social5: "/manus-storage/provasocial5_61ccbc8a.JPG",
  heroTexture: "/manus-storage/onyx-kinetic-hero-texture_ba87412e.jpg",
  motionSurface: "/manus-storage/onyx-kinetic-motion-surface_360571bd.jpg",
  weave: "/manus-storage/onyx-kinetic-weave-detail_d5009e99.jpg",
  mark: "/manus-storage/onyx-kinetic-mark_90671358.png",
  kitPair: "/manus-storage/download_c0184161.webp",
};

const socialEvidence = [
  { src: media.social1, alt: "Avaliação de cliente enviada sobre o kit de joelheiras" },
  { src: media.social2, alt: "Avaliação de cliente enviada com imagens da joelheira" },
  { src: media.social3, alt: "Avaliação de cliente enviada mostrando a joelheira e o produto" },
  { src: media.social4, alt: "Foto real enviada de joelheira de compressão em uso" },
  { src: media.social5, alt: "Foto real enviada de joelheira de compressão em uso" },
];

const activities = [
  { name: "Futebol", description: "Para acompanhar jogadas e deslocamentos.", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80" },
  { name: "Vôlei", description: "Suporte para momentos de movimento em quadra.", image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80" },
  { name: "Basquete", description: "Uma solução prática para a sua rotina esportiva.", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80" },
  { name: "Tênis", description: "Acompanha diferentes ritmos e movimentos.", image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=80" },
  { name: "Corrida", description: "Para quem quer manter o corpo em movimento.", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80" },
  { name: "Ciclismo", description: "Conforto para acompanhar a sua pedalada.", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=80" },
  { name: "Skate", description: "Mobilidade para uma rotina cheia de atitude.", image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=1000&q=80" },
  { name: "Academia", description: "Suporte quando você escolhe continuar.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80" },
  { name: "Caminhada", description: "Praticidade para os seus trajetos diários.", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1000&q=80" },
];

const faqItems = [
  ["Quantas joelheiras vêm no kit?", "São 2 joelheiras."],
  ["Qual é o tamanho?", "Tamanho único, com circunferência de perna recomendada entre 45 e 55 cm."],
  ["Qual é a cor?", "Verde com preto."],
  ["Posso usar durante atividades físicas?", "Sim. O produto é indicado para atividades como futebol, vôlei, basquete, tênis, corrida, ciclismo, skate e outras atividades esportivas."],
  ["Posso usar no dia a dia?", "Sim, desde que as medidas estejam adequadas e o uso seja confortável."],
  ["Como saber se serve para mim?", "Confira a circunferência recomendada de 45 a 55 cm antes da compra."],
  ["Quantas unidades vou receber?", "Você receberá 2 joelheiras."],
  ["A joelheira substitui tratamento médico?", "Não. É um produto de compressão e suporte. Em caso de dor persistente, lesão ou condição médica, procure orientação de um profissional de saúde."],
];

function trackEvent(eventName: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const trackingWindow = window as typeof window & { dataLayer?: Array<Record<string, unknown>> };
  const detail = { event: eventName, ...payload };
  trackingWindow.dataLayer?.push(detail);
  window.dispatchEvent(new CustomEvent("landing_tracking", { detail }));
}

function PurchaseCTA({ label, className = "", location }: { label: string; className?: string; location: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("click_cta", { location, destination: "checkout" })}
      className={`cta-button ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [activeSocial, setActiveSocial] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const socialTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackEvent("page_view");
    const milestones = new Set<number>();
    const handleScroll = () => {
      setHeaderSolid(window.scrollY > 28);
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / max;
      [0.25, 0.5, 0.75, 0.9].forEach((milestone) => {
        if (progress >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          trackEvent(`scroll_${Math.round(milestone * 100)}`);
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = lightbox === null ? "" : "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const moveSocial = (direction: number) => {
    const next = (activeSocial + direction + socialEvidence.length) % socialEvidence.length;
    setActiveSocial(next);
    const target = socialTrackRef.current?.children[next] as HTMLElement | undefined;
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const navigate = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${headerSolid ? "site-header--solid" : ""}`}>
        <a href="#inicio" className="brand" aria-label="Ir para o início">
          <img src={media.mark} alt="" className="brand-mark" />
          <span>KIT 02<br />JOELHEIRAS</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#movimento">Como funciona</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#detalhes">Detalhes</a>
          <a href="#faq">FAQ</a>
        </nav>
        <PurchaseCTA label="COMPRAR AGORA" location="header" className="header-cta" />
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }} aria-label="Navegação mobile">
              <a href="#beneficios" onClick={navigate}>Benefícios</a>
              <a href="#movimento" onClick={navigate}>Como funciona</a>
              <a href="#avaliacoes" onClick={navigate}>Avaliações</a>
              <a href="#detalhes" onClick={navigate}>Detalhes</a>
              <a href="#faq" onClick={navigate}>FAQ</a>
              <PurchaseCTA label="COMPRAR AGORA" location="menu_mobile" />
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <img src={media.heroTexture} alt="" className="hero-texture" fetchPriority="high" />
          <div className="hero-grid" />
          <div className="hero-copy container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>
              <SectionEyebrow>KIT COM 2 JOELHEIRAS</SectionEyebrow>
              <h1>SEU JOELHO<br /><em>NÃO PRECISA</em><br />SER O LIMITE.</h1>
              <p className="hero-lede">Mais suporte, compressão e conforto para acompanhar você no treino, na caminhada e no dia a dia.</p>
              <div className="hero-offer" aria-label="Oferta: de R$ 179,90 por R$ 109,90">
                <span>DE <s>R$ 179,90</s></span>
                <strong>POR <b>R$ 109,90</b></strong>
              </div>
              <PurchaseCTA label="QUERO MEU KIT AGORA" location="hero" />
              <ul className="micro-checks" aria-label="Informações do produto">
                <li><Check size={15} />2 unidades</li><li><Check size={15} />Alta elasticidade</li>
                <li><Check size={15} />Tamanho único</li><li><Check size={15} />Uso esportivo e cotidiano</li>
              </ul>
            </motion.div>
          </div>
          <div className="hero-product-stage" aria-label="Joelheira de compressão em uso">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="product-image-frame">
              <img src={media.social4} alt="Joelheira de compressão verde e preta em uso" />
              <div className="product-glass-label"><span />ALTA ELASTICIDADE</div>
            </div>
            <div className="hero-video-note"><Play size={13} fill="currentColor" />EM MOVIMENTO</div>
          </div>
          <a href="#impacto" className="scroll-prompt" aria-label="Avançar para os benefícios"><span>ROLE PARA CONTINUAR</span><ArrowDown size={17} /></a>
        </section>

        <section id="impacto" className="impact-ribbon" aria-label="Destaques do produto">
          <div className="ribbon-track">
            {["2 JOELHEIRAS NO KIT", "ALTA ELASTICIDADE", "COMPRESSÃO", "USO ESPORTIVO", "USO DIÁRIO"].map((item) => <span key={item}><i />{item}</span>)}
          </div>
        </section>

        <section className="emotional-section section-pad">
          <img src={media.motionSurface} alt="" className="emotional-texture" loading="lazy" />
          <div className="container emotional-layout">
            <div className="section-copy">
              <SectionEyebrow>SEU RITMO IMPORTA</SectionEyebrow>
              <h2>QUANDO O DESCONFORTO APARECE, <em>SEU RITMO MUDA.</em></h2>
              <p>Você começa uma caminhada, um treino ou uma partida normalmente. Depois de alguns minutos, o desconforto aparece. O ritmo diminui. Os movimentos mudam. E aquilo que deveria ser prazeroso começa a limitar você.</p>
              <p>Foi pensando nisso que desenvolvemos uma solução prática para adicionar compressão e suporte à região do joelho durante sua rotina.</p>
            </div>
            <div className="movement-chain" aria-label="Caminho de movimento até mais liberdade">
              {[
                ["01", "MOVIMENTO"], ["02", "DESCONFORTO"], ["03", "PERDA DE CONFIANÇA"], ["04", "SUPORTE"], ["05", "MAIS LIBERDADE PARA CONTINUAR"],
              ].map(([number, title], index) => (
                <motion.div className={`chain-node ${index === 4 ? "chain-node--final" : ""}`} key={title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.08 }}>
                  <small>{number}</small><strong>{title}</strong>{index < 4 && <MoveRight size={17} />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="benefits-section section-pad">
          <div className="container">
            <div className="section-heading split-heading">
              <div><SectionEyebrow>ESSENCIAL PARA O RITMO</SectionEyebrow><h2>SUPORTE PARA <em>ACOMPANHAR</em> SEU RITMO.</h2></div>
              <p>Um design prático que une compressão, elasticidade e conforto para diferentes momentos da sua rotina.</p>
            </div>
            <div className="benefit-grid">
              {[
                [CircleGauge, "01", "COMPRESSÃO", "Proporciona compressão na região aplicada, contribuindo para a sensação de suporte durante o uso."],
                [Activity, "02", "ALTA ELASTICIDADE", "Material elástico que acompanha os movimentos e facilita a adaptação ao corpo."],
                [ShieldCheck, "03", "CONFORTO", "Uma solução prática para quem busca suporte durante atividades esportivas ou no dia a dia."],
                [Sparkles, "04", "AQUECIMENTO", "Ajuda a manter a região aquecida durante o uso."],
              ].map(([Icon, number, title, description]) => {
                const BenefitIcon = Icon as typeof CircleGauge;
                return <motion.article key={title as string} className="benefit-card" whileHover={{ y: -7 }} transition={{ duration: 0.2 }}><div className="benefit-top"><span>{number as string}</span><BenefitIcon size={26} /></div><h3>{title as string}</h3><p>{description as string}</p><div className="corner-line" /></motion.article>;
              })}
            </div>
            <div className="section-cta-wrap"><PurchaseCTA label="QUERO MEU KIT" location="after_benefits" /></div>
          </div>
        </section>

        <section id="movimento" className="product-scroll-section">
          <div className="product-scroll-sticky">
            <img src={media.weave} alt="" className="weave-backdrop" loading="lazy" />
            <div className="container product-scroll-grid">
              <div className="product-scroll-copy">
                <SectionEyebrow>ESTRUTURA EM MOVIMENTO</SectionEyebrow>
                <h2>DETALHES QUE <em>ACOMPANHAM</em> VOCÊ.</h2>
                <div className="scroll-copy-list">
                  {["ELASTICIDADE", "COMPRESSÃO", "AJUSTE", "CONFORTO", "PRONTO PARA ACOMPANHAR VOCÊ"].map((item, index) => <p key={item}><b>0{index + 1}</b>{item}</p>)}
                </div>
              </div>
              <div className="product-scroll-visual">
                <div className="visual-halo" />
                <img src={media.social5} alt="Detalhe da joelheira de compressão verde e preta em uso" loading="lazy" />
                <div className="visual-pin pin-one">TECIDO ELÁSTICO<i /></div>
                <div className="visual-pin pin-two">AJUSTE<i /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="activities-section section-pad">
          <div className="container activities-header"><div><SectionEyebrow>PARA A SUA ROTINA</SectionEyebrow><h2>FEITA PARA QUEM <em>NÃO QUER PARAR.</em></h2></div><Dumbbell size={34} /></div>
          <div className="activities-scroll" role="list" aria-label="Esportes e atividades indicadas">
            {activities.map((activity, index) => <article className="activity-card" role="listitem" key={activity.name}><img src={activity.image} alt={`Pessoa praticando ${activity.name.toLowerCase()}`} loading="lazy" /><div className="activity-overlay" /><div className="activity-content"><span>0{index + 1}</span><h3>{activity.name}</h3><p>{activity.description}</p><MoveRight size={20} /></div></article>)}
          </div>
        </section>

        <section className="ugc-section section-pad">
          <div className="container"><div className="section-heading centered-heading"><SectionEyebrow>CONTEÚDO REAL</SectionEyebrow><h2>VEJA COMO ELA FAZ <em>PARTE DA ROTINA.</em></h2></div>
            <div className="ugc-grid">
              {[media.video1, media.video2, media.video3].map((source, index) => <article className="ugc-card" key={source}><video src={source} className="ugc-video" controls muted loop autoPlay playsInline preload="metadata" onPlay={() => trackEvent("view_video", { video: index + 1 })}><track kind="captions" /></video><span className="ugc-glow" /></article>)}
            </div>
            <p className="ugc-caption">Uma solução prática para acompanhar diferentes momentos da rotina.</p>
            <div className="section-cta-wrap"><PurchaseCTA label="QUERO MEU KIT" location="after_videos" /></div>
          </div>
        </section>

        <section id="avaliacoes" className="social-section section-pad" onMouseEnter={() => trackEvent("view_social_proof")}>
          <div className="container social-top"><div><SectionEyebrow>AVALIAÇÕES DE CLIENTES</SectionEyebrow><h2>QUEM JÁ EXPERIMENTOU, <em>CONTA.</em></h2></div><div className="carousel-controls"><button aria-label="Avaliação anterior" onClick={() => moveSocial(-1)}><ChevronLeft /></button><button aria-label="Próxima avaliação" onClick={() => moveSocial(1)}><ChevronRight /></button></div></div>
          <div className="social-carousel" ref={socialTrackRef} aria-label="Carrossel de avaliações reais">
            {socialEvidence.map((evidence, index) => <button className={`social-card ${activeSocial === index ? "social-card--active" : ""}`} key={evidence.src} onClick={() => { setActiveSocial(index); setLightbox(index); }} aria-label={`Abrir avaliação ${index + 1} em tamanho grande`}><img src={evidence.src} alt={evidence.alt} loading="lazy" /><span className="social-zoom"><Expand size={17} />AMPLIAR</span></button>)}
          </div>
          <div className="social-dots" aria-label="Selecionar avaliação">{socialEvidence.map((evidence, index) => <button key={evidence.src} className={index === activeSocial ? "active" : ""} aria-label={`Ir para avaliação ${index + 1}`} aria-current={index === activeSocial} onClick={() => { setActiveSocial(index); const target = socialTrackRef.current?.children[index] as HTMLElement | undefined; target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }); }} />)}</div>
          <div className="section-cta-wrap"><PurchaseCTA label="QUERO MEU KIT" location="after_social_proof" /></div>
        </section>

        <section className="gallery-section section-pad">
          <div className="container"><div className="section-heading split-heading"><div><SectionEyebrow>VISTA DE PERTO</SectionEyebrow><h2>FEITA PARA ESTAR <em>EM MOVIMENTO.</em></h2></div><p>Detalhes, aplicação e cotidiano em uma galeria construída a partir dos conteúdos reais enviados.</p></div>
            <div className="gallery-grid">
              <button className="gallery-tile gallery-tile--tall" onClick={() => setLightbox(3)} aria-label="Ampliar foto da joelheira em uso"><img src={media.social4} alt="Detalhe da joelheira de compressão em uso" loading="lazy" /><span>APLICAÇÃO<Expand size={18} /></span></button>
              <div className="gallery-tile gallery-tile--video"><video src={media.video1} muted loop autoPlay playsInline preload="metadata" aria-label="Vídeo real do produto em uso" /><span>ROTINA REAL <Play size={16} fill="currentColor" /></span></div>
              <button className="gallery-tile" onClick={() => setLightbox(2)} aria-label="Ampliar foto do kit"><img src={media.social3} alt="Registro real do kit de joelheiras" loading="lazy" /><span>DETALHES<Expand size={18} /></span></button>
              <div className="gallery-tile gallery-tile--texture"><img src={media.weave} alt="Textura abstrata inspirada no tecido de compressão" loading="lazy" /><span>ESTRUTURA</span></div>
              <div className="gallery-tile gallery-tile--video"><video src={media.video3} muted loop autoPlay playsInline preload="metadata" aria-label="Vídeo real de pessoa usando a joelheira" /><span>EM MOVIMENTO <Play size={16} fill="currentColor" /></span></div>
            </div>
          </div>
        </section>

        <section id="recebe" className="receive-section section-pad">
          <div className="container receive-layout"><div className="receive-visual receive-visual--kit"><img src={media.kitPair} alt="Par de joelheiras de compressão verde e preto" loading="lazy" /><div className="pair-label"><b>02</b><span>UNIDADES<br />NO KIT</span></div></div><div className="section-copy"><SectionEyebrow>O QUE VOCÊ RECEBE</SectionEyebrow><h2>UM PAR COMPLETO <em>PARA VOCÊ.</em></h2><p>Você recebe 2 joelheiras de compressão para utilizar nos dois joelhos.</p><ul className="receive-list">{["2 Joelheiras", "Alta elasticidade", "Compressão", "Tamanho único", "Verde com preto", "Uso esportivo", "Uso no dia a dia"].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div></div>
        </section>

        <section className="value-section"><div className="container value-layout"><div><SectionEyebrow>UM KIT, DOIS LADOS</SectionEyebrow><h2>MAIS SUPORTE.<br />MAIS PRATICIDADE.<br /><em>UM KIT COMPLETO.</em></h2></div><div className="value-answer"><b>2</b><div><span>JOELHEIRAS</span><p>Um único kit para utilizar nos dois joelhos.</p></div></div></div></section>

        <section id="detalhes" className="specs-section section-pad"><div className="container"><div className="section-heading"><SectionEyebrow>INFORMAÇÃO DIRETA</SectionEyebrow><h2>DETALHES DO <em>PRODUTO.</em></h2></div><div className="spec-grid">{[["ALTURA", "27 cm"], ["LARGURA", "17 cm"], ["CIRCUNFERÊNCIA RECOMENDADA", "45 a 55 cm"], ["PESO RECOMENDADO", "60 a 85 kg"], ["TAMANHO", "Único"], ["COR", "Verde com Preto"], ["CONTEÚDO", "2 Joelheiras"]].map(([label, value], index) => <div className="spec-item" key={label}><span>0{index + 1}</span><p>{label}</p><strong>{value}</strong></div>)}</div></div></section>

        <section className="size-section section-pad"><div className="container size-layout"><div className="size-graphic" aria-hidden="true"><div className="leg-shape"><div className="measure-ring"><span>45–55 cm</span></div></div><div className="measure-line" /><Ruler size={25} /></div><div className="section-copy"><SectionEyebrow>GUIA DE TAMANHO</SectionEyebrow><h2>CONFIRA AS MEDIDAS <em>ANTES DE COMPRAR.</em></h2><p>Produto em tamanho único. Confira as medidas indicadas antes da compra.</p><div className="size-number"><span>CIRCUNFERÊNCIA RECOMENDADA</span><b>45–55 <small>cm</small></b></div></div></div></section>

        <section className="mid-cta-section"><div className="container"><p>PRONTO PARA CONTINUAR SE MOVIMENTANDO?</p><PurchaseCTA label="QUERO MEU KIT" location="intermediate_cta" /></div></section>

        <section className="offer-section section-pad"><img src={media.heroTexture} alt="" className="offer-texture" loading="lazy" /><div className="container offer-layout"><div className="offer-product"><img src={media.social5} alt="Joelheira de compressão em uso" loading="lazy" /><div className="offer-product-note">KIT // 02 UNIDADES</div></div><div className="offer-copy"><SectionEyebrow>OFERTA DO KIT</SectionEyebrow><h2>SEU PRÓXIMO <em>MOVIMENTO</em> COMEÇA AQUI.</h2><p className="offer-product-name">KIT 2 JOELHEIRAS DE COMPRESSÃO</p><div className="price-block"><span>DE <s>R$ 179,90</s></span><strong>R$ 109,90</strong><b>VOCÊ ECONOMIZA R$ 70,00</b></div><PurchaseCTA label="QUERO MEU KIT POR R$ 109,90" location="main_offer" /><p className="checkout-note"><ShieldCheck size={16} />Comprar agora e finalizar no checkout seguro.</p></div></div></section>

        <section id="faq" className="faq-section section-pad"><div className="container faq-layout"><div className="faq-intro"><SectionEyebrow>SEM DÚVIDAS</SectionEyebrow><h2>O QUE VOCÊ PRECISA <em>SABER.</em></h2><p>Informações claras para que você escolha o kit com mais segurança.</p></div><div className="faq-list">{faqItems.map(([question, answer], index) => <article className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={question}><button onClick={() => { setOpenFaq(openFaq === index ? null : index); trackEvent("open_faq", { question: index + 1 }); }} aria-expanded={openFaq === index}><span>0{index + 1}</span><b>{question}</b><ChevronDown size={20} /></button><AnimatePresence initial={false}>{openFaq === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}><p>{answer}</p></motion.div>}</AnimatePresence></article>)}</div></div></section>

        <section className="final-cta-section"><div className="final-grid" /><div className="container final-layout"><div><SectionEyebrow>SEM PARAR AGORA</SectionEyebrow><h2>CONTINUE <em>SE MOVIMENTANDO.</em></h2><p>Mais suporte para acompanhar aquilo que faz você se mover.</p><div className="final-price"><span>DE <s>R$ 179,90</s></span><strong>POR R$ 109,90</strong></div><PurchaseCTA label="QUERO MEU KIT AGORA" location="final_cta" /></div><img src={media.social4} alt="Joelheira de compressão verde e preta em uso" loading="lazy" /></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-row"><a href="#inicio" className="brand"><img src={media.mark} alt="" className="brand-mark" /><span>KIT 02<br />JOELHEIRAS</span></a><p>Compra finalizada com segurança através do checkout.</p><a href={CHECKOUT_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("click_checkout", { location: "footer" })}>IR PARA O CHECKOUT <ArrowUpRight size={15} /></a></div></footer>

      <a href={CHECKOUT_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("click_cta", { location: "fixed_mobile" })} className="mobile-buybar"><span><small>KIT 2 JOELHEIRAS</small><b>R$ 109,90</b></span><strong>COMPRAR AGORA <ArrowUpRight size={15} /></strong></a>

      <AnimatePresence>{lightbox !== null && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Avaliação ampliada" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}><button className="lightbox-close" aria-label="Fechar imagem" onClick={() => setLightbox(null)}><X /></button><motion.img src={socialEvidence[lightbox].src} alt={socialEvidence[lightbox].alt} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} onClick={(event) => event.stopPropagation()} /></motion.div>}</AnimatePresence>
    </div>
  );
}
