import { For } from "solid-js";

const Asuryani = () => {
  const shrines = [
    "Avenging",
    "Banshee",
    "Scorpion",
    "Dragon",
    "Spider",
    "Hawk",
    "Reaper",
    "Spear",
    "Hunter",
    "Crimson",
  ];

  return (
    <div class="h-full w-full bg-[#fdfaf1] p-3 text-slate-800 font-sans border-[8px] border-double border-[#2d5a5e] uppercase flex flex-col relative overflow-hidden">
      <div class="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/silk.png')]"></div>

      <header class="border-b-4 border-[#2d5a5e] pb-2 mb-2 shrink-0 flex justify-between items-end z-10">
        <div class="flex-1">
          <h1 class="text-2xl font-light tracking-[0.2em] leading-none text-[#1b3d40]">
            ASURYANI PATH DESIGNATIONS
          </h1>
          <div class="flex items-baseline mt-1">
            <span class="font-bold mr-2 text-[10px] text-[#2d5a5e] shrink-0">
              (1.) CRAFTWORLD:
            </span>
            <span class="text-xl font-medium italic border-b-2 border-dotted border-[#2d5a5e] flex-1 px-1 leading-none tracking-tight">
              BIEL-TAN [THE FRACTURED]
            </span>
          </div>
        </div>
        <div class="text-right pl-4">
          <p class="font-bold text-[9px] text-[#2d5a5e]">
            DATA-CRYSTAL // BT.77
          </p>
        </div>
      </header>

      <div class="flex-1 grid grid-cols-12 gap-4 min-h-0 z-10 overflow-hidden">
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-2 space-y-1 text-[9px] font-bold">
            <div class="flex border-b border-[#2d5a5e]/30 pb-0.5">
              <span class="mr-1 text-[#2d5a5e]">(2.) DOCTRINE:</span>
              <span class="italic truncate text-slate-900">
                "The Sword of Asuryan"
              </span>
            </div>
          </div>

          <div class="relative border-2 border-[#2d5a5e] bg-[#f2ede0] flex-1 flex items-center justify-center shadow-inner min-h-0">
            <div class="absolute top-2 left-2 text-[8px] font-black bg-[#2d5a5e] text-[#fdfaf1] px-2 py-1 z-10 shadow-md">
              ASPECT WARRIOR CORE
            </div>
            <div class="w-full h-full flex flex-col items-center justify-center opacity-20 scale-90">
              <div class="w-16 h-24 border-[4px] border-[#2d5a5e] rounded-t-full rounded-b-lg"></div>
            </div>
          </div>
        </div>

        <div class="col-span-7 flex flex-col border-l-2 border-[#2d5a5e]/40 pl-4 space-y-3 min-h-0">
          <div class="grid grid-cols-2 gap-3 shrink-0">
            <div class="border-2 border-[#2d5a5e] p-2 bg-[#1b3d40]/5">
              <h3 class="font-black border-b-2 border-[#2d5a5e] mb-2 text-[10px]">
                (4a.) RUNE
              </h3>
              <div class="h-12 flex items-center justify-center text-3xl text-[#2d5a5e]">
                ᛖ
              </div>
            </div>
            <div class="border-2 border-[#2d5a5e] p-2 bg-[#1b3d40]/5">
              <h3 class="font-black border-b-2 border-[#2d5a5e] mb-2 text-[10px]">
                (4b.) ARMAMENT
              </h3>
              <div class="h-12 flex items-center justify-center">
                <div class="w-14 h-1.5 bg-[#2d5a5e] rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
            <section class="border-2 border-[#2d5a5e] p-2 flex flex-col bg-[#2d5a5e]/5 min-h-0">
              <h3 class="font-black border-b-2 border-[#2d5a5e] mb-2 text-[10px] shrink-0">
                (5.) HOST
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-10 h-10 border-2 border-[#2d5a5e] rounded-full flex items-center justify-center">
                  <div class="w-6 h-6 bg-[#2d5a5e] rotate-45"></div>
                </div>
              </div>
            </section>

            <div class="flex flex-col gap-2 min-h-0">
              <section class="border-2 border-[#2d5a5e] p-2 flex-1 min-h-0">
                <h3 class="font-bold text-[9px] text-[#2d5a5e]">(6.) EXARCH</h3>
                <div class="w-8 h-8 bg-[#1b3d40] mt-1 rounded-sm rotate-45 border-2 border-[#2d5a5e]"></div>
              </section>
            </div>
          </div>

          <section class="border-2 border-[#2d5a5e] p-2 shrink-0 bg-white/20">
            <h3 class="font-black mb-2 border-b-2 border-[#2d5a5e] text-[10px]">
              (8.) ASPECT SHRINES
            </h3>
            <div class="grid grid-cols-5 gap-2">
              <For each={shrines}>
                {(shrine) => (
                  <div class="flex flex-col items-center">
                    <div class="w-5 h-7 rounded-t-full border-2 border-[#2d5a5e] bg-[#2d5a5e]/10"></div>
                    <span class="text-[7px] mt-1 font-bold text-[#1b3d40]">
                      {shrine.substring(0, 4)}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </section>

          <footer class="mt-auto pt-2 flex justify-between items-center shrink-0 border-t-4 border-[#2d5a5e]">
            <p class="text-[9px] font-medium italic tracking-[0.1em]">
              "The stars themselves once lived and died at our command."
            </p>
            <div class="border-2 border-[#2d5a5e] px-2 py-0.5 text-[10px] font-black">
              SPIRIT-LOCKED
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Asuryani;
