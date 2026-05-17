@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado no PATH.
  echo Instale o Node.js ou abra o projeto diretamente pelo arquivo index.html.
  pause
  exit /b 1
)

start "Analytics Sistema Exato Server" /min node tools\local-server.mjs 4177
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4177/"
