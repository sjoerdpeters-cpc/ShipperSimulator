<!-- Fleet Management -->

<!DOCTYPE html>



<html class="dark" lang="en"><head>

<meta charset="utf-8"/>

<meta content="width=device-width, initial-scale=1.0" name="viewport"/>

<title>Fleet Management - Dutch Waterways</title>

<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\\\&amp;family=JetBrains+Mono:wght@400;500\\\&amp;family=Libre+Caslon+Text:wght@700\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<script id="tailwind-config">

\&#x20;       tailwind.config = {

\&#x20;           darkMode: "class",

\&#x20;           theme: {

\&#x20;               extend: {

\&#x20;                   "colors": {

\&#x20;                       "outline": "#99907c",

\&#x20;                       "on-tertiary-fixed": "#001e2c",

\&#x20;                       "on-background": "#d4e4fa",

\&#x20;                       "on-error-container": "#ffdad6",

\&#x20;                       "on-surface": "#d4e4fa",

\&#x20;                       "on-tertiary-container": "#004b67",

\&#x20;                       "error": "#ffb4ab",

\&#x20;                       "surface-dim": "#051424",

\&#x20;                       "tertiary-fixed-dim": "#7bd0ff",

\&#x20;                       "primary-fixed-dim": "#e9c349",

\&#x20;                       "secondary-fixed": "#dae2fd",

\&#x20;                       "background": "#051424",

\&#x20;                       "surface-container-highest": "#273647",

\&#x20;                       "on-surface-variant": "#d0c5af",

\&#x20;                       "on-primary-container": "#554300",

\&#x20;                       "tertiary-fixed": "#c4e7ff",

\&#x20;                       "on-primary-fixed-variant": "#574500",

\&#x20;                       "on-primary": "#3c2f00",

\&#x20;                       "secondary-container": "#3f465c",

\&#x20;                       "surface-bright": "#2c3a4c",

\&#x20;                       "surface-container-high": "#1c2b3c",

\&#x20;                       "inverse-primary": "#735c00",

\&#x20;                       "on-primary-fixed": "#241a00",

\&#x20;                       "surface-container-lowest": "#010f1f",

\&#x20;                       "inverse-surface": "#d4e4fa",

\&#x20;                       "primary-fixed": "#ffe088",

\&#x20;                       "on-secondary-fixed": "#131b2e",

\&#x20;                       "surface-tint": "#e9c349",

\&#x20;                       "surface-container": "#122131",

\&#x20;                       "surface-container-low": "#0d1c2d",

\&#x20;                       "outline-variant": "#4d4635",

\&#x20;                       "surface-variant": "#273647",

\&#x20;                       "primary": "#f2ca50",

\&#x20;                       "secondary": "#bec6e0",

\&#x20;                       "inverse-on-surface": "#233143",

\&#x20;                       "on-secondary-container": "#adb4ce",

\&#x20;                       "on-secondary-fixed-variant": "#3f465c",

\&#x20;                       "secondary-fixed-dim": "#bec6e0",

\&#x20;                       "on-error": "#690005",

\&#x20;                       "on-tertiary-fixed-variant": "#004c69",

\&#x20;                       "surface": "#051424",

\&#x20;                       "tertiary-container": "#3bbffa",

\&#x20;                       "tertiary": "#93d7ff",

\&#x20;                       "on-tertiary": "#00354a",

\&#x20;                       "error-container": "#93000a",

\&#x20;                       "primary-container": "#d4af37",

\&#x20;                       "on-secondary": "#283044"

\&#x20;                   },

\&#x20;                   "borderRadius": {

\&#x20;                       "DEFAULT": "0.125rem",

\&#x20;                       "lg": "0.25rem",

\&#x20;                       "xl": "0.5rem",

\&#x20;                       "full": "0.75rem"

\&#x20;                   },

\&#x20;                   "spacing": {

\&#x20;                       "panel-padding": "20px",

\&#x20;                       "unit": "4px",

\&#x20;                       "container-gap": "12px",

\&#x20;                       "margin": "24px",

\&#x20;                       "gutter": "16px"

\&#x20;                   },

\&#x20;                   "fontFamily": {

\&#x20;                       "body-md": \\\["Inter"],

\&#x20;                       "data-sm": \\\["JetBrains Mono"],

\&#x20;                       "data-lg": \\\["JetBrains Mono"],

\&#x20;                       "label-caps": \\\["Inter"],

\&#x20;                       "headline-md": \\\["Inter"],

\&#x20;                       "display-lg": \\\["Libre Caslon Text"]

\&#x20;                   },

\&#x20;                   "fontSize": {

\&#x20;                       "body-md": \\\["14px", {"lineHeight": "1.5", "fontWeight": "400"}],

\&#x20;                       "data-sm": \\\["12px", {"lineHeight": "1.0", "fontWeight": "400"}],

\&#x20;                       "data-lg": \\\["18px", {"lineHeight": "1.2", "fontWeight": "500"}],

\&#x20;                       "label-caps": \\\["11px", {"lineHeight": "1.2", "letterSpacing": "0.08em", "fontWeight": "700"}],

\&#x20;                       "headline-md": \\\["20px", {"lineHeight": "1.4", "letterSpacing": "0.01em", "fontWeight": "600"}],

\&#x20;                       "display-lg": \\\["32px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "700"}]

\&#x20;                   }

\&#x20;               },

\&#x20;           },

\&#x20;       }


<style>

\&#x20;       .glass-panel {

\&#x20;           background: linear-gradient(to bottom, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));

\&#x20;           backdrop-filter: blur(20px);

\&#x20;           border: 1px solid rgba(255, 255, 255, 0.1);

\&#x20;       }

\&#x20;       .glow-green { box-shadow: 0 0 12px rgba(16, 185, 129, 0.4); }

\&#x20;       .glow-gold { box-shadow: 0 0 12px rgba(242, 202, 80, 0.4); }

\&#x20;       .material-symbols-outlined {

\&#x20;           font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;

\&#x20;       }

\&#x20;       ::-webkit-scrollbar { width: 6px; }

\&#x20;       ::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }

\&#x20;       ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }


</head>

<body class="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary">

<!-- TopAppBar -->

<header class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-margin h-16 bg-background/90 backdrop-blur-xl border-b border-white/10 bg-surface-container-low/80">

<div class="flex items-center gap-8">

<div class="text-headline-md font-headline-md font-bold text-primary uppercase tracking-widest">

&#x20;               DUTCH WATERWAYS

&#x20;           </div>

<nav class="hidden md:flex items-center gap-6">

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Overview</a>

<a class="text-on-surface border-b-2 border-primary pb-1 font-label-caps text-label-caps" href="#">Fleet</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Contracts</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Ports</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Finances</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Research</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Company</a>

</nav>

</div>

<div class="flex items-center gap-4">

<div class="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg">

<span class="text-primary font-data-sm text-data-sm">17 MAY 2024</span>

<span class="text-on-surface-variant font-data-sm text-data-sm">|</span>

<span class="text-on-surface font-data-sm text-data-sm">09:14</span>

</div>

<div class="flex items-center gap-1">

<button class="p-2 hover:bg-white/5 rounded transition-all material-symbols-outlined text-on-surface-variant" data-icon="timer">timer</button>

<button class="p-2 hover:bg-white/5 rounded transition-all material-symbols-outlined text-on-surface-variant" data-icon="play\\\_arrow">play\_arrow</button>

<button class="p-2 hover:bg-white/5 rounded transition-all material-symbols-outlined text-on-surface-variant" data-icon="settings">settings</button>

<button class="p-2 hover:bg-white/5 rounded transition-all material-symbols-outlined text-on-surface-variant" data-icon="menu">menu</button>

</div>

</div>

</header>

<!-- SideNavBar -->

<aside class="fixed left-0 top-16 bottom-0 z-40 flex flex-col pt-panel-padding bg-surface-container-lowest/90 backdrop-blur-2xl border-r border-white/5 shadow-2xl w-64 rounded-r-xl">

<div class="px-6 mb-8">

<div class="flex items-center gap-3 mb-2">

<div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20">

<span class="material-symbols-outlined text-primary" data-icon="anchor">anchor</span>

</div>

<div>

<h2 class="font-headline-md text-primary font-bold text-\\\[14px] leading-tight">VAN DER MEER SHIPPING</h2>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-tighter">Rotterdam, Netherlands</p>

</div>

</div>

</div>

<nav class="flex-1 space-y-1">

<a class="text-on-surface-variant hover:text-on-surface px-6 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-8 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span> Dashboard

&#x20;           </a>

<a class="bg-primary-container/20 text-primary border-l-4 border-primary px-6 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-8 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="directions\\\_boat">directions\_boat</span> Fleet

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface px-6 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-8 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="assignment">assignment</span> Logistics

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface px-6 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-8 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="anchor">anchor</span> Infrastructure

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface px-6 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-8 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="payments">payments</span> Financials

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface px-6 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-8 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="groups">groups</span> Personnel

&#x20;           </a>

</nav>

<div class="p-6 space-y-1 mt-auto border-t border-white/5">

<a class="text-on-surface-variant hover:text-on-surface px-2 py-2 flex items-center gap-3 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="settings">settings</span> Settings

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface px-2 py-2 flex items-center gap-3 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined" data-icon="help">help</span> Support

&#x20;           </a>

</div>

</aside>

<!-- Main Canvas -->

<main class="ml-64 pt-16 h-screen overflow-hidden flex flex-col bg-surface-dim">

<!-- Fleet HUD Header -->

<div class="px-margin py-6 flex justify-between items-end">

<div>

<h1 class="font-display-lg text-display-lg text-primary mb-1">Fleet Management</h1>

<p class="text-on-surface-variant font-body-md flex items-center gap-2">

<span class="w-2 h-2 rounded-full bg-primary glow-gold"></span>

&#x20;                   26 Operational Vessels Across North Sea \&amp; Dutch Waterways

&#x20;               </p>

</div>

<div class="flex gap-4">

<div class="flex glass-panel rounded-xl p-1">

<button class="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps">Active</button>

<button class="px-4 py-2 text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps">Docked</button>

<button class="px-4 py-2 text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps">Alerts</button>

</div>

<button class="px-6 py-2 bg-slate-800 border-l-4 border-primary text-primary font-label-caps text-label-caps flex items-center gap-2 rounded-r-lg">

<span class="material-symbols-outlined text-\\\[18px]" data-icon="add">add</span> NEW CONTRACT

&#x20;               </button>

</div>

</div>

<!-- Fleet Grid Layout -->

<div class="flex-1 px-margin pb-margin grid grid-cols-12 gap-gutter overflow-hidden">

<!-- Vessels Data Table -->

<section class="col-span-8 flex flex-col gap-gutter overflow-hidden">

<div class="glass-panel rounded-xl flex-1 flex flex-col overflow-hidden">

<!-- Filters/Search Bar -->

<div class="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">

<div class="flex gap-4">

<div class="relative">

<span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-\\\[18px]" data-icon="search">search</span>

<input class="bg-background/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 font-data-sm text-data-sm text-on-surface w-64 focus:outline-none focus:border-primary" placeholder="SEARCH VESSEL NAME..." type="text"/>

</div>

<select class="bg-background/50 border border-white/10 rounded-lg px-4 py-2 font-data-sm text-data-sm text-on-surface-variant focus:outline-none">

<option>ALL TYPES</option>

<option>DRY CARGO</option>

<option>LIQUID CARGO</option>

</select>

</div>

<div class="text-on-surface-variant font-data-sm text-data-sm flex items-center gap-4">

<span>DISPLAYING: 26 / 26</span>

<button class="material-symbols-outlined hover:text-primary transition-colors" data-icon="refresh">refresh</button>

</div>

</div>

<!-- Table Container -->

<div class="flex-1 overflow-y-auto">

<table class="w-full text-left border-collapse">

<thead class="sticky top-0 bg-surface-container-high/90 backdrop-blur z-10 border-b border-white/5">

<tr>

<th class="px-6 py-3 font-label-caps text-label-caps text-primary">VESSEL NAME</th>

<th class="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">TYPE</th>

<th class="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">LOCATION</th>

<th class="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">STATUS</th>

<th class="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">EFFICIENCY</th>

<th class="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">ETA</th>

</tr>

</thead>

<tbody class="divide-y divide-white/5">

<!-- Row 1: Selected State -->

<tr class="bg-primary/5 border-l-4 border-primary group cursor-pointer">

<td class="px-6 py-4">

<div class="flex items-center gap-3">

<div class="w-2 h-2 rounded-full bg-emerald-400 glow-green"></div>

<span class="font-data-lg text-data-lg text-on-surface">M/V NOORDZEE</span>

</div>

