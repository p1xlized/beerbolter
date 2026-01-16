import { For } from "solid-js";

const AstraMilitarum = () => {
  const divisions = [
    "Infantry",
    "Armoured",
    "Artillery",
    "Airborne",
    "Recon",
    "Abhuman",
    "Engineer",
    "Medic",
    "Commissar",
    "Command",
  ];

  return (
    <div class="h-full w-full bg-[#3d4435] p-3 text-[#d1d5db] font-mono border-[8px] border-double border-[#242920] uppercase flex flex-col relative overflow-hidden">
      {/* GRITTY OVERLAY */}
      <div class="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>

      {/* HEADER: Munitorum Form Style */}
      <header class="border-b-4 border-[#f59e0b] pb-2 mb-2 shrink-0 flex justify-between items-end z-10">
        <div class="flex-1">
          <h1 class="text-2xl font-black tracking-tight leading-none text-[#f59e0b]">
            DEPT. MUNITORUM // REQ-FORM
          </h1>
          <div class="flex items-baseline mt-1">
            <span class="font-bold mr-2 text-[10px] text-[#f59e0b] shrink-0">
              (1.) REGIMENT:
            </span>
            <span class="text-xl font-black italic border-b-2 border-dashed border-[#f59e0b] flex-1 px-1 leading-none text-white">
              CADIAN 114TH [REVENANTS]
            </span>
          </div>
        </div>
        <div class="text-right pl-4">
          <p class="font-bold text-[9px] text-[#f59e0b] opacity-80">
            STAMP: VERIFIED
          </p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div class="flex-1 grid grid-cols-12 gap-4 min-h-0 z-10 overflow-hidden">
        {/* LEFT COLUMN: VISUALS */}
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-2 space-y-1 text-[9px] font-bold">
            <div class="flex border-b border-white/20 pb-0.5">
              <span class="mr-1 text-[#f59e0b]">(2.) DOCTRINE:</span>
              <span class="italic truncate text-white">"HOLD THE LINE"</span>
            </div>
            <div class="flex border-b border-white/20 pb-0.5">
              <span class="mr-1 text-[#f59e0b]">(3.) CLASS:</span>
              <span class="truncate">SHOCK TROOPS</span>
            </div>
          </div>

          <div class="relative border-2 border-[#242920] bg-[#2a2f25] flex-1 flex items-center justify-center shadow-inner min-h-0">
            <div class="absolute top-2 left-2 text-[8px] font-black bg-[#f59e0b] text-[#242920] px-2 py-1 z-10">
              MARK VII FLAK ARMOUR
            </div>

            {/* Guard Silhouette */}
            <div class="w-full h-full flex flex-col items-center justify-center opacity-20 scale-75">
              <div class="w-24 h-20 border-[6px] border-[#f59e0b] rounded-t-lg mb-2"></div>
              <div class="w-20 h-1/2 border-x-[6px] border-b-[6px] border-[#f59e0b]"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DATA BLOCKS */}
        <div class="col-span-7 flex flex-col border-l-2 border-[#f59e0b]/30 pl-4 space-y-3 min-h-0">
          <div class="grid grid-cols-2 gap-3 shrink-0">
            <div class="border-2 border-[#242920] p-2 bg-black/20">
              <h3 class="font-black border-b-2 border-[#f59e0b] mb-2 text-[10px]">
                CORPS SIGIL
              </h3>
              <div class="h-12 flex items-center justify-center text-3xl text-white">
                🦅
              </div>
            </div>
            <div class="border-2 border-[#242920] p-2 bg-black/20">
              <h3 class="font-black border-b-2 border-[#f59e0b] mb-2 text-[10px]">
                PAT. ARMS
              </h3>
              <div class="h-12 flex flex-col items-center justify-center space-y-1">
                <div class="w-14 h-2 bg-zinc-600"></div>
                <div class="w-10 h-1.5 bg-zinc-700"></div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
            <section class="border-2 border-[#242920] p-2 flex flex-col bg-white/5 min-h-0">
              <h3 class="font-black border-b-2 border-[#f59e0b] mb-2 text-[10px] shrink-0">
                RANK I.D.
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-10 h-10 border-2 border-[#f59e0b] flex flex-col items-center justify-center">
                  <div class="w-full h-1 bg-[#f59e0b] my-0.5"></div>
                  <div class="w-full h-1 bg-[#f59e0b] my-0.5"></div>
                </div>
              </div>
            </section>

            <div class="flex flex-col gap-2 min-h-0">
              <section class="border-2 border-[#242920] p-2 flex-1 min-h-0">
                <h3 class="font-bold text-[9px] text-[#f59e0b]">OFFICER</h3>
                <div class="w-8 h-8 bg-red-900 border-2 border-white mt-1 shadow-md"></div>
              </section>
            </div>
          </div>

          {/* Divisions */}
          <section class="border-2 border-[#242920] p-2 shrink-0 bg-black/20">
            <h3 class="font-black mb-2 border-b-2 border-[#f59e0b] text-[10px]">
              REGIMENTAL DIVISIONS
            </h3>
            <div class="grid grid-cols-5 gap-2">
              <For each={divisions}>
                {(div) => (
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 border-2 border-[#f59e0b] bg-white/5 flex items-center justify-center">
                      <span class="text-[8px] font-black">
                        {div.substring(0, 1)}
                      </span>
                    </div>
                    <span class="text-[7px] mt-1 font-bold text-white/60">
                      {div.substring(0, 5)}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* FOOTER */}
          <footer class="mt-auto pt-2 flex justify-between items-center shrink-0 border-t-4 border-[#f59e0b]">
            <p class="text-[9px] font-black italic text-[#f59e0b]">
              "GLORY TO THE FIRST MAN TO DIE."
            </p>
            <div class="bg-red-700 text-white px-3 py-1 text-xs font-black -rotate-1 border-2 border-white">
              EXPENDABLE
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AstraMilitarum;
