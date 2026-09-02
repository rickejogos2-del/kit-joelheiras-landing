import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail } from "lucide-react";

const CONTACT_EMAIL = "studioelevateagencia@gmail.com";

export default function PrivacyPolicy() {
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
          <h1>Política de <em>Privacidade</em></h1>
          <p className="legal-intro">Esta política explica, de forma simples e objetiva, como o Kit 2 Joelheiras trata os dados pessoais utilizados em sua compra e navegação.</p>

          <section className="legal-section">
            <span className="legal-number">01</span>
            <div><h2>Quais dados coletamos</h2><p>Podemos coletar nome, e-mail, telefone e endereço para entrega quando você realiza um pedido ou entra em contato conosco.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">02</span>
            <div><h2>Como usamos os dados</h2><p>Usamos essas informações para processar pedidos, organizar a entrega, entrar em contato sobre a compra e prestar suporte. Também podemos enviar comunicações de marketing quando você tiver dado seu consentimento.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">03</span>
            <div><h2>Cookies e pixels</h2><p>Utilizamos cookies e pixels de rastreamento, incluindo tecnologias da Meta/Facebook, para medir resultados, analisar a navegação e exibir anúncios mais relevantes. Você pode controlar cookies nas configurações do seu navegador.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">04</span>
            <div><h2>Compartilhamento de dados</h2><p>Não vendemos seus dados pessoais para terceiros. Podemos compartilhá-los apenas quando necessário para processar o pedido, realizar a entrega, operar o checkout ou cumprir uma obrigação legal.</p></div>
          </section>
          <section className="legal-section">
            <span className="legal-number">05</span>
            <div><h2>Exclusão dos seus dados</h2><p>Você pode solicitar a exclusão dos seus dados pessoais enviando um e-mail para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Avaliaremos a solicitação e manteremos somente o que for necessário para cumprir obrigações legais ou resolver pendências da compra.</p></div>
          </section>

          <div className="legal-contact"><Mail size={20} /><div><strong>Fale com o Kit 2 Joelheiras</strong><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
        </article>

        <footer className="legal-footer"><span><CheckCircle2 size={14} /> Conteúdo objetivo para sua segurança</span><a href="/termos-de-uso">Termos de uso <ArrowUpRight size={14} /></a></footer>
      </div>
    </main>
  );
}
