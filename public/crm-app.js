function getCRMHTML() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#032D60;--blue:#0176D3;--sky:#1B96FF;--teal:#06A59A;--red:#E5444B;--amber:#F5A623;--green:#27AE60;--purple:#6C3ABD;--bg:#F0F4F8;--surface:#fff;--border:#E4E7EC;--muted:#5a6374;--f:'Poppins',sans-serif}
html,body{height:100%;font-family:var(--f);background:var(--bg);color:var(--navy);font-size:12px;overflow:hidden}
.app{display:flex;height:100vh}
.sidebar{width:190px;background:var(--navy);display:flex;flex-direction:column;flex-shrink:0}
.logo{padding:16px 14px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,.08)}
.logo-icon{width:28px;height:28px;background:var(--sky);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.logo-text{font-size:13px;font-weight:700;color:#fff;letter-spacing:-.3px}
.logo-sub{font-size:9px;color:#5A9FD4}
.ns{padding:11px 11px 3px;font-size:8.5px;font-weight:600;color:#3D6B8F;letter-spacing:.1em;text-transform:uppercase}
.ni{display:flex;align-items:center;gap:8px;padding:8px 11px;cursor:pointer;border-radius:7px;margin:1px 5px;transition:all .15s;color:#8AADCC;font-size:11.5px;font-weight:500}
.ni:hover{background:rgba(255,255,255,.07);color:#fff}
.ni.active{background:rgba(27,150,255,.2);color:#fff}
.ni svg{flex-shrink:0}
.sf{margin-top:auto;padding:10px 6px;border-top:1px solid rgba(255,255,255,.08)}
.ur{display:flex;align-items:center;gap:8px;padding:7px 5px}
.uav{width:26px;height:26px;border-radius:50%;background:rgba(27,150,255,.3);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#7DC3FF;flex-shrink:0}
.un{font-size:10.5px;color:#8AADCC;font-weight:500}
.ur2{font-size:9px;color:#3D6B8F}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0}
.topbar{background:var(--surface);border-bottom:1px solid var(--border);padding:0 18px;height:48px;display:flex;align-items:center;gap:10px;flex-shrink:0}
.tb-title{font-size:15px;font-weight:700;color:var(--navy);flex:1}
.tb-sub{font-size:10px;color:var(--muted)}
.sb2{display:flex;align-items:center;gap:7px;background:var(--bg);border:1px solid var(--border);border-radius:18px;padding:6px 12px;width:180px}
.sb2 input{border:none;background:none;font-family:var(--f);font-size:11px;color:var(--navy);outline:none;width:100%}
.sb2 input::placeholder{color:var(--muted)}
.bp{background:var(--blue);color:#fff;border:none;border-radius:18px;padding:6px 13px;font-size:11px;font-weight:600;font-family:var(--f);cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s;white-space:nowrap}
.bp:hover{background:var(--navy)}
.content{flex:1;overflow-y:auto;padding:16px 18px}
.content::-webkit-scrollbar{width:4px}
.content::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px}
.scr{display:none}.scr.active{display:block}
.badge{font-size:9.5px;font-weight:600;padding:2px 8px;border-radius:14px;display:inline-block;white-space:nowrap}
.badge.g{background:#E8FAF8;color:#0A5C4A}.badge.r{background:#FEEFEF;color:#A32D2D}.badge.a{background:#FFF3E8;color:#854F0B}.badge.b{background:#EEF5FF;color:#0C447C}
/* KPI */
.kr{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px}
.kc{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:13px}
.kl{font-size:10px;color:var(--muted);font-weight:500;display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}
.kv{font-size:20px;font-weight:700;color:var(--navy);letter-spacing:-.4px}
.kch{font-size:10px;font-weight:600;display:flex;align-items:center;gap:2px;margin-top:3px}
.kch.up{color:var(--green)}.kch.dn{color:var(--red)}
.ki{width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center}
/* CHARTS */
.cr{display:grid;grid-template-columns:2fr 1fr;gap:12px;margin-bottom:14px}
.cc{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:14px}
.ct{font-size:11.5px;font-weight:600;color:var(--navy);margin-bottom:12px;display:flex;align-items:center;justify-content:space-between}
.ct span{font-size:10px;color:var(--muted);font-weight:400}
.bc{display:flex;align-items:flex-end;gap:7px;height:95px;padding-bottom:18px;border-bottom:1px solid var(--border)}
.bw{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;height:100%}
.bar{width:100%;border-radius:4px 4px 0 0;cursor:pointer;position:relative;transition:filter .15s}
.bar:hover{filter:brightness(.85)}
.blb{font-size:8.5px;color:var(--muted);position:absolute;bottom:-16px;left:50%;transform:translateX(-50%);white-space:nowrap}
.bvl{font-size:8.5px;color:var(--navy);font-weight:600;text-align:center;margin-top:2px}
.dw{display:flex;flex-direction:column;align-items:center;gap:8px}
.dl{display:flex;flex-direction:column;gap:5px;width:100%}
.li{display:flex;align-items:center;gap:6px;font-size:10.5px}
.ld{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.ll{color:var(--muted);flex:1}.lv{font-weight:600;color:var(--navy)}
/* ACTIVITY */
.ac{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:14px}
.at{font-size:11.5px;font-weight:600;color:var(--navy);margin-bottom:10px}
.ai{display:flex;gap:9px;padding:8px 0;border-bottom:1px solid var(--border);align-items:flex-start}
.ai:last-child{border:none;padding-bottom:0}
.aav{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
.atx{flex:1;font-size:11px;color:var(--muted);line-height:1.45}
.atx strong{color:var(--navy);font-weight:600}
.atm{font-size:9.5px;color:var(--muted);white-space:nowrap}
/* CONTACTOS */
.fr{display:flex;gap:7px;margin-bottom:12px;align-items:center;flex-wrap:wrap}
.fb{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:5px 12px;font-size:11px;font-weight:500;cursor:pointer;color:var(--muted);font-family:var(--f);transition:all .15s}
.fb.on{background:var(--blue);color:#fff;border-color:var(--blue)}
.ct2{background:var(--surface);border:1px solid var(--border);border-radius:11px;overflow:hidden}
.th2{display:grid;grid-template-columns:2fr 1.5fr 1fr 1fr 1fr 70px;gap:7px;padding:9px 14px;background:var(--bg);font-size:9.5px;font-weight:600;color:var(--muted);letter-spacing:.05em;text-transform:uppercase;border-bottom:1px solid var(--border)}
.tr2{display:grid;grid-template-columns:2fr 1.5fr 1fr 1fr 1fr 70px;gap:7px;padding:10px 14px;border-bottom:1px solid var(--border);align-items:center;transition:background .1s;cursor:pointer}
.tr2:last-child{border:none}
.tr2:hover{background:#F7F9FC}
.cn{display:flex;align-items:center;gap:8px}
.cav{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
.cnm{font-size:12px;font-weight:600;color:var(--navy)}
.cem{font-size:9.5px;color:var(--muted)}
.cel{font-size:11.5px;color:var(--muted)}
.cel.bold{color:var(--navy);font-weight:500}
.ra{display:flex;gap:4px;opacity:0;transition:opacity .15s}
.tr2:hover .ra{opacity:1}
.ib{width:24px;height:24px;border-radius:6px;border:1px solid var(--border);background:var(--surface);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}
.ib:hover{background:var(--bg);border-color:var(--blue)}
/* PIPELINE */
.pw{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px}
.pw::-webkit-scrollbar{height:4px}
.pw::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px}
.pc2{min-width:175px;max-width:175px;display:flex;flex-direction:column;gap:7px}
.ph{display:flex;align-items:center;justify-content:space-between;padding:6px 2px;margin-bottom:2px}
.phl{display:flex;align-items:center;gap:6px}
.pd{width:8px;height:8px;border-radius:50%}
.pn{font-size:11px;font-weight:600;color:var(--navy)}
.pct{font-size:9.5px;background:var(--bg);border:1px solid var(--border);border-radius:11px;padding:2px 7px;color:var(--muted);font-weight:500}
.dc{background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:11px;cursor:pointer;transition:all .15s}
.dc:hover{border-color:var(--blue);transform:translateY(-1px)}
.dco{font-size:12px;font-weight:600;color:var(--navy);margin-bottom:2px}
.dct{font-size:10px;color:var(--muted);margin-bottom:7px}
.df{display:flex;align-items:center;justify-content:space-between}
.dv{font-size:12.5px;font-weight:700;color:var(--blue)}
.dp{font-size:9.5px;color:var(--muted)}
.pb{height:3px;background:var(--border);border-radius:3px;margin-top:5px;overflow:hidden}
.pf{height:100%;border-radius:3px;background:var(--blue)}
/* MARKETING */
.cg2{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;margin-bottom:14px}
.ccard{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:14px}
.ctop{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px}
.cname{font-size:12.5px;font-weight:600;color:var(--navy)}
.ctype{font-size:10px;color:var(--muted);margin-top:2px}
.cst{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:8px}
.cs .csn{font-size:14px;font-weight:700;color:var(--navy)}.cs .csl{font-size:9px;color:var(--muted)}
.pr{display:flex;align-items:center;gap:7px;margin-top:8px}
.prb{flex:1;height:4px;background:var(--border);border-radius:4px;overflow:hidden}
.prf{height:100%;border-radius:4px}
.prl{font-size:9.5px;color:var(--muted);white-space:nowrap}
/* SOPORTE */
.tl{display:flex;flex-direction:column;gap:7px}
.tk{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:12px 14px;display:flex;gap:11px;align-items:flex-start;cursor:pointer;transition:all .15s}
.tk:hover{border-color:var(--blue)}
.tid{font-size:9.5px;color:var(--muted);white-space:nowrap;padding-top:1px;font-weight:500}
.tb3{flex:1}.tt{font-size:12px;font-weight:600;color:var(--navy);margin-bottom:3px}
.tm{font-size:10.5px;color:var(--muted);display:flex;gap:10px}
.tri{display:flex;flex-direction:column;align-items:flex-end;gap:5px}
.prio{font-size:9.5px;font-weight:600}.prio.high{color:var(--red)}.prio.med{color:var(--amber)}.prio.low{color:var(--green)}
/* REPORTES */
.rg{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.rc{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:14px}
.rt{font-size:11.5px;font-weight:600;color:var(--navy);margin-bottom:12px}
.fn{display:flex;flex-direction:column;gap:6px}
.fnr{display:flex;align-items:center;gap:8px}
.fnl{font-size:10.5px;color:var(--muted);width:85px;text-align:right}
.fbw{flex:1;height:24px;background:var(--bg);border-radius:5px;overflow:hidden}
.fff{height:100%;border-radius:5px;display:flex;align-items:center;padding-left:8px;font-size:10.5px;font-weight:600;color:#fff}
.fct{font-size:10.5px;color:var(--muted);width:34px}
.ts{width:100%;border-collapse:collapse;font-size:11px}
.ts th{text-align:left;font-size:9.5px;font-weight:600;color:var(--muted);letter-spacing:.04em;text-transform:uppercase;padding:0 0 7px;border-bottom:1px solid var(--border)}
.ts td{padding:7px 0;border-bottom:1px solid var(--border);color:var(--muted)}
.ts td.bold{color:var(--navy);font-weight:600}
.ts tr:last-child td{border:none}
.pb2{flex:1;height:4px;background:var(--border);border-radius:4px;overflow:hidden}
.pf2{height:100%;border-radius:4px}
/* MODAL */
.mb{display:none;position:fixed;inset:0;background:rgba(3,45,96,.38);z-index:100;align-items:center;justify-content:center}
.mb.open{display:flex}
.mo{background:var(--surface);border-radius:13px;padding:22px;width:380px;max-height:88vh;overflow-y:auto;box-shadow:0 16px 48px rgba(0,0,0,.15)}
.mh{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.mt{font-size:14px;font-weight:700;color:var(--navy)}
.mc{background:none;border:none;cursor:pointer;color:var(--muted);font-size:18px;font-family:var(--f);line-height:1}
.mc:hover{color:var(--navy)}
.fg{margin-bottom:12px}
.fl{font-size:11px;font-weight:600;color:var(--navy);margin-bottom:5px;display:block}
.fi{width:100%;border:1px solid var(--border);border-radius:8px;padding:8px 11px;font-family:var(--f);font-size:11.5px;color:var(--navy);outline:none;transition:border .15s}
.fi:focus{border-color:var(--blue)}
.fr2{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.fs{width:100%;border:1px solid var(--border);border-radius:8px;padding:8px 11px;font-family:var(--f);font-size:11.5px;color:var(--navy);background:var(--surface);outline:none}
.mf{display:flex;gap:8px;justify-content:flex-end;margin-top:18px;padding-top:14px;border-top:1px solid var(--border)}
.bo{background:transparent;color:var(--blue);border:1px solid var(--border);border-radius:18px;padding:7px 14px;font-size:11px;font-weight:600;font-family:var(--f);cursor:pointer}
/* NOTIF */
.nf{position:fixed;top:14px;right:14px;background:var(--navy);color:#fff;border-radius:10px;padding:10px 14px;font-size:11.5px;font-weight:500;z-index:200;display:none;align-items:center;gap:7px;font-family:var(--f);box-shadow:0 6px 20px rgba(0,0,0,.15)}
.nf.show{display:flex;animation:si .22s ease}
@keyframes si{from{opacity:0;transform:translateY(-7px)}to{opacity:1;transform:translateY(0)}}
</style>
</head>
<body>
<div class="app">
  <div class="sidebar">
    <div class="logo">
      <div class="logo-icon"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#fff" stroke-width="1.5"/><path d="M5 8h6M8 5v6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg></div>
      <div><div class="logo-text">MiniCRM</div><div class="logo-sub">Demo · DSI</div></div>
    </div>
    <div class="ns">Principal</div>
    <div class="ni active" onclick="goto('dashboard',this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Dashboard</div>
    <div class="ni" onclick="goto('contactos',this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Contactos</div>
    <div class="ni" onclick="goto('pipeline',this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Pipeline</div>
    <div class="ns">Engagement</div>
    <div class="ni" onclick="goto('marketing',this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Marketing</div>
    <div class="ni" onclick="goto('soporte',this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Soporte</div>
    <div class="ns">Análisis</div>
    <div class="ni" onclick="goto('reportes',this)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>Reportes</div>
    <div class="sf"><div class="ur"><div class="uav">MG</div><div><div class="un">María García</div><div class="ur2">Administrador</div></div></div></div>
  </div>
  <div class="main">
    <div class="topbar">
      <div style="flex:1"><div class="tb-title" id="tt">Dashboard</div><div class="tb-sub" id="ts">Resumen general del negocio</div></div>
      <div class="sb2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Buscar..." id="si" oninput="hs(this.value)"></div>
      <button class="bp" onclick="om()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span id="cl">Nuevo</span></button>
    </div>
    <div class="content">
      <div class="scr active" id="scr-dashboard">
        <div class="kr">
          <div class="kc"><div class="kl">Clientes activos<div class="ki" style="background:#EEF5FF"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0176D3" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div></div><div class="kv">248</div><div class="kch up">▲ +12% este mes</div></div>
          <div class="kc"><div class="kl">Pipeline total<div class="ki" style="background:#E8FAF8"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06A59A" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div></div><div class="kv" style="color:#06A59A">$487k</div><div class="kch up">▲ +8% este mes</div></div>
          <div class="kc"><div class="kl">Tickets abiertos<div class="ki" style="background:#FEEFEF"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E5444B" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div></div><div class="kv" style="color:#E5444B">18</div><div class="kch dn">▼ +3 esta semana</div></div>
          <div class="kc"><div class="kl">Tasa conversión<div class="ki" style="background:#F3EEFF"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6C3ABD" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div></div><div class="kv" style="color:#6C3ABD">34%</div><div class="kch up">▲ +4% este mes</div></div>
        </div>
        <div class="cr">
          <div class="cc"><div class="ct">Ventas mensuales <span>Últimos 6 meses</span></div><div class="bc" id="bc"></div></div>
          <div class="cc"><div class="ct">Pipeline por etapa</div><div class="dw"><svg width="95" height="95" viewBox="0 0 100 100" id="ds"></svg><div class="dl" id="dl"></div></div></div>
        </div>
        <div class="ac"><div class="at">Actividad reciente</div>
          <div class="ai"><div class="aav" style="background:#EEF5FF;color:#0176D3">AG</div><div class="atx"><strong>Ana González</strong> cerró deal con Empresa ABC por <strong>$45,000</strong></div><div class="atm">hace 5 min</div></div>
          <div class="ai"><div class="aav" style="background:#E8FAF8;color:#06A59A">CR</div><div class="atx"><strong>Carlos Ruiz</strong> abrió nuevo ticket de soporte — prioridad alta</div><div class="atm">hace 18 min</div></div>
          <div class="ai"><div class="aav" style="background:#FFF3E8;color:#F5A623">ML</div><div class="atx"><strong>Campaña Email Q2</strong> alcanzó 42% de tasa de apertura</div><div class="atm">hace 1h</div></div>
          <div class="ai"><div class="aav" style="background:#F3EEFF;color:#6C3ABD">PT</div><div class="atx"><strong>Pedro Torres</strong> agregó 3 nuevos contactos desde LinkedIn</div><div class="atm">hace 2h</div></div>
        </div>
      </div>
      <div class="scr" id="scr-contactos">
        <div class="fr">
          <button class="fb on" onclick="fc('todos',this)">Todos (8)</button>
          <button class="fb" onclick="fc('activo',this)">Activos</button>
          <button class="fb" onclick="fc('prospecto',this)">Prospectos</button>
          <button class="fb" onclick="fc('riesgo',this)">En riesgo</button>
          <div style="flex:1"></div>
          <select class="fs" style="width:130px;padding:5px 10px;font-size:10.5px" onchange="sc2(this.value)">
            <option value="nombre">Nombre</option><option value="valor">Valor CLV</option><option value="estado">Estado</option>
          </select>
        </div>
        <div class="ct2"><div class="th2"><span>Contacto</span><span>Empresa</span><span>Segmento</span><span>CLV</span><span>Estado</span><span></span></div><div id="cb"></div></div>
      </div>
      <div class="scr" id="scr-pipeline">
        <div style="display:flex;gap:9px;margin-bottom:12px;flex-wrap:wrap">
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:7px 13px;font-size:11.5px;color:var(--muted)">Total: <strong style="color:var(--navy)">$487,000</strong></div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:7px 13px;font-size:11.5px;color:var(--muted)">Deals: <strong style="color:var(--navy)">12</strong></div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:7px 13px;font-size:11.5px;color:var(--muted)">Cierre est.: <strong style="color:var(--green)">$184k</strong></div>
        </div>
        <div class="pw" id="pw"></div>
      </div>
      <div class="scr" id="scr-marketing"><div class="cg2" id="cg2"></div><div style="background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:14px"><div style="font-size:11.5px;font-weight:600;color:var(--navy);margin-bottom:11px">Segmentos de audiencia</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:9px" id="sg"></div></div></div>
      <div class="scr" id="scr-soporte">
        <div class="fr"><button class="fb on" onclick="ft('todos',this)">Todos (6)</button><button class="fb" onclick="ft('abierto',this)">Abiertos</button><button class="fb" onclick="ft('en_proceso',this)">En proceso</button><button class="fb" onclick="ft('resuelto',this)">Resueltos</button></div>
        <div class="tl" id="tl"></div>
      </div>
      <div class="scr" id="scr-reportes"><div class="rg"><div class="rc"><div class="rt">Tendencia de ingresos</div><svg width="100%" height="85" id="ls" viewBox="0 0 280 85" preserveAspectRatio="none"></svg></div><div class="rc"><div class="rt">Funnel de conversión</div><div class="fn" id="fn"></div></div><div class="rc"><div class="rt">Top vendedores</div><table class="ts"><thead><tr><th>Vendedor</th><th>Deals</th><th>Ingresos</th><th>Conv.</th></tr></thead><tbody id="tv"></tbody></table></div><div class="rc"><div class="rt">Retención de clientes</div><div style="display:flex;flex-direction:column;gap:10px" id="re"></div></div></div></div>
    </div>
  </div>
</div>
<div class="mb" id="mb" onclick="if(event.target===this)cm()"><div class="mo"><div class="mh"><div class="mt" id="mt">Nuevo contacto</div><button class="mc" onclick="cm()">×</button></div><div id="mbody"></div><div class="mf"><button class="bo" onclick="cm()">Cancelar</button><button class="bp" onclick="sm()"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Guardar</button></div></div></div>
<div class="nf" id="nf"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#28CA41" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span id="nt">Guardado</span></div>
<script>
const contacts=[
  {id:1,name:'Ana González',ini:'AG',col:'#EEF5FF',tc:'#0176D3',email:'ana@empresaabc.com',company:'Empresa ABC',seg:'Premium',clv:'$45,200',st:'activo'},
  {id:2,name:'Carlos Ruiz',ini:'CR',col:'#E8FAF8',tc:'#06A59A',email:'cruiz@techsrl.com',company:'Tech SRL',seg:'Estándar',clv:'$18,400',st:'riesgo'},
  {id:3,name:'Laura González',ini:'LG',col:'#F3EEFF',tc:'#6C3ABD',email:'laura@gruponorte.com',company:'Grupo Norte',seg:'Premium',clv:'$92,000',st:'activo'},
  {id:4,name:'Pedro Torres',ini:'PT',col:'#FFF3E8',tc:'#F5A623',email:'pedro@innovasa.com',company:'Innova SA',seg:'Estándar',clv:'$22,600',st:'prospecto'},
  {id:5,name:'María López',ini:'ML',col:'#FEEFEF',tc:'#E5444B',email:'mlopez@retailplus.com',company:'Retail Plus',seg:'Premium',clv:'$67,100',st:'activo'},
  {id:6,name:'Diego Fernández',ini:'DF',col:'#EEF5FF',tc:'#0176D3',email:'df@servicios.com',company:'Servicios Sur',seg:'Estándar',clv:'$31,800',st:'activo'},
  {id:7,name:'Sofía Martínez',ini:'SM',col:'#E8FAF8',tc:'#06A59A',email:'sofia@nexo.com',company:'Nexo Digital',seg:'Premium',clv:'$58,300',st:'prospecto'},
  {id:8,name:'Javier Ibáñez',ini:'JI',col:'#F3EEFF',tc:'#6C3ABD',email:'ji@alpha.com',company:'Alpha Group',seg:'Enterprise',clv:'$124,000',st:'activo'},
];
let fc2=[...contacts];
const sm2={activo:{l:'Activo',c:'g'},riesgo:{l:'En riesgo',c:'a'},prospecto:{l:'Prospecto',c:'b'}};
const pipeline={
  'Prospecto':{col:'#94a3b8',deals:[{co:'Startup XYZ',ct:'R. Méndez',v:'$8,000',p:20},{co:'Corp Delta',ct:'S. Lima',v:'$15,000',p:25}]},
  'Contactado':{col:'#F5A623',deals:[{co:'Tech SRL',ct:'C. Ruiz',v:'$18,500',p:40},{co:'Grupo Sur',ct:'M. Vega',v:'$9,200',p:35}]},
  'Propuesta':{col:'#0176D3',deals:[{co:'Innova SA',ct:'P. Torres',v:'$22,600',p:60},{co:'Servicios Sur',ct:'D. Fernández',v:'$31,800',p:65},{co:'Nexo Digital',ct:'S. Martínez',v:'$12,000',p:55}]},
  'Negociación':{col:'#6C3ABD',deals:[{co:'Grupo Norte',ct:'L. González',v:'$45,000',p:80}]},
  'Cerrado':{col:'#27AE60',deals:[{co:'Retail Plus',ct:'M. López',v:'$67,100',p:100},{co:'Alpha Group',ct:'J. Ibáñez',v:'$124,000',p:100}]},
};
const camps=[
  {n:'Bienvenida nuevos clientes',t:'Email automation',s:'activo',se:1240,o:52,cl:18,pr:80,pc:'#06A59A'},
  {n:'Retención Q2 2025',t:'Email + SMS',s:'activo',se:890,o:41,cl:12,pr:60,pc:'#0176D3'},
  {n:'Upsell Premium',t:'Email segmentado',s:'borrador',se:0,o:0,cl:0,pr:30,pc:'#6C3ABD'},
  {n:'Reactivación inactivos',t:'Email automation',s:'pausado',se:340,o:28,cl:7,pr:45,pc:'#F5A623'},
];
const segs=[{n:'Premium',c:64,bg:'#F3EEFF',tc:'#4A2B8A'},{n:'Estándar',c:112,bg:'#EEF5FF',tc:'#0C447C'},{n:'Prospectos',c:58,bg:'#FFF3E8',tc:'#7A4800'},{n:'En riesgo',c:14,bg:'#FEEFEF',tc:'#A32D2D'}];
const tickets=[
  {id:'#1042',ti:'No puedo acceder al portal de clientes',cl:'Tech SRL',tm:'hace 20 min',pr:'high',st:'abierto',ag:'Sin asignar'},
  {id:'#1041',ti:'Factura incorrecta — mes de mayo',cl:'Empresa ABC',tm:'hace 1h',pr:'med',st:'en_proceso',ag:'Ana G.'},
  {id:'#1040',ti:'Solicitud de demo para nuevo módulo',cl:'Nexo Digital',tm:'hace 3h',pr:'low',st:'en_proceso',ag:'Pedro T.'},
  {id:'#1039',ti:'Error en exportación de reportes PDF',cl:'Alpha Group',tm:'ayer',pr:'high',st:'abierto',ag:'Sin asignar'},
  {id:'#1038',ti:'Consulta sobre integración con ERP',cl:'Grupo Norte',tm:'ayer',pr:'med',st:'resuelto',ag:'Carlos R.'},
  {id:'#1037',ti:'Actualización de datos de contacto',cl:'Retail Plus',tm:'hace 2 días',pr:'low',st:'resuelto',ag:'Laura G.'},
];
let tf='todos',cs='dashboard';
function goto(s,el){
  document.querySelectorAll('.ni').forEach(n=>n.classList.remove('active'));
  if(el)el.classList.add('active');
  document.querySelectorAll('.scr').forEach(x=>x.classList.remove('active'));
  document.getElementById('scr-'+s).classList.add('active');
  cs=s;
  const T={dashboard:['Dashboard','Resumen general'],contactos:['Contactos','Gestión de clientes'],pipeline:['Pipeline','Oportunidades de venta'],marketing:['Marketing','Campañas y audiencias'],soporte:['Soporte','Tickets y resolución'],reportes:['Reportes','Analítica y métricas']};
  const L={dashboard:'Nuevo',contactos:'Nuevo contacto',pipeline:'Nuevo deal',marketing:'Nueva campaña',soporte:'Nuevo ticket',reportes:'Exportar'};
  document.getElementById('tt').textContent=T[s][0];
  document.getElementById('ts').textContent=T[s][1];
  document.getElementById('cl').textContent=L[s];
}
function rc(list){
  document.getElementById('cb').innerHTML=list.map(c=>{
    const s=sm2[c.st]||{l:'Inactivo',c:'r'};
    return '<div class="tr2"><div class="cn"><div class="cav" style="background:'+c.col+';color:'+c.tc+'">'+c.ini+'</div><div><div class="cnm">'+c.name+'</div><div class="cem">'+c.email+'</div></div></div><div class="cel bold">'+c.company+'</div><div class="cel">'+c.seg+'</div><div class="cel bold">'+c.clv+'</div><span class="badge '+s.c+'">'+s.l+'</span><div class="ra"><div class="ib" onclick="sn(\\'Editando '+c.name+'\\')"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0176D3" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div class="ib" onclick="sn(\\'Eliminado: '+c.name+'\\')"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E5444B" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg></div></div></div>';
  }).join('');
}
function fc(f,el){
  document.querySelectorAll('#scr-contactos .fb').forEach(b=>b.classList.remove('on'));
  if(el)el.classList.add('on');
  fc2=f==='todos'?[...contacts]:contacts.filter(c=>c.st===f);
  rc(fc2);
}
function sc2(v){
  const s=[...fc2].sort((a,b)=>v==='nombre'?a.name.localeCompare(b.name):v==='valor'?parseInt(b.clv.replace(/\D/g,''))-parseInt(a.clv.replace(/\D/g,'')):a.st.localeCompare(b.st));
  rc(s);
}
function hs(v){
  if(cs==='contactos'){const f=v.toLowerCase();rc(contacts.filter(c=>c.name.toLowerCase().includes(f)||c.company.toLowerCase().includes(f)));}
}
function rp(){
  document.getElementById('pw').innerHTML=Object.entries(pipeline).map(([stage,d])=>{
    const deals=d.deals.map(x=>'<div class="dc" onclick="sn(\\'Deal: '+x.co+'\\')"><div class="dco">'+x.co+'</div><div class="dct">'+x.ct+'</div><div class="df"><div class="dv">'+x.v+'</div><div class="dp">'+x.p+'%</div></div><div class="pb"><div class="pf" style="width:'+x.p+'%"></div></div></div>').join('');
    return '<div class="pc2"><div class="ph"><div class="phl"><div class="pd" style="background:'+d.col+'"></div><div class="pn">'+stage+'</div></div><div class="pct">'+d.deals.length+'</div></div>'+deals+'</div>';
  }).join('');
}
function rm(){
  const sm3={activo:{l:'Activo',c:'g'},borrador:{l:'Borrador',c:'b'},pausado:{l:'Pausado',c:'a'}};
  document.getElementById('cg2').innerHTML=camps.map(c=>{
    const s=sm3[c.s];
    return '<div class="ccard"><div class="ctop"><div><div class="cname">'+c.n+'</div><div class="ctype">'+c.t+'</div></div><span class="badge '+s.c+'">'+s.l+'</span></div><div class="cst"><div class="cs"><div class="csn">'+c.se.toLocaleString()+'</div><div class="csl">Enviados</div></div><div class="cs"><div class="csn">'+c.o+'%</div><div class="csl">Apertura</div></div><div class="cs"><div class="csn">'+c.cl+'%</div><div class="csl">Clicks</div></div></div><div class="pr"><div class="prb"><div class="prf" style="width:'+c.pr+'%;background:'+c.pc+'"></div></div><div class="prl">'+c.pr+'%</div></div></div>';
  }).join('');
  document.getElementById('sg').innerHTML=segs.map(s=>'<div style="background:'+s.bg+';border-radius:9px;padding:12px;text-align:center;cursor:pointer" onclick="sn(\\'Segmento: '+s.n+'\\')"><div style="font-size:18px;font-weight:700;color:'+s.tc+'">'+s.c+'</div><div style="font-size:10px;color:'+s.tc+';font-weight:500;margin-top:2px">'+s.n+'</div></div>').join('');
}
function rtt(){
  const list=tf==='todos'?tickets:tickets.filter(t=>t.st===tf);
  const sm4={abierto:{l:'Abierto',c:'r'},en_proceso:{l:'En proceso',c:'a'},resuelto:{l:'Resuelto',c:'g'}};
  const pm={high:{l:'Alta',s:'▲'},med:{l:'Media',s:'●'},low:{l:'Baja',s:'▼'}};
  document.getElementById('tl').innerHTML=list.map(t=>{const st=sm4[t.st];const p=pm[t.pr];return '<div class="tk" onclick="sn(\\'Ticket '+t.id+'\\')"><div class="tid">'+t.id+'</div><div class="tb3"><div class="tt">'+t.ti+'</div><div class="tm"><span>'+t.cl+'</span><span>'+t.tm+'</span><span>'+t.ag+'</span></div></div><div class="tri"><span class="badge '+st.c+'">'+st.l+'</span><div class="prio '+t.pr+'">'+p.s+' '+p.l+'</div></div></div>';}).join('');
}
function ft(f,el){document.querySelectorAll('#scr-soporte .fb').forEach(b=>b.classList.remove('on'));if(el)el.classList.add('on');tf=f;rtt();}
function rr(){
  const months=['Ene','Feb','Mar','Abr','May','Jun'];
  const vals=[42,38,55,61,58,74];
  const svg=document.getElementById('ls');
  const w=280,h=70,pad=18;
  const mx=Math.max(...vals),mn=Math.min(...vals)-5;
  const pts=vals.map((v,i)=>({x:pad+(i/(vals.length-1))*(w-2*pad),y:h-pad-(v-mn)/(mx-mn)*(h-2*pad)}));
  const path=pts.map((p,i)=>i===0?'M'+p.x+','+p.y:'L'+p.x+','+p.y).join(' ');
  const area=path+' L'+pts[pts.length-1].x+','+h+' L'+pts[0].x+','+h+' Z';
  svg.innerHTML='<defs><linearGradient id="ag2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0176D3" stop-opacity=".15"/><stop offset="100%" stop-color="#0176D3" stop-opacity="0"/></linearGradient></defs><path d="'+area+'" fill="url(#ag2)"/><path d="'+path+'" stroke="#0176D3" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'+pts.map(p=>'<circle cx="'+p.x+'" cy="'+p.y+'" r="3" fill="#0176D3"/>').join('')+pts.map((p,i)=>'<text x="'+p.x+'" y="'+(h+2)+'" text-anchor="middle" font-size="8.5" fill="#94a3b8" font-family="Poppins,sans-serif">'+months[i]+'</text>').join('');
  const fn=[{l:'Leads',v:480,p:100,c:'#0176D3'},{l:'Contactados',v:312,p:65,c:'#1B96FF'},{l:'Propuesta',v:168,p:35,c:'#06A59A'},{l:'Negociación',v:82,p:17,c:'#6C3ABD'},{l:'Cerrados',v:38,p:8,c:'#27AE60'}];
  document.getElementById('fn').innerHTML=fn.map(f=>'<div class="fnr"><div class="fnl">'+f.l+'</div><div class="fbw"><div class="fff" style="width:'+f.p+'%;background:'+f.c+'">'+f.v+'</div></div><div class="fct">'+f.p+'%</div></div>').join('');
  const vend=[{n:'Ana González',d:14,r:'$186k',c:'42%'},{n:'Pedro Torres',d:11,r:'$142k',c:'38%'},{n:'Laura González',d:9,r:'$118k',c:'35%'},{n:'Carlos Ruiz',d:7,r:'$84k',c:'29%'}];
  document.getElementById('tv').innerHTML=vend.map(v=>'<tr><td class="bold">'+v.n+'</td><td>'+v.d+'</td><td class="bold">'+v.r+'</td><td>'+v.c+'</td></tr>').join('');
  const ret=[{l:'Clientes 1 año+',p:78,c:'#06A59A'},{l:'Clientes 6 meses+',p:61,c:'#0176D3'},{l:'NPS Score',p:73,c:'#6C3ABD'}];
  document.getElementById('re').innerHTML=ret.map(r=>'<div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px"><span style="color:var(--muted)">'+r.l+'</span><strong style="color:var(--navy)">'+r.p+'%</strong></div><div class="pb2"><div class="pf2" style="width:'+r.p+'%;background:'+r.c+'"></div></div></div>').join('');
}
function dbc(){
  const bars=[{l:'Ene',v:38,c:'#B5D4F4'},{l:'Feb',v:45,c:'#85B7EB'},{l:'Mar',v:52,c:'#378ADD'},{l:'Abr',v:49,c:'#378ADD'},{l:'May',v:61,c:'#185FA5'},{l:'Jun',v:74,c:'#032D60'}];
  const max=80;
  document.getElementById('bc').innerHTML=bars.map(b=>'<div class="bw"><div style="flex:1;width:100%;display:flex;align-items:flex-end"><div class="bar" style="height:'+Math.round(b.v/max*100)+'%;background:'+b.c+'"><span class="blb">'+b.l+'</span></div></div><div class="bvl">$'+b.v+'k</div></div>').join('');
}
function dd2(){
  const data=[{l:'Propuesta',v:35,c:'#0176D3'},{l:'Negociación',v:25,c:'#6C3ABD'},{l:'Prospecto',v:22,c:'#94a3b8'},{l:'Cerrado',v:18,c:'#27AE60'}];
  const total=data.reduce((a,b)=>a+b.v,0);
  let angle=-Math.PI/2;const r=35,cx=50,cy=50,sw=13;
  const paths=data.map(d=>{
    const sa=angle,ea=angle+(d.v/total)*2*Math.PI;
    const x1=cx+r*Math.cos(sa),y1=cy+r*Math.sin(sa),x2=cx+r*Math.cos(ea),y2=cy+r*Math.sin(ea);
    const large=ea-sa>Math.PI?1:0;
    angle=ea;
    return '<path d="M '+x1+' '+y1+' A '+r+' '+r+' 0 '+large+' 1 '+x2+' '+y2+'" fill="none" stroke="'+d.c+'" stroke-width="'+sw+'" stroke-linecap="butt"/>';
  }).join('');
  document.getElementById('ds').innerHTML=paths+'<text x="50" y="47" text-anchor="middle" font-size="13" font-weight="700" fill="#032D60" font-family="Poppins,sans-serif">'+total+'</text><text x="50" y="57" text-anchor="middle" font-size="7.5" fill="#94a3b8" font-family="Poppins,sans-serif">deals</text>';
  document.getElementById('dl').innerHTML=data.map(d=>'<div class="li"><div class="ld" style="background:'+d.c+'"></div><div class="ll">'+d.l+'</div><div class="lv">'+d.v+'</div></div>').join('');
}
function om(){
  const M={
    contactos:{t:'Nuevo contacto',h:'<div class="fr2"><div class="fg"><label class="fl">Nombre</label><input class="fi" placeholder="Juan"></div><div class="fg"><label class="fl">Apellido</label><input class="fi" placeholder="García"></div></div><div class="fg"><label class="fl">Email</label><input class="fi" placeholder="juan@empresa.com"></div><div class="fr2"><div class="fg"><label class="fl">Empresa</label><input class="fi" placeholder="Empresa SA"></div><div class="fg"><label class="fl">Segmento</label><select class="fs"><option>Estándar</option><option>Premium</option><option>Enterprise</option></select></div></div>'},
    pipeline:{t:'Nuevo deal',h:'<div class="fg"><label class="fl">Empresa</label><input class="fi" placeholder="Nombre empresa"></div><div class="fr2"><div class="fg"><label class="fl">Valor</label><input class="fi" placeholder="$0"></div><div class="fg"><label class="fl">Etapa</label><select class="fs"><option>Prospecto</option><option>Contactado</option><option>Propuesta</option><option>Negociación</option></select></div></div>'},
    marketing:{t:'Nueva campaña',h:'<div class="fg"><label class="fl">Nombre</label><input class="fi" placeholder="Campaña Q3 2025"></div><div class="fr2"><div class="fg"><label class="fl">Tipo</label><select class="fs"><option>Email</option><option>SMS</option><option>Email + SMS</option></select></div><div class="fg"><label class="fl">Segmento</label><select class="fs"><option>Premium</option><option>Estándar</option><option>Todos</option></select></div></div><div class="fg"><label class="fl">Fecha de envío</label><input class="fi" type="date"></div>'},
    soporte:{t:'Nuevo ticket',h:'<div class="fg"><label class="fl">Título</label><input class="fi" placeholder="Describe el problema..."></div><div class="fr2"><div class="fg"><label class="fl">Cliente</label><select class="fs"><option>Empresa ABC</option><option>Tech SRL</option><option>Grupo Norte</option></select></div><div class="fg"><label class="fl">Prioridad</label><select class="fs"><option>Alta</option><option>Media</option><option>Baja</option></select></div></div><div class="fg"><label class="fl">Descripción</label><textarea class="fi" rows="3"></textarea></div>'},
    dashboard:{t:'Acción rápida',h:'<div style="display:grid;grid-template-columns:1fr 1fr;gap:9px"><div onclick="goto(\\'contactos\\',null);cm()" style="border:1px solid var(--border);border-radius:9px;padding:14px;cursor:pointer;text-align:center"><div style="font-size:22px;margin-bottom:5px">👤</div><div style="font-size:11.5px;font-weight:600;color:var(--navy)">Contacto</div></div><div onclick="goto(\\'pipeline\\',null);cm()" style="border:1px solid var(--border);border-radius:9px;padding:14px;cursor:pointer;text-align:center"><div style="font-size:22px;margin-bottom:5px">📈</div><div style="font-size:11.5px;font-weight:600;color:var(--navy)">Deal</div></div><div onclick="goto(\\'marketing\\',null);cm()" style="border:1px solid var(--border);border-radius:9px;padding:14px;cursor:pointer;text-align:center"><div style="font-size:22px;margin-bottom:5px">📣</div><div style="font-size:11.5px;font-weight:600;color:var(--navy)">Campaña</div></div><div onclick="goto(\\'soporte\\',null);cm()" style="border:1px solid var(--border);border-radius:9px;padding:14px;cursor:pointer;text-align:center"><div style="font-size:22px;margin-bottom:5px">🎧</div><div style="font-size:11.5px;font-weight:600;color:var(--navy)">Ticket</div></div></div>'},
    reportes:{t:'Exportar reporte',h:'<div class="fg"><label class="fl">Tipo</label><select class="fs"><option>Ventas mensuales</option><option>Pipeline detallado</option><option>Retención</option></select></div><div class="fr2"><div class="fg"><label class="fl">Desde</label><input class="fi" type="date"></div><div class="fg"><label class="fl">Hasta</label><input class="fi" type="date"></div></div><div class="fg"><label class="fl">Formato</label><select class="fs"><option>PDF</option><option>Excel</option><option>CSV</option></select></div>'},
  };
  const m=M[cs]||M.contactos;
  document.getElementById('mt').textContent=m.t;
  document.getElementById('mbody').innerHTML=m.h;
  document.getElementById('mb').classList.add('open');
}
function cm(){document.getElementById('mb').classList.remove('open');}
function sm(){cm();sn('Guardado correctamente');}
function sn(msg){const n=document.getElementById('nf');document.getElementById('nt').textContent=msg;n.classList.add('show');setTimeout(()=>n.classList.remove('show'),2000);}
dbc();dd2();rc(contacts);rp();rm();rtt();rr();
<\/script>
</body>
</html>`;
}
