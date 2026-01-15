
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Target, 
  Users, 
  Clock, 
  ChevronDown,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <img src="https://i.ibb.co/Lzf7P3D/owl-logo.png" alt="Logo" className="w-8 h-8 object-contain rounded-full" onError={(e) => (e.currentTarget.src = 'https://picsum.photos/40/40')} />
          </div>
          <span className="font-display font-bold text-lg tracking-tighter text-yellow-400">COPY MASTER PRO</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#problema" className="hover:text-yellow-400 transition">O Problema</a>
          <a href="#solucao" className="hover:text-cyan-400 transition">A Solução</a>
          <a href="#recursos" className="hover:text-purple-400 transition">Recursos</a>
        </div>
        <a href="#oferta" className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-bold text-sm transition transform hover:scale-105 shadow-lg shadow-yellow-400/20">
          COMEÇAR AGORA
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-yellow-400/30 text-yellow-400 text-xs font-bold tracking-widest uppercase animate-pulse">
        <Zap size={14} /> Inteligência Artificial de Elite
      </div>
      
      <h1 className="font-display text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
        <span className="text-yellow-400">COPY</span> <br className="md:hidden" />
        <span className="text-white">MASTER PRO</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        A IA treinada pelos <span className="text-cyan-400 font-bold">maiores gurus</span> de marketing digital para transformar seu produto em uma <span className="text-yellow-400 font-bold uppercase tracking-wide">máquina de vendas</span>.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href="#oferta" className="w-full md:w-auto bg-yellow-400 text-black px-10 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl shadow-yellow-400/20 group">
          QUERO VENDER MAIS <ArrowRight className="group-hover:translate-x-1 transition" />
        </a>
        <a href="#problema" className="w-full md:w-auto glass text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition">
          Saber mais
        </a>
      </div>

      <div className="mt-20 max-w-4xl mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
        <img 
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1200" 
          alt="AI Interface" 
          className="relative rounded-2xl border border-white/10 glass w-full object-cover h-[300px] md:h-[500px]" 
        />
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section id="problema" className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="relative rounded-full overflow-hidden border-4 border-cyan-400/20 aspect-square max-w-md mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800" 
              alt="Pessoa cansada no trabalho" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-cyan-400">
            VOCÊ JÁ PASSOU POR ISSO?
          </h2>
          <div className="space-y-6">
            {[
              "Minha rotina já está no limite.",
              "Mal consigo dar conta do trabalho e da casa.",
              "No fim do dia, meu cérebro só quer desligar.",
              "Não tenho energia para começar algo do zero.",
              "Até queria mudar de vida, mas não sei onde encaixar isso."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-6 h-6 rounded-full glass border-yellow-400/50 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  <span className="text-[10px] font-bold">{i + 1}</span>
                </div>
                <p className="text-lg text-gray-300 italic">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MarketingTruth = () => (
  <section className="py-24 bg-zinc-950 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-yellow-400 uppercase tracking-widest">
          O Marketing Digital realmente funciona?
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
        <div className="text-left space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            Se você está lendo isso agora, provavelmente é porque algo dentro de você está gritando que existe uma vida melhor do que passar 8+ horas por dia num cubículo, ganhando migalhas e vendo seu tempo precioso escorrer pelo ralo, certo?
          </p>
          <p className="font-semibold text-white">
            E sabe o que é mais frustrante? Todo mundo ao seu redor parece estar "dando certo" no digital enquanto você fica ali, preso na mesma rotina de sempre, vendo stories de pessoas que mal conhece faturando mais em um mês do que você em um ano inteiro...
          </p>
          <p>
            As oportunidades estão aí, aos montes. Mas existe um abismo gigantesco entre <span className="text-white font-bold">"saber que funciona"</span> e saber <span className="text-cyan-400 font-bold uppercase">COMO fazer funcionar</span>. E é exatamente aqui que 97% das pessoas travam...
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Target className="text-yellow-400" />, title: "Palavras Certas", desc: "É por isso que você vê gente comum faturando alto. Não porque são mais inteligentes, mas porque usam as palavras certas." },
          { icon: <Users className="text-cyan-400" />, title: "Atenção do Público", desc: "A briga hoje não é por preço, é por atenção. Quem não sabe prender a atenção, não vende nada." },
          { icon: <Clock className="text-purple-400" />, title: "Tempo é Ouro", desc: "Você não tem 10 horas por dia para estudar copywriting. Você precisa de resultados agora." }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-2xl border-white/5 hover:border-white/20 transition group">
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ToolIntro = () => (
  <section id="solucao" className="py-24 bg-black relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="inline-block px-4 py-1 rounded-full glass border-cyan-400/30 text-cyan-400 text-xs font-bold mb-6">A FERRAMENTA CERTA</div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
            Para transformar <br />
            <span className="text-yellow-400">ideias em lucro.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            O <span className="text-white font-bold">Copy Master Pro</span> foi criado para transformar qualquer ideia, produto ou serviço em uma mensagem que faz as pessoas <span className="text-cyan-400 underline decoration-cyan-400/50 underline-offset-4">pararem, prestarem atenção e comprarem.</span>
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Modelos de copy testados por gurus",
              "Geração instantânea de anúncios",
              "Scripts de vendas de alta conversão",
              "Otimização de páginas de vendas"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400">
                <CheckCircle2 size={20} className="text-yellow-400" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-yellow-400 to-purple-600 shadow-2xl shadow-yellow-400/10">
            <div className="bg-[#121212] rounded-[22px] p-8 md:p-12 text-center">
              <div className="mb-6 flex justify-center">
                 <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="https://i.ibb.co/Lzf7P3D/owl-logo.png" alt="Owl Logo" className="w-16 h-16 object-contain" onError={(e) => (e.currentTarget.src = 'https://picsum.photos/80/80')} />
                 </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Copy Master Pro</h3>
              <p className="text-gray-500 mb-8">Entre na sua conta</p>
              <div className="space-y-4 text-left">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Email</label>
                  <div className="w-full p-4 glass rounded-xl border-white/10 text-gray-600">seu@email.com</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Senha</label>
                  <div className="w-full p-4 glass rounded-xl border-white/10 text-gray-600">••••••••</div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-900 to-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-white/10 hover:brightness-125 transition">
                  <span className="text-yellow-400">🦉</span> Entrar <ArrowRight size={18} />
                </button>
                <p className="text-center text-xs text-yellow-400/60 mt-4 cursor-pointer hover:text-yellow-400">Esqueceu sua senha?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="recursos" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-4xl font-bold mb-16">Recursos <span className="text-yellow-400">Exclusivos</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: <BrainCircuit className="text-yellow-400" />, title: "Neurônio de Guru", desc: "IA alimentada por bilhões de reais em faturamento real." },
          { icon: <Rocket className="text-cyan-400" />, title: "Velocidade Luz", desc: "Copies prontas em menos de 10 segundos." },
          { icon: <ShieldCheck className="text-purple-400" />, title: "Anti-Bloqueio", desc: "Textos criados para evitar suspensões em redes de anúncios." },
          { icon: <MessageSquare className="text-green-400" />, title: "Chat Consultor", desc: "Dúvidas sobre sua estratégia? Pergunte à IA." }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-3xl glass border-white/5 hover:border-yellow-400/20 transition-all flex flex-col items-center">
            <div className="mb-6">{feat.icon}</div>
            <h3 className="font-bold text-lg mb-3">{feat.title}</h3>
            <p className="text-gray-400 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="oferta" className="py-24 bg-black relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-4xl md:text-5xl font-black mb-6">OFERTA <span className="text-yellow-400">VÁLIDA HOJE</span></h2>
      <p className="text-gray-400 mb-12 max-w-xl mx-auto">Comece a vender com as palavras certas ainda hoje. Sem mensalidades abusivas por tempo limitado.</p>
      
      <div className="max-w-md mx-auto relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
        <div className="relative glass p-10 rounded-3xl border-white/10 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-6 py-1 rounded-full text-xs font-black uppercase tracking-tighter">MELHOR ESCOLHA</div>
          <h3 className="text-2xl font-bold mb-4">Acesso Vitalício</h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-gray-500 line-through text-lg">R$ 997,00</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl font-bold">12x</span>
            <span className="text-5xl font-black text-yellow-400">R$ 29,70</span>
          </div>
          <p className="text-sm text-gray-400 mb-8">Ou R$ 297,00 à vista no PIX</p>
          
          <ul className="text-left space-y-4 mb-10 border-t border-white/5 pt-8">
            {[
              "Acesso ilimitado à IA",
              "Todos os modelos de gurus",
              "Atualizações vitalícias",
              "Suporte prioritário VIP",
              "Bônus: Guia de Tráfego Pago"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-yellow-400" /> {item}
              </li>
            ))}
          </ul>
          
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-5 rounded-2xl font-black text-xl transition transform hover:scale-105 shadow-xl shadow-yellow-400/20">
            QUERO MEU ACESSO AGORA
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-4 grayscale opacity-50">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-black border-t border-white/5">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://i.ibb.co/Lzf7P3D/owl-logo.png" alt="Logo" className="w-6 h-6 object-contain" onError={(e) => (e.currentTarget.src = 'https://picsum.photos/30/30')} />
        </div>
        <span className="font-display font-bold text-sm tracking-tighter text-yellow-400">COPY MASTER PRO</span>
      </div>
      <p className="text-gray-500 text-xs mb-4">Copy Master Pro © 2026. Todos os direitos reservados.</p>
      <div className="flex justify-center gap-6 text-xs text-gray-600">
        <a href="#" className="hover:text-white transition">Termos de Uso</a>
        <a href="#" className="hover:text-white transition">Privacidade</a>
        <a href="#" className="hover:text-white transition">Contato</a>
      </div>
      <p className="mt-8 text-[10px] text-gray-800">Desenvolvido por PauloDev40</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-yellow-400 selection:text-black">
      <Header />
      <Hero />
      <PainPoints />
      <MarketingTruth />
      <ToolIntro />
      <Features />
      <Pricing />
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#oferta" className="w-full bg-yellow-400 text-black py-4 rounded-full font-black text-center block shadow-2xl shadow-yellow-400/30 animate-bounce">
          COMEÇAR AGORA
        </a>
      </div>
    </div>
  );
}
