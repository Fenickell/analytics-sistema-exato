const pages = {
  backups: {
    eyebrow: "Controle diario",
    title: "Backups de clientes",
    description: "Acompanhamento de clientes com backup concluido, pendente ou exigindo revisao.",
    tone: "warning",
    source: "Origem prevista: PowerBI / integracao futura",
    metrics: [
      { label: "Clientes monitorados", value: "24", detail: "base ativa" },
      { label: "Backups OK", value: "19", detail: "sem acao" },
      { label: "Pendentes", value: "4", detail: "acompanhar hoje" },
      { label: "Criticos", value: "1", detail: "prioridade alta" }
    ],
    alerts: [
      { client: "AFC AUTOMATICOS", status: "Pendente", severity: "high", detail: "Backup nao localizado na rotina da madrugada.", time: "08:12" },
      { client: "UNIFRANCE", status: "Em revisao", severity: "medium", detail: "Backup gerado com atraso e aguardando conferencia.", time: "08:37" },
      { client: "REAL PARIS", status: "OK", severity: "low", detail: "Ultimo backup confirmado com sucesso.", time: "07:55" },
      { client: "FORTALEZA", status: "Pendente", severity: "medium", detail: "Aguardando confirmacao do arquivo final.", time: "09:04" },
      { client: "GESAN", status: "OK", severity: "low", detail: "Rotina concluida dentro do horario.", time: "07:42" }
    ]
  },
  pmlsync: {
    eyebrow: "Sincronizador",
    title: "PmlSync",
    description: "Visao diaria dos sincronizadores que precisam rodar sem interrupcao nos clientes.",
    tone: "success",
    source: "Origem prevista: alerta de e-mail Outlook",
    metrics: [
      { label: "Clientes observados", value: "18", detail: "com rotina ativa" },
      { label: "Rodaram hoje", value: "16", detail: "confirmados" },
      { label: "Sem execucao", value: "1", detail: "acionar cliente" },
      { label: "Aguardando leitura", value: "1", detail: "validar alerta" }
    ],
    alerts: [
      { client: "CHAMA PLANTAS", status: "Sem execucao", severity: "high", detail: "Alerta recebido indicando que o sincronizador nao rodou hoje.", time: "08:21" },
      { client: "AFC AUTOMATICOS", status: "OK", severity: "low", detail: "Sincronizacao diaria confirmada.", time: "07:50" },
      { client: "UNIFRANCE", status: "OK", severity: "low", detail: "Processo executado sem erro.", time: "08:03" },
      { client: "NOVA ROTA", status: "Aguardando", severity: "medium", detail: "Sem evento conclusivo no exemplo da V1.", time: "09:10" }
    ]
  },
  "mercado-livre": {
    eyebrow: "Integracao",
    title: "Mercado Livre",
    description: "Monitoramento de falhas de integracao com pedidos, anuncios ou comunicacao com marketplace.",
    tone: "danger",
    source: "Origem prevista: alerta de e-mail Outlook",
    metrics: [
      { label: "Integracoes ativas", value: "12", detail: "clientes" },
      { label: "Sem falhas", value: "9", detail: "operacao normal" },
      { label: "Falhas abertas", value: "3", detail: "tratar hoje" },
      { label: "Impacto alto", value: "1", detail: "prioridade" }
    ],
    alerts: [
      { client: "REAL PARIS", status: "Falha critica", severity: "high", detail: "Erro de comunicacao com Mercado Livre em pedidos recentes.", time: "08:45" },
      { client: "FORTALEZA", status: "Falha", severity: "medium", detail: "Integracao instavel e aguardando nova tentativa.", time: "09:02" },
      { client: "GESAN", status: "Falha", severity: "medium", detail: "Mensagem de erro recebida no alerta de exemplo.", time: "09:18" },
      { client: "UNIFRANCE", status: "OK", severity: "low", detail: "Sem alertas no periodo da manha.", time: "08:00" }
    ]
  },
  transferencias: {
    eyebrow: "Operacao",
    title: "Transferencias pendentes",
    description: "Fila de transferencias que precisam ser identificadas, cobradas ou acompanhadas pela equipe.",
    tone: "warning",
    source: "Origem prevista: alerta de e-mail Outlook",
    metrics: [
      { label: "Pendencias do dia", value: "7", detail: "total" },
      { label: "Clientes afetados", value: "5", detail: "na fila" },
      { label: "Prioridade alta", value: "2", detail: "acao imediata" },
      { label: "Resolvidas", value: "4", detail: "simulado" }
    ],
    alerts: [
      { client: "AFC AUTOMATICOS", status: "Pendente", severity: "high", detail: "Transferencia aguardando validacao desde o inicio da manha.", time: "08:06" },
      { client: "FORTALEZA", status: "Pendente", severity: "high", detail: "Cliente com transferencia parada e impacto operacional.", time: "08:52" },
      { client: "CHAMA PLANTAS", status: "Acompanhar", severity: "medium", detail: "Transferencia em fila, sem confirmacao final.", time: "09:22" },
      { client: "UNIFRANCE", status: "Resolvida", severity: "low", detail: "Pendencia baixada no acompanhamento diario.", time: "09:41" }
    ]
  },
  certificados: {
    eyebrow: "Vencimentos",
    title: "Certificados digitais",
    description: "Visao de certificados proximos ao vencimento, com destaque para dias nao uteis.",
    tone: "danger",
    source: "Origem prevista: dashboard interno / integracao futura",
    metrics: [
      { label: "Proximos 30 dias", value: "14", detail: "certificados" },
      { label: "Vencem em ate 7 dias", value: "5", detail: "urgentes" },
      { label: "Dia nao util", value: "3", detail: "sabado, domingo ou feriado" },
      { label: "Clientes avisados", value: "8", detail: "simulado" }
    ],
    alerts: [
      { client: "GESAN", status: "Vence em domingo", severity: "high", detail: "Vencimento simulado em dia nao util. Antecipar contato.", time: "10/06" },
      { client: "REAL PARIS", status: "Vence em 4 dias", severity: "high", detail: "Cliente precisa confirmar renovacao.", time: "20/05" },
      { client: "AFC AUTOMATICOS", status: "Vence em sabado", severity: "medium", detail: "Recomendado antecipar agenda.", time: "30/05" },
      { client: "UNIFRANCE", status: "Avisado", severity: "low", detail: "Contato registrado no acompanhamento.", time: "28/05" },
      { client: "CHAMA PLANTAS", status: "Monitorar", severity: "medium", detail: "Vencimento proximo com retorno pendente.", time: "05/06" }
    ]
  }
};

