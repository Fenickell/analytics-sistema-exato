@echo off
setlocal
cd /d "%~dp0"

echo === Analytics Sistema Exato - Diagnostico ===
echo Pasta: %cd%
echo.

echo [1] Node:
where node
node --version
echo.

echo [2] Validando JavaScript:
node --check assets\js\app.js
node --check tools\local-server.mjs
echo.

echo [3] Subindo servidor em modo diagnostico:
echo Abra no navegador: http://127.0.0.1:4177/
echo Para parar, feche esta janela.
node tools\local-server.mjs 4177
