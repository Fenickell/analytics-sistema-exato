const pages = {
  backups: {
    title: "Backups de clientes",
    description: "Acompanhamento de clientes com backup concluido, pendente ou exigindo revisao.",
    overviewObservation: "Clientes com mais de 1 dia sem backup devem ser tratados primeiro.",
    tone: "warning",
    source: "PowerBI / integracao futura",
    alerts: [
      { id: "backup-afc", client: "AFC AUTOMATICOS", status: "Falha nao solucionada", severity: "high", detail: "Backup nao localizado na rotina da madrugada.", lastBackup: "16/05/2026 23:40", daysWithoutBackup: 2, observation: "Verificar rotina no servidor do cliente e confirmar arquivo final." },
      { id: "backup-unifrance", client: "UNIFRANCE", status: "Em revisao", severity: "medium", detail: "Backup gerado com atraso e aguardando conferencia.", lastBackup: "18/05/2026 02:18", daysWithoutBackup: 0, observation: "Analista validando se o atraso afetou a integridade do backup." },
      { id: "backup-fortaleza", client: "FORTALEZA", status: "Falha nao solucionada", severity: "high", detail: "Aguardando confirmacao do arquivo final.", lastBackup: "13/05/2026 11:59", daysWithoutBackup: 4, observation: "Cobrar retorno do cliente e revisar pasta de destino." },
      { id: "backup-chama-plantas", client: "CHAMA PLANTAS", status: "Em revisao", severity: "medium", detail: "Arquivo encontrado, mas ainda sem confirmacao de conclusao.", lastBackup: "18/05/2026 03:12", daysWithoutBackup: 0, observation: "Conferir tamanho do arquivo antes de baixar a pendencia." }
    ]
  },
  pmlsync: {
    title: "PmlSync",
    description: "Visao diaria dos sincronizadores que precisam rodar sem interrupcao nos clientes.",
    overviewObservation: "Validar alertas recebidos por e-mail e confirmar execucao diaria.",
    tone: "success",
    source: "Alerta de e-mail Outlook",
    alerts: [
      { client: "CHAMA PLANTAS", status: "Sem execucao", severity: "high", detail: "Alerta recebido indicando que o sincronizador nao rodou hoje.", time: "08:21" },
      { client: "AFC AUTOMATICOS", status: "OK", severity: "low", detail: "Sincronizacao diaria confirmada.", time: "07:50" },
      { client: "UNIFRANCE", status: "OK", severity: "low", detail: "Processo executado sem erro.", time: "08:03" },
      { client: "NOVA ROTA", status: "Aguardando", severity: "medium", detail: "Sem evento conclusivo no exemplo da V1.", time: "09:10" }
    ]
  },
  "mercado-livre": {
    title: "Mercado Livre",
    description: "Monitoramento de falhas de integracao com pedidos, anuncios ou marketplace.",
    overviewObservation: "Falhas de integracao precisam ser acompanhadas ate normalizar pedidos.",
    tone: "danger",
    source: "Alerta de e-mail Outlook",
    alerts: [
      { client: "REAL PARIS", status: "Falha critica", severity: "high", detail: "Erro de comunicacao com Mercado Livre em pedidos recentes.", time: "08:45" },
      { client: "FORTALEZA", status: "Falha", severity: "medium", detail: "Integracao instavel e aguardando nova tentativa.", time: "09:02" },
      { client: "GESAN", status: "Falha", severity: "medium", detail: "Mensagem de erro recebida no alerta de exemplo.", time: "09:18" },
      { client: "UNIFRANCE", status: "OK", severity: "low", detail: "Sem alertas no periodo da manha.", time: "08:00" }
    ]
  },
  transferencias: {
    title: "Transferencias pendentes",
    description: "Fila de transferencias que precisam ser acompanhadas pela equipe.",
    overviewObservation: "Acompanhar clientes com transferencia parada e registrar retorno.",
    tone: "warning",
    source: "Alerta de e-mail Outlook",
    alerts: [
      { client: "AFC AUTOMATICOS", status: "Pendente", severity: "high", detail: "Transferencia aguardando validacao desde o inicio da manha.", time: "08:06" },
      { client: "FORTALEZA", status: "Pendente", severity: "high", detail: "Cliente com transferencia parada e impacto operacional.", time: "08:52" },
      { client: "CHAMA PLANTAS", status: "Acompanhar", severity: "medium", detail: "Transferencia em fila, sem confirmacao final.", time: "09:22" },
      { client: "UNIFRANCE", status: "Resolvida", severity: "low", detail: "Pendencia baixada no acompanhamento diario.", time: "09:41" }
    ]
  },
  certificados: {
    title: "Certificados Digitais",
    description: "Lista de certificados proximos ao vencimento.",
    tone: "danger",
    source: "Dashboard interno / integracao futura",
    alerts: []
  }
};

