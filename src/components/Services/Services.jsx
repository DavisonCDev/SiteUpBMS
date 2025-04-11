import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Automação de Sistemas HVAC com BMS',
    description: 'Climatização inteligente, conforto contínuo e eficiência energética. Monitore, controle e otimize o desempenho dos sistemas de ar-condicionado, ventilação e aquecimento com tecnologia de ponta em automação predial. Reduza custos operacionais, aumente a vida útil dos equipamentos e proporcione ambientes mais confortáveis e sustentáveis.',
  },
  {
    title: 'Detecção e Combate a Incêndios com Alta Tecnologia',
    description: 'Segurança preventiva e resposta rápida, integradas ao seu sistema predial. Automatize a proteção do seu patrimônio com sistemas inteligentes de detecção e combate a incêndios. Monitoramento em tempo real, alarmes precisos, acionamento automático de equipamentos e integração com o BMS garantem eficiência, agilidade e conformidade com as normas de segurança. Reduza riscos, proteja vidas e atue de forma estratégica diante de qualquer ocorrência.',
  },
  {
    title: 'Segurança Eletrônica e CFTV Inteligent',
    description: 'Monitoramento contínuo, prevenção ativa e controle total do ambiente.Implemente soluções modernas de segurança com sistemas de CFTV integrados, vigilância por vídeo em tempo real, gravação inteligente e automação de alarmes e acessos. A integração com o BMS permite uma gestão centralizada e eficiente, aumentando a proteção de pessoas, patrimônios e informações.Tecnologia a serviço da segurança, 24 horas por dia.'
  },
  {
    title: 'Assessoria Especializada para Emissão e Renovação de AVCB',
    description: 'Conformidade legal, segurança garantida e tranquilidade para seu empreendimento.Oferecemos suporte completo no processo de obtenção e renovação do AVCB (Auto de Vistoria do Corpo de Bombeiros), incluindo análise técnica, adequações às normas de segurança contra incêndio e acompanhamento junto aos órgãos competentes. Evite autuações, assegure a regularidade do seu imóvel e mantenha a segurança sempre em dia.',
  },
  {
    title: 'Consultoria Especializada em Automação, Conforto e Segurança Predial',
    description: 'Projetos inteligentes, soluções personalizadas e alto desempenho para seu empreendimento.Oferecemos consultoria técnica completa para implantação, modernização e otimização de sistemas de automação predial, climatização, segurança eletrônica e eficiência energética.Diagnóstico preciso, soluções sob medida e suporte especializado em todas as fases do projeto — do planejamento à operação.Tecnologia aplicada para ambientes mais seguros, confortáveis e eficientes.',
  },
  {
    title: 'Automação e Monitoramento Inteligente para Data Centers',
    description: 'Confiabilidade, performance e controle total da infraestrutura crítica. Implemente soluções de automação predial e monitoramento avançado para data centers de todos os portes. Controle climatização, energia, acesso e segurança de forma integrada e em tempo real, garantindo máxima eficiência operacional. Minimize riscos, evite paradas não planejadas e otimize o desempenho dos seus ativos com tecnologia de ponta e gestão centralizada via BMS. Ambientes mais seguros, estáveis e preparados para o futuro digital.',
  },
  {
    title: 'Retrofit de Sistemas de Automação',
    description: 'Modernização inteligente para mais eficiência, controle e sustentabilidade. Atualize seu sistema de automação predial com soluções de retrofit que integram novas tecnologias ao seu sistema existente. Aprimore o desempenho de edifícios antigos, reduza falhas operacionais e melhore o conforto e a segurança sem a necessidade de grandes reformas. Com retrofit, é possível transformar a infraestrutura atual em um sistema moderno, escalável e conectado, preparado para os desafios da gestão predial do futuro. Economize energia, aumente a vida útil dos equipamentos e eleve o padrão de operação do seu empreendimento.',
  },
];

const Services = () => (
  <section className={styles.services}>
    <h2>Serviços</h2>
    <div className={styles.cards}>
      {services.map((service, index) => (
        <div className={styles.card} key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