</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">DRY CARGO</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">BETWEEN ROTTERDAM \\\&amp; DUISBURG</td>

<td class="px-6 py-4">

<span class="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-\\\[10px] font-bold tracking-widest border border-emerald-500/20">EN ROUTE</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-3">

<div class="w-16 h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-primary" style="width: 92%"></div>

</div>

<span class="font-data-sm text-data-sm text-primary">92%</span>

</div>

</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">19 MAY 14:30</td>

</tr>

<!-- Row 2 -->

<tr class="hover:bg-white/5 transition-colors cursor-pointer group">

<td class="px-6 py-4">

<div class="flex items-center gap-3">

<div class="w-2 h-2 rounded-full bg-emerald-400"></div>

<span class="font-data-lg text-data-lg text-on-surface">M/V AMSTERDAM</span>

</div>

</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">CONTAINER</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">PORT OF ROTTERDAM</td>

<td class="px-6 py-4">

<span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-\\\[10px] font-bold tracking-widest border border-blue-500/20">LOADING</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-3">

<div class="w-16 h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-primary" style="width: 85%"></div>

</div>

<span class="font-data-sm text-data-sm text-primary">85%</span>

</div>

</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">---</td>

</tr>

<!-- Row 3 -->

<tr class="hover:bg-white/5 transition-colors cursor-pointer group">

<td class="px-6 py-4">

<div class="flex items-center gap-3">

<div class="w-2 h-2 rounded-full bg-amber-500"></div>

<span class="font-data-lg text-data-lg text-on-surface">M/V RHINE STAR</span>

</div>

</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">LIQUID CARGO</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">PORT OF ANTWERP</td>

<td class="px-6 py-4">

<span class="px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-\\\[10px] font-bold tracking-widest border border-amber-500/20">MAINTENANCE</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-3">

<div class="w-16 h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-primary" style="width: 42%"></div>

</div>

<span class="font-data-sm text-data-sm text-amber-400">42%</span>

</div>

</td>

<td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">22 MAY 08:00</td>

</tr>

<!-- Dummy rows to show density -->

<script>

\&#x20;                                   for(let i=0; i<10; i++) {

\&#x20;                                       document.write(`

\&#x20;                                       <tr class="hover:bg-white/5 transition-colors cursor-pointer group">

\&#x20;                                           <td class="px-6 py-4">

\&#x20;                                               <div class="flex items-center gap-3">

\&#x20;                                                   <div class="w-2 h-2 rounded-full bg-emerald-400"></div>

\&#x20;                                                   <span class="font-data-lg text-data-lg text-on-surface">M/V VESSEL ${100 + i}</span>

\&#x20;                                               </div>

\&#x20;                                           </td>

\&#x20;                                           <td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">DRY CARGO</td>

\&#x20;                                           <td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">WESSEL RIVER</td>

\&#x20;                                           <td class="px-6 py-4">

\&#x20;                                               <span class="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-\\\[10px] font-bold tracking-widest border border-emerald-500/20">EN ROUTE</span>

\&#x20;                                           </td>

\&#x20;                                           <td class="px-6 py-4">

\&#x20;                                               <div class="flex items-center gap-3">

\&#x20;                                                   <div class="w-16 h-1 bg-white/10 rounded-full overflow-hidden">

\&#x20;                                                       <div class="h-full bg-primary" style="width: 78%"></div>

\&#x20;                                                   </div>

\&#x20;                                                   <span class="font-data-sm text-data-sm text-primary">78%</span>

\&#x20;                                               </div>

\&#x20;                                           </td>

\&#x20;                                           <td class="px-6 py-4 font-data-sm text-data-sm text-on-surface-variant">20 MAY 12:00</td>

\&#x20;                                       </tr>

\&#x20;                                       `);

\&#x20;                                   }


</tbody>

</table>

</div>

</div>

</section>

<!-- Vessel Detail Panel -->

<aside class="col-span-4 flex flex-col gap-gutter overflow-hidden">

<div class="glass-panel rounded-xl flex-1 flex flex-col p-6 overflow-y-auto">

<!-- Ship Render -->

<div class="relative w-full aspect-video rounded-lg overflow-hidden mb-6 bg-slate-900 border border-white/5">

<img alt="Dry Cargo Vessel" class="w-full h-full object-cover mix-blend-luminosity opacity-80" data-alt="A detailed 3D technical rendering of a large Dutch inland dry cargo vessel cruising through a misty canal. The ship is dark metallic grey with golden highlights, featuring a precisely detailed bridge and cargo hold. The lighting is low-key with high-contrast shadows, emphasizing the tactile, industrial textures of the vessel. The atmosphere is calm and professional, following a dark tactical HUD aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC86sxevJVNVjkS-1wyAUqvg2nGlfv37ydiJTEHfOyHB5gR\\\_sHYf0T5AWRAeBgZhCrujCNokOnU1dX4CqyaQLXscZfXfsEqdpLA3VtYMKYfAyIvfQywIUODgT-IowfkBelthS-Gc3r4z5VX1ajyaiFEpC4-HmHot7NNI1qllRtgjFsJ3hjGOu1CASuBqKKTuaqQpUX5hJRQ3vOIbRYGxY3z94dhB2qtB78DHJvYj1Ly0Nk5EncgdIuuwI0QZFBFu9sPmR-0CYlUzQ"/>

<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

<div class="absolute bottom-4 left-4">

<span class="font-label-caps text-label-caps text-primary bg-background/80 px-3 py-1 rounded backdrop-blur">LIVE VIEW : CAM 04</span>

</div>

</div>

<!-- Tech Specs -->

<div class="space-y-6">

<div>

<div class="flex justify-between items-baseline mb-2">

<h3 class="font-display-lg text-\\\[24px] text-primary">M/V NOORDZEE</h3>

<span class="font-data-sm text-data-sm text-emerald-400">ON SCHEDULE</span>

</div>

<p class="font-label-caps text-\\\[10px] text-on-surface-variant uppercase tracking-widest border-b border-white/5 pb-2">Technical Specifications</p>

</div>

<div class="grid grid-cols-2 gap-4">

<div class="bg-white/5 p-3 rounded-lg border border-white/5">

<p class="font-label-caps text-\\\[10px] text-on-surface-variant mb-1">TYPE</p>

<p class="font-data-lg text-data-lg text-on-surface">DRY CARGO</p>

</div>

<div class="bg-white/5 p-3 rounded-lg border border-white/5">

<p class="font-label-caps text-\\\[10px] text-on-surface-variant mb-1">DIMENSIONS</p>

<p class="font-data-lg text-data-lg text-on-surface">110m x 11.4m</p>

</div>

<div class="bg-white/5 p-3 rounded-lg border border-white/5">

<p class="font-label-caps text-\\\[10px] text-on-surface-variant mb-1">CAPACITY</p>

<p class="font-data-lg text-data-lg text-on-surface">3,250 t</p>

</div>

<div class="bg-white/5 p-3 rounded-lg border border-white/5">

<p class="font-label-caps text-\\\[10px] text-on-surface-variant mb-1">ENGINE</p>

<p class="font-data-lg text-data-lg text-on-surface">1,800 HP</p>

</div>

</div>

<!-- Telemetry Stats -->

<div class="space-y-4">

<div>

<div class="flex justify-between font-label-caps text-label-caps mb-1">

<span class="text-on-surface-variant">FUEL LEVEL</span>

<span class="text-on-surface">62% (28,600 L)</span>

</div>

<div class="h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-primary" style="width: 62%"></div>

</div>

</div>

<div>

<div class="flex justify-between font-label-caps text-label-caps mb-1">

<span class="text-on-surface-variant">CARGO LOAD</span>

<span class="text-on-surface">91% (2,957 t)</span>

</div>

<div class="h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-emerald-400" style="width: 91%"></div>

</div>

</div>

<div>

<div class="flex justify-between font-label-caps text-label-caps mb-1">

<span class="text-on-surface-variant">HULL CONDITION</span>

<span class="text-on-surface">98%</span>

</div>

<div class="h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-sky-400" style="width: 98%"></div>

</div>

</div>

</div>

<!-- Real-time Location Info -->

<div class="glass-panel p-4 rounded-xl border-sky-400/20">

<h4 class="font-label-caps text-label-caps text-sky-400 mb-3 flex items-center gap-2">

<span class="material-symbols-outlined text-\\\[16px]" data-icon="location\\\_on">location\_on</span>

&#x20;                               LIVE TELEMETRY

&#x20;                           </h4>

<div class="space-y-2">

<div class="flex justify-between font-data-sm text-data-sm">

<span class="text-on-surface-variant">SPEED:</span>

<span class="text-on-surface">18.6 km/h</span>

</div>

<div class="flex justify-between font-data-sm text-data-sm">

<span class="text-on-surface-variant">HEADING:</span>

<span class="text-on-surface">112° ESE</span>

</div>

<div class="flex justify-between font-data-sm text-data-sm">

<span class="text-on-surface-variant">LAST PORT:</span>

<span class="text-on-surface">ROTTERDAM</span>

</div>

</div>

</div>

<!-- Action Buttons -->

<div class="flex gap-3">

<button class="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg font-label-caps text-label-caps text-on-surface hover:bg-white/10 transition-colors">COMMUNICATE</button>

<button class="flex-1 py-3 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:brightness-110 transition-all">VIEW ON MAP</button>

</div>

</div>

</div>

</aside>

</div>

</main>

<!-- Bottom Indicator for Mobile View Suppression Logic (Not visible but follows hierarchy) -->

<footer class="fixed bottom-0 left-0 right-0 h-1 md:hidden bg-primary"></footer>

</body></html>



<!-- Contract Marketplace -->

<!DOCTYPE html>



<html class="dark" lang="en"><head>

<meta charset="utf-8"/>

<meta content="width=device-width, initial-scale=1.0" name="viewport"/>

<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\\\&amp;family=JetBrains+Mono:wght@400;500\\\&amp;family=Libre+Caslon+Text:wght@700\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<style>

\&#x20;   .glass-panel {

\&#x20;     background: linear-gradient(to bottom, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));

\&#x20;     backdrop-filter: blur(20px);

\&#x20;     border: 1px solid rgba(255, 255, 255, 0.1);

\&#x20;   }

\&#x20;   .amber-glow {

\&#x20;     box-shadow: inset 0 0 15px rgba(242, 202, 80, 0.2), 0 0 10px rgba(242, 202, 80, 0.1);

\&#x20;     border-left: 4px solid #f2ca50 !important;

\&#x20;   }

\&#x20;   .material-symbols-outlined {

\&#x20;     font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;

\&#x20;   }


<script id="tailwind-config">

\&#x20;   tailwind.config = {

\&#x20;     darkMode: "class",

\&#x20;     theme: {

\&#x20;       extend: {

\&#x20;         "colors": {

\&#x20;           "outline": "#99907c",

\&#x20;           "on-tertiary-fixed": "#001e2c",

\&#x20;           "on-background": "#d4e4fa",

\&#x20;           "on-error-container": "#ffdad6",

\&#x20;           "on-surface": "#d4e4fa",

\&#x20;           "on-tertiary-container": "#004b67",

\&#x20;           "error": "#ffb4ab",

\&#x20;           "surface-dim": "#051424",

\&#x20;           "tertiary-fixed-dim": "#7bd0ff",

\&#x20;           "primary-fixed-dim": "#e9c349",

\&#x20;           "secondary-fixed": "#dae2fd",

\&#x20;           "background": "#051424",

\&#x20;           "surface-container-highest": "#273647",

\&#x20;           "on-surface-variant": "#d0c5af",

\&#x20;           "on-primary-container": "#554300",

\&#x20;           "tertiary-fixed": "#c4e7ff",

\&#x20;           "on-primary-fixed-variant": "#574500",

\&#x20;           "on-primary": "#3c2f00",

\&#x20;           "secondary-container": "#3f465c",

\&#x20;           "surface-bright": "#2c3a4c",

\&#x20;           "surface-container-high": "#1c2b3c",

\&#x20;           "inverse-primary": "#735c00",

\&#x20;           "on-primary-fixed": "#241a00",

\&#x20;           "surface-container-lowest": "#010f1f",

\&#x20;           "inverse-surface": "#d4e4fa",

\&#x20;           "primary-fixed": "#ffe088",

\&#x20;           "on-secondary-fixed": "#131b2e",

\&#x20;           "surface-tint": "#e9c349",

\&#x20;           "surface-container": "#122131",

\&#x20;           "surface-container-low": "#0d1c2d",

\&#x20;           "outline-variant": "#4d4635",

\&#x20;           "surface-variant": "#273647",

\&#x20;           "primary": "#f2ca50",

\&#x20;           "secondary": "#bec6e0",