const sidebarSections = [
  { label: "Admin", icon: "ADM", items: [] },
  { label: "Servidores", icon: "SRV", items: [] },
  {
    label: "Exato",
    icon: "EX",
    items: [
      ["certificados", "Certificados Digitais", "certificados/"],
      ["overview", "Painel Analytics", "./"],
      ["backups", "Backups de clientes", "backups/"],
      ["pmlsync", "PmlSync", "pmlsync/"],
      ["mercado-livre", "Mercado Livre", "mercado-livre/"],
      ["transferencias", "Transferencias", "transferencias/"]
    ]
  },
  { label: "Aplicativo", icon: "APP", items: [] },
  { label: "Controle de Acessos", icon: "ACC", items: [] },
  { label: "Graficos", icon: "GRA", items: [] },
  { label: "Api Exato Core", icon: "API", items: [] },
  { label: "Cadastro de Versao", icon: "CAD", items: [] },
  { label: "Controle de Versao", icon: "VER", items: [] },
  { label: "Tutoriais", icon: "TUT", items: [] },
  { label: "Gerenciamento de Versoes", icon: "GER", items: [] }
];

const certificateRows = [
  { cnpj: "50688150000108", razao: "GRUPO RP PECAS AUT...", fantasia: "GRUPO RP", serial: "790A18529ABEACBBAE4C...", identificador: "59d4651c-dbbe-494e-a4e5-99abbf187efa", tipo: "A1", vencimento: "19/05/2026", observacao: "Avisado Freud - Chamado ...", nonBusinessDay: false },
  { cnpj: "13705764000124", razao: "W IMPORTS COMERCIO...", fantasia: "W IMPORTS", serial: "6B68250519594578", identificador: "74c77c97-56af-46a0-8079-b8f3408cd23f", tipo: "A1", vencimento: "19/05/2026", observacao: "Avisado Rose - Chamado 3...", nonBusinessDay: false },
  { cnpj: "18456234000103", razao: "FW COM DE MAT ELET ...", fantasia: "Conskit Casa e Constru...", serial: "3D07C7FD1B3BD509", identificador: "9c6b97ff-edcc-44c8-9628-bc133393b9f1", tipo: "A1", vencimento: "19/05/2026", observacao: "Avisado Fabio - Chamado 3...", nonBusinessDay: false },
  { cnpj: "60826721000187", razao: "MOUSTACHE S PARTS L...", fantasia: "MOUSTACHE S PARTS", serial: "626525052152633C", identificador: "336445e0-4cfb-4663-a5db-1cbdfe002489", tipo: "A1", vencimento: "21/05/2026", observacao: "Avisado Bianca - Chamado ...", nonBusinessDay: false },
  { cnpj: "22085289000121", razao: "ALEXANDRE MULTIMA...", fantasia: "ALEXANDRE MULTIMA...", serial: "70BDF0D92A7FBF3F", identificador: "5787705c-544f-4bdb-8223-49b33926a4b7", tipo: "A1", vencimento: "22/05/2026", observacao: "Avisado Alexandre - Chama...", nonBusinessDay: false },
  { cnpj: "68468750000126", razao: "Plano Espaco Forro & D...", fantasia: "Plano Espaco Forro & D...", serial: "45869689CEEE92AE5AD9...", identificador: "d8583c65-c0d7-4d81-8382-7c506648e46a", tipo: "A1", vencimento: "22/05/2026", observacao: "Avisado Roseli - Chamado ...", nonBusinessDay: false },
  { cnpj: "30393265000168", razao: "YID ITAQUERA COMERC...", fantasia: "UNIDADE SHOPPING IT...", serial: "0211DF084F9261DA09103...", identificador: "122c50ce-79c5-48ae-9836-53bf5ea3108f", tipo: "A1", vencimento: "24/05/2026", observacao: "Avisado Marcos - Chamado...", nonBusinessDay: true },
  { cnpj: "50973810000100", razao: "PLANETA LUA COMERC...", fantasia: "PLANETA LUA", serial: "542225052334354C", identificador: "122c50ce-79c5-48ae-9836-53bf5ea3108f", tipo: "A1", vencimento: "26/05/2026", observacao: "Aguardando contato", nonBusinessDay: false },
  { cnpj: "12911220000156", razao: "MARCIO ANTONIO ALV...", fantasia: "MTL AUTO PECAS", serial: "00A271E126837184C94DEA", identificador: "122c50ce-79c5-48ae-9836-53bf5ea3108f", tipo: "A1", vencimento: "28/05/2026", observacao: "Avisado por e-mail", nonBusinessDay: false },
  { cnpj: "60290752000166", razao: "NSA COMERCIAL LTDA", fantasia: "NSA COMERCIAL SP", serial: "4E292505285850F6", identificador: "74c77c97-56af-46a0-8079-b8f3408cd23f", tipo: "A1", vencimento: "28/05/2026", observacao: "Sem retorno do cliente", nonBusinessDay: false }
];

