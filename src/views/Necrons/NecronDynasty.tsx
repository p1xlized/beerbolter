import { For } from "solid-js";

const Necron = () => {
  const glyphs = [
    "Phaeron",
    "Overlord",
    "Lord",
    "Cryptek",
    "Warden",
    "Lychguard",
    "Deathmark",
    "Immortal",
    "Warrior",
    "Canoptek",
  ];

  return (
    <div class="h-full w-full bg-[#0a0c0a] p-3 text-[#2ecc71] font-mono border-[8px] border-double border-[#1b3d2b] uppercase flex flex-col relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <header class="border-b-4 border-[#1b3d2b] pb-2 mb-2 shrink-0 flex justify-between items-end z-10">
        <div class="flex-1">
          <h1 class="text-2xl font-black tracking-[0.3em] leading-none text-[#2ecc71] drop-shadow-[0_0_8px_rgba(46,204,113,0.4)]">
            DYNASTIC PROTOCOL LOG
          </h1>
          <div class="flex items-baseline mt-1">
            <span class="font-bold mr-2 text-[10px] text-[#1b3d2b] shrink-0">
              (1.) DYNASTY:
            </span>
            <span class="text-xl font-black italic border-b-2 border-dotted border-[#1b3d2b] flex-1 px-1 leading-none text-[#2ecc71]">
              SZAREKHAN [AWAKENED]
            </span>
          </div>
        </div>
        <div class="text-right pl-4">
          <p class="font-bold text-[9px] text-[#1b3d2b]">
            STASIS-REF // 000.M42
          </p>
        </div>
      </header>

      <div class="flex-1 grid grid-cols-12 gap-4 min-h-0 z-10 overflow-hidden">
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-2 space-y-1 text-[9px] font-bold">
            <div class="flex border-b border-[#1b3d2b] pb-0.5">
              <span class="mr-1 text-[#1b3d2b]">(2.) EDICT:</span>
              <span class="truncate">"THE STARS ARE OURS BY RIGHT"</span>
            </div>
          </div>

          <div class="relative border-2 border-[#1b3d2b] bg-[#050605] flex-1 flex items-center justify-center shadow-[inset_0_0_30px_rgba(46,204,113,0.1)] min-h-0">
            <div class="absolute top-2 left-2 text-[8px] font-black bg-[#1b3d2b] text-[#2ecc71] px-2 py-1 z-10 border border-[#2ecc71]">
              CANOPTEK SUB-ROUTINE
            </div>
            <div class="w-full h-full flex flex-col items-center justify-center opacity-30 scale-75">
              <div class="w-24 h-24 border-4 border-[#2ecc71] rotate-45 flex items-center justify-center">
                <div class="w-12 h-12 bg-[#2ecc71] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-7 flex flex-col border-l-2 border-[#1b3d2b] pl-4 space-y-3 min-h-0">
          <div class="grid grid-cols-2 gap-3 shrink-0">
            <div class="border-2 border-[#1b3d2b] p-2 bg-black">
              <h3 class="font-black border-b-2 border-[#1b3d2b] mb-2 text-[10px]">
                ANUBIC SIGIL
              </h3>
              <div class="h-12 flex items-center justify-center text-3xl text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]">
                ☥
              </div>
            </div>
            <div class="border-2 border-[#1b3d2b] p-2 bg-black">
              <h3 class="font-black border-b-2 border-[#1b3d2b] mb-2 text-[10px]">
                BEAM FREQ
              </h3>
              <div class="h-12 flex flex-col items-center justify-center">
                <div class="w-full h-1 bg-[#1b3d2b]"></div>
                <div class="w-full h-2 bg-[#2ecc71] my-0.5 animate-pulse"></div>
                <div class="w-full h-1 bg-[#1b3d2b]"></div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
            <section class="border-2 border-[#1b3d2b] p-2 flex flex-col bg-black min-h-0">
              <h3 class="font-black border-b-2 border-[#1b3d2b] mb-2 text-[10px] shrink-0">
                REANIMATION
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-10 h-14 bg-[#1b3d2b]/20 border-2 border-[#2ecc71] rounded-t-full shadow-[0_0_10px_#2ecc71]"></div>
              </div>
            </section>

            <div class="flex flex-col gap-2 min-h-0">
              <section class="border-2 border-[#1b3d2b] p-2 flex-1 min-h-0">
                <h3 class="font-bold text-[9px] border-b border-[#1b3d2b]">
                  PROTOCOL
                </h3>
                <div class="w-6 h-6 bg-[#2ecc71] mt-2 shadow-[0_0_15px_#2ecc71]"></div>
              </section>
            </div>
          </div>

          <section class="border-2 border-[#1b3d2b] p-2 shrink-0 bg-black">
            <h3 class="font-black mb-2 border-b-2 border-[#1b3d2b] text-[10px]">
              HIERARCHY GLYPHS
            </h3>
            <div class="grid grid-cols-5 gap-2">
              <For each={glyphs}>
                {(glyph) => (
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 border border-[#2ecc71] rotate-45 bg-[#1b3d2b]/10 flex items-center justify-center">
                      <div class="w-2 h-2 bg-[#2ecc71]"></div>
                    </div>
                    <span class="text-[7px] mt-2 font-black tracking-tighter">
                      {glyph.substring(0, 5)}
                    </span>
                  </div>
                )}
              </For>
            </div>
          </section>

          <footer class="mt-auto pt-2 flex justify-between items-center shrink-0 border-t-4 border-[#1b3d2b]">
            <p class="text-[9px] font-black italic tracking-widest text-[#1b3d2b]">
              "THEIR FATE WAS SEALED EONS AGO."
            </p>
            <div class="bg-[#2ecc71] text-black px-3 py-1 text-xs font-black skew-x-[-12deg]">
              IMMORTAL
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Necron;