\&#x20;           "inverse-on-surface": "#233143",

\&#x20;           "on-secondary-container": "#adb4ce",

\&#x20;           "on-secondary-fixed-variant": "#3f465c",

\&#x20;           "secondary-fixed-dim": "#bec6e0",

\&#x20;           "on-error": "#690005",

\&#x20;           "on-tertiary-fixed-variant": "#004c69",

\&#x20;           "surface": "#051424",

\&#x20;           "tertiary-container": "#3bbffa",

\&#x20;           "tertiary": "#93d7ff",

\&#x20;           "on-tertiary": "#00354a",

\&#x20;           "error-container": "#93000a",

\&#x20;           "primary-container": "#d4af37",

\&#x20;           "on-secondary": "#283044"

\&#x20;         },

\&#x20;         "borderRadius": {

\&#x20;           "DEFAULT": "0.125rem",

\&#x20;           "lg": "0.25rem",

\&#x20;           "xl": "0.5rem",

\&#x20;           "full": "0.75rem"

\&#x20;         },

\&#x20;         "spacing": {

\&#x20;           "panel-padding": "20px",

\&#x20;           "unit": "4px",

\&#x20;           "container-gap": "12px",

\&#x20;           "margin": "24px",

\&#x20;           "gutter": "16px"

\&#x20;         },

\&#x20;         "fontFamily": {

\&#x20;           "body-md": \\\["Inter"],

\&#x20;           "data-sm": \\\["JetBrains Mono"],

\&#x20;           "data-lg": \\\["JetBrains Mono"],

\&#x20;           "label-caps": \\\["Inter"],

\&#x20;           "headline-md": \\\["Inter"],

\&#x20;           "display-lg": \\\["Libre Caslon Text"]

\&#x20;         },

\&#x20;         "fontSize": {

\&#x20;           "body-md": \\\["14px", {"lineHeight": "1.5", "fontWeight": "400"}],

\&#x20;           "data-sm": \\\["12px", {"lineHeight": "1.0", "fontWeight": "400"}],

\&#x20;           "data-lg": \\\["18px", {"lineHeight": "1.2", "fontWeight": "500"}],

\&#x20;           "label-caps": \\\["11px", {"lineHeight": "1.2", "letterSpacing": "0.08em", "fontWeight": "700"}],

\&#x20;           "headline-md": \\\["20px", {"lineHeight": "1.4", "letterSpacing": "0.01em", "fontWeight": "600"}],

\&#x20;           "display-lg": \\\["32px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "700"}]

\&#x20;         }

\&#x20;       },

\&#x20;     },

\&#x20;   }


</head>

<body class="bg-background text-on-surface font-body-md min-h-screen selection:bg-primary/30 selection:text-primary overflow-hidden">

<!-- Top Navigation Shell -->

<header class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-margin h-16 bg-background/90 backdrop-blur-xl border-b border-white/10 bg-surface-container-low/80">

<div class="text-headline-md font-headline-md font-bold text-primary uppercase tracking-widest">DUTCH WATERWAYS</div>

<nav class="hidden md:flex items-center gap-8 h-full">

<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">Overview</a>

<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">Fleet</a>

<a class="font-label-caps text-label-caps text-on-surface border-b-2 border-primary pb-1" href="#">Contracts</a>

<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">Ports</a>

<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">Finances</a>

<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">Research</a>

<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">Company</a>

</nav>

<div class="flex items-center gap-4">

<div class="flex items-center gap-2 text-primary font-data-sm text-data-sm px-3 py-1 bg-white/5 rounded-lg border border-white/10">

<span class="material-symbols-outlined text-\\\[16px]">timer</span>

<span>17 MAY 2024 · 09:14</span>

</div>

<div class="flex items-center gap-1">

<button class="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-all duration-150 rounded active:bg-white/10"><span class="material-symbols-outlined">play\_arrow</span></button>

<button class="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-all duration-150 rounded active:bg-white/10"><span class="material-symbols-outlined">settings</span></button>

<button class="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-all duration-150 rounded active:bg-white/10"><span class="material-symbols-outlined">menu</span></button>

</div>

</div>

</header>

<!-- Side Navigation Shell -->

<aside class="fixed left-0 top-16 bottom-0 z-40 flex flex-col pt-panel-padding bg-surface-container-lowest/90 backdrop-blur-2xl border-r border-white/5 shadow-2xl w-64 rounded-r-xl transition-all duration-200 ease-in-out">

<div class="px-6 mb-8">

<div class="flex items-center gap-3">

<div class="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center border border-primary/20">

<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">anchor</span>

</div>

<div>

<h2 class="font-headline-md text-primary font-bold text-\\\[14px]">VAN DER MEER</h2>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-wider">Rotterdam, NL</p>

</div>

</div>

</div>

<nav class="flex-1 space-y-1">

<a class="text-on-surface-variant hover:text-on-surface px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-5 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined text-tertiary">dashboard</span> Dashboard

&#x20;     </a>

<a class="text-on-surface-variant hover:text-on-surface px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-5 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined text-tertiary">directions\_boat</span> Fleet

&#x20;     </a>

<a class="bg-primary-container/20 text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-5 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">assignment</span> Logistics

&#x20;     </a>

<a class="text-on-surface-variant hover:text-on-surface px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-5 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined text-tertiary">anchor</span> Infrastructure

&#x20;     </a>

<a class="text-on-surface-variant hover:text-on-surface px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-5 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined text-tertiary">payments</span> Financials

&#x20;     </a>

<a class="text-on-surface-variant hover:text-on-surface px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out hover:pl-5 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined text-tertiary">groups</span> Personnel

&#x20;     </a>

</nav>

<div class="p-4 mt-auto space-y-4">

<button class="w-full bg-primary text-on-primary py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-label-caps text-label-caps hover:brightness-110 active:scale-95 transition-all">

<span class="material-symbols-outlined text-\\\[18px]">add</span> New Contract

&#x20;     </button>

<div class="flex flex-col gap-1 border-t border-white/5 pt-4">

<a class="text-on-surface-variant hover:text-on-surface px-4 py-2 flex items-center gap-3 text-label-caps" href="#">

<span class="material-symbols-outlined text-\\\[18px]">settings</span> Settings

&#x20;       </a>

<a class="text-on-surface-variant hover:text-on-surface px-4 py-2 flex items-center gap-3 text-label-caps" href="#">

<span class="material-symbols-outlined text-\\\[18px]">help</span> Support

&#x20;       </a>

</div>

</div>

</aside>

<!-- Main Content Area -->

<main class="ml-64 pt-16 h-screen overflow-y-auto bg-\\\[url('https://images.unsplash.com/photo-1544411047-c49158302062?ixlib=rb-4.0.3\\\&amp;auto=format\\\&amp;fit=crop\\\&amp;q=80\\\&amp;w=2000')] bg-cover bg-center bg-fixed">

<div class="absolute inset-0 bg-background/80 pointer-events-none"></div>

<div class="relative z-10 p-margin max-w-\\\[1400px] mx-auto">

<!-- Page Header -->

<div class="flex justify-between items-end mb-8">

<div>

<h1 class="font-display-lg text-display-lg text-primary mb-2">Contract Marketplace</h1>

<p class="text-on-surface-variant flex items-center gap-2">

<span class="w-2 h-2 rounded-full bg-emerald-500 shadow-\\\[0\\\_0\\\_8px\\\_rgba(16,185,129,0.6)]"></span>

&#x20;           Live Market: 24 new contracts available in the Benelux region

&#x20;         </p>

</div>

<div class="flex gap-3">

<div class="glass-panel px-4 py-2 rounded-lg flex items-center gap-4">

<div class="text-right">

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Balance</p>

<p class="text-primary font-data-lg text-data-lg">€ 14,250,880</p>

</div>

<div class="h-8 w-px bg-white/10"></div>

<div class="text-right">

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Capacity</p>

<p class="text-tertiary font-data-lg text-data-lg">84%</p>

</div>

</div>

</div>

</div>

<div class="grid grid-cols-12 gap-gutter">

<!-- Filters Sidebar -->

<div class="col-span-3 space-y-gutter">

<div class="glass-panel p-panel-padding rounded-xl">

<div class="flex items-center justify-between mb-6">

<h3 class="font-label-caps text-label-caps text-primary">Market Filters</h3>

<button class="text-\\\[10px] text-on-surface-variant hover:text-primary transition-colors underline uppercase tracking-tighter">Reset</button>

</div>

<div class="space-y-6">

<!-- Cargo Type -->

<div>

<label class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps block mb-3">Cargo Type</label>

<div class="grid grid-cols-1 gap-2">

<label class="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all">

<input checked="" class="form-checkbox bg-transparent border-primary/40 rounded text-primary focus:ring-0" type="checkbox"/>

<span class="text-body-md text-on-surface flex-1">Industrial Steel</span>

<span class="text-data-sm text-on-surface-variant">12</span>

</label>

<label class="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all">

<input checked="" class="form-checkbox bg-transparent border-primary/40 rounded text-primary focus:ring-0" type="checkbox"/>

<span class="text-body-md text-on-surface flex-1">Bulk Grain</span>

<span class="text-data-sm text-on-surface-variant">08</span>

</label>

<label class="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all">

<input class="form-checkbox bg-transparent border-primary/40 rounded text-primary focus:ring-0" type="checkbox"/>

<span class="text-body-md text-on-surface flex-1">Chemicals (HAZMAT)</span>

<span class="text-data-sm text-on-surface-variant">04</span>

</label>

</div>

</div>

<!-- Payout Filter -->

<div>

<label class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps block mb-3">Minimum Payout (€)</label>

<input class="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" max="500000" min="10000" type="range" value="75000"/>

<div class="flex justify-between mt-2 font-data-sm text-data-sm text-on-surface-variant">

<span>10k</span>

<span class="text-primary">75k+</span>

<span>500k</span>

</div>

</div>

<!-- Ship Class -->

<div>

<label class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps block mb-3">Vessel Eligibility</label>

<select class="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-body-md text-on-surface focus:border-primary focus:ring-0 outline-none">

<option>Any Class</option>

<option>Class I - Spits</option>

<option>Class II - Kempenaar</option>

<option>Class IV - Rhine-Herne</option>

</select>

</div>

</div>

</div>

<div class="glass-panel p-panel-padding rounded-xl bg-primary/5 border-primary/20">

<h4 class="font-label-caps text-label-caps text-primary mb-2 flex items-center gap-2">

<span class="material-symbols-outlined text-\\\[16px]" style="font-variation-settings: 'FILL' 1;">workspace\_premium</span>

&#x20;             VIP OPPORTUNITIES

&#x20;           </h4>

<p class="text-\\\[12px] text-on-surface-variant leading-relaxed">Complete 3 more industrial steel deliveries to unlock high-priority government contracts in Amsterdam.</p>

</div>

</div>

<!-- Contracts List Grid -->

<div class="col-span-9 grid grid-cols-1 md:grid-cols-2 gap-gutter">

<!-- High Priority Contract -->

<div class="glass-panel rounded-xl flex flex-col amber-glow group hover:bg-white/5 transition-all">

<div class="p-panel-padding flex justify-between items-start border-b border-white/5">

<div>

<div class="flex items-center gap-2 mb-1">

<span class="px-2 py-0.5 bg-primary/10 text-primary text-\\\[10px] font-bold rounded uppercase tracking-widest border border-primary/20">High Priority</span>

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Industrial</span>

</div>

<h3 class="font-headline-md text-headline-md text-on-surface">Rotterdam → Basel</h3>

<p class="text-\\\[12px] text-on-surface-variant">Refinery Industrial Complex A-4</p>

</div>

<div class="text-right">

<p class="font-data-lg text-data-lg text-primary">€ 285,450</p>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Base Payout</p>

</div>

</div>

<div class="p-panel-padding flex-1">

<div class="grid grid-cols-2 gap-4 mb-6">

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">layers</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Cargo</p>

<p class="text-body-md text-on-surface">Steel Coils (4.2k t)</p>

</div>

</div>

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">schedule</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Deadline</p>

<p class="text-body-md text-on-surface text-error font-semibold">2d 14h REMAINING</p>

</div>

</div>

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">route</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Distance</p>

<p class="text-body-md text-on-surface">840km (Rhine Route)</p>

</div>

</div>

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">shield</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Security</p>

<p class="text-body-md text-on-surface">Class II Escort Incl.</p>

</div>

</div>

</div>

<div class="relative h-1 w-full bg-white/5 rounded-full overflow-hidden mb-8">

<div class="absolute left-0 top-0 h-full w-\\\[65%] bg-primary shadow-\\\[0\\\_0\\\_8px\\\_rgba(242,202,80,0.4)]"></div>

