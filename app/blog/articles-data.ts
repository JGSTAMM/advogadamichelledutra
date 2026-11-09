export interface BlogArticle {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  readingTime: string;
  pillars: string;
  excerpt: string;
  directAnswer: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  checklist: {
    term: string;
    detail: string;
  }[];
  whatsappMessage: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "o-que-conferir-na-rescisao-trabalhista",
    category: "DIREITO DO TRABALHO",
    title: "Fim do contrato. E agora? O que conferir na sua rescisão trabalhista",
    shortTitle: "O que conferir na sua rescisão trabalhista",
    metaTitle: "O que conferir na Rescisão Trabalhista | Dra. Michelle",
    metaDescription:
      "Saiba o que conferir na rescisão trabalhista: valores, documentos, FGTS e o prazo legal de 10 dias para pagamento. Guia da Dra. Michelle Dutra.",
    publishedAt: "2026-09-30",
    readingTime: "4 min de leitura",
    pillars: "Valores • Documentos • Prazos",
    excerpt:
      "O valor da rescisão depende de como o vínculo foi encerrado. Saiba exatamente o que verificar nos documentos, no extrato do FGTS e nos prazos legais antes de considerar tudo resolvido.",
    directAnswer:
      "O valor da rescisão depende da modalidade de encerramento do vínculo (pedido de demissão, dispensa sem justa causa ou acordo). É essencial conferir o motivo do desligamento registrado nos documentos, as datas de admissão e saída, as parcelas devidas, os descontos realizados e os depósitos do FGTS. Em regra, o pagamento das verbas rescisórias deve ocorrer em até 10 dias corridos contados do término do contrato.",
    sections: [
      {
        heading: "Por que a modalidade de demissão altera todos os cálculos?",
        paragraphs: [
          "Quando o contrato de trabalho chega ao fim, cada modalidade de desligamento — dispensa sem justa causa, pedido de demissão, acordo entre as partes ou rescisão indireta — gera consequências financeiras e documentais diferentes.",
          "Por isso, nunca assine ou considere a rescisão concluída sem antes analisar se o Termo de Rescisão do Contrato de Trabalho (TRCT) reflete fielmente o que aconteceu na prática.",
        ],
      },
      {
        heading: "Os 4 pontos indispensáveis para conferir na rescisão",
        paragraphs: [
          "Antes de dar quitação ou aceitar os valores depositados, observe atentamente quatro elementos fundamentais:",
        ],
        bullets: [
          "O motivo do desligamento registrado nos documentos oficiais;",
          "As datas de admissão, concessão do aviso-prévio e efetiva saída (incluindo a projeção do aviso-prévio indenizado);",
          "As parcelas devidas (saldo de salário, férias vencidas e proporcionais + 1/3, 13º salário proporcional, horas extras) e os descontos realizados;",
          "A regularidade de todos os depósitos mensais do FGTS e da multa rescisória (40% na dispensa sem justa causa ou 20% no acordo).",
        ],
      },
      {
        heading: "Qual é o prazo para a empresa pagar a rescisão?",
        paragraphs: [
          "De acordo com o art. 477, § 6º, da CLT, a entrega dos documentos que comprovem a comunicação da extinção contratual e o pagamento dos valores constantes do instrumento de rescisão devem ser efetuados em até 10 (dez) dias contados a partir do término do contrato.",
          "O atraso no pagamento das verbas rescisórias pode ensejar o pagamento da multa prevista no art. 477, § 8º, da CLT, em favor do trabalhador.",
        ],
      },
    ],
    checklist: [
      {
        term: "Motivo do desligamento",
        detail: "Conferir se a modalidade registrada no TRCT reflete a realidade do encerramento.",
      },
      {
        term: "Datas e projeção do aviso",
        detail: "Verificar datas de admissão, aviso-prévio (trabalhado ou indenizado) e baixa na CTPS.",
      },
      {
        term: "Parcelas e descontos",
        detail: "Analisar saldo de salário, férias + 1/3, 13º proporcional e limite legal de descontos.",
      },
      {
        term: "Prazo de 10 dias e FGTS",
        detail: "Confirmar pagamento em até 10 dias corridos e extrato analítico completo do FGTS.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li o artigo sobre Rescisão Trabalhista no seu blog e gostaria de avaliar o meu caso.",
  },
  {
    slug: "estabilidade-da-gestante-ate-quando-vai",
    category: "DIREITOS DA GESTANTE",
    title: "Estou grávida. Posso ser demitida? Até quando vai a estabilidade da gestante?",
    shortTitle: "Estabilidade da gestante: até quando vai?",
    metaTitle: "Estabilidade da Gestante: Até Quando Vai? | Dra. Michelle",
    metaDescription:
      "A gestante tem proteção contra demissão sem justa causa desde a confirmação da gravidez até 5 meses após o parto. Entenda seus direitos na gestação.",
    publishedAt: "2026-09-17",
    readingTime: "4 min de leitura",
    pillars: "Estabilidade • Licença-Maternidade • Proteção Legal",
    excerpt:
      "A descoberta da gravidez veio acompanhada do medo de perder o emprego? Entenda como funciona a proteção contra demissão sem justa causa e como contar o prazo de 5 meses após o parto.",
    directAnswer:
      "A gestante possui proteção constitucional contra a demissão sem justa causa desde a confirmação da gravidez até 5 meses após o parto. Atenção à contagem: são 5 meses contados a partir do nascimento do bebê, e não após o retorno ao trabalho. A estabilidade só não impede a demissão quando existe falta grave devidamente comprovada (justa causa).",
    sections: [
      {
        heading: "O que significa a estabilidade provisória da gestante?",
        paragraphs: [
          "Prevista no art. 10, inciso II, alínea 'b' do ADCT da Constituição Federal, a estabilidade da gestante garante que a empresa não pode encerrar o contrato de trabalho sem justa causa durante todo o período protegido.",
          "Essa garantia tem dupla finalidade: proteger a dignidade e o sustento da trabalhadora gestante e assegurar o bem-estar do nascituro nos primeiros meses de vida.",
        ],
      },
      {
        heading: "Como diferenciar Licença-Maternidade de Estabilidade?",
        paragraphs: [
          "Muitas trabalhadoras confundem os dois institutos, mas é fundamental distinguir cada direito:",
        ],
        bullets: [
          "Licença-maternidade: é o período de afastamento remunerado do trabalho (em regra, de 120 dias, podendo chegar a 180 dias em empresas cidadãs ou por norma coletiva);",
          "Estabilidade gestacional: é a garantia de manutenção do emprego contra dispensa sem justa causa, que vai da confirmação da gravidez até 5 meses após o parto;",
          "Proteção ampliada: a convenção ou o acordo coletivo da sua categoria profissional pode prever um período de estabilidade ainda maior. Vale sempre conferir as regras aplicáveis ao seu contrato.",
        ],
      },
    ],
    checklist: [
      {
        term: "Início da proteção",
        detail: "Desde a concepção/confirmação da gravidez na vigência do contrato de trabalho.",
      },
      {
        term: "Término da estabilidade",
        detail: "Até 5 meses após a data do parto (nascimento do bebê).",
      },
      {
        term: "Norma coletiva da categoria",
        detail: "Verificar se a convenção coletiva do sindicato prevê extensão adicional de estabilidade.",
      },
      {
        term: "Comunicado de demissão",
        detail: "Se recebeu aviso de dispensa na gestação, busque orientação jurídica imediatamente.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li o artigo sobre Estabilidade da Gestante no seu blog e preciso de orientação jurídica.",
  },
  {
    slug: "descobri-a-gravidez-apos-a-demissao-direitos",
    category: "DIREITOS DA GESTANTE",
    title: "Descobri a gravidez após a demissão. E agora? Perdi o direito à estabilidade?",
    shortTitle: "Descobri a gravidez após a demissão: tenho direito?",
    metaTitle: "Descobri a Gravidez Após a Demissão: Direitos | Dra. Michelle",
    metaDescription:
      "O teste deu positivo depois da demissão? Você não perde o direito à estabilidade se a concepção existia no contrato ou aviso-prévio. Saiba o que fazer.",
    publishedAt: "2026-09-22",
    readingTime: "4 min de leitura",
    pillars: "Exames • Aviso-Prévio Indenizado • Provas Documentais",
    excerpt:
      "O teste deu positivo depois da demissão? Isso não significa que você perdeu o direito à estabilidade. Entenda por que a data da concepção é o que realmente importa.",
    directAnswer:
      "Não necessariamente você perdeu o direito. O ponto principal é verificar se a gravidez já existia durante o contrato de trabalho ou se foi iniciada no curso do aviso-prévio (inclusive quando ele é indenizado). Por isso, a data em que você descobriu a gestação, sozinha, não determina se existe ou não o direito à estabilidade.",
    sections: [
      {
        heading: "O desconhecimento da gravidez no momento da demissão tira o direito?",
        paragraphs: [
          "Não. Conforme entendimento consolidado na Súmula 244, item I, do Tribunal Superior do Trabalho (TST), o desconhecimento do estado gravídico pelo empregador — ou até mesmo pela própria trabalhadora no dia da dispensa — não afasta o direito à estabilidade ou ao pagamento da indenização correspondente.",
          "Além disso, o art. 391-A da CLT expressamente assegura que a confirmação do estado de gravidez advindo no curso do contrato de trabalho, ainda que durante o prazo do aviso-prévio trabalhado ou indenizado, garante à empregada a estabilidade provisória.",
        ],
      },
      {
        heading: "O que fazer ao descobrir a gestação após o desligamento?",
        paragraphs: [
          "Para avaliar com precisão técnica as datas e as medidas cabíveis no seu caso, organize imediatamente os seguintes documentos:",
        ],
        bullets: [
          "Guarde os exames de sangue (Beta HCG) e, principalmente, os ultrassons obstétricos que indiquem a idade gestacional (semanas e dias) e a data provável da concepção;",
          "Separe o comunicado de aviso-prévio, o Termo de Rescisão (TRCT) e a Carteira de Trabalho (física ou digital);",
          "Procure orientação jurídica especializada para cruzar a linha do tempo da gestação com a data de projeção do término do contrato.",
        ],
      },
    ],
    checklist: [
      {
        term: "Ultrassom obstétrico",
        detail: "Fundamental para demonstrar tecnicamente a idade gestacional e o período da concepção.",
      },
      {
        term: "Aviso-prévio indenizado",
        detail: "O tempo do aviso-prévio indenizado integra o contrato de trabalho para todos os fins legais.",
      },
      {
        term: "Documentos da rescisão",
        detail: "Reunir TRCT, comunicado de dispensa e anotações na Carteira de Trabalho Digital.",
      },
      {
        term: "Análise jurídica ágil",
        detail: "Avaliar o cabimento de reintegração ao emprego ou indenização substitutiva.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre descobrir a gravidez após a demissão e gostaria de analisar as datas do meu caso.",
  },
  {
    slug: "horas-extras-o-que-conferir-ponto-contracheque",
    category: "DIREITO DO TRABALHO",
    title: "Horas extras: você sabe o que conferir no registro de ponto e contracheque?",
    shortTitle: "Horas extras: o que conferir no ponto e holerite",
    metaTitle: "Horas Extras: O Que Conferir no Ponto | Dra. Michelle Dutra",
    metaDescription:
      "Seu expediente termina, mas o trabalho continua? Saiba conferir cartão de ponto, adicional mínimo de 50% no contracheque e regras do banco de horas.",
    publishedAt: "2026-09-24",
    readingTime: "4 min de leitura",
    pillars: "Jornada • Registro de Ponto • Banco de Horas",
    excerpt:
      "Seu expediente termina, mas o trabalho continua? Jornada, registro de ponto e pagamento no contracheque merecem atenção redobrada do trabalhador.",
    directAnswer:
      "Para conferir suas horas extras, verifique três pontos essenciais: se o registro de ponto corresponde ao horário realmente trabalhado, se as horas extras aparecem corretamente no contracheque com adicional de, no mínimo, 50% (ou percentual maior previsto em norma coletiva) e se o banco de horas respeita as regras e os prazos legais de compensação.",
    sections: [
      {
        heading: "Os 3 pontos críticos na conferência da sua jornada",
        paragraphs: [
          "Muitas vezes o trabalhador realiza horas além da jornada contratual — seja chegando mais cedo, reduzindo o intervalo de almoço, ficando após o expediente ou respondendo demandas fora do horário — sem receber a contraprestação correta.",
        ],
        bullets: [
          "O registro de ponto corresponde ao horário realmente trabalhado? Anotações britânicas (sempre idênticas) ou proibição de registrar o horário real são irregulares;",
          "As horas extras aparecem corretamente no contracheque? Em regra, devem ser pagas com adicional de, no mínimo, 50% sobre a hora normal (ou percentual superior previsto na convenção coletiva), gerando reflexos em DSR, férias, 13º salário e FGTS;",
          "Se existe banco de horas, você consegue acompanhar o saldo e as compensações? O banco de horas exige transparência e respeito rigoroso aos prazos legais de validade.",
        ],
      },
    ],
    checklist: [
      {
        term: "Horário real vs. Ponto",
        detail: "Conferir entrada, saída e se o intervalo intrajornada (almoço) foi integralmente usufruído.",
      },
      {
        term: "Adicional mínimo de 50%",
        detail: "Verificar no holerite o pagamento das horas extras e seus reflexos nas demais verbas.",
      },
      {
        term: "Extrato do banco de horas",
        detail: "Checar se as folgas compensatórias ocorreram dentro do prazo legal estipulado.",
      },
      {
        term: "Norma coletiva",
        detail: "Conferir se o sindicato da categoria estabelece adicionais de 60%, 75% ou 100%.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre Horas Extras e Banco de Horas e gostaria de avaliar minha jornada de trabalho.",
  },
  {
    slug: "ferias-regras-prazo-pagamento-divisao",
    category: "DIREITO DO TRABALHO",
    title: "Férias: descanso também é um direito. Prazo, pagamento e duração: você conhece as regras?",
    shortTitle: "Férias: regras de prazo, pagamento e divisão",
    metaTitle: "Regras de Férias: Prazo, Pagamento e Divisão | Dra. Michelle",
    metaDescription:
      "Conheça as regras de férias na CLT: período aquisitivo, pagamento até 2 dias antes com 1/3 constitucional e divisão em até 3 períodos. Veja seus direitos.",
    publishedAt: "2026-09-28",
    readingTime: "4 min de leitura",
    pillars: "Prazo • Pagamento + 1/3 • Fracionamento",
    excerpt:
      "Férias não são um favor: descansar é um direito constitucional do trabalhador. Entenda os prazos de concessão, a antecedência do pagamento e como funciona a divisão em até 3 períodos.",
    directAnswer:
      "Em regra, após 12 meses de trabalho (período aquisitivo), o empregado adquire o direito a até 30 dias de férias, que devem ser concedidas nos 12 meses seguintes (período concessivo). O pagamento deve ocorrer até 2 dias antes do início do descanso, acrescido do adicional de 1/3 constitucional. As férias podem ser divididas em até 3 períodos, sendo um de no mínimo 14 dias corridos e os demais de no mínimo 5 dias corridos cada.",
    sections: [
      {
        heading: "Como funcionam os prazos e o pagamento das férias?",
        paragraphs: [
          "Conhecer as regras previstas na CLT ajuda o trabalhador a planejar seu descanso e a identificar eventuais irregularidades que podem inclusive gerar o direito ao pagamento em dobro:",
        ],
        bullets: [
          "Período aquisitivo e concessivo: após 12 meses de vigência do contrato, a empresa tem os 12 meses subsequentes para conceder o gozo das férias;",
          "Prazo de pagamento: a remuneração das férias, somada ao terço constitucional (1/3), deve ser quitada até 2 dias antes do início do respectivo período;",
          "Duração do descanso: pode chegar a 30 dias corridos, observadas as regras legais sobre faltas injustificadas ao longo do período aquisitivo;",
          "Divisão em até 3 períodos: desde que haja concordância do empregado, as férias podem ser fracionadas em até três períodos, sendo que um deles não poderá ser inferior a 14 dias corridos e os demais não poderão ser inferiores a 5 dias corridos, cada um.",
        ],
      },
    ],
    checklist: [
      {
        term: "Concessão em até 12 meses",
        detail: "Férias concedidas após o vencimento do período concessivo geram direito à dobra legal.",
      },
      {
        term: "Pagamento até 2 dias antes",
        detail: "Deve incluir o salário do período acrescido de 1/3 constitucional.",
      },
      {
        term: "Fracionamento válido",
        detail: "Exige concordância do trabalhador, respeitando 1 período ≥ 14 dias e os demais ≥ 5 dias.",
      },
      {
        term: "Aviso de férias",
        detail: "A comunicação das férias deve ser feita por escrito com antecedência mínima de 30 dias.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre as regras de Férias no blog e gostaria de tirar uma dúvida sobre o meu contrato.",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