const navItems = [
  ["overview", "Visao geral", "./"],
  ["backups", "Backups", "backups/"],
  ["pmlsync", "PmlSync", "pmlsync/"],
  ["mercado-livre", "Mercado Livre", "mercado-livre/"],
  ["transferencias", "Transferencias", "transferencias/"],
  ["certificados", "Certificados", "certificados/"]
];

const pageKey = document.body.dataset.page || "overview";
const isNested = pageKey !== "overview";
const basePath = isNested ? "../" : "";

function normalizeLink(path) {
  if (path === "./") return basePath || "./";
  return `${basePath}${path}`;
}

function severityLabel(severity) {
  return {
    high: "Alta",
    medium: "Media",
    low: "Baixa"
  }[severity];
}

function topicStatus(topic) {
  const high = topic.alerts.filter((item) => item.severity === "high").length;
  const medium = topic.alerts.filter((item) => item.severity === "medium").length;

  if (high > 0) return { label: "Atencao critica", className: "danger" };
  if (medium > 0) return { label: "Acompanhar", className: "warning" };
  return { label: "Operacao normal", className: "success" };
}

function renderShell(content) {
  const nav = navItems.map(([key, label, path]) => {
    const active = key === pageKey ? "active" : "";
    return `<a class="${active}" href="${normalizeLink(path)}">${label}</a>`;
  }).join("");

  return `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="${normalizeLink("./")}" aria-label="Analytics Sistema Exato">
          <span class="brand-logo">
            <img src="${basePath}assets/images/pml-logo.jpg" alt="PML">
          </span>
          <span>
            <strong>Analytics Sistema Exato</strong>
            <small>Painel diario de suporte</small>
          </span>
        </a>
        <nav class="nav" aria-label="Navegacao principal">${nav}</nav>
        <button class="theme-toggle" type="button" aria-label="Alternar modo escuro" title="Alternar modo escuro">
          <span class="theme-icon">◐</span>
        </button>
      </header>
      ${content}
    </div>
  `;
}

function renderOverview() {
  const cards = Object.entries(pages).map(([key, topic]) => {
    const status = topicStatus(topic);
    const pending = topic.alerts.filter((item) => item.severity !== "low").length;

    return `
      <a class="overview-card ${topic.tone}" href="${normalizeLink(`${key}/`)}">
        <div>
          <span class="pill ${status.className}">${status.label}</span>
          <h2>${topic.title}</h2>
          <p>${topic.description}</p>
        </div>
        <footer>
          <strong>${pending}</strong>
          <span>pontos para acompanhar</span>
        </footer>
      </a>
    `;
  }).join("");

  return renderShell(`
    <main class="page page-overview">
      <section class="hero-panel">
        <div>
          <h1>Monitoramento diario dos pontos criticos do suporte</h1>
        </div>
        <aside class="today-card">
          <span>Status geral</span>
          <strong>Acompanhar</strong>
          <small>Dados demonstrativos</small>
        </aside>
      </section>
      <section class="overview-grid" aria-label="Topicos monitorados">${cards}</section>
    </main>
  `);
}

function renderTopic(topic) {
  const status = topicStatus(topic);
  const metrics = topic.metrics.map((metric) => `
    <article class="metric-card">
      <span>${metric.label}</span>
      <strong>${metric.value}</strong>
      <small>${metric.detail}</small>
    </article>
  `).join("");

  const rows = topic.alerts.map((item) => `
    <tr>
      <td>
        <strong>${item.client}</strong>
        <small>${item.detail}</small>
      </td>
      <td><span class="status-tag ${item.severity}">${item.status}</span></td>
      <td>${severityLabel(item.severity)}</td>
      <td>${item.time}</td>
    </tr>
  `).join("");

  return renderShell(`
    <main class="page topic-page ${topic.tone}">
      <section class="topic-hero">
        <div>
          <span class="eyebrow">${topic.eyebrow}</span>
          <h1>${topic.title}</h1>
          <p>${topic.description}</p>
        </div>
        <aside class="status-panel ${status.className}">
          <span>Status do topico</span>
          <strong>${status.label}</strong>
          <small>${topic.source}</small>
        </aside>
      </section>

      <section class="metric-grid" aria-label="Indicadores">${metrics}</section>

      <section class="work-panel">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Fila de acompanhamento</span>
            <h2>Clientes e eventos de exemplo</h2>
          </div>
          <span class="updated">Atualizado hoje, 09:45</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Status</th>
                <th>Prioridade</th>
                <th>Referencia</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>
    </main>
  `);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("analytics-theme", theme);
}

function bootThemeToggle() {
  const savedTheme = localStorage.getItem("analytics-theme") || "light";
  applyTheme(savedTheme);

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

const app = document.querySelector("#app");
app.innerHTML = pageKey === "overview" ? renderOverview() : renderTopic(pages[pageKey]);
bootThemeToggle();
