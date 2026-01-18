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
  MessageSquare,
  FileText,
  Mail,
  Video,
  BarChart,
  Upload,
  Download,
  History,
  Search,
  Copy,
  Star,
  TrendingUp,
  X,
  Check,
  AlertCircle,
  Shield,
  DollarSign,
  Film,
  Play,
  Monitor,
  Smartphone,
  Image as ImageIcon,
  Database,
  Sparkles
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
          <a href="#precos" className="hover:text-green-400 transition">Preços</a>
        </div>
        <a href="#oferta" className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-bold text-sm transition transform hover:scale-105 shadow-lg shadow-yellow-400/20">
          COMEÇAR GRÁTIS
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
      <h1 className="font-display text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
        <span className="text-white">Crie Copies de</span> <br />
        <span className="text-yellow-400">Alta Conversão</span> <br />
        <span className="text-white">em</span> <span className="text-cyan-400">5 Minutos</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        Economize <span className="text-yellow-400 font-bold">R$ 50.000/ano</span> em copywriters. 
        <span className="text-cyan-400 font-bold"> Claude Sonnet 4</span> + Frameworks Profissionais + 
        <span className="text-orange-400 font-bold"> Vídeos IA 🔥</span> = 
        <span className="text-white font-bold"> Copies e Vídeos que Vendem</span>
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <a href="#oferta" className="w-full md:w-auto bg-yellow-400 text-black px-10 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl shadow-yellow-400/20 group">
          COMEÇAR GRÁTIS AGORA <ArrowRight className="group-hover:translate-x-1 transition" />
        </a>
        <a href="#problema" className="w-full md:w-auto glass text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition">
          Ver Como Funciona
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-16">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span>3 copies gratuitas</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span>Sem necessidade de cartão</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span>Acesso imediato</span>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto relative group">
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
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
          Você Está <span className="text-yellow-400">Perdendo Dinheiro</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Se você já passou por alguma dessas situações, você sabe o quanto é frustrante...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            icon: "⏰",
            title: "Demora horas ou dias para criar uma copy",
            desc: "Você fica travado tentando escrever a copy perfeita, enquanto seus concorrentes já estão vendendo."
          },
          {
            icon: "💸",
            title: "Paga R$ 500-3.000 por copywriter",
            desc: "E ainda tem que esperar 7-15 dias de prazo. Quando precisa fazer ajustes, paga extra."
          },
          {
            icon: "❓",
            title: "Não sabe estruturar uma copy persuasiva",
            desc: "Você sabe que precisa de gatilhos mentais, storytelling, AIDA... mas não sabe como aplicar."
          },
          {
            icon: "🔄",
            title: "Precisa testar múltiplas variações",
            desc: "Para descobrir qual anúncio converte melhor, você precisaria criar 10 versões. Quem tem tempo pra isso?"
          },
          {
            icon: "📧",
            title: "Não tem tempo para sequências de email",
            desc: "Uma sequência profissional precisa de 5-7 emails bem escritos. São horas de trabalho."
          },
          {
            icon: "🎬",
            title: "Trava na hora de escrever VSL ou Sales Page",
            desc: "Você olha para a página em branco e não sabe nem por onde começar. É paralisante."
          }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-2xl border-white/5 hover:border-yellow-400/20 transition group">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block px-6 py-3 rounded-xl glass border-red-500/30 text-red-400 font-bold">
          💔 Resultado: Você perde vendas todos os dias por falta de uma copy poderosa
        </div>
      </div>
    </div>
  </section>
);

