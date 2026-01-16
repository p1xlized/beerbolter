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
    <div class="h-full w-full bg-[#1a1a1a] p-3 text-red-100 font-mono border-[8px] border-double border-[#4a0404] uppercase flex flex-col relative overflow-hidden">
      {/* BACKGROUND TEXTURE OVERLAY */}
      <div class="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* HEADER: Scaled Up */}
      <header class="border-b-4 border-red-900 pb-2 mb-2 shrink-0 flex justify-between items-end z-10">
        <div class="flex-1">
          <h1 class="text-2xl font-black tracking-widest leading-none text-red-700">
            HERETICUS MENTARIUM
          </h1>
          <div class="flex items-baseline mt-1">
            <span class="font-bold mr-2 text-[10px] text-red-600 shrink-0">
              (1.) WARBAND:
            </span>
            <span class="text-xl font-black italic border-b-2 border-dotted border-red-700 flex-1 px-1 leading-none tracking-tighter text-red-200">
              IRON JUDGES [RENEGADE]
            </span>
          </div>
        </div>
        <div class="text-right pl-4">
          <p class="font-bold text-[9px] text-red-900">
            EYE OF TERROR // 666.X
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div class="flex-1 grid grid-cols-12 gap-4 min-h-0 z-10 overflow-hidden">
        {/* LEFT COLUMN: VISUALS */}
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-2 space-y-1 text-[9px] font-bold">
            <div class="flex border-b border-red-900/60 pb-0.5">
              <span class="mr-1 text-red-700">(2.) CURSE:</span>
              <span class="italic truncate text-red-100">
                "DEATH TO THE FALSE IDOL"
              </span>
            </div>
            <div class="flex border-b border-red-900/60 pb-0.5">
              <span class="mr-1 text-red-700">(3.) GIFT:</span>
              <span class="truncate text-red-100">Master of Possession</span>
            </div>
          </div>

          <div class="relative border-2 border-red-900 bg-[#0d0d0d] flex-1 flex items-center justify-center shadow-[inset_0_0_30px_rgba(150,0,0,0.4)] min-h-0">
            <div class="absolute top-2 left-2 text-[8px] font-black bg-red-950 text-red-400 px-2 py-1 z-10 border-2 border-red-700 shadow-lg">
              MK V HERESY (CORRUPTED)
            </div>

            {/* Chaos Silhouette slightly larger */}
            <div class="w-full h-full flex flex-col items-center justify-center opacity-20 scale-75">
              <div class="w-20 h-20 border-[6px] border-red-800 rotate-45 mb-4 animate-pulse"></div>
              <div class="w-32 h-1/2 border-x-[6px] border-b-[6px] border-red-800 rounded-b-xl"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DATA BLOCKS */}
        <div class="col-span-7 flex flex-col border-l-2 border-red-900/40 pl-4 space-y-3 min-h-0">
          <div class="grid grid-cols-2 gap-3 shrink-0">
            <div class="border-2 border-red-950 p-2 bg-red-900/10 shadow-md">
              <h3 class="font-black border-b-2 border-red-900 mb-2 text-[10px] text-red-500">
                (4a.) SIGIL
              </h3>
              <div class="h-12 flex items-center justify-center text-3xl">
                ☠
              </div>
            </div>
            <div class="border-2 border-red-950 p-2 bg-red-900/10 shadow-md">
              <h3 class="font-black border-b-2 border-red-900 mb-2 text-[10px] text-red-500">
                (4b.) ARMS
              </h3>
              <div class="h-12 bg-black flex flex-col items-center justify-center border border-red-900/40">
                <div class="w-12 h-2.5 bg-red-900 shadow-[0_0_10px_rgba(255,0,0,0.3)]"></div>
              </div>
            </div>
          </div>

          {/* Devotion / Elite / Warleader Grid */}
          <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
            <section class="border-2 border-red-900 p-2 flex flex-col bg-red-950/20 shadow-inner min-h-0">
              <h3 class="font-black border-b-2 border-red-900 mb-2 text-[10px] text-red-500 shrink-0">
                (5.) DEVOTION
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-10 h-10 bg-black border-2 border-red-600 rotate-45 flex items-center justify-center shadow-md">
                  <span class="text-red-600 text-[10px] -rotate-45 font-black">
                    ✖
                  </span>
                </div>
                <div class="w-10 h-10 bg-red-900 border-2 border-yellow-600 rotate-12 shadow-[0_0_15px_rgba(255,100,0,0.4)]"></div>
              </div>
            </section>

            <div class="flex flex-col gap-2 min-h-0">
              <section class="border-2 border-red-900 p-2 flex-1 bg-red-900/5 min-h-0">
                <h3 class="font-bold text-[9px] text-red-500 border-b border-red-900/50 mb-1 leading-none">
                  (6.) ELITE
                </h3>
                <div class="w-8 h-8 bg-red-700 border-2 border-black mt-1 shadow-md"></div>
              </section>
              <section class="border-2 border-red-900 p-2 flex-1 bg-red-900/5 min-h-0">
                <h3 class="font-bold text-[9px] text-red-500 border-b border-red-900/50 mb-1 leading-none">
                  (7.) LORD
                </h3>
                <div class="w-8 h-8 bg-black border-2 border-red-500 shadow-[0_0_8px_red] mt-1"></div>
              </section>
            </div>
          </div>

          {/* 8. Chaos Ranks: Larger Icons */}
          <section class="border-2 border-red-900 p-2 shrink-0 bg-black shadow-lg">
            <h3 class="font-black mb-2 border-b-2 border-red-900 text-[10px] text-red-500">
              (8.) MARKINGS OF THE EYE
            </h3>
            <div class="grid grid-cols-5 gap-2">
              <For each={ranks}>
                {(rank) => (
                  <div class="flex flex-col items-center">
                    <div class="w-5 h-5 rotate-45 bg-red-950 border-2 border-red-700 shadow-sm"></div>
                    <span class="text-[7px] mt-1.5 font-bold text-red-400">
                      {rank.substring(0, 6)}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* FOOTER: Fixed and Bold */}
          <footer class="mt-auto pt-2 flex justify-between items-center shrink-0 border-t-4 border-red-900">
            <p class="text-[9px] font-black italic text-red-700 tracking-widest">
              "LET THE GALAXY BURN."
            </p>
            <div class="border-4 border-red-600 text-red-600 px-3 py-1 text-xs font-black rotate-[-2deg] tracking-tighter bg-black shadow-lg">
              EXCOMUNICATUS TRAITORUM
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChaosSM;