<div class="absolute right-0 top-0 h-full w-\\\[35%] bg-white/10"></div>

</div>

</div>

<div class="p-panel-padding bg-white/5 mt-auto border-t border-white/5 rounded-b-xl flex gap-3">

<button class="flex-1 bg-primary text-on-primary font-label-caps text-label-caps py-3 rounded hover:brightness-110 active:scale-\\\[0.98] transition-all">Accept Contract</button>

<button class="w-12 border border-white/10 flex items-center justify-center rounded hover:bg-white/10 transition-colors">

<span class="material-symbols-outlined text-on-surface-variant">info</span>

</button>

</div>

</div>

<!-- Normal Contract 1 -->

<div class="glass-panel rounded-xl flex flex-col group hover:bg-white/5 transition-all">

<div class="p-panel-padding flex justify-between items-start border-b border-white/5">

<div>

<div class="flex items-center gap-2 mb-1">

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Standard</span>

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Agri-Bulk</span>

</div>

<h3 class="font-headline-md text-headline-md text-on-surface">Zwolle → Antwerp</h3>

<p class="text-\\\[12px] text-on-surface-variant">Central Grain Silo Station 2</p>

</div>

<div class="text-right">

<p class="font-data-lg text-data-lg text-primary">€ 142,800</p>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Base Payout</p>

</div>

</div>

<div class="p-panel-padding flex-1">

<div class="grid grid-cols-2 gap-4 mb-6">

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">bakery\_dining</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Cargo</p>

<p class="text-body-md text-on-surface">Wheat (3.6k t)</p>

</div>

</div>

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">schedule</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Deadline</p>

<p class="text-body-md text-on-surface">4d 06h</p>

</div>

</div>

</div>

<img class="w-full h-24 object-cover rounded-lg mb-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500" data-alt="A cinematic, wide shot of a modern river barge carrying shipping containers through a historic European waterway at dusk. The lighting is moody with warm sunset tones reflecting off the dark water, maintaining a dark-mode professional tactical aesthetic with gold and sky blue accents in the surrounding environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDruznuwYFnfkpLazW-w648is-fmh\\\_8aUa1iAYFya-wTEs3bo-7S8XFR5jCBcPHH5Rt2si03XrMQmOXB1mimGec6aMvONX4oi5wgf2sCANGB\\\_pzG\\\_Vls8Nm-WilT9Us5\\\_-5xhyDa2K8Nd9xmZjgzAqlUL7fiooN8TImHpc7lt5-TJFxKnqWqEPnAMhb24Mn9h9F7opnlMZz2uil8xqTADKKg76IVIXGKiijTPMPZpw\\\_7tX2aIcSMVAszYGbJPFPZv84p3ojlzHc3g"/>

</div>

<div class="p-panel-padding bg-white/5 mt-auto border-t border-white/5 rounded-b-xl flex gap-3">

<button class="flex-1 bg-white/10 text-on-surface font-label-caps text-label-caps py-3 rounded hover:bg-primary hover:text-on-primary transition-all">Accept Contract</button>

</div>

</div>

<!-- Normal Contract 2 -->

<div class="glass-panel rounded-xl flex flex-col group hover:bg-white/5 transition-all">

<div class="p-panel-padding flex justify-between items-start border-b border-white/5">

<div>

<div class="flex items-center gap-2 mb-1">

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Standard</span>

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Chemical</span>

</div>

<h3 class="font-headline-md text-headline-md text-on-surface">Duisburg → Harlingen</h3>

<p class="text-\\\[12px] text-on-surface-variant">Chem-Parks North Terminal</p>

</div>

<div class="text-right">

<p class="font-data-lg text-data-lg text-primary">€ 187,950</p>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Base Payout</p>

</div>

</div>

<div class="p-panel-padding flex-1">

<div class="grid grid-cols-2 gap-4 mb-6">

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-error text-\\\[20px]">science</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Cargo</p>

<p class="text-body-md text-on-surface">Methanol (2.8k t)</p>

</div>

</div>

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">schedule</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Deadline</p>

<p class="text-body-md text-on-surface">3d 12h</p>

</div>

</div>

</div>

<div class="p-3 bg-error/10 border border-error/20 rounded-lg flex gap-3 items-center">

<span class="material-symbols-outlined text-error">warning</span>

<p class="text-\\\[11px] text-on-error-container">Requires HAZMAT Level 3 Certification and specialized liquid cargo tanker vessel.</p>

</div>

</div>

<div class="p-panel-padding bg-white/5 mt-auto border-t border-white/5 rounded-b-xl flex gap-3">

<button class="flex-1 border border-white/10 text-on-surface-variant font-label-caps text-label-caps py-3 rounded cursor-not-allowed opacity-50">Ineligible Fleet</button>

</div>

</div>

<!-- Normal Contract 3 -->

<div class="glass-panel rounded-xl flex flex-col group hover:bg-white/5 transition-all">

<div class="p-panel-padding flex justify-between items-start border-b border-white/5">

<div>

<div class="flex items-center gap-2 mb-1">

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Quick Run</span>

<span class="px-2 py-0.5 bg-white/5 text-on-surface-variant text-\\\[10px] font-bold rounded uppercase tracking-widest border border-white/10">Industrial</span>

</div>

<h3 class="font-headline-md text-headline-md text-on-surface">Amsterdam → Utrecht</h3>

<p class="text-\\\[12px] text-on-surface-variant">Central Canal Logistics Hub</p>

</div>

<div class="text-right">

<p class="font-data-lg text-data-lg text-primary">€ 85,200</p>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Base Payout</p>

</div>

</div>

<div class="p-panel-padding flex-1">

<div class="grid grid-cols-2 gap-4 mb-6">

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">precision\_manufacturing</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Cargo</p>

<p class="text-body-md text-on-surface">Machinery (88 TEU)</p>

</div>

</div>

<div class="flex items-center gap-3">

<div class="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-tertiary text-\\\[20px]">schedule</span>

</div>

<div>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">Deadline</p>

<p class="text-body-md text-on-surface">1d 04h</p>

</div>

</div>

</div>

</div>

<div class="p-panel-padding bg-white/5 mt-auto border-t border-white/5 rounded-b-xl flex gap-3">

<button class="flex-1 bg-white/10 text-on-surface font-label-caps text-label-caps py-3 rounded hover:bg-primary hover:text-on-primary transition-all">Accept Contract</button>

</div>

</div>

</div>

</div>

</div>

</main>

<!-- Map Thumbnail (Bottom Right Hud Style) -->

<div class="fixed bottom-margin right-margin z-50 w-64 glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 group">

<div class="absolute inset-0 pointer-events-none border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300"></div>

<div class="relative h-40">

<img class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" data-alt="A stylized satellite map view of the Netherlands waterways at night. The map shows intricate networks of canals and rivers illuminated with glowing blue and gold lines representing active shipping routes. Tiny pulsating dots indicate vessel positions, maintaining a high-tech naval bridge aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwJddcGB\\\_tj6uCqeigLcvW4fUk\\\_jjr8ToTxcyfnTmuV-qhzuazxHWIPTuqLKaNtDxnCYVPzu7eU0sCXL1HG8kuwWmNqwN5kav66Alj7OqLbTUvuEMPINO5nHa8Ym1j7Gxt4Q7Db7NXxbwFqRaYzsGDOsxSFO0ADAEXxjqinz1\\\_ZgZNHuXi8NZi9pScMU4k1rS2WJCwPcQaELVXU7V\\\_AfYt1X9u---fcHlq9McOchDgnoMqWc3TnwSw8N4Oskdsde5HZ-NB3aYRJg"/>

<div class="absolute inset-0 flex items-center justify-center">

<div class="bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">

<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>

<span class="text-\\\[10px] font-label-caps text-on-surface tracking-widest">LIVE TRACKING</span>

</div>

</div>

<!-- Map Markers (Decorative) -->

<div class="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full shadow-\\\[0\\\_0\\\_8px\\\_#f2ca50]"></div>

<div class="absolute bottom-1/2 right-1/4 w-2 h-2 bg-tertiary rounded-full shadow-\\\[0\\\_0\\\_8px\\\_#93d7ff]"></div>

</div>

<div class="p-3 bg-surface-container-highest/50 flex justify-between items-center">

<div class="flex items-center gap-2">

<span class="material-symbols-outlined text-\\\[16px] text-on-surface-variant">location\_on</span>

<span class="text-data-sm text-on-surface-variant">Sector: Rhine-Main</span>

</div>

<button class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10">

<span class="material-symbols-outlined text-\\\[18px]">open\_in\_full</span>

</button>

</div>

</div>

</body></html>



<!-- Overview Dashboard -->

<!DOCTYPE html>



<html class="dark" lang="en"><head>

<meta charset="utf-8"/>

<meta content="width=device-width, initial-scale=1.0" name="viewport"/>

<title>DUTCH WATERWAYS | Tactical Operations Dashboard</title>

<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\\\&amp;family=JetBrains+Mono:wght@400;500\\\&amp;family=Libre+Caslon+Text:wght@700\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<script id="tailwind-config">

\&#x20;       tailwind.config = {

\&#x20;           darkMode: "class",

\&#x20;           theme: {

\&#x20;               extend: {

\&#x20;                   "colors": {

\&#x20;                       "outline": "#99907c",

\&#x20;                       "on-tertiary-fixed": "#001e2c",

\&#x20;                       "on-background": "#d4e4fa",

\&#x20;                       "on-error-container": "#ffdad6",

\&#x20;                       "on-surface": "#d4e4fa",

\&#x20;                       "on-tertiary-container": "#004b67",

\&#x20;                       "error": "#ffb4ab",

\&#x20;                       "surface-dim": "#051424",

\&#x20;                       "tertiary-fixed-dim": "#7bd0ff",

\&#x20;                       "primary-fixed-dim": "#e9c349",

\&#x20;                       "secondary-fixed": "#dae2fd",

\&#x20;                       "background": "#051424",

\&#x20;                       "surface-container-highest": "#273647",

\&#x20;                       "on-surface-variant": "#d0c5af",

\&#x20;                       "on-primary-container": "#554300",

\&#x20;                       "tertiary-fixed": "#c4e7ff",

\&#x20;                       "on-primary-fixed-variant": "#574500",

\&#x20;                       "on-primary": "#3c2f00",

\&#x20;                       "secondary-container": "#3f465c",

\&#x20;                       "surface-bright": "#2c3a4c",

\&#x20;                       "surface-container-high": "#1c2b3c",

\&#x20;                       "inverse-primary": "#735c00",

\&#x20;                       "on-primary-fixed": "#241a00",

\&#x20;                       "surface-container-lowest": "#010f1f",

\&#x20;                       "inverse-surface": "#d4e4fa",

\&#x20;                       "primary-fixed": "#ffe088",

\&#x20;                       "on-secondary-fixed": "#131b2e",

\&#x20;                       "surface-tint": "#e9c349",

\&#x20;                       "surface-container": "#122131",

\&#x20;                       "surface-container-low": "#0d1c2d",

\&#x20;                       "outline-variant": "#4d4635",

\&#x20;                       "surface-variant": "#273647",

\&#x20;                       "primary": "#f2ca50",

\&#x20;                       "secondary": "#bec6e0",

\&#x20;                       "inverse-on-surface": "#233143",

\&#x20;                       "on-secondary-container": "#adb4ce",

\&#x20;                       "on-secondary-fixed-variant": "#3f465c",

\&#x20;                       "secondary-fixed-dim": "#bec6e0",

\&#x20;                       "on-error": "#690005",

\&#x20;                       "on-tertiary-fixed-variant": "#004c69",

\&#x20;                       "surface": "#051424",

\&#x20;                       "tertiary-fixed": "#c4e7ff",

\&#x20;                       "on-tertiary": "#00354a",

\&#x20;                       "error-container": "#93000a",

\&#x20;                       "primary-container": "#d4af37",

\&#x20;                       "on-secondary": "#283044"

\&#x20;                   },

\&#x20;                   "borderRadius": {

\&#x20;                       "DEFAULT": "0.125rem",

\&#x20;                       "lg": "0.25rem",

\&#x20;                       "xl": "0.5rem",

\&#x20;                       "full": "0.75rem"

\&#x20;                   },

\&#x20;                   "spacing": {

\&#x20;                       "panel-padding": "20px",

\&#x20;                       "unit": "4px",

\&#x20;                       "container-gap": "12px",

\&#x20;                       "margin": "24px",

\&#x20;                       "gutter": "16px"

\&#x20;                   },

\&#x20;                   "fontFamily": {

\&#x20;                       "body-md": \\\["Inter"],

