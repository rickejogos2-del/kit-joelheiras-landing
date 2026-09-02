import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail } from "lucide-react";

const CONTACT_EMAIL = "studioelevateagencia@gmail.com";

export default function TermsOfUse() {
  return (
    <main className="legal-page">
      <div className="legal-grid" aria-hidden="true" />
      <div className="container legal-shell">
        <header className="legal-header">
          <a href="/" className="legal-back"><ArrowLeft size={16} /> Voltar para a página inicial</a>
          <a href="/" className="legal-brand"><span className="legal-mark">K2</span><span>KIT 2<br />JOELHEIRAS</span></a>
        </header>

        <article className="legal-card">
          <div className="legal-eyebrow">KIT 2 JOELHEIRAS · DOCUMENTO INFORMATIVO</div>
          <h1>Termos de <em>Uso</em></h1>
          <p className="legal-intro">Ao comprar no Kit 2 Joelheiras, você declara que leu e compreendeu as condições abaixo.</p>

          <section className="legal-section">
            <span className="legal-number">01</span>
            <div><h2>Condições de compra</h2><p>Os pedidos são realizados pelo checkout indicado no site. Antes de concluir, confira os dados do pedido, endereço de entrega e informações de contato. A confirmação da compra depende da aprovação do pagamento.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">02</span>
            <div><h2>Prazo de entrega</h2><p>O prazo estimado de entrega é informado no checkout de acordo com o endereço fornecido. Esse prazo pode variar por região, disponibilidade, processamento do pedido e fatores externos de transporte.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">03</span>
            <div><h2>Trocas e devoluções</h2><p>Você pode solicitar troca ou devolução em até 7 dias corridos contados do recebimento, conforme o direito de arrependimento previsto no Código de Defesa do Consumidor. O produto deve ser enviado nas condições orientadas pelo suporte. Para iniciar a solicitação, entre em contato pelo e-mail abaixo.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">04</span>
            <div><h2>Formas de pagamento</h2><p>Aceitamos cartão de crédito e Pix, conforme disponibilidade apresentada no checkout. A aprovação e eventual prazo de compensação dependem da instituição financeira e do meio de pagamento escolhido.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">05</span>
            <div><h2>Suporte</h2><p>Para dúvidas sobre pedidos, entrega, trocas ou devoluções, envie uma mensagem para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Informe, sempre que possível, o número do pedido e o nome usado na compra.</p></div>
          </section>

          <div className="legal-contact"><Mail size={20} /><div><strong>Suporte Kit 2 Joelheiras</strong><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
        </article>

        <footer className="legal-footer"><span><CheckCircle2 size={14} /> Compra com informação clara</span><a href="/politica-de-privacidade">Política de privacidade <ArrowUpRight size={14} /></a></footer>
      </div>
    </main>
  );
}