// Seção dos 5 Tipos de Copy
const CopyTypes = () => (
  <section id="solucao" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full glass border-cyan-400/30 text-cyan-400 text-xs font-bold mb-6">A SOLUÇÃO COMPLETA</div>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
          <span className="text-white">5 Tipos de Copy</span><br />
          <span className="text-yellow-400">Prontas em Minutos</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Tudo que você precisa para vender online, do anúncio até o fechamento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: <Video className="text-red-400" size={32} />,
            title: "VSL (Video Sales Letter)",
            desc: "Script completo com marcações de tempo, estrutura AIDA, gatilhos mentais e quebra de objeções",
            features: ["Estrutura AIDA", "Gatilhos mentais", "Call-to-action poderoso"]
          },
          {
            icon: <FileText className="text-blue-400" size={32} />,
            title: "Sales Page",
            desc: "Página de vendas completa com 10-15 seções, storytelling persuasivo e prova social",
            features: ["Headline magnética", "Prova social", "FAQ com objeções"]
          },
          {
            icon: <Target className="text-green-400" size={32} />,
            title: "Ads (Meta Ads)",
            desc: "5 variações de anúncios prontos para Facebook e Instagram com diferentes ângulos",
            features: ["5 variações", "Headlines testadas", "Copywriting direto"]
          },
          {
            icon: <Mail className="text-purple-400" size={32} />,
            title: "Email Sequence",
            desc: "Sequência de 5 emails de lançamento com storytelling progressivo e urgência",
            features: ["5 emails prontos", "Assuntos de alta abertura", "CTAs estratégicos"]
          },
          {
            icon: <Rocket className="text-yellow-400" size={32} />,
            title: "Landing Page",
            desc: "Página de captura com headline poderosa, bullet points e CTA para conversão",
            features: ["Mobile-first", "Foco em conversão", "Benefícios claros"]
          },
          {
            icon: <Film className="text-orange-400" size={32} />,
            title: "Vídeos com IA 🔥",
            desc: "Gera vídeos profissionais em 1-3 minutos com IA de última geração (MiniMax, VEO)",
            features: ["Qualidade 1080p", "Formatos Stories/YouTube", "Upload de imagem"]
          }
        ].map((type, i) => (
          <div key={i} className="glass p-8 rounded-2xl border-white/5 hover:border-yellow-400/20 transition group">
            <div className="mb-6">{type.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition">{type.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{type.desc}</p>
            <ul className="space-y-2">
              {type.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 size={14} className="text-cyan-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Seção de Geração de Vídeos com IA
const VideoGeneration = () => (
  <section className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full glass border-orange-400/30 text-orange-400 text-xs font-bold mb-6 uppercase tracking-wider">
          🔥 NOVO! Lançamento Exclusivo
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
          <span className="text-white">Geração de </span>
          <span className="text-orange-400">Vídeos com IA</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Crie vídeos profissionais de alta qualidade em <span className="text-orange-400 font-bold">1-3 minutos</span>. 
          Perfeito para Stories, Reels, YouTube e Landing Pages.
        </p>
      </div>

      {/* Cards de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Sparkles className="text-orange-400" size={32} />,
            title: "Geração Ultra Rápida",
            desc: "De 1 a 3 minutos para criar vídeos profissionais de alta qualidade",
            badge: "⚡ Rápido"
          },
          {
            icon: <Monitor className="text-cyan-400" size={32} />,
            title: "Qualidade Cinema 1080p",
            desc: "Vídeos em Full HD com qualidade profissional digna de cinema",
            badge: "🎬 HD"
          },
          {
            icon: <Smartphone className="text-purple-400" size={32} />,
            title: "Formatos Versáteis",
            desc: "9:16 para Stories/Reels ou 16:9 para YouTube/Landscape",
            badge: "📱 Multi"
          },
          {
            icon: <BrainCircuit className="text-pink-400" size={32} />,
            title: "IA de Última Geração",
            desc: "Integração com Replicate: MiniMax Video-01, VEO e outros modelos",
            badge: "🧠 IA"
          },
          {
            icon: <ImageIcon className="text-green-400" size={32} />,
            title: "Upload de Imagem",
            desc: "Use imagens de referência para melhorar a qualidade e direção do vídeo",
            badge: "🖼️ Ref"
          },
          {
            icon: <Database className="text-blue-400" size={32} />,
            title: "Armazenamento Permanente",
            desc: "Todos os vídeos salvos automaticamente no Supabase Storage",
            badge: "💾 Cloud"
          },
          {
            icon: <History className="text-yellow-400" size={32} />,
            title: "Biblioteca Completa",
            desc: "Histórico organizado com preview, download e gerenciamento fácil",
            badge: "📚 Organize"
          },
          {
            icon: <Download className="text-red-400" size={32} />,
            title: "Download Ilimitado",
            desc: "Baixe seus vídeos quantas vezes quiser em alta qualidade",
            badge: "⬇️ Export"
          },
          {
            icon: <Play className="text-indigo-400" size={32} />,
            title: "Preview Instantâneo",
            desc: "Visualize seus vídeos diretamente na plataforma antes de baixar",
            badge: "▶️ Preview"
          }
        ].map((feature, i) => (
          <div key={i} className="glass p-8 rounded-2xl border-white/5 hover:border-orange-400/20 transition group relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xs font-bold glass px-2 py-1 rounded-full border-white/10">
              {feature.badge}
            </div>
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Demonstração Visual */}
      <div className="max-w-5xl mx-auto glass p-8 rounded-3xl border-orange-400/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-white">
            Como Funciona?
          </h3>
          <p className="text-gray-400">
            3 passos simples para criar vídeos profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Descreva ou Faça Upload",
              desc: "Digite o que você quer no vídeo ou faça upload de uma imagem de referência",
              icon: <Upload className="text-orange-400" size={24} />
            },
            {
              step: "02",
              title: "Escolha o Formato",
              desc: "Selecione 9:16 (Stories/Reels) ou 16:9 (YouTube/Landscape)",
              icon: <Monitor className="text-cyan-400" size={24} />
            },
            {
              step: "03",
              title: "Gerar e Baixar",
              desc: "Em 1-3 minutos seu vídeo 1080p está pronto para download",
              icon: <Download className="text-green-400" size={24} />
            }
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center border-2 border-white/10">
                {step.icon}
              </div>
              <div className="text-5xl font-black text-white/10 mb-2">
                {step.step}
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Casos de Uso */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8 text-white">
          Perfeito Para:
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "📱 Stories & Reels",
            "🎥 Anúncios de Vídeo",
            "🌐 Landing Pages",
            "📺 YouTube Shorts",
            "💼 Apresentações",
            "🎬 VSL (Video Sales Letter)",
            "📧 Email Marketing",
            "🚀 Lançamentos"
          ].map((use, i) => (
            <div key={i} className="glass px-6 py-3 rounded-full border-white/10 hover:border-orange-400/30 transition text-sm font-semibold">
              {use}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <a 
          href="#oferta" 
          className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-black px-10 py-5 rounded-xl font-black text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-400/20 group"
        >
          COMEÇAR A CRIAR VÍDEOS AGORA
          <Film className="group-hover:scale-110 transition" />
        </a>
        <p className="text-sm text-gray-500 mt-4">
          ✨ Disponível nos planos PRO e ENTERPRISE
        </p>
      </div>
    </div>
  </section>
);

// Comparação vs Copywriter e ChatGPT
const Comparison = () => (
  <section className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Por Que Copy Master Pro é <span className="text-yellow-400">Superior?</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* vs ChatGPT */}
        <div className="glass p-8 rounded-2xl border-white/5">
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">vs ChatGPT/Outras IAs</h3>
          <div className="space-y-4">
            {[
              { cmp: "Especializado em copywriting brasileiro", vs: "Genérico" },
              { cmp: "Claude Sonnet 4 (IA mais avançada)", vs: "Modelos básicos" },
              { cmp: "Frameworks de copywriting aplicados", vs: "Respostas genéricas" },
              { cmp: "Interface focada em conversão", vs: "Chat genérico" },
              { cmp: "Histórico organizado", vs: "Perde conversas antigas" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-4 border-b border-white/5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span className="text-white font-semibold text-sm">{item.cmp}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <X size={16} className="text-red-400" />
                    <span className="text-gray-500 text-sm">{item.vs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Features detalhados
const Features = () => (
  <section id="recursos" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-4xl font-bold mb-16">Recursos <span className="text-yellow-400">Exclusivos</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Upload className="text-yellow-400" />, title: "Upload de Material (RAG)", desc: "Faça upload de PDFs, Word, TXT do seu produto e a IA usa como referência" },
          { icon: <Users className="text-cyan-400" />, title: "Sistema de Personas", desc: "Escolha entre 6 personas pré-definidas para adaptar a linguagem" },
          { icon: <History className="text-blue-400" />, title: "Histórico Completo", desc: "Nunca perca uma copy criada. De 7 dias (Free) até 1 ano (Pro)" },
          { icon: <Download className="text-pink-400" />, title: "Exportação Múltipla", desc: "Copiar para clipboard, baixar em TXT ou HTML formatado" },
          { icon: <BrainCircuit className="text-orange-400" />, title: "Claude Sonnet 4", desc: "A IA mais avançada da Anthropic treinada em frameworks de copywriting" },
          { icon: <ShieldCheck className="text-red-400" />, title: "Frameworks Profissionais", desc: "AIDA, PAS, 4P's, Jornada do Herói e gatilhos de Cialdini aplicados" },
          { icon: <Film className="text-orange-400" />, title: "Geração de Vídeos IA 🔥", desc: "Crie vídeos profissionais 1080p em 1-3 minutos. Formatos 9:16 e 16:9 com Replicate" },
          { icon: <Database className="text-green-400" />, title: "Armazenamento Permanente", desc: "Todos os vídeos salvos no Supabase Storage com biblioteca completa" }
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

// Pricing com 4 planos
const Pricing = () => (
  <section id="precos" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
          Escolha Seu <span className="text-yellow-400">Plano</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Comece grátis e escale conforme seu negócio cresce
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* FREE */}
        <div className="glass p-8 rounded-2xl border-white/5 hover:border-white/10 transition">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">FREE</h3>
            <div className="text-4xl font-black text-white mb-2">R$ 0</div>
            <p className="text-sm text-gray-500">Para testar a qualidade</p>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "3 projetos/mês",
              "5 tipos de copy",
              "IA Claude Sonnet 4",
              "Histórico 7 dias",
              "1 variação",
              "Exportar TXT/HTML",
              "❌ Sem geração de vídeos"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-400">
                <CheckCircle2 size={14} className="text-gray-600" /> {item}
              </li>
            ))}
          </ul>
          <a href="https://forms.gle/i9cjNnGEqiVKUjFh8" target="_blank" rel="noopener noreferrer" className="w-full block text-center glass py-3 rounded-xl font-bold hover:bg-white/10 transition">
            Começar Grátis
          </a>
        </div>

        {/* BASIC */}
        <div className="glass p-8 rounded-2xl border-white/5 hover:border-blue-400/20 transition">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 text-blue-400">BASIC</h3>
            <div className="text-4xl font-black text-white mb-2">R$ 97</div>
            <p className="text-sm text-gray-500">/mês</p>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "30 projetos/mês",
              "5 tipos de copy",
              "IA Claude Sonnet 4",
              "Histórico 30 dias",
              "Personas e frameworks",
              "Exportar TXT/HTML",
              "Suporte por email",
              "❌ Sem geração de vídeos"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-400">
                <CheckCircle2 size={14} className="text-blue-400" /> {item}
              </li>
            ))}
          </ul>
          <a href="https://pay.kiwify.com.br/EGgJUUM" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-500 transition">
            Escolher Basic
          </a>
        </div>

        {/* PRO - Mais Popular */}
        <div className="glass p-8 rounded-2xl border-purple-400/30 hover:border-purple-400/50 transition relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold">
            MAIS POPULAR
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 text-purple-400">PRO</h3>
            <div className="text-4xl font-black text-white mb-2">R$ 297</div>
            <p className="text-sm text-gray-500">/mês</p>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "150 projetos/mês (5/dia!)",
              "5 tipos de copy",
              "IA Claude Sonnet 4",
              "Upload arquivos (10MB)",
              "Histórico 365 dias",
              "Suporte prioritário (4h)",
              "Exportar múltiplos formatos",
              "🔥 Geração de Vídeos IA (30/mês)",
              "🎬 Vídeos 1080p em 1-3min",
              "📱 Formatos 9:16 e 16:9"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-400">
                <CheckCircle2 size={14} className="text-purple-400" /> {item}
              </li>
            ))}
          </ul>
          <a href="https://pay.kiwify.com.br/G5OsCDB" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-purple-600 py-3 rounded-xl font-bold hover:bg-purple-500 transition">
            Escolher Pro
          </a>
        </div>


      </div>

      {/* ROI Calculator */}
      <div className="mt-16 max-w-3xl mx-auto glass p-8 rounded-2xl border-green-400/20">
        <div className="text-center mb-6">
          <TrendingUp className="inline-block text-green-400 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Resultados Esperados</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {[
            { label: "Redução de tempo", value: "95%" },
            { label: "Economia em custos", value: "90%" },
            { label: "Mais testes A/B", value: "3x" },
            { label: "Aumento de conversão", value: "20-50%" }
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-between p-4 glass rounded-xl">
              <span className="text-gray-400">{stat.label}</span>
              <span className="text-2xl font-black text-green-400">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// FAQ