\&#x20;                       "data-sm": \\\["JetBrains Mono"],

\&#x20;                       "data-lg": \\\["JetBrains Mono"],

\&#x20;                       "label-caps": \\\["Inter"],

\&#x20;                       "headline-md": \\\["Inter"],

\&#x20;                       "display-lg": \\\["Libre Caslon Text"]

\&#x20;                   },

\&#x20;                   "fontSize": {

\&#x20;                       "body-md": \\\["14px", {"lineHeight": "1.5", "fontWeight": "400"}],

\&#x20;                       "data-sm": \\\["12px", {"lineHeight": "1.0", "fontWeight": "400"}],

\&#x20;                       "data-lg": \\\["18px", {"lineHeight": "1.2", "fontWeight": "500"}],

\&#x20;                       "label-caps": \\\["11px", {"lineHeight": "1.2", "letterSpacing": "0.08em", "fontWeight": "700"}],

\&#x20;                       "headline-md": \\\["20px", {"lineHeight": "1.4", "letterSpacing": "0.01em", "fontWeight": "600"}],

\&#x20;                       "display-lg": \\\["32px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "700"}]

\&#x20;                   }

\&#x20;               },

\&#x20;           },

\&#x20;       }


<style>

\&#x20;       .glass-panel {

\&#x20;           background: linear-gradient(to bottom, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));

\&#x20;           backdrop-filter: blur(20px);

\&#x20;           border: 1px solid rgba(255, 255, 255, 0.1);

\&#x20;       }

\&#x20;       .glow-active {

\&#x20;           box-shadow: 0 0 10px rgba(242, 202, 80, 0.3);

\&#x20;       }

\&#x20;       .route-path {

\&#x20;           stroke-dasharray: 5;

\&#x20;       }

\&#x20;       .hud-overlay {

\&#x20;           pointer-events: none;

\&#x20;       }

\&#x20;       .hud-overlay > \\\* {

\&#x20;           pointer-events: auto;

\&#x20;       }

\&#x20;       .material-symbols-outlined {

\&#x20;           font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;

\&#x20;       }


</head>

<body class="bg-background text-on-background overflow-hidden h-screen font-body-md select-none">

<!-- Layer 0: Full Screen Satellite Map -->

<div class="fixed inset-0 z-0 opacity-80">

<img alt="A high-altitude satellite map of the Netherlands coastline and inland waterways. The terrain features deep greens of agricultural land and dark blues of the North Sea and Rhine delta. Glowing vector lines trace shipping routes connecting Rotterdam, Amsterdam, and Utrecht. Subtle digital grid overlays and shimmering harbor icons highlight major maritime hubs. The overall aesthetic is dark, technical, and military-grade." class="w-full h-full object-cover filter brightness-50 contrast-125" data-location="Netherlands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChnnhngCfBCxtgRb6w9HvF4RkgsYRru6idye\\\_eNcvF2a97voM9EboqWVaJL1pOwyo8nMc0oRtdMSTIgwNqo51yiYk\\\_UgUkQiACJor8K3Tcsuz3kdUJ1-SGtKzSARHPwSB7K\\\_TtEwcqLQenmt2sPyQcA3en5EvQJpp0YVATl8aLrmcJuk9gdq7\\\_ItvZgq4L8JY\\\_gbefqYqf4uX4uU7OxMiory9-g1ywrcZHtmTcQCNR4K\\\_HHPVrastpC-NQk--HYrcxooEGf38jjw"/>

<!-- SVG Overlays for Waterways -->

<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-40">

<path class="route-path" d="M400,800 Q450,700 600,650 T800,500" fill="none" stroke="#7bd0ff" stroke-width="2"></path>

<path class="route-path" d="M200,900 L400,800 L300,600" fill="none" stroke="#f2ca50" stroke-width="2"></path>

</svg>

</div>

<!-- Layer 1: Global Navigation (TopAppBar) -->

<header class="fixed top-0 left-0 right-0 h-16 z-50 flex justify-between items-center px-margin bg-background/90 backdrop-blur-xl border-b border-white/10">

<div class="flex items-center gap-6">

<div class="flex items-center gap-3">

<span class="material-symbols-outlined text-primary text-3xl">anchor</span>

<span class="text-headline-md font-headline-md font-bold text-primary uppercase tracking-widest">DUTCH WATERWAYS</span>

</div>

<nav class="hidden md:flex items-center gap-6 h-full ml-10">

<a class="text-on-surface border-b-2 border-primary pb-1 font-label-caps text-label-caps" href="#">OVERVIEW</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">FLEET</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">CONTRACTS</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">PORTS</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">FINANCES</a>

</nav>

</div>

<div class="flex items-center gap-4">

<div class="flex flex-col items-end mr-4">

<span class="text-label-caps text-on-surface-variant">17 MAY 2024</span>

<span class="font-data-lg text-data-lg text-primary">09:14</span>

</div>

<div class="flex items-center gap-2 border-l border-white/10 pl-4">

<button class="p-2 hover:bg-white/5 transition-all active:scale-95"><span class="material-symbols-outlined text-on-surface-variant">timer</span></button>

<button class="p-2 hover:bg-white/5 transition-all active:scale-95"><span class="material-symbols-outlined text-on-surface-variant">play\_arrow</span></button>

<button class="p-2 hover:bg-white/5 transition-all active:scale-95"><span class="material-symbols-outlined text-on-surface-variant">settings</span></button>

<button class="p-2 hover:bg-white/5 transition-all active:scale-95"><span class="material-symbols-outlined text-on-surface-variant">menu</span></button>

</div>

</div>

</header>

<!-- Side Navigation Bar (Docked Left) -->

<aside class="fixed left-0 top-16 bottom-0 w-64 z-40 bg-surface-container-lowest/90 backdrop-blur-2xl border-r border-white/5 flex flex-col pt-panel-padding shadow-2xl">

<div class="px-6 mb-8">

<div class="flex items-center gap-3 mb-1">

<div class="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center border border-primary/20">

<span class="material-symbols-outlined text-primary">sailing</span>

</div>

<div>

<h2 class="font-headline-md text-primary font-bold text-\\\[14px]">VAN DER MEER</h2>

<p class="text-\\\[10px] text-on-surface-variant uppercase tracking-tighter">Rotterdam, Netherlands</p>

</div>

</div>

</div>

<nav class="flex-1 px-2 space-y-1">

<a class="bg-primary-container/20 text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">dashboard</span> DASHBOARD

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-4 py-3 flex items-center gap-3 transition-all font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">directions\_boat</span> FLEET

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-4 py-3 flex items-center gap-3 transition-all font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">assignment</span> LOGISTICS

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-4 py-3 flex items-center gap-3 transition-all font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">anchor</span> INFRASTRUCTURE

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-4 py-3 flex items-center gap-3 transition-all font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">payments</span> FINANCIALS

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-4 py-3 flex items-center gap-3 transition-all font-label-caps text-label-caps" href="#">

<span class="material-symbols-outlined">groups</span> PERSONNEL

&#x20;           </a>

</nav>

<div class="p-6">

<button class="w-full py-3 bg-surface-container-highest border-l-4 border-primary text-on-surface font-label-caps text-label-caps hover:bg-surface-bright transition-colors">

&#x20;               NEW CONTRACT

&#x20;           </button>

</div>

<div class="px-2 pb-6 space-y-1">

<a class="text-on-surface-variant hover:text-on-surface px-4 py-2 flex items-center gap-3 font-label-caps text-label-caps text-\\\[10px]" href="#">

<span class="material-symbols-outlined text-\\\[18px]">settings</span> SETTINGS

&#x20;           </a>

<a class="text-on-surface-variant hover:text-on-surface px-4 py-2 flex items-center gap-3 font-label-caps text-label-caps text-\\\[10px]" href="#">

<span class="material-symbols-outlined text-\\\[18px]">help</span> SUPPORT

&#x20;           </a>

</div>

</aside>

<!-- Main Content Grid -->

<main class="ml-64 mt-16 p-margin relative h-\\\[calc(100vh-64px)] overflow-hidden">

<!-- HUD Left Stack -->

<div class="absolute left-margin top-margin w-72 flex flex-col gap-container-gap z-20">

<!-- Financial Widget -->

<div class="glass-panel p-4 rounded-xl">

<div class="flex justify-between items-start mb-4">

<div>

<p class="text-label-caps text-on-surface-variant mb-1">COMPANY VALUE</p>

<h3 class="font-data-lg text-2xl text-on-surface">€ 87,650,123</h3>

</div>

<div class="text-right">

<p class="text-label-caps text-on-surface-variant mb-1">WEEKLY PROFIT</p>

<p class="font-data-sm text-tertiary-fixed-dim text-\\\[14px]">+ € 2,915,750</p>

</div>

</div>

<!-- Sparkline Placeholder -->

<div class="h-12 w-full flex items-end gap-1 px-1">

<div class="w-full h-1/2 bg-tertiary-fixed-dim/20 rounded-t-sm"></div>

<div class="w-full h-2/3 bg-tertiary-fixed-dim/30 rounded-t-sm"></div>

<div class="w-full h-1/3 bg-tertiary-fixed-dim/20 rounded-t-sm"></div>

<div class="w-full h-3/4 bg-tertiary-fixed-dim/40 rounded-t-sm"></div>

<div class="w-full h-5/6 bg-primary/40 rounded-t-sm"></div>

</div>

</div>

<!-- Fleet Overview -->

<div class="glass-panel p-4 rounded-xl">

<h4 class="text-label-caps text-on-surface-variant border-b border-white/10 pb-2 mb-4">FLEET OVERVIEW</h4>

<div class="space-y-3">

<div class="flex justify-between items-center">

<span class="text-label-caps text-\\\[10px]">DRY CARGO</span>

<span class="font-data-sm">12</span>

</div>

<div class="flex justify-between items-center">

<span class="text-label-caps text-\\\[10px]">LIQUID CARGO</span>

<span class="font-data-sm">7</span>

</div>

<div class="flex justify-between items-center">

<span class="text-label-caps text-\\\[10px]">CONTAINER</span>

<span class="font-data-sm">4</span>

</div>

<div class="flex justify-between items-center border-t border-white/5 pt-2">

<span class="text-label-caps text-primary">TOTAL SHIPS</span>

<span class="font-data-lg text-primary">26</span>

</div>

</div>

</div>

<!-- Crew Status -->

<div class="glass-panel p-4 rounded-xl">

<h4 class="text-label-caps text-on-surface-variant border-b border-white/10 pb-2 mb-4">CREW OVERVIEW</h4>

<div class="space-y-4">

<div class="flex justify-between text-label-caps text-\\\[10px]">

<span>ACTIVE ON DUTY</span>

<span>129 / 162</span>

</div>

<div class="h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-tertiary-fixed-dim w-\\\[80%] glow-active"></div>

</div>

<div class="flex justify-between text-label-caps text-\\\[10px]">

<span>AVG MORALE</span>

<span class="text-tertiary-fixed-dim">87%</span>

</div>

<div class="h-1 bg-white/10 rounded-full overflow-hidden">

<div class="h-full bg-primary w-\\\[87%] glow-active"></div>

</div>

</div>

</div>

</div>

<!-- HUD Right Stack -->

<div class="absolute right-margin top-margin w-80 flex flex-col gap-container-gap z-20">

<!-- Available Contracts -->

<div class="glass-panel p-4 rounded-xl">

<div class="flex justify-between items-center mb-4">

<h4 class="text-label-caps text-on-surface-variant">AVAILABLE CONTRACTS</h4>

<button class="material-symbols-outlined text-\\\[16px] text-on-surface-variant">refresh</button>

</div>

<div class="space-y-2">

<!-- Contract Card -->

<div class="bg-surface-container-high/60 border border-white/5 p-3 rounded-lg hover:bg-surface-container-highest/80 transition-colors cursor-pointer group">

<div class="flex justify-between items-start mb-2">

<div>

<h5 class="font-bold text-\\\[12px] uppercase">Amsterdam → Duisburg</h5>

<p class="text-\\\[10px] text-on-surface-variant">STEEL COILS</p>

</div>

<span class="material-symbols-outlined text-primary text-\\\[16px]">lock\_open</span>

</div>

<div class="flex justify-between items-end">

<span class="font-data-sm text-\\\[11px]">4,320 T</span>

<span class="font-data-lg text-\\\[14px] text-tertiary-fixed-dim">€ 215,400</span>

</div>

</div>

<!-- Contract Card 2 -->

<div class="bg-surface-container-high/60 border border-white/5 p-3 rounded-lg hover:bg-surface-container-highest/80 transition-colors cursor-pointer group">

<div class="flex justify-between items-start mb-2">

<div>

