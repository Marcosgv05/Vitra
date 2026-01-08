import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shirt, 
  Watch, 
  Sparkles, 
  Wallet, 
  Glasses, 
  Award,
  Gem,
  Users,
  Footprints
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-mensch-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/menAbout/1920/1080?grayscale"
            alt="Sobre Vitra"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mensch-charcoal via-transparent to-black/30" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/60 uppercase tracking-[0.3em] text-sm mb-4 block">Nossa História</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white italic">Sobre Nós</h1>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 block">Desde 2020</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                O espaço definitivo do <span className="italic">homem moderno</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  A Vitra nasceu da percepção de que o homem contemporâneo merece um espaço dedicado, 
                  onde qualidade e sofisticação se encontram sem compromissos. Não somos apenas uma loja – 
                  somos curadores do estilo masculino.
                </p>
                <p>
                  Nosso nome evoca a ideia de algo vital, essencial. Cada produto em nossa seleção 
                  foi escolhido pensando no homem que valoriza os detalhes, que entende que elegância 
                  não é sobre exagero, mas sobre precisão.
                </p>
                <p>
                  Do vestuário aos acessórios, dos relógios às fragrâncias, cada item em nosso catálogo 
                  representa o melhor em sua categoria. Trabalhamos com marcas estabelecidas e artesãos 
                  independentes que compartilham nossa visão de excelência.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/5] bg-gray-100"
            >
              <img 
                src="https://picsum.photos/seed/manStyle/800/1000"
                alt="Estilo Masculino"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-24 bg-mensch-charcoal text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block">Nossa Missão</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 italic">
              "Elevar o padrão do guarda-roupa masculino, oferecendo peças que combinam tradição artesanal com design contemporâneo."
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Acreditamos que todo homem merece acesso a produtos de qualidade excepcional. 
              Nossa curadoria elimina o ruído e apresenta apenas o que realmente importa: 
              peças atemporais que resistem ao teste do tempo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O Que Oferecemos */}
      <section className="py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Nossas Categorias</span>
            <h2 className="font-serif text-4xl md:text-5xl italic">O Que Oferecemos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Vestuário Premium',
                description: 'Camisas, blazers, calças e polos em tecidos nobres. Do casual refinado ao formal impecável.',
                icon: Shirt
              },
              {
                title: 'Calçados de Qualidade',
                description: 'Oxford, loafers e sapatos sociais em couro legítimo. Conforto e durabilidade em cada passo.',
                icon: Footprints
              },
              {
                title: 'Relógios Sofisticados',
                description: 'Automáticos e cronógrafos de marcas selecionadas. O acessório que define o homem.',
                icon: Watch
              },
              {
                title: 'Fragrâncias Exclusivas',
                description: 'Perfumes e colônias para cada ocasião. Da frescura diurna à intensidade noturna.',
                icon: Sparkles
              },
              {
                title: 'Artigos em Couro',
                description: 'Carteiras, cintos e porta-documentos. Couro genuíno com acabamento artesanal.',
                icon: Wallet
              },
              {
                title: 'Óculos de Sol',
                description: 'Armações clássicas e modernas com lentes de alta qualidade. Proteção com estilo.',
                icon: Glasses
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={item.title}
                  className="p-8 bg-gray-50 hover:bg-gray-100 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-mensch-charcoal text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">O Que Nos Move</span>
            <h2 className="font-serif text-4xl md:text-5xl italic">Nossos Valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Qualidade Intransigente',
                description: 'Cada produto passa por nossa curadoria rigorosa. Se não atende aos nossos padrões, não entra em nosso catálogo.',
                icon: Award
              },
              {
                title: 'Atemporalidade',
                description: 'Fugimos de modismos. Nossas peças são investimentos que você usará por anos, não apenas uma temporada.',
                icon: Gem
              },
              {
                title: 'Atendimento Personalizado',
                description: 'Entendemos que cada homem é único. Nossa equipe está pronta para ajudá-lo a encontrar exatamente o que precisa.',
                icon: Users
              }
            ].map((valor, index) => {
              const IconComponent = valor.icon;
              return (
                <motion.div 
                  key={valor.title}
                  className="text-center p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-mensch-charcoal text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl mb-4">{valor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Descubra Seu Estilo</h2>
            <p className="text-gray-600 mb-8">
              Explore nossa coleção completa e encontre peças que combinam com quem você é.
            </p>
            <Link 
              to="/produtos"
              className="inline-block bg-mensch-charcoal text-white py-4 px-10 uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors"
            >
              Explorar Coleção
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
