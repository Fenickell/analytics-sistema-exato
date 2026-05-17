# Analytics Sistema Exato

V1 visual do painel diario de suporte da Sistema Exato.

## Objetivo da V1

Apresentar, em telas separadas para exibicao em TV, os 5 topicos acompanhados diariamente pela equipe:

- Backups de clientes
- PmlSync
- Integracao Mercado Livre
- Transferencias
- Certificados digitais

Nesta versao, os dados sao exemplos fixos para demonstracao interna. Login, Supabase, Outlook e automacoes ficam preparados para proximas fases.

## Rotas para o plugin do Chrome

- `/backups/`
- `/pmlsync/`
- `/mercado-livre/`
- `/transferencias/`
- `/certificados/`

Tambem existe uma visao geral em `/`.

## Execucao local

Como a V1 e estatica, basta abrir `index.html` no navegador.

No Windows, o caminho mais simples e:

```bat
abrir-analytics-sistema-exato.cmd
```

Se nao abrir, rode:

```bat
diagnosticar-analytics-sistema-exato.cmd
```

Opcionalmente, se houver Node disponivel:

```bash
npm start
```

## Proximas fases previstas

- Criar/linkar projeto Supabase
- Aplicar migration em `supabase/migrations/20260517121500_initial_schema.sql`
- Conectar leitura de alertas do Outlook
- Criar login corporativo
- Manter deploy no Vercel
- Criar repositorio privado no GitHub

## Deploy atual

- Vercel: https://analytics-sistema-exato.vercel.app/
- Supabase: estrutura local preparada; depende de `supabase login` para criar/linkar o projeto cloud.
- GitHub: depende de um repo privado criado ou do GitHub CLI instalado/autenticado.
