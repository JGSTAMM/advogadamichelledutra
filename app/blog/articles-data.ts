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
    publishedAt: "2026-10-18",
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
    publishedAt: "2026-10-21",
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
    publishedAt: "2026-10-24",
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
    publishedAt: "2026-10-27",
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
    publishedAt: "2026-10-30",
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
  {
    slug: "salario-por-fora-reflexos-verbas-rescisorias",
    category: "DIREITO DO TRABALHO",
    title: "Salário pago por fora: quais os reflexos nas verbas rescisórias e no FGTS?",
    shortTitle: "Salário pago por fora: reflexos e direitos",
    metaTitle: "Salário Pago Por Fora: Seus Direitos | Dra. Michelle Dutra",
    metaDescription:
      "Recebia parte do salário por fora em espécie ou Pix? Entenda como integrar esses valores no 13º, férias, FGTS e rescisão. Dra. Michelle Dutra.",
    publishedAt: "2026-11-02",
    readingTime: "4 min de leitura",
    pillars: "Salário Oficioso • Integração • Provas Documentais",
    excerpt:
      "Receber parte do salário em dinheiro vivo ou transferências paralelas prejudica aposentadoria, FGTS, férias e rescisão. Entenda como comprovar e reaver a diferença.",
    directAnswer:
      "O pagamento de salário 'por fora' (sem constar no contracheque) é prática ilícita que prejudica o trabalhador em todas as verbas: férias com 1/3, 13º salário, depósitos do FGTS, multa de 40%, horas extras e até benefícios previdenciários. É possível requerer judicialmente o reconhecimento e a integração dessa remuneração para cobrar todas as diferenças não pagas.",
    sections: [
      {
        heading: "Como o salário por fora prejudica o trabalhador?",
        paragraphs: [
          "Quando a empresa paga um valor fixo ou comissões à margem do holerite (seja em espécie, Pix de terceiros ou bonificações disfarçadas), todos os direitos trabalhistas calculados com base no salário contratual sofrem defasagem imediata.",
          "O empregado deixa de receber os reflexos devidos no descanso semanal remunerado (DSR), nas férias com terço constitucional, no décimo terceiro salário e na base de incidência do FGTS com a multa rescisória de 40%.",
        ],
      },
      {
        heading: "Quais provas são válidas para comprovar o pagamento oficioso?",
        paragraphs: [
          "Para comprovar que havia remuneração superior à declarada na CTPS, o trabalhador pode se respaldar em diversos meios de prova admitidos na Justiça do Trabalho:",
        ],
        bullets: [
          "Extratos bancários que comprovem depósitos regulares via Pix, TED ou dinheiro em datas coincidentes com o pagamento salarial;",
          "Mensagens de WhatsApp, e-mails ou anotações internas da gerência indicando metas, premiações e valores combinados;",
          "Planilhas financeiras de controle de comissões ou produção;",
          "Prova testemunhal de colegas de trabalho que vivenciam a mesma rotina de remuneração paralela.",
        ],
      },
    ],
    checklist: [
      {
        term: "Extratos bancários completos",
        detail: "Reunir comprovantes de transferências bancárias e depósitos habituais.",
      },
      {
        term: "Conversas e mensagens",
        detail: "Salvar prints de diálogos combinando percentuais de comissão ou valores adicionais.",
      },
      {
        term: "Base do FGTS",
        detail: "Checar se o depósito mensal de 8% foi calculado apenas sobre o piso do contracheque.",
      },
      {
        term: "Prazo prescricional",
        detail: "O trabalhador pode pleitear os últimos 5 anos de contrato na Justiça do Trabalho.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre Salário Pago por Fora e gostaria de avaliar minhas provas e diferenças rescisórias.",
  },
  {
    slug: "trabalho-sem-carteira-assinada-direitos-vinculo",
    category: "DIREITO DO TRABALHO",
    title: "Trabalho sem carteira assinada: como comprovar e reconhecer o vínculo de emprego",
    shortTitle: "Trabalho sem carteira: como reconhecer o vínculo",
    metaTitle: "Trabalho Sem Carteira Assinada: Direitos | Dra. Michelle",
    metaDescription:
      "Trabalhou sem registro na CTPS? Descubra como comprovar o vínculo de emprego e cobrar FGTS, 13º, férias e rescisão. Dra. Michelle Dutra.",
    publishedAt: "2026-11-04",
    readingTime: "5 min de leitura",
    pillars: "Vínculo Empregatício • CLT • Provas de Subordinação",
    excerpt:
      "Trabalhar sem a carteira assinada priva o trabalhador de segurança social e direitos fundamentais. Saiba quais são os 4 requisitos da CLT e como formalizar a relação.",
    directAnswer:
      "Trabalhar sem carteira assinada não retira os seus direitos trabalhistas. Se houver pessoalidade, habitualidade, onerosidade (salário) e subordinação jurídica, a relação de emprego está plenamente configurada segundo o art. 3º da CLT. O trabalhador tem direito à anotação retroativa da CTPS e ao recebimento integral de férias, 13º salário, aviso-prévio, FGTS e seguro-desemprego.",
    sections: [
      {
        heading: "Os 4 requisitos legais para caracterizar a relação de emprego",
        paragraphs: [
          "Para que a Justiça do Trabalho reconheça a obrigação de assinar a carteira e pagar os haveres trabalhistas, é indispensável demonstrar quatro pilares:",
        ],
        bullets: [
          "Habitualidade: prestar serviços de maneira contínua, com dias ou rotinas fixas na semana;",
          "Subordinação: cumprir ordens, regras de conduta, diretrizes e horários estabelecidos pela chefia;",
          "Onerosidade: trabalhar mediante o pagamento de uma contraprestação financeira (salário);",
          "Pessoalidade: o serviço deve ser executado pelo próprio trabalhador, sem que ele possa enviar outra pessoa em seu lugar.",
        ],
      },
      {
        heading: "O que a empresa é obrigada a pagar ao ser condenada?",
        paragraphs: [
          "Com o reconhecimento judicial do vínculo, o empregador deve assinar a Carteira de Trabalho Digital com a data de admissão real e pagar todas as verbas sonegadas durante o pacto laboral:",
          "Isso engloba todos os depósitos mensais de FGTS com multa rescisória, décimos terceiros salários de cada ano trabalhado, férias integrais com adicional de 1/3, além de eventuais adicionais de insalubridade, periculosidade ou horas extras.",
        ],
      },
    ],
    checklist: [
      {
        term: "Uniforme e crachá",
        detail: "Fotos no ambiente de trabalho ou uso de identificação visual da empresa.",
      },
      {
        term: "Ordens e mensagens",
        detail: "Áudios e mensagens de chefes determinando tarefas, horários e cobranças de serviço.",
      },
      {
        term: "Registros financeiros",
        detail: "Comprovantes de recebimento de salário transferido pela empresa ou sócios.",
      },
      {
        term: "Testemunhas",
        detail: "Clientes, fornecedores ou colegas que presenciavam a prestação diária do trabalho.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre Trabalho Sem Carteira Assinada e preciso de ajuda para reconhecer meu vínculo.",
  },
  {
    slug: "inventario-extrajudicial-cartorio-requisitos-prazos",
    category: "FAMÍLIA E SUCESSÕES",
    title: "Inventário em cartório (extrajudicial): requisitos, documentos e prazos legais",
    shortTitle: "Inventário em cartório: requisitos e prazos",
    metaTitle: "Inventário Extrajudicial em Cartório | Dra. Michelle Dutra",
    metaDescription:
      "Saiba como fazer o inventário em cartório de forma rápida e segura: requisitos, ausência de litígio, partilha de bens e prazos legais do ITCMD.",
    publishedAt: "2026-11-06",
    readingTime: "4 min de leitura",
    pillars: "Cartório • Escritura Pública • Agilidade na Partilha",
    excerpt:
      "O inventário extrajudicial permite transferir bens e regularizar herança em poucas semanas, sem necessidade de processo judicial demorado. Conheça as condições legais.",
    directAnswer:
      "O inventário extrajudicial é realizado diretamente no Cartório de Notas por meio de escritura pública, desde que todos os herdeiros sejam maiores e capazes, haja total concordância sobre a partilha de bens e inexista testamento válido (salvo autorização judicial prévia em alguns estados). É obrigatória a presença de advogado constituído para orientar as partes e redigir a minuta.",
    sections: [
      {
        heading: "Quais são as vantagens do inventário em cartório?",
        paragraphs: [
          "Diferente do inventário judicial, que pode se estender por anos nos fóruns em razão da sobrecarga do Judiciário, o procedimento em cartório é notavelmente mais ágil, seguro e econômico.",
          "Em poucas semanas após a apuração e quitação do imposto sobre herança (ITCMD), a escritura pública definitiva é lavrada, servindo de título para transferir imóveis no Registro de Imóveis, veículos no Detran e saldos em contas bancárias.",
        ],
      },
      {
        heading: "Atenção ao prazo legal de 60 dias para abertura",
        paragraphs: [
          "O Código de Processo Civil (art. 611) estabelece que o processo de inventário e partilha deve ser instaurado dentro de 2 (dois) meses a contar da data da abertura da sucessão (falecimento).",
        ],
        bullets: [
          "O desrespeito ao prazo de 60 dias pode acarretar multa sobre o imposto estadual (ITCMD), onerando a partilha;",
          "Mesmo que faltem documentos, a instauração tempestiva evita penalidades fiscais severas;",
          "A assessoria jurídica especializada calcula o imposto com exatidão e planeja a forma mais eficiente de divisão do patrimônio.",
        ],
      },
    ],
    checklist: [
      {
        term: "Capacidade e consenso",
        detail: "Todos os herdeiros devem ser maiores, capazes e estar de pleno acordo sobre os bens.",
      },
      {
        term: "Certidão de óbito e certidões",
        detail: "Reunir certidão de óbito, RG/CPF das partes, certidões negativas fiscais e de imóveis.",
      },
      {
        term: "Prazo de 60 dias (ITCMD)",
        detail: "Iniciar o procedimento em até 60 dias do óbito para evitar multas estaduais.",
      },
      {
        term: "Advocacia obrigatória",
        detail: "A lei exige assistência de advogado, que pode ser o mesmo para todos os herdeiros.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre Inventário em Cartório e gostaria de informações para regularizar a partilha da minha família.",
  },
  {
    slug: "partilha-de-bens-heranca-como-evitar-conflitos",
    category: "FAMÍLIA E SUCESSÕES",
    title: "Partilha de bens e herança: como evitar conflitos familiares e proteger o patrimônio",
    shortTitle: "Partilha de bens na herança: prevenção de conflitos",
    metaTitle: "Partilha de Bens e Herança sem Conflitos | Dra. Michelle",
    metaDescription:
      "Planejamento sucessório, meação do cônjuge e divisão justa de bens da herança. Entenda como prevenir litígios familiares com a Dra. Michelle Dutra.",
    publishedAt: "2026-11-07",
    readingTime: "5 min de leitura",
    pillars: "Sucessão • Meação do Cônjuge • Planejamento",
    excerpt:
      "A perda de um familiar não precisa ser acompanhada de desgastes patrimoniais. Entenda como funciona a legítima, a meação do cônjuge e os caminhos para uma partilha equilibrada.",
    directAnswer:
      "Para evitar conflitos na partilha de bens, o primeiro passo é distinguir com clareza o que é meação (parte do cônjuge/companheiro conforme o regime de bens) do que é herança (patrimônio deixado pelo falecido a ser dividido entre os herdeiros necessários). O planejamento sucessório e o diálogo técnico respaldado por assessoria jurídica neutra e especializada garantem segurança e preservação das relações familiares.",
    sections: [
      {
        heading: "A diferença vital entre Meação e Herança",
        paragraphs: [
          "Uma das maiores fontes de desentendimento entre herdeiros é a incompreensão do regime matrimonial de bens:",
          "A meação é a metade do patrimônio comum pertencente por direito próprio ao cônjuge ou companheiro sobrevivente. Ela não entra no cálculo da herança. Já a herança é a parcela dos bens deixada pelo de cujus para transmissão aos filhos, pais ou cônjuge concorrente, conforme determina a ordem de vocação hereditária do Código Civil.",
        ],
      },
      {
        heading: "Como conduzir uma divisão patrimonial pacífica?",
        paragraphs: [
          "Para preservar a integridade do patrimônio e evitar que bens sofram desvalorização enquanto disputas tramitam por décadas na Justiça:",
        ],
        bullets: [
          "Promova avaliações imobiliárias profissionais e atualizadas de cada bem do espólio;",
          "Compense eventuais desníveis com tornas financeiras quando um herdeiro fica com um bem indivisível;",
          "Priorize a resolução amigável, que reduz drasticamente despesas processuais e custas judiciais;",
          "Considere instrumentos de planejamento sucessório prévio para resguardar a vontade do titular do patrimônio.",
        ],
      },
    ],
    checklist: [
      {
        term: "Regime de casamento",
        detail: "Analisar certidão de casamento e pacto antenupcial para apurar a exata meação.",
      },
      {
        term: "Herdeiros necessários",
        detail: "Respeitar a legítima (50% do patrimônio pertencente aos descendentes/ascendentes/cônjuge).",
      },
      {
        term: "Avaliação equitativa",
        detail: "Utilizar critérios técnicos de valor de mercado para todos os imóveis e ativos.",
      },
      {
        term: "Acordo formalizado",
        detail: "Redigir termo detalhado de partilha evitando futuras alegações de nulidade.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre Partilha de Bens e Herança e gostaria de agendar uma consulta sobre o patrimônio da minha família.",
  },
  {
    slug: "contratos-fies-juros-cobrancas-indevidas-direitos",
    category: "ASSESSORIA EM FIES",
    title: "Contratos do FIES: como agir diante de juros abusivos, amortização e cobranças",
    shortTitle: "Contratos do FIES: juros e cobranças indevidas",
    metaTitle: "Assessoria Jurídica em Contratos FIES | Dra. Michelle Dutra",
    metaDescription:
      "Problemas na amortização, fiador, juros ou cobranças do FIES? Entenda as vias administrativas e judiciais para renegociar o financiamento estudantil.",
    publishedAt: "2026-11-08",
    readingTime: "4 min de leitura",
    pillars: "Financiamento Estudantil • Amortização • Renegociação",
    excerpt:
      "Concluiu a faculdade e o saldo devedor do FIES se tornou impagável ou sofreu cobranças inesperadas? Conheça os mecanismos legais de renegociação e defesa do financiado.",
    directAnswer:
      "Estudantes e graduados vinculados ao FIES (Financiamento Estudantil) frequentemente enfrentam inconsistências no cálculo da fase de amortização, exigências desproporcionais sobre fiadores ou cobranças que extrapolam a capacidade de pagamento. A legislação federal prevê faixas de renegociação especial com abatimentos substanciais, além da possibilidade de revisão de cláusulas abusivas perante as instituições financeiras operadoras.",
    sections: [
      {
        heading: "Quais são as principais controvérsias nos contratos do FIES?",
        paragraphs: [
          "O programa de financiamento estudantil é regido por normas e portarias específicas do FNDE e do MEC. Na prática, no entanto, muitos estudantes se deparam com entraves que comprometem seu início profissional:",
        ],
        bullets: [
          "Dificuldades no cálculo e na carência da fase de amortização após a conclusão da graduação;",
          "Negativação indevida do nome do estudante ou de seus garantidores (fiadores) no SPC/Serasa;",
          "Inconsistências em aditamentos de renovação ou transferência de curso/instituição;",
          "Dúvidas sobre o enquadramento em programas governamentais de desconto e anistia parcial de dívidas.",
        ],
      },
      {
        heading: "O que fazer se a parcela mensal for incompatível com sua renda?",
        paragraphs: [
          "Antes de incorrer em inadimplência e comprometer o histórico de crédito, é fundamental avaliar o contrato e o extrato de evolução da dívida emitido pelo banco operador (Caixa Econômica Federal ou Banco do Brasil).",
          "A análise jurídica especializada verifica se houve anatocismo (cobrança indevida de juros sobre juros), aplicação correta dos índices contratuais e se o formando reúne os requisitos legais para readequação do plano de pagamento.",
        ],
      },
    ],
    checklist: [
      {
        term: "Contrato e aditamentos",
        detail: "Reunir o contrato original assinado no banco e todos os termos de aditamento do SisFIES.",
      },
      {
        term: "Extrato de evolução da dívida",
        detail: "Solicitar junto à agência o demonstrativo detalhado de parcelas e juros cobrados.",
      },
      {
        term: "Proteção aos fiadores",
        detail: "Verificar a legalidade de exigências patrimoniais impostas aos garantidores do contrato.",
      },
      {
        term: "Programas de renegociação",
        detail: "Analisar o cabimento de descontos previstos em leis federais recentes de repactuação.",
      },
    ],
    whatsappMessage:
      "Olá, Dra. Michelle! Li seu artigo sobre Contratos do FIES e preciso de assessoria jurídica especializada para revisar meu financiamento.",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