<h5 class="font-bold text-\\\[12px] uppercase">Rotterdam → Basel</h5>

<p class="text-\\\[10px] text-on-surface-variant">CHEMICAL PRODUCTS</p>

</div>

<span class="material-symbols-outlined text-on-surface-variant text-\\\[16px]">lock</span>

</div>

<div class="flex justify-between items-end">

<span class="font-data-sm text-\\\[11px]">2,870 T</span>

<span class="font-data-lg text-\\\[14px] text-tertiary-fixed-dim">€ 187,950</span>

</div>

</div>

</div>

<button class="w-full mt-4 py-2 border border-white/10 text-label-caps text-\\\[10px] hover:bg-white/5 transition-all">VIEW ALL CONTRACTS</button>

</div>

<!-- Weather Widget -->

<div class="glass-panel p-4 rounded-xl">

<div class="flex items-center gap-4 mb-4">

<span class="material-symbols-outlined text-4xl text-primary">partly\_cloudy\_day</span>

<div>

<p class="text-label-caps text-on-surface-variant">ROTTERDAM</p>

<h4 class="text-2xl font-data-lg">14°C</h4>

</div>

</div>

<div class="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">

<div class="flex items-center gap-2">

<span class="material-symbols-outlined text-\\\[18px] text-on-surface-variant">air</span>

<span class="text-\\\[10px] font-data-sm">18 km/h NW</span>

</div>

<div class="flex items-center gap-2">

<span class="material-symbols-outlined text-\\\[18px] text-on-surface-variant">humidity\_percentage</span>

<span class="text-\\\[10px] font-data-sm">67%</span>

</div>

</div>

</div>

<!-- Live View (Thumbnail) -->

<div class="glass-panel p-2 rounded-xl overflow-hidden relative group">

<img alt="A cinematic low-angle shot of a heavy industrial container vessel navigating a narrow European river at twilight. The city skyline is visible in the distance with warm amber lights reflecting off the dark, rippling water. The camera perspective is high-tech, mimicking a security feed with subtle digital scanlines and technical telemetry data watermarks in the corners." class="w-full h-32 object-cover rounded-lg filter brightness-75 group-hover:brightness-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALfnmhOs\\\_9zycg6a9IZz2KE3EOdfi0oFHqxygHB6-sG9TGi6tBUsuVgeoqWfMT7ycpUllTJHeodcLgkSFonpGMBqVDtNvVJnayjknqytCq9NuObyA22P1qMv3PVHbR9JlLfi8zhrt-cShWG0zgH63oqvjiSI2ILPBnoiU9\\\_byov98paqbRgydgqEnXsjJK8XQYrVhkGlN8jpPFPQJdv2ozRk0XfqraN29-e8i55BW4obylbVvCj\\\_4IRGSyfOzorecl3Vww0zw6RA"/>

<div class="absolute top-4 left-4 flex items-center gap-2">

<div class="w-2 h-2 rounded-full bg-error glow-active animate-pulse"></div>

<span class="text-label-caps text-\\\[10px] drop-shadow-md">LIVE VIEW: CAM\_04</span>

</div>

<div class="absolute bottom-4 right-4">

<span class="material-symbols-outlined text-\\\[18px] drop-shadow-md cursor-pointer">fullscreen</span>

</div>

</div>

</div>

<!-- Vessel Detail Panel (Bottom) -->

<div class="absolute bottom-margin left-margin right-margin z-30">

<div class="glass-panel rounded-xl overflow-hidden flex h-48">

<!-- Vessel Profile -->

<div class="w-1/4 border-r border-white/10 p-panel-padding relative overflow-hidden bg-surface-container-low/50">

<img alt="Detailed schematic rendering of a modern inland shipping vessel. The boat features a long, low profile with a raised bridge at the stern. The hull is a deep industrial blue with white markings. The image is stylized as a technical blueprint with glowing wireframe elements and measurement labels in a sharp, data-driven aesthetic." class="absolute inset-0 w-full h-full object-cover opacity-20 filter saturate-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmwZ5uk3F-Y0QKrDdprVRLNxt68JBmOHlw6lW6F0V-G1B1pL\\\_lWluRzT614ZmWr77ezZdvUsedDS2Aa1YOdAIjF6mBqKCrmPU6fufvXdeKLJw-2NCPIq3nshXx2SDf091cuksvL1qfx1\\\_qw1NjfVSCzgHKNOS88BsbuuoSYm2tUn55QFiyB1MxQE\\\_zXEKxkGymISpowI2X-tbznEffoYn9qHrGzRxxpBAIFJzZ\\\_C6bneMq8CkeXWIvj8Bhy2LuEAKasRZlEzeQqg"/>

<div class="relative z-10">

<p class="text-label-caps text-on-surface-variant">VESSEL IDENTIFIER</p>

<h3 class="font-display-lg text-2xl text-on-surface mb-1">M/V NOORDZEE</h3>

<p class="text-label-caps text-primary mb-4">DRY CARGO • CLASS A</p>

<div class="flex items-center gap-2 text-\\\[11px] text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 px-3 py-1 rounded w-fit border border-tertiary-fixed-dim/20">

<span class="material-symbols-outlined text-\\\[14px]">schedule</span>

&#x20;                           ON SCHEDULE

&#x20;                       </div>

</div>

</div>

<!-- Live Telemetry -->

<div class="flex-1 p-panel-padding grid grid-cols-4 gap-gutter">

<div class="space-y-1">

<p class="text-label-caps text-on-surface-variant">CURRENT SPEED</p>

<div class="flex items-baseline gap-1">

<span class="font-data-lg text-3xl">18.6</span>

<span class="text-\\\[12px] text-on-surface-variant">KM/H</span>

</div>

<div class="h-1 w-full bg-white/5 rounded mt-2">

<div class="h-full bg-primary w-\\\[65%]"></div>

</div>

</div>

<div class="space-y-1">

<p class="text-label-caps text-on-surface-variant">CARGO LOAD</p>

<div class="flex items-baseline gap-1">

<span class="font-data-lg text-2xl text-on-surface">3,850</span>

<span class="text-\\\[12px] text-on-surface-variant">/ 4,200 T</span>

</div>

<div class="h-1 w-full bg-white/5 rounded mt-2">

<div class="h-full bg-tertiary-fixed-dim w-\\\[92%]"></div>

</div>

</div>

<div class="space-y-1">

<p class="text-label-caps text-on-surface-variant">FUEL STATUS</p>

<div class="flex items-baseline gap-1">

<span class="font-data-lg text-2xl text-on-surface">28,600</span>

<span class="text-\\\[12px] text-on-surface-variant">L</span>

</div>

<div class="h-1 w-full bg-white/5 rounded mt-2">

<div class="h-full bg-error w-\\\[42%]"></div>

</div>

</div>

<div class="space-y-1">

<p class="text-label-caps text-on-surface-variant">CONDITION</p>

<div class="flex items-baseline gap-1">

<span class="font-data-lg text-2xl text-on-surface">92</span>

<span class="text-\\\[12px] text-on-surface-variant">%</span>

</div>

<div class="h-1 w-full bg-white/5 rounded mt-2">

<div class="h-full bg-primary w-\\\[92%]"></div>

</div>

</div>

</div>

<!-- Navigation Route -->

<div class="w-1/4 bg-background/40 p-panel-padding flex flex-col justify-between">

<div class="space-y-2">

<div class="flex justify-between items-center text-\\\[10px]">

<span class="text-on-surface-variant">FROM</span>

<span class="font-bold">ROTTERDAM (EEMHAVEN)</span>

</div>

<div class="flex justify-between items-center text-\\\[10px]">

<span class="text-on-surface-variant">TO</span>

<span class="font-bold">DUISBURG (PORT A)</span>

</div>

<div class="flex justify-between items-center text-\\\[10px] text-primary">

<span>ETA</span>

<span class="font-data-sm">19 MAY 14:30</span>

</div>

</div>

<div class="flex gap-2">

<button class="flex-1 py-2 bg-surface-container-highest text-label-caps text-\\\[9px] hover:bg-white/10 transition-colors">BRIDGE FEED</button>

<button class="flex-1 py-2 border border-primary/40 text-primary text-label-caps text-\\\[9px] hover:bg-primary/10 transition-colors">SET COURSE</button>

</div>

</div>

</div>

</div>

<!-- Legend Overlay (Small) -->

<div class="absolute right-margin bottom-\\\[210px] glass-panel p-3 rounded-lg z-20 space-y-2">

<div class="flex items-center gap-3 text-\\\[10px] text-on-surface-variant">

<span class="material-symbols-outlined text-\\\[14px] text-primary">anchor</span> PORT

&#x20;           </div>

<div class="flex items-center gap-3 text-\\\[10px] text-on-surface-variant">

<span class="material-symbols-outlined text-\\\[14px] text-tertiary-fixed-dim">lock</span> WATER LOCK

&#x20;           </div>

<div class="flex items-center gap-3 text-\\\[10px] text-on-surface-variant">

<div class="w-3 h-\\\[1px] bg-primary"></div> ACTIVE ROUTE

&#x20;           </div>

</div>

</main>

</body></html>



<!-- Financial Reports -->

<!DOCTYPE html>



<html class="dark" lang="en"><head>

<meta charset="utf-8"/>

<meta content="width=device-width, initial-scale=1.0" name="viewport"/>

<title>Financial Reports - Dutch Waterways</title>

<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\\\&amp;family=JetBrains+Mono:wght@400;500\\\&amp;family=Libre+Caslon+Text:wght@700\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\\\&amp;display=swap" rel="stylesheet"/>

