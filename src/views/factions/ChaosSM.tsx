import { For } from "solid-js";

const ChaosSM = () => {
  const ranks = [
    "Aspirant",
    "Chosen",
    "Annihilator",
    "Havoc",
    "Possessed",
    "Sorcerer",
    "Lord",
    "Prince",
    "Champion",
    "Herald",
  ];

  return (
    <div class="h-full w-full bg-[#1a1a1a] p-2 text-red-100 font-mono border-[6px] border-double border-[#4a0404] uppercase text-[9px] leading-tight overflow-hidden flex flex-col relative">
      {/* BACKGROUND TEXTURE OVERLAY */}
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* HEADER: Shrink-0 keeps it fixed at top */}
      <header class="border-b-2 border-red-900 pb-0.5 mb-1 shrink-0 flex justify-between items-end z-10">
        <div class="flex-1">
          <h1 class="text-lg font-black tracking-widest leading-none text-red-700">
            HERETICUS ASTARTES ARMA MENTARIUM
          </h1>
          <div class="flex items-baseline mt-0.5">
            <span class="font-bold mr-1 text-[8px] text-red-500 shrink-0">
              (1.) WARBAND:
            </span>
            <span class="text-sm font-black italic border-b border-dotted border-red-700 flex-1 px-1 leading-none tracking-tighter">
              IRON JUDGES [RENEGADE]
            </span>
          </div>
        </div>
        <div class="text-right pl-2">
          <p class="font-bold text-[7px] text-red-900 leading-none">
            REF // 666.X
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div class="flex-1 grid grid-cols-12 gap-2 min-h-0 z-10 overflow-hidden">
        {/* LEFT COLUMN: VISUALS */}
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-1 space-y-0.5 text-[7px]">
            <div class="flex border-b border-red-900/50">
              <span class="font-bold mr-1 text-red-600">(2.) CURSE:</span>
              <span class="italic truncate">"DEATH TO THE FALSE IDOL"</span>
            </div>
            <div class="flex border-b border-red-900/50">
              <span class="font-bold mr-1 text-red-600">(3.) GIFT:</span>
              <span class="truncate">Master of Possession</span>
            </div>
          </div>

          <div class="relative border border-red-900 bg-[#0d0d0d] flex-1 flex items-center justify-center shadow-[inset_0_0_15px_rgba(150,0,0,0.3)] min-h-0 overflow-hidden">
            <div class="absolute top-1 left-1 text-[6px] font-bold bg-red-950 text-red-200 px-1 py-0.5 z-10 border border-red-600">
              MK V HERESY (CORRUPTED)
            </div>

            <div class="w-full h-full flex flex-col items-center justify-center opacity-20 scale-50">
              <div class="w-16 h-16 border-[4px] border-red-800 rotate-45 mb-2 animate-pulse"></div>
              <div class="w-24 h-1/2 border-x-4 border-b-4 border-red-800 rounded-b-lg"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DATA BLOCKS */}
        <div class="col-span-7 flex flex-col border-l border-red-900/40 pl-2 space-y-1.5 min-h-0">
          <div class="grid grid-cols-2 gap-1 shrink-0">
            <div class="border border-red-950 p-1 bg-red-900/5">
              <h3 class="font-bold border-b border-red-900 mb-0.5 text-[7px] text-red-500">
                (4a.) SIGIL
              </h3>
              <div class="h-8 flex items-center justify-center text-sm">☠</div>
            </div>
            <div class="border border-red-950 p-1 bg-red-900/5">
              <h3 class="font-bold border-b border-red-900 mb-0.5 text-[7px] text-red-500">
                (4b.) ARMS
              </h3>
              <div class="h-8 bg-[#111] flex flex-col items-center justify-center border border-red-900/20">
                <div class="w-10 h-1.5 bg-red-800"></div>
              </div>
            </div>
          </div>

          {/* Devotion / Elite / Warleader Grid */}
          <div class="grid grid-cols-2 gap-1 flex-1 min-h-0">
            <section class="border border-red-900 p-1 flex flex-col bg-red-950/10 min-h-0">
              <h3 class="font-bold border-b border-red-900 mb-1 text-[7px] text-red-500 shrink-0">
                (5.) DEVOTION
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-6 h-6 bg-black border border-red-600 rotate-45 flex items-center justify-center">
                  <span class="text-red-600 text-[6px] -rotate-45">✖</span>
                </div>
                <div class="w-6 h-6 bg-red-900 border border-yellow-600 rotate-12 shadow-[0_0_5px_rgba(255,0,0,0.5)]"></div>
              </div>
            </section>

            <div class="flex flex-col gap-1 min-h-0">
              <section class="border border-red-900 p-1 flex-1 bg-red-900/5 min-h-0">
                <h3 class="font-bold text-[7px] text-red-500 leading-none">
                  (6.) ELITE
                </h3>
                <div class="w-4 h-4 bg-red-600 border border-black mt-1"></div>
              </section>
              <section class="border border-red-900 p-1 flex-1 bg-red-900/5 min-h-0">
                <h3 class="font-bold text-[7px] text-red-500 leading-none">
                  (7.) LORD
                </h3>
                <div class="w-4 h-4 bg-black border border-red-500 shadow-[0_0_2px_red] mt-1"></div>
              </section>
            </div>
          </div>

          {/* 8. Chaos Ranks: Compact grid */}
          <section class="border border-red-900 p-1 shrink-0 bg-black">
            <h3 class="font-bold mb-0.5 border-b border-red-900 text-[7px] text-red-500 leading-none">
              (8.) MARKINGS OF THE EYE
            </h3>
            <div class="grid grid-cols-5 gap-x-1 gap-y-0.5">
              <For each={ranks}>
                {(rank) => (
                  <div class="flex flex-col items-center">
                    <div class="w-3.5 h-3.5 rotate-45 bg-red-950 border border-red-700"></div>
                    <span class="text-[5px] mt-0.5 scale-90">
                      {rank.substring(0, 5)}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* FOOTER: Pinned to bottom */}
          <footer class="mt-auto pt-0.5 flex justify-between items-center shrink-0 border-t border-red-900/50">
            <p class="text-[6px] font-bold italic text-red-700">
              "Let the Galaxy Burn."
            </p>
            <div class="border-2 border-red-600 text-red-600 px-1 py-0 text-[10px] font-black rotate-[-2deg] tracking-tighter">
              EXCOMUNICATUS TRAITORUM
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChaosSM;
