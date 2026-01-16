import { For } from "solid-js";

const RenegadeGuard = () => {
  const cells = [
    "Cultist",
    "Marauder",
    "Mutant",
    "Traitor",
    "Enforcer",
    "Ogryn",
    "Witch",
    "Disciple",
    "Stalker",
    "Icon-Bear",
  ];

  return (
    <div class="h-full w-full bg-[#2a1b15] p-3 text-[#e2b08a] font-mono border-[8px] border-double border-[#5c2d1a] uppercase flex flex-col relative overflow-hidden">
      {/* RUST & GRIME OVERLAY */}
      <div class="absolute inset-0 opacity-25 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

      {/* HEADER: Vandalized Document Style */}
      <header class="border-b-4 border-[#8b0000] pb-2 mb-2 shrink-0 flex justify-between items-end z-10">
        <div class="flex-1">
          <h1 class="text-2xl font-black tracking-normal leading-none text-[#ff4500] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            RENEGADE VIGIL // LOG-06
          </h1>
          <div class="flex items-baseline mt-1">
            <span class="font-bold mr-2 text-[10px] text-[#8b0000] shrink-0">
              (1.) WARBAND:
            </span>
            <span class="text-xl font-black italic border-b-2 border-dashed border-[#8b0000] flex-1 px-1 leading-none text-[#ff7f50]">
              THE GILDED COIL [REBEL]
            </span>
          </div>
        </div>
        <div class="text-right pl-4">
          <p class="font-bold text-[9px] text-[#8b0000] line-through decoration-black">
            REF: MUNITORUM
          </p>
          <p class="font-bold text-[9px] text-[#ff4500]">VERDICT: INFIDEL</p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div class="flex-1 grid grid-cols-12 gap-4 min-h-0 z-10 overflow-hidden">
        {/* LEFT COLUMN: VISUALS */}
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-2 space-y-1 text-[9px] font-bold">
            <div class="flex border-b border-[#8b0000]/40 pb-0.5">
              <span class="mr-1 text-[#8b0000]">(2.) PACT:</span>
              <span class="italic truncate text-[#e2b08a]">
                "BLOOD FOR THE LIBERATOR"
              </span>
            </div>
            <div class="flex border-b border-[#8b0000]/40 pb-0.5">
              <span class="mr-1 text-[#8b0000]">(3.) ORIGIN:</span>
              <span class="truncate">LOST AND THE DAMNED</span>
            </div>
          </div>

          <div class="relative border-2 border-[#5c2d1a] bg-[#1a0f0a] flex-1 flex items-center justify-center shadow-[inset_0_0_20px_rgba(139,0,0,0.5)] min-h-0">
            <div class="absolute top-2 left-2 text-[8px] font-black bg-[#8b0000] text-black px-2 py-1 z-10 skew-x-[-10deg]">
              SCAVENGED PLATE
            </div>

            {/* Jagged Silhouette */}
            <div class="w-full h-full flex flex-col items-center justify-center opacity-30 scale-75">
              <div class="w-20 h-24 border-[4px] border-[#ff4500] clip-path-polygon">
                {/* Visual "Crack" effect */}
                <div class="w-full h-px bg-[#ff4500] rotate-45 translate-y-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DATA BLOCKS */}
        <div class="col-span-7 flex flex-col border-l-2 border-[#8b0000]/50 pl-4 space-y-3 min-h-0">
          <div class="grid grid-cols-2 gap-3 shrink-0">
            <div class="border-2 border-[#5c2d1a] p-2 bg-[#8b0000]/10 shadow-sm">
              <h3 class="font-black border-b-2 border-[#8b0000] mb-2 text-[10px] text-[#ff4500]">
                ICONOGRAPHY
              </h3>
              <div class="h-12 flex items-center justify-center text-4xl text-[#ff4500]">
                ⦻
              </div>
            </div>
            <div class="border-2 border-[#5c2d1a] p-2 bg-[#8b0000]/10 shadow-sm">
              <h3 class="font-black border-b-2 border-[#8b0000] mb-2 text-[10px] text-[#ff4500]">
                LOOTED ARMS
              </h3>
              <div class="h-12 flex flex-col items-center justify-center">
                <div class="w-12 h-3 bg-[#5c2d1a] border border-[#ff4500]/50"></div>
                <div class="w-8 h-1.5 bg-[#8b0000] mt-1 self-start ml-2"></div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
            <section class="border-2 border-[#5c2d1a] p-2 flex flex-col bg-black/40 min-h-0 shadow-inner">
              <h3 class="font-black border-b-2 border-[#8b0000] mb-2 text-[10px] shrink-0 text-[#ff4500]">
                HERESY LVL
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-12 h-12 border-4 border-double border-[#ff4500] flex items-center justify-center">
                  <div class="w-6 h-6 bg-[#ff4500] rotate-45 animate-pulse"></div>
                </div>
              </div>
            </section>

            <div class="flex flex-col gap-2 min-h-0">
              <section class="border-2 border-[#5c2d1a] p-2 flex-1 min-h-0">
                <h3 class="font-bold text-[9px] text-[#8b0000] border-b border-[#8b0000]/30 mb-1">
                  LEADER
                </h3>
                <div class="w-8 h-8 bg-[#8b0000] border-2 border-black rotate-[15deg] mt-1 shadow-lg"></div>
              </section>
            </div>
          </div>

          {/* Cells / Disciples */}
          <section class="border-2 border-[#5c2d1a] p-2 shrink-0 bg-black/40">
            <h3 class="font-black mb-2 border-b-2 border-[#8b0000] text-[10px] text-[#ff4500]">
              INFIDEL CELL MARKINGS
            </h3>
            <div class="grid grid-cols-5 gap-2">
              <For each={cells}>
                {(cell) => (
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 border-2 border-[#8b0000] bg-[#1a0f0a] flex items-center justify-center rotate-[-5deg]">
                      <span class="text-[9px] font-black text-[#ff4500]">
                        †
                      </span>
                    </div>
                    <span class="text-[7px] mt-1 font-bold text-[#e2b08a]/60">
                      {cell.substring(0, 5)}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* FOOTER: Scrap-metal badge */}
          <footer class="mt-auto pt-2 flex justify-between items-center shrink-0 border-t-4 border-[#8b0000]">
            <p class="text-[9px] font-black italic text-[#8b0000]">
              "DEATH TO THE CORPSE-GOD."
            </p>
            <div class="bg-[#1a0f0a] text-[#ff4500] px-3 py-1 text-[10px] font-black border-2 border-[#ff4500] shadow-[0_0_10px_rgba(255,69,0,0.3)]">
              MALIFICUS
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RenegadeGuard;
