# Seguranca

Diretrizes iniciais para manter o projeto alinhado ao padrao esperado:

- Nao versionar credenciais reais.
- Manter variaveis sensiveis em `.env` local e nas variaveis do Vercel.
- Usar projeto Supabase separado para producao.
- Ativar RLS no Supabase antes de qualquer dado real.
- Evitar dados reais de clientes no ambiente de demonstracao.
- Quando houver login, bloquear rotas internas por sessao.
- Criar usuario de leitura para modo TV quando a exibicao for automatizada.
- Registrar auditoria de alteracoes manuais futuras.