<style>.glass-panel {

\&#x20;   background: linear-gradient(to bottom, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));

\&#x20;   backdrop-filter: blur(20px);

\&#x20;   border: 1px solid rgba(255, 255, 255, 0.1)

\&#x20;   }

.inner-glow-emerald {

\&#x20;   box-shadow: inset 0 0 10px rgba(16, 185, 129, 0.1), 0 0 5px rgba(16, 185, 129, 0.2)

\&#x20;   }

.inner-glow-gold {

\&#x20;   box-shadow: inset 0 0 10px rgba(242, 202, 80, 0.1), 0 0 5px rgba(242, 202, 80, 0.2)

\&#x20;   }

.map-bg {

\&#x20;   background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAW1KUerqV71AFd1992WgCYY8AV62FMBrYOg7dbFMqyRsqsz4QCUtWwgXZondfwpYGO9snLsAYRfN5QaRI3Z3f5c\\\_Lxv9KCAdXzDxuIMIe7UyrfusYjnvDu6PI4u1sZJHP9nsoHYT-xuf2BvEkJ489-9F5p1CEgwWDbi9SPUTh5UD1ZsENPeSipMrBuTyQxJRYW3wKvIBnyXakAUVQ7Oexk0TYzz8OV5cqg8mi6VghNNjrj4nItMLBvAPZt1mn9OVdG6A9mHDPuOg);

\&#x20;   background-size: cover;

\&#x20;   background-position: center;

\&#x20;   filter: brightness(0.2) contrast(1.2) saturate(0.5)

\&#x20;   }

::-webkit-scrollbar {

\&#x20;   width: 4px

\&#x20;   }

::-webkit-scrollbar-track {

\&#x20;   background: rgba(0, 0, 0, 0.1)

\&#x20;   }

::-webkit-scrollbar-thumb {

\&#x20;   background: rgba(242, 202, 80, 0.3);

\&#x20;   border-radius: 10px


<script id="tailwind-config">

\&#x20;       tailwind.config = {

\&#x20;           darkMode: "class",

\&#x20;           theme: {

\&#x20;               extend: {

\&#x20;                   "colors": {

\&#x20;                       "outline": "#99907c",

\&#x20;                       "on-tertiary-fixed": "#001e2c",

\&#x20;                       "on-background": "#d4e4fa",

\&#x20;                       "on-error-container": "#ffdad6",

\&#x20;                       "on-surface": "#d4e4fa",

\&#x20;                       "on-tertiary-container": "#004b67",

\&#x20;                       "error": "#ffb4ab",

\&#x20;                       "surface-dim": "#051424",

\&#x20;                       "tertiary-fixed-dim": "#7bd0ff",

\&#x20;                       "primary-fixed-dim": "#e9c349",

\&#x20;                       "secondary-fixed": "#dae2fd",

\&#x20;                       "background": "#051424",

\&#x20;                       "surface-container-highest": "#273647",

\&#x20;                       "on-surface-variant": "#d0c5af",

\&#x20;                       "on-primary-container": "#554300",

\&#x20;                       "tertiary-fixed": "#c4e7ff",

\&#x20;                       "on-primary-fixed-variant": "#574500",

\&#x20;                       "on-primary": "#3c2f00",

\&#x20;                       "secondary-container": "#3f465c",

\&#x20;                       "surface-bright": "#2c3a4c",

\&#x20;                       "surface-container-high": "#1c2b3c",

\&#x20;                       "inverse-primary": "#735c00",

\&#x20;                       "on-primary-fixed": "#241a00",

\&#x20;                       "surface-container-lowest": "#010f1f",

\&#x20;                       "inverse-surface": "#d4e4fa",

\&#x20;                       "primary-fixed": "#ffe088",

\&#x20;                       "on-secondary-fixed": "#131b2e",

\&#x20;                       "surface-tint": "#e9c349",

\&#x20;                       "surface-container": "#122131",

\&#x20;                       "surface-container-low": "#0d1c2d",

\&#x20;                       "outline-variant": "#4d4635",

\&#x20;                       "surface-variant": "#273647",

\&#x20;                       "primary": "#f2ca50",

\&#x20;                       "secondary": "#bec6e0",

\&#x20;                       "inverse-on-surface": "#233143",

\&#x20;                       "on-secondary-container": "#adb4ce",

\&#x20;                       "on-secondary-fixed-variant": "#3f465c",

\&#x20;                       "secondary-fixed-dim": "#bec6e0",

\&#x20;                       "on-error": "#690005",

\&#x20;                       "on-tertiary-fixed-variant": "#004c69",

\&#x20;                       "surface": "#051424",

\&#x20;                       "tertiary-container": "#3bbffa",

\&#x20;                       "tertiary": "#93d7ff",

\&#x20;                       "on-tertiary": "#00354a",

\&#x20;                       "error-container": "#93000a",

\&#x20;                       "primary-container": "#d4af37",

\&#x20;                       "on-secondary": "#283044"

\&#x20;                   },

\&#x20;                   "borderRadius": {

\&#x20;                       "DEFAULT": "0.125rem",

\&#x20;                       "lg": "0.25rem",

\&#x20;                       "xl": "0.5rem",

\&#x20;                       "full": "0.75rem"

\&#x20;                   },

\&#x20;                   "spacing": {

\&#x20;                       "panel-padding": "20px",

\&#x20;                       "unit": "4px",

\&#x20;                       "container-gap": "12px",

\&#x20;                       "margin": "24px",

\&#x20;                       "gutter": "16px"

\&#x20;                   },

\&#x20;                   "fontFamily": {

\&#x20;                       "body-md": \\\["Inter"],

\&#x20;                       "data-sm": \\\["JetBrains Mono"],

\&#x20;                       "data-lg": \\\["JetBrains Mono"],

\&#x20;                       "label-caps": \\\["Inter"],

\&#x20;                       "headline-md": \\\["Inter"],

\&#x20;                       "display-lg": \\\["Libre Caslon Text"]

\&#x20;                   },

\&#x20;                   "fontSize": {

\&#x20;                       "body-md": \\\["14px", {"lineHeight": "1.5", "fontWeight": "400"}],

\&#x20;                       "data-sm": \\\["12px", {"lineHeight": "1.0", "fontWeight": "400"}],

\&#x20;                       "data-lg": \\\["18px", {"lineHeight": "1.2", "fontWeight": "500"}],

\&#x20;                       "label-caps": \\\["11px", {"lineHeight": "1.2", "letterSpacing": "0.08em", "fontWeight": "700"}],

\&#x20;                       "headline-md": \\\["20px", {"lineHeight": "1.4", "letterSpacing": "0.01em", "fontWeight": "600"}],

\&#x20;                       "display-lg": \\\["32px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "700"}]

\&#x20;                   }

\&#x20;               },

\&#x20;           },

\&#x20;       }


</head>

<body class="bg-background text-on-surface font-body-md min-h-screen overflow-hidden selection:bg-primary/30 selection:text-primary">

<!-- Background Layer -->

<div class="fixed inset-0 map-bg z-0" data-location="Netherlands" style=""></div>

<div class="fixed inset-0 bg-gradient-to-tr from-background via-transparent to-transparent opacity-80 z-0"></div>

<!-- Top Navigation Bar -->

<header class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-surface-container-low/80 backdrop-blur-xl flex justify-between items-center w-full px-margin h-16">

<div class="flex items-center gap-8">

<div class="text-headline-md font-headline-md font-bold text-primary uppercase tracking-widest">

&#x20;               DUTCH WATERWAYS

&#x20;               <span class="block text-\\\[10px] tracking-\\\[0.3em] font-normal text-on-surface-variant -mt-1">INLAND SHIPPING SIMULATOR</span>

</div>

<nav class="hidden md:flex items-center gap-6">

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Overview</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Fleet</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Contracts</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Ports</a>

<a class="text-on-surface border-b-2 border-primary pb-1 font-label-caps text-label-caps" href="#">Finances</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Research</a>

<a class="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Company</a>

</nav>

</div>

<div class="flex items-center gap-4">

<div class="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">

<span class="material-symbols-outlined text-primary text-\\\[18px]">timer</span>

<span class="font-data-sm text-data-sm text-on-surface">17 MAY 2024</span>

<span class="font-data-sm text-data-sm text-on-surface ml-2">09:14</span>

</div>

<div class="flex items-center gap-1">

<button class="p-2 hover:bg-white/5 transition-all duration-150 active:bg-white/10 rounded">

<span class="material-symbols-outlined text-\\\[20px]">play\_arrow</span>

</button>

<button class="p-2 hover:bg-white/5 transition-all duration-150 active:bg-white/10 rounded">

<span class="material-symbols-outlined text-\\\[20px]">settings</span>

</button>

<button class="p-2 hover:bg-white/5 transition-all duration-150 active:bg-white/10 rounded">

<span class="material-symbols-outlined text-\\\[20px]">menu</span>

</button>

</div>

</div>

</header>

<!-- Side Navigation Bar -->

<aside class="fixed left-0 top-16 bottom-0 z-40 w-64 glass-panel border-r border-white/5 flex flex-col pt-panel-padding rounded-r-xl transition-all duration-200">

<div class="px-6 mb-8">

<div class="flex items-center gap-3">

<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">

<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">anchor</span>

</div>

<div>

<div class="font-headline-md text-primary font-bold text-\\\[14px]">VAN DER MEER</div>

<div class="text-\\\[10px] text-on-surface-variant uppercase tracking-wider">Rotterdam, NL</div>

</div>

</div>

</div>

<nav class="flex-1 flex flex-col gap-1">

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-6 py-3 flex items-center gap-3 transition-all" href="#">

<span class="material-symbols-outlined text-\\\[20px]">dashboard</span>

<span class="font-label-caps text-label-caps">Dashboard</span>

</a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-6 py-3 flex items-center gap-3 transition-all" href="#">

<span class="material-symbols-outlined text-\\\[20px]">directions\_boat</span>

<span class="font-label-caps text-label-caps">Fleet</span>

</a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-6 py-3 flex items-center gap-3 transition-all" href="#">

<span class="material-symbols-outlined text-\\\[20px]">assignment</span>

<span class="font-label-caps text-label-caps">Logistics</span>

</a>

<a class="bg-primary-container/20 text-primary border-l-4 border-primary px-6 py-3 flex items-center gap-3" href="#">

<span class="material-symbols-outlined text-\\\[20px]">payments</span>

<span class="font-label-caps text-label-caps">Financials</span>

</a>

<a class="text-on-surface-variant hover:text-on-surface hover:pl-5 px-6 py-3 flex items-center gap-3 transition-all" href="#">

<span class="material-symbols-outlined text-\\\[20px]">groups</span>

<span class="font-label-caps text-label-caps">Personnel</span>

</a>

</nav>

<div class="mt-auto px-6 mb-6">

<button class="w-full py-3 bg-primary text-on-primary font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 border-l-4 border-black/20 hover:scale-\\\[1.02] active:scale-95 transition-all">

<span class="material-symbols-outlined text-\\\[18px]">add</span>

<span class="font-label-caps text-label-caps">NEW CONTRACT</span>

</button>

</div>

<div class="border-t border-white/5 py-4 flex flex-col gap-1">

<a class="text-on-surface-variant hover:text-on-surface px-6 py-2 flex items-center gap-3 text-\\\[12px]" href="#">

<span class="material-symbols-outlined text-\\\[18px]">settings</span>

<span>Settings</span>

</a>

<a class="text-on-surface-variant hover:text-on-surface px-6 py-2 flex items-center gap-3 text-\\\[12px]" href="#">

<span class="material-symbols-outlined text-\\\[18px]">help</span>

<span>Support</span>

</a>

</div>

</aside>

<!-- Main Content Canvas -->

<main class="ml-64 pt-24 p-margin h-screen overflow-y-auto relative z-10 grid grid-cols-12 gap-container-gap">

<!-- Key Financial Indicators (Top Row) -->

<div class="col-span-3 glass-panel p-panel-padding rounded-xl relative overflow-hidden group">

<div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>

<div class="flex justify-between items-start mb-2">

<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">TOTAL CAPITAL</span>

<span class="material-symbols-outlined text-primary text-\\\[18px]">account\_balance\_wallet</span>

</div>

<div class="font-display-lg text-display-lg text-on-surface">€ 87,650,123</div>

<div class="flex items-center gap-2 mt-2">

<span class="text-emerald-400 text-\\\[12px] font-bold">+12.4%</span>

<span class="text-on-surface-variant text-\\\[10px]">VS LAST QUARTER</span>

</div>

<div class="mt-4 h-12 w-full flex items-end gap-\\\[2px]">

<div class="flex-1 bg-primary/10 h-\\\[40%]" style="clip-path: polygon(0 100%, 0 40%, 50% 20%, 100% 60%, 100% 100%)"></div>

<div class="flex-1 bg-primary/20 h-\\\[60%]"></div>

<div class="flex-1 bg-primary/30 h-\\\[50%]"></div>

<div class="flex-1 bg-primary/40 h-\\\[80%]"></div>

<div class="flex-1 bg-primary/50 h-\\\[70%]"></div>

<div class="flex-1 bg-primary/60 h-\\\[100%]"></div>

</div>

</div>

<div class="col-span-3 glass-panel p-panel-padding rounded-xl relative overflow-hidden">

<div class="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>

<div class="flex justify-between items-start mb-2">

<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">WEEKLY NET PROFIT</span>

<div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

</div>

<div class="font-display-lg text-display-lg text-emerald-400">€ 2,915,750</div>

<div class="flex items-center gap-2 mt-2">

<span class="text-emerald-400 text-\\\[12px] font-bold">€ 416.5k</span>

<span class="text-on-surface-variant text-\\\[10px]">DAILY AVERAGE</span>

</div>

<div class="mt-4 h-\\\[1px] w-full bg-white/10 relative">

<div class="absolute top-\\\[-4px] left-\\\[70%] w-2 h-2 rounded-full bg-emerald-400 shadow-\\\[0\\\_0\\\_10px\\\_rgba(52,211,153,0.8)]"></div>

</div>

</div>

<div class="col-span-3 glass-panel p-panel-padding rounded-xl relative overflow-hidden">

<div class="absolute top-0 left-0 w-1 h-full bg-error"></div>

<div class="flex justify-between items-start mb-2">

<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">OPERATIONAL COSTS</span>

<span class="material-symbols-outlined text-error text-\\\[18px]">trending\_down</span>

</div>

<div class="font-display-lg text-display-lg text-on-surface">€ 1,124,400</div>

<div class="flex items-center gap-2 mt-2">

<span class="text-error text-\\\[12px] font-bold">+2.1%</span>

<span class="text-on-surface-variant text-\\\[10px]">FUEL SURCHARGE IMPACT</span>

</div>

</div>

<div class="col-span-3 glass-panel p-panel-padding rounded-xl relative overflow-hidden">

<div class="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>

<div class="flex justify-between items-start mb-2">

<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">ACTIVE CONTRACT VALUE</span>

<span class="material-symbols-outlined text-tertiary text-\\\[18px]">assignment\_turned\_in</span>

</div>

<div class="font-display-lg text-display-lg text-on-surface">€ 14,890,000</div>

<div class="flex items-center gap-2 mt-2 text-\\\[10px]">

<span class="px-2 py-\\\[2px] bg-tertiary/10 text-tertiary border border-tertiary/20 rounded">12 IN PROGRESS</span>

</div>

</div>

<!-- Profit vs Expenses Main Chart -->

<div class="col-span-8 glass-panel p-panel-padding rounded-xl min-h-\\\[400px] flex flex-col">

<div class="flex justify-between items-center mb-6">

<div>

<h2 class="font-headline-md text-headline-md text-on-surface">PROFIT VS EXPENSES</h2>

<p class="text-\\\[12px] text-on-surface-variant font-data-sm uppercase tracking-wider">MONTHLY ANALYTICS • 30 DAY WINDOW</p>

</div>

<div class="flex gap-2">

<button class="px-3 py-1 text-\\\[10px] bg-white/5 border border-white/10 rounded font-label-caps text-label-caps">7D</button>

<button class="px-3 py-1 text-\\\[10px] bg-primary/20 text-primary border border-primary/30 rounded font-label-caps text-label-caps">30D</button>

<button class="px-3 py-1 text-\\\[10px] bg-white/5 border border-white/10 rounded font-label-caps text-label-caps">90D</button>

</div>

</div>

<!-- Chart Area Placeholder -->

<div class="flex-1 w-full relative flex items-end gap-1 pb-8">

<!-- Grid Lines -->

<div class="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">

<div class="h-\\\[1px] w-full bg-white"></div>

<div class="h-\\\[1px] w-full bg-white"></div>

<div class="h-\\\[1px] w-full bg-white"></div>

<div class="h-\\\[1px] w-full bg-white"></div>

<div class="h-\\\[1px] w-full bg-white"></div>

</div>

<!-- Simulation Bars -->

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/60" style="height: 65%;"></div>

<div class="absolute bottom-\\\[-24px] left-0 right-0 text-center font-data-sm text-\\\[10px] text-on-surface-variant">WK 18</div>

</div>

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/60" style="height: 72%;"></div>

</div>

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/60" style="height: 58%;"></div>

<div class="absolute bottom-\\\[-24px] left-0 right-0 text-center font-data-sm text-\\\[10px] text-on-surface-variant">WK 19</div>

</div>

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/60 border-t-2 border-primary rounded-t-sm transition-all" style="height: 85%;"></div>

<div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded border border-primary/40 text-\\\[10px] font-bold text-primary shadow-xl">€ 3.2M</div>

</div>

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/60" style="height: 62%;"></div>

<div class="absolute bottom-\\\[-24px] left-0 right-0 text-center font-data-sm text-\\\[10px] text-on-surface-variant">WK 20</div>

</div>

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/60" style="height: 45%;"></div>

</div>

<div class="flex-1 h-full flex items-end gap-1 group relative">

<div class="w-full bg-emerald-500/40 rounded-t-sm transition-all hover:bg-emerald-500/60" style="height: 70%;"></div>

<div class="absolute bottom-\\\[-24px] left-0 right-0 text-center font-data-sm text-\\\[10px] text-on-surface-variant">WK 21</div>

</div>

<!-- Red Line (Expenses Overlay) -->

<svg class="absolute bottom-8 left-0 w-full h-\\\[80%] pointer-events-none overflow-visible" preserveaspectratio="none">

<path d="M 0 100 Q 150 120, 300 80 T 600 90 T 900 110 T 1200 85" fill="none" stroke="#ffb4ab" stroke-dasharray="4,4" stroke-width="2"></path>

</svg>

</div>

<div class="flex gap-6 pt-4 border-t border-white/5">

<div class="flex items-center gap-2">

<div class="w-3 h-3 rounded-sm bg-emerald-500"></div>

<span class="text-\\\[11px] font-label-caps text-label-caps uppercase text-on-surface-variant">GROSS REVENUE</span>

</div>

<div class="flex items-center gap-2">

<div class="w-3 h-3 rounded-sm border border-dashed border-error"></div>

<span class="text-\\\[11px] font-label-caps text-label-caps uppercase text-on-surface-variant">OPERATING EXPENSES</span>

</div>

</div>

</div>

<!-- Cost Breakdown Donut -->

<div class="col-span-4 glass-panel p-panel-padding rounded-xl flex flex-col">

<h2 class="font-headline-md text-headline-md text-on-surface mb-6 uppercase tracking-tight">COST ALLOCATION</h2>

<div class="flex-1 flex flex-col items-center justify-center relative">

<!-- Donut Chart Simulated -->

<div class="relative w-48 h-48 rounded-full border-\\\[12px] border-white/5 flex items-center justify-center">

<!-- Slices -->

<div class="absolute inset-\\\[-12px] rounded-full border-\\\[12px] border-tertiary" style="clip-path: polygon(50% 50%, 50% 0, 100% 0, 100% 50%)"></div>

<div class="absolute inset-\\\[-12px] rounded-full border-\\\[12px] border-primary" style="clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 0 100%)"></div>

<div class="absolute inset-\\\[-12px] rounded-full border-\\\[12px] border-error" style="clip-path: polygon(50% 50%, 0 100%, 0 0, 50% 0)"></div>

<div class="text-center">

<div class="text-\\\[24px] font-bold text-on-surface">€ 1.12M</div>

<div class="text-\\\[10px] text-on-surface-variant font-label-caps">MTD COSTS</div>

</div>

</div>

<div class="w-full mt-8 space-y-3">

<div class="flex justify-between items-center text-\\\[12px]">

<div class="flex items-center gap-2">

<div class="w-2 h-2 rounded-full bg-tertiary shadow-\\\[0\\\_0\\\_8px\\\_rgba(147,215,255,0.4)]"></div>

<span class="text-on-surface font-medium">Fuel \&amp; Energy</span>

</div>

<span class="font-data-sm text-on-surface-variant">42%</span>

</div>

<div class="flex justify-between items-center text-\\\[12px]">

<div class="flex items-center gap-2">

<div class="w-2 h-2 rounded-full bg-primary shadow-\\\[0\\\_0\\\_8px\\\_rgba(242,202,80,0.4)]"></div>

<span class="text-on-surface font-medium">Crew Wages</span>

</div>

<span class="font-data-sm text-on-surface-variant">28%</span>

</div>

<div class="flex justify-between items-center text-\\\[12px]">

<div class="flex items-center gap-2">

<div class="w-2 h-2 rounded-full bg-error shadow-\\\[0\\\_0\\\_8px\\\_rgba(255,180,171,0.4)]"></div>

<span class="text-on-surface font-medium">Port Fees \&amp; Tax</span>

</div>

<span class="font-data-sm text-on-surface-variant">18%</span>

</div>

<div class="flex justify-between items-center text-\\\[12px]">

<div class="flex items-center gap-2">

<div class="w-2 h-2 rounded-full bg-on-surface-variant"></div>

<span class="text-on-surface font-medium">Maintenance</span>

</div>

<span class="font-data-sm text-on-surface-variant">12%</span>

</div>

</div>

</div>

</div>

<!-- Transaction History List -->

<div class="col-span-12 glass-panel rounded-xl overflow-hidden mb-12">

<div class="p-panel-padding border-b border-white/5 flex justify-between items-center bg-white/5">

<h2 class="font-headline-md text-headline-md text-on-surface">RECENT TRANSACTIONS</h2>

<div class="flex gap-4">

<div class="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full border border-white/10">

<span class="material-symbols-outlined text-\\\[16px] text-on-surface-variant">search</span>

<input class="bg-transparent border-none focus:ring-0 text-\\\[10px] text-on-surface uppercase tracking-wider w-48 p-0 placeholder:text-white/20" placeholder="FILTER BY SHIP OR PORT..." type="text"/>

</div>

<button class="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">

<span class="material-symbols-outlined text-\\\[18px]">download</span>

<span class="text-\\\[10px] font-label-caps">EXPORT CSV</span>

</button>

</div>

</div>

<div class="overflow-x-auto">

<table class="w-full text-left">

<thead>

<tr class="text-\\\[10px] text-on-surface-variant font-label-caps tracking-widest border-b border-white/5 uppercase">

<th class="px-6 py-4 font-bold">Timestamp</th>

<th class="px-6 py-4 font-bold">Reference / Vessel</th>

<th class="px-6 py-4 font-bold">Category</th>

<th class="px-6 py-4 font-bold">Status</th>

<th class="px-6 py-4 font-bold text-right">Amount (EUR)</th>

</tr>

</thead>

<tbody class="divide-y divide-white/5">

<tr class="hover:bg-white/\\\[0.02] transition-colors group">

<td class="px-6 py-4 font-data-sm text-\\\[12px] text-on-surface-variant">2024-05-17 08:42</td>

<td class="px-6 py-4">

<div class="font-medium text-\\\[13px]">M/V NOORDZEE</div>

<div class="text-\\\[10px] text-on-surface-variant uppercase">Amsterdam → Duisburg</div>

</td>

<td class="px-6 py-4">

<span class="px-2 py-\\\[2px] bg-emerald-500/10 text-emerald-400 text-\\\[10px] rounded uppercase font-bold tracking-tighter">Contract Payout</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-1.5">

<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>

<span class="text-\\\[11px] text-on-surface font-medium uppercase">Settled</span>

</div>

</td>

<td class="px-6 py-4 text-right font-data-lg text-emerald-400 font-bold">+215,400.00</td>

</tr>

<tr class="hover:bg-white/\\\[0.02] transition-colors group">

<td class="px-6 py-4 font-data-sm text-\\\[12px] text-on-surface-variant">2024-05-17 07:15</td>

<td class="px-6 py-4">

<div class="font-medium text-\\\[13px]">Port of Rotterdam</div>

<div class="text-\\\[10px] text-on-surface-variant uppercase">Berthing \\\&amp; Dock Fees</div>

</td>

<td class="px-6 py-4">

<span class="px-2 py-\\\[2px] bg-white/10 text-on-surface-variant text-\\\[10px] rounded uppercase font-bold tracking-tighter">Port Expense</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-1.5">

<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>

<span class="text-\\\[11px] text-on-surface font-medium uppercase">Settled</span>

</div>

</td>

<td class="px-6 py-4 text-right font-data-lg text-error">-12,250.00</td>

</tr>

<tr class="hover:bg-white/\\\[0.02] transition-colors group">

<td class="px-6 py-4 font-data-sm text-\\\[12px] text-on-surface-variant">2024-05-16 23:58</td>

<td class="px-6 py-4">

<div class="font-medium text-\\\[13px]">M/V RIJNSTROOM</div>

<div class="text-\\\[10px] text-on-surface-variant uppercase">Biofuel Refill #822</div>

</td>

<td class="px-6 py-4">

<span class="px-2 py-\\\[2px] bg-tertiary/10 text-tertiary text-\\\[10px] rounded uppercase font-bold tracking-tighter">Fuel Surcharge</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-1.5">

<div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>

<span class="text-\\\[11px] text-on-surface font-medium uppercase">Pending</span>

</div>

</td>

<td class="px-6 py-4 text-right font-data-lg text-on-surface">-45,800.00</td>

</tr>

<tr class="hover:bg-white/\\\[0.02] transition-colors group">

<td class="px-6 py-4 font-data-sm text-\\\[12px] text-on-surface-variant">2024-05-16 19:12</td>

<td class="px-6 py-4">

<div class="font-medium text-\\\[13px]">DRECHT TERMINAL</div>

<div class="text-\\\[10px] text-on-surface-variant uppercase">Unloading Bonus</div>

</td>

<td class="px-6 py-4">

<span class="px-2 py-\\\[2px] bg-emerald-500/10 text-emerald-400 text-\\\[10px] rounded uppercase font-bold tracking-tighter">Incentive</span>

</td>

<td class="px-6 py-4">

<div class="flex items-center gap-1.5">

<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>

<span class="text-\\\[11px] text-on-surface font-medium uppercase">Settled</span>

</div>

</td>

<td class="px-6 py-4 text-right font-data-lg text-emerald-400 font-bold">+8,500.00</td>

</tr>

</tbody>

</table>

</div>

<div class="p-4 border-t border-white/5 flex justify-center">

<button class="text-on-surface-variant hover:text-primary font-label-caps text-\\\[10px] uppercase tracking-\\\[0.2em] transition-all">

&#x20;                   Load Full Transaction History (Page 1 of 42)

&#x20;               </button>

</div>

</div>

</main>

<!-- Footer Decorative HUD Elements -->

<div class="fixed bottom-0 left-64 right-0 h-8 flex items-center justify-between px-margin z-50 pointer-events-none">

<div class="flex gap-4">

<div class="flex items-center gap-2">

<div class="w-2 h-2 rounded-full bg-emerald-400"></div>

<span class="text-\\\[9px] font-data-sm text-on-surface-variant uppercase tracking-widest">ENCRYPTED DATA STREAM ACTIVE</span>

</div>

</div>

<div class="flex items-center gap-6">

<span class="text-\\\[9px] font-data-sm text-on-surface-variant uppercase tracking-widest">REGION: NORTH\_SEA\_CLUSTER\_A</span>

<span class="text-\\\[9px] font-data-sm text-on-surface-variant uppercase tracking-widest">LAT: 51.9225° N, LON: 4.4791° E</span>

</div>

</div>

</body></html>