const FAQ = () => (
  <section className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-6">
          Perguntas <span className="text-yellow-400">Frequentes</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          {
            q: "Copy Master Pro é melhor que ChatGPT?",
            a: "Sim! Somos especializados em copywriting brasileiro com Claude Sonnet 4 (IA mais avançada), frameworks aplicados e templates prontos. ChatGPT é genérico e você precisa criar seus próprios prompts."
          },
          {
            q: "Preciso de conhecimento técnico para usar?",
            a: "Não! É só preencher um formulário simples, clicar em 'Gerar Copy' e pronto. Em menos de 10 segundos você tem sua copy profissional."
          },
          {
            q: "Quanto tempo demora para criar uma copy?",
            a: "Menos de 5 minutos! A IA gera em segundos e você pode fazer pequenos ajustes se quiser."
          },
          {
            q: "Tem garantia?",
            a: "Sim! 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas."
          },
          {
            q: "Funciona para qualquer nicho?",
            a: "Sim! Temos personas e frameworks que funcionam em qualquer nicho: saúde, fitness, negócios, relacionamento, etc."
          },
          {
            q: "Posso cancelar quando quiser?",
            a: "Sim! Você pode cancelar a qualquer momento. Sem multas, sem burocracia."
          },
          {
            q: "As copies ficam prontas ou preciso editar?",
            a: "As copies já saem 90% prontas. Recomendamos 10-15 minutos de ajustes para personalizar, mas a estrutura toda já está feita."
          },
          {
            q: "Quantas copies posso criar por dia?",
            a: "Depende do plano: Free (3/mês), Basic (30/mês), Pro (150/mês = 5/dia)."
          }
        ].map((faq, i) => (
          <details key={i} className="glass p-6 rounded-xl border-white/5 group">
            <summary className="cursor-pointer font-bold text-lg flex items-center justify-between group-hover:text-yellow-400 transition">
              {faq.q}
              <ChevronDown className="group-open:rotate-180 transition" />
            </summary>
            <p className="mt-4 text-gray-400 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

// Garantia
const Guarantee = () => (
  <section className="py-16 bg-zinc-950">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto glass p-10 rounded-3xl border-green-400/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center">
              <Shield size={48} className="text-black" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-black mb-4">Garantia de <span className="text-green-400">7 Dias</span></h3>
            <p className="text-lg text-gray-300 mb-2">
              Experimente Copy Master Pro sem riscos. Se não gostar, devolvemos 
              <span className="text-white font-bold"> 100% do seu dinheiro</span>.
            </p>
            <p className="text-sm text-gray-500">Sem burocracia, sem perguntas. Basta enviar um email.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// CTA Final com Urgência
const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-24 bg-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 rounded-full glass border-red-500/30 text-red-400 text-sm font-bold mb-6 animate-pulse">
          ⚠️ OFERTA ESPECIAL - PRIMEIROS 100 USUÁRIOS
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
          Pare de <span className="text-red-400">Perder Vendas</span><br />
          Comece a <span className="text-yellow-400">Vender Mais Hoje</span>
        </h2>

        {/* Timer */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
          ].map((time, i) => (
            <div key={i} className="glass p-4 rounded-xl min-w-[80px]">
              <div className="text-3xl font-black text-yellow-400">{String(time.value).padStart(2, '0')}</div>
              <div className="text-xs text-gray-500">{time.label}</div>
            </div>
          ))}
        </div>

        {/* Plano Destaque */}
        <div className="max-w-md mx-auto relative mb-8">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-30"></div>
          <div className="relative glass p-10 rounded-3xl border-white/10 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-6 py-1 rounded-full text-xs font-black uppercase tracking-tighter">MAIS ESCOLHIDO</div>
            <h3 className="text-2xl font-bold mb-4">Plano PRO</h3>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-lg text-gray-500 line-through">R$ 497</span>
              <span className="text-5xl font-black text-yellow-400">R$ 297</span>
              <span className="text-gray-500">/mês</span>
            </div>
            
            <ul className="text-left space-y-3 mb-8 text-sm">
              {[
                "150 copies/mês (5 por dia)",
                "Upload de arquivos até 10MB",
                "Histórico de 1 ano",
                "Suporte prioritário"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 size={16} className="text-yellow-400" /> {item}
                </li>
              ))}
            </ul>
            
            <a href="https://pay.kiwify.com.br/G5OsCDB" target="_blank" rel="noopener noreferrer" className="w-full block bg-yellow-400 hover:bg-yellow-300 text-black py-5 rounded-2xl font-black text-xl transition transform hover:scale-105 shadow-xl shadow-yellow-400/20 mb-6">
              QUERO CRIAR COPIES PROFISSIONAIS AGORA
            </a>

            <div className="flex flex-col gap-2 text-xs text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 size={12} className="text-green-400" />
                <span>Sem cartão para teste grátis</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 size={12} className="text-green-400" />
                <span>3 copies gratuitas</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 size={12} className="text-green-400" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-4 grayscale opacity-50">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Após o período promocional, o preço volta para R$ 497/mês
        </p>
      </div>
    </section>
  );
};

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
      <div className="flex justify-center gap-6 text-xs text-gray-600 mb-6">
        <a href="#" className="hover:text-white transition">Termos de Uso</a>
        <a href="#" className="hover:text-white transition">Privacidade</a>
        <a href="#" className="hover:text-white transition">Contato</a>
      </div>
      <div className="text-xs text-gray-700 space-y-1">
        <p>📧 solucoesinteligentes83@gmail.com</p>
        <p>Desenvolvido por PauloDev40</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-yellow-400 selection:text-black">
      <Header />
      <Hero />
      <PainPoints />
      <CopyTypes />
      <VideoGeneration />
      <Comparison />
      <Features />
      <Pricing />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#oferta" className="w-full bg-yellow-400 text-black py-4 rounded-full font-black text-center block shadow-2xl shadow-yellow-400/30 animate-bounce">
          COMEÇAR GRÁTIS AGORA
        </a>
      </div>
    </div>
  );
}