const pageKey = document.body.dataset.page || "overview";
const isNested = pageKey !== "overview";
const basePath = isNested ? "../" : "";
const backupStorageKey = "analytics-sistema-exato:backup-queue";
const overviewObservationStorageKey = "analytics-sistema-exato:overview-observations";

function normalizeLink(path) {
  if (path === "./") return basePath || "./";
  return `${basePath}${path}`;
}

function severityLabel(severity) {
  return { high: "Alta", medium: "Media", low: "Baixa" }[severity];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getBackupQueue() {
  const savedQueue = localStorage.getItem(backupStorageKey);
  const defaultQueue = structuredClone(pages.backups.alerts);

  if (!savedQueue) {
    return defaultQueue;
  }

  try {
    const saved = JSON.parse(savedQueue);
    const migrated = saved.map((item) => {
      const fallback = defaultQueue.find((entry) => entry.id === item.id) || {};
      const daysWithoutBackup = Number.isFinite(item.daysWithoutBackup)
        ? item.daysWithoutBackup
        : fallback.daysWithoutBackup || 0;

      return {
        ...fallback,
        ...item,
        daysWithoutBackup
      };
    });

    saveBackupQueue(migrated);
    return migrated;
  } catch {
    return defaultQueue;
  }
}

function saveBackupQueue(queue) {
  localStorage.setItem(backupStorageKey, JSON.stringify(queue));
}

function resetBackupQueue() {
  localStorage.removeItem(backupStorageKey);
}

function getOverviewObservationMap() {
  const saved = localStorage.getItem(overviewObservationStorageKey);

  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

function getOverviewObservation(key) {
  return getOverviewObservationMap()[key] || pages[key].overviewObservation;
}

function saveOverviewObservation(key, observation) {
  const observations = getOverviewObservationMap();
  observations[key] = observation;
  localStorage.setItem(overviewObservationStorageKey, JSON.stringify(observations));
}

function getTopicAlerts(key) {
  if (key === "backups") return getBackupQueue();
  return pages[key].alerts;
}

function topicStatus(alerts) {
  const high = alerts.filter((item) => item.severity === "high").length;
  const medium = alerts.filter((item) => item.severity === "medium").length;

  if (high > 0) return { label: "Atencao critica", className: "danger" };
  if (medium > 0) return { label: "Acompanhar", className: "warning" };
  return { label: "Operacao normal", className: "success" };
}

function renderPencilIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15.2 5.4l3.4 3.4"></path>
      <path d="M4.8 16.9l-.8 3.3 3.3-.8 11-11a2.4 2.4 0 0 0-3.4-3.4l-11 11z"></path>
      <path d="M13.9 6.7l3.4 3.4"></path>
    </svg>
  `;
}

function renderSidebar() {
  return sidebarSections.map((section) => {
    const items = section.items.map(([key, label, path]) => {
      const active = key === pageKey ? "active" : "";
      const href = normalizeLink(path);

      return `
        <div class="sidebar-subitem ${active}">
          <a href="${href}">${label}</a>
          <a class="open-new" href="${href}" target="_blank" rel="noopener" title="Abrir em nova janela">Abrir</a>
        </div>
      `;
    }).join("");

    return `
      <div class="sidebar-section">
        <div class="sidebar-item">
          <span class="sidebar-icon">${section.icon}</span>
          <span>${section.label}</span>
        </div>
        ${items}
      </div>
    `;
  }).join("");
}

function renderShell(content) {
  return `
    <div class="app-shell">
      <aside class="sidebar" aria-label="Navegacao lateral">
        <div class="sidebar-head">
          <a class="panel-title" href="${normalizeLink("./")}">Painel</a>
          <button class="sidebar-back" type="button" title="Voltar">Voltar</button>
        </div>
        ${renderSidebar()}
      </aside>
      <header class="system-bar">
        <button class="theme-toggle" type="button" aria-label="Alternar modo escuro" title="Alternar modo escuro">Tema</button>
        <span class="user-dot" aria-label="Usuario">US</span>
      </header>
      ${content}
      <div class="modal-root" id="modal-root"></div>
    </div>
  `;
}

function renderOverview() {
  const analyticsTopics = Object.entries(pages).filter(([key]) => key !== "certificados");
  const rows = analyticsTopics.map(([key, topic]) => {
    const alerts = getTopicAlerts(key);
    const status = topicStatus(alerts);
    const pending = alerts.filter((item) => item.severity !== "low").length;
    const observation = getOverviewObservation(key);

    return `
      <tr class="${status.className === "danger" ? "non-business-day" : ""}">
        <td><strong>${topic.title}</strong><small>${topic.description}</small></td>
        <td><span class="status-tag ${status.className}">${status.label}</span></td>
        <td>${pending}</td>
        <td>
          <div class="observation-edit">
            <span class="observation-text">${escapeHtml(observation)}</span>
            <button type="button" class="icon-action" data-action="edit-overview-observation" data-id="${key}" aria-label="Editar observacao de ${escapeHtml(topic.title)}" title="Editar observacao">
              ${renderPencilIcon()}
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  return renderShell(`
    <main class="content page-overview">
      <section class="admin-page">
        <div class="breadcrumb">Exato -> Analytics Sistema Exato -> Lista</div>
        <div class="list-toolbar">
          <label class="search-field">
            <span>Topico, cliente ou status</span>
            <input type="search" placeholder="Buscar..">
          </label>
          <div class="toolbar-summary">
            <span class="legend-square"></span>
            Linha em vermelho: item critico para acompanhamento
          </div>
        </div>
        <div class="table-card">
          <div class="table-accent"></div>
          <div class="table-wrap">
            <table class="admin-table overview-table">
              <thead>
                <tr>
                  <th>Topico</th>
                  <th>Status</th>
                  <th>Pendencias</th>
                  <th>Observacoes</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `);
}

function renderTopic(topic) {
  if (pageKey === "certificados") return renderCertificatesPage();
  if (pageKey === "backups") return renderBackupsPage(topic);

  const rows = topic.alerts.map((item) => `
    <tr>
      <td><strong>${item.client}</strong><small>${item.detail}</small></td>
      <td><span class="status-tag ${item.severity}">${item.status}</span></td>
      <td>${severityLabel(item.severity)}</td>
      <td>${item.time}</td>
    </tr>
  `).join("");

  return renderShell(`
    <main class="content topic-page ${topic.tone}">
      <section class="admin-page">
        <div class="breadcrumb">Exato -> ${topic.title} -> Lista</div>
        <div class="list-toolbar">
          <label class="search-field">
            <span>Cliente, status ou observacao</span>
            <input type="search" placeholder="Buscar..">
          </label>
          <div class="toolbar-summary">${topic.source}</div>
        </div>
        <div class="table-card">
          <div class="table-accent"></div>
          <div class="table-wrap">
            <table class="admin-table">
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
        </div>
      </section>
    </main>
  `);
}

function renderBackupsPage(topic) {
  const queue = getBackupQueue();
  const rows = queue.map((item) => `
    <tr class="${item.daysWithoutBackup > 1 ? "non-business-day" : ""}">
      <td><strong>${escapeHtml(item.client)}</strong><small>${escapeHtml(item.detail)}</small></td>
      <td>${escapeHtml(item.lastBackup)}</td>
      <td>${escapeHtml(item.daysWithoutBackup)}</td>
      <td>${escapeHtml(item.observation)}</td>
      <td class="operations backup-operations">
        <button type="button" class="action secondary" data-action="edit-backup-observation" data-id="${item.id}">EDITAR OBS.</button>
      </td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="5" class="empty-state">Nenhum backup pendente para acompanhar.</td>
    </tr>
  `;

  return renderShell(`
    <main class="content topic-page">
      <section class="admin-page">
        <div class="breadcrumb">Exato -> Backups de clientes -> Lista</div>
        <div class="list-toolbar">
          <label class="search-field">
            <span>Cliente, status ou observacao</span>
            <input type="search" placeholder="Buscar..">
          </label>
          <div class="toolbar-summary">
            <span class="legend-square"></span>
            Linha em vermelho: cliente com mais de 1 dia sem backup
            <button type="button" class="text-action" data-action="reset-backups">RESTAURAR EXEMPLOS</button>
          </div>
        </div>
        <div class="table-card">
          <div class="table-accent"></div>
          <div class="table-wrap">
            <table class="admin-table backup-table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Data do ultimo backup feito</th>
                  <th>Dias sem Backup</th>
                  <th>Observacao</th>
                  <th>Operacoes</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `);
}

function renderCertificatesPage() {
  const rows = certificateRows.map((row) => `
    <tr class="${row.nonBusinessDay ? "non-business-day" : ""}">
      <td>${row.cnpj}</td>
      <td>${row.razao}</td>
      <td>${row.fantasia}</td>
      <td>${row.serial}</td>
      <td>${row.identificador}</td>
      <td>${row.tipo}</td>
      <td>${row.vencimento}</td>
      <td>${row.observacao}</td>
      <td class="operations">
        <button type="button" class="action secondary">EDITAR OBS.</button>
        <button type="button" class="action danger">DELETAR</button>
      </td>
    </tr>
  `).join("");

  return renderShell(`
    <main class="content certificates-page">
      <section class="admin-page">
        <div class="breadcrumb">Exato -> Certificados Digitais -> Lista</div>
        <div class="cert-toolbar">
          <label class="search-field wide">
            <span>CNPJ, Razao Social e Nome Fantasia</span>
            <input type="search" placeholder="Buscar..">
          </label>
          <div class="legend-note">
            <span class="legend-square"></span>
            Linha em vermelho: certificado com vencimento em dia nao util
          </div>
          <fieldset class="period-box">
            <legend>Periodo Data de Vencimento:</legend>
            <label>
              <span>De:</span>
              <input type="text" value="18/05/2026">
            </label>
            <label>
              <span>Ate:</span>
              <input type="text" placeholder="Ate:">
            </label>
            <button type="button" class="search-button">PESQUISAR</button>
          </fieldset>
        </div>
        <div class="table-card certificate-table-card">
          <div class="table-accent"></div>
          <div class="table-wrap">
            <table class="admin-table certificate-table">
              <thead>
                <tr>
                  <th>CNPJ</th>
                  <th>Razao Social</th>
                  <th>Nome Fantasia</th>
                  <th>Serial Certificado</th>
                  <th>Identificador Uninfe Exato</th>
                  <th>Tipo Cert</th>
                  <th>Dt Vencimento</th>
                  <th>Observacao</th>
                  <th>Operacoes</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("analytics-theme", theme);
}

function openBackupObservationModal(id) {
  const item = getBackupQueue().find((entry) => entry.id === id);
  if (!item) return;

  document.querySelector("#modal-root").innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="backup-modal-title">
        <header>
          <h2 id="backup-modal-title">Editar observacao</h2>
          <button type="button" class="modal-close" data-action="close-modal" aria-label="Fechar">X</button>
        </header>
        <div class="modal-body">
          <span class="modal-client">${escapeHtml(item.client)}</span>
          <textarea class="modal-textarea" id="backup-observation-field">${escapeHtml(item.observation)}</textarea>
        </div>
        <footer>
          <button type="button" class="action muted" data-action="close-modal">CANCELAR</button>
          <button type="button" class="action primary" data-action="save-backup-observation" data-id="${item.id}">SALVAR</button>
        </footer>
      </section>
    </div>
  `;
  document.querySelector("#backup-observation-field").focus();
}

function openOverviewObservationModal(key) {
  const topic = pages[key];
  if (!topic) return;

  document.querySelector("#modal-root").innerHTML = `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="overview-modal-title">
        <header>
          <h2 id="overview-modal-title">Editar observacao</h2>
          <button type="button" class="modal-close" data-action="close-modal" aria-label="Fechar">X</button>
        </header>
        <div class="modal-body">
          <span class="modal-client">${escapeHtml(topic.title)}</span>
          <textarea class="modal-textarea" id="overview-observation-field">${escapeHtml(getOverviewObservation(key))}</textarea>
        </div>
        <footer>
          <button type="button" class="action muted" data-action="close-modal">CANCELAR</button>
          <button type="button" class="action primary" data-action="save-overview-observation" data-id="${key}">SALVAR</button>
        </footer>
      </section>
    </div>
  `;
  document.querySelector("#overview-observation-field").focus();
}

function closeModal() {
  document.querySelector("#modal-root").innerHTML = "";
}

function updateBackupObservation(id) {
  const field = document.querySelector("#backup-observation-field");
  const queue = getBackupQueue().map((item) => {
    if (item.id !== id) return item;
    return { ...item, observation: field.value.trim() || "Sem observacao registrada" };
  });

  saveBackupQueue(queue);
  closeModal();
  renderApp();
}

function updateOverviewObservation(key) {
  const field = document.querySelector("#overview-observation-field");
  saveOverviewObservation(key, field.value.trim() || "Sem observacao registrada");
  closeModal();
  renderApp();
}

function bootInteractions() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === "edit-overview-observation") openOverviewObservationModal(id);
    if (action === "edit-backup-observation") openBackupObservationModal(id);
    if (action === "close-modal") closeModal();
    if (action === "save-overview-observation") updateOverviewObservation(id);
    if (action === "save-backup-observation") updateBackupObservation(id);
    if (action === "reset-backups") {
      resetBackupQueue();
      renderApp();
    }
  });
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

function renderApp() {
  app.innerHTML = pageKey === "overview" ? renderOverview() : renderTopic(pages[pageKey]);
  bootThemeToggle();
}

renderApp();
bootInteractions();
