import { For } from "solid-js";

const LoyalistSM = () => {
  const companies = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
  ];

  return (
    <div class="h-full w-full bg-[#e2d6c3] p-2 text-slate-900 font-mono border-[8px] border-double border-slate-800 uppercase flex flex-col overflow-hidden">
      {/* HEADER: Increased text size and padding */}
      <header class="border-b-4 border-slate-900 pb-2 mb-2 shrink-0 flex justify-between items-end">
        <div class="flex-1">
          <h1 class="text-2xl font-black tracking-tighter leading-none">
            Adeptus Astartes Markings
          </h1>
          <div class="flex items-baseline mt-1">
            <span class="font-bold mr-2 text-[10px] shrink-0">
              (1.) Chapter:
            </span>
            <span class="text-xl font-black italic border-b-2 border-dotted border-slate-800 flex-1 px-1 leading-none">
              Iron Judges
            </span>
          </div>
        </div>
        <div class="text-right pl-4">
          <p class="font-bold text-[9px] opacity-70">ADMIN-REF: A116-SM</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div class="flex-1 grid grid-cols-12 gap-4 min-h-0 overflow-hidden">
        {/* LEFT COLUMN: Visual focus remains large */}
        <div class="col-span-5 flex flex-col min-h-0">
          <div class="shrink-0 mb-2 space-y-1 text-[9px] font-bold">
            <div class="flex border-b border-slate-400 pb-0.5">
              <span class="mr-1 text-slate-500">(2.) Motto:</span>
              <span class="italic truncate text-slate-900">
                "Balance the scales"
              </span>
            </div>
            <div class="flex border-b border-slate-400 pb-0.5">
              <span class="mr-1 text-slate-500">(3.) Tactics:</span>
              <span class="truncate">Dark Angels Successor</span>
            </div>
          </div>

          {/* Armor Viewport: Still fills space but better defined */}
          <div class="relative border-2 border-slate-900 bg-[#d4c5af] flex-1 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] min-h-0">
            <div class="absolute top-2 left-2 text-[8px] font-black bg-slate-900 text-[#e2d6c3] px-2 py-1 z-10 shadow-md">
              MK X TACTICUS
            </div>
            {/* Visual placeholder slightly larger scale */}
            <div class="w-full h-full flex flex-col items-center justify-center opacity-15 scale-75">
              <div class="w-20 h-20 rounded-full border-[6px] border-slate-900 mb-4"></div>
              <div class="w-32 h-1/2 border-[6px] border-slate-900 rounded-b-[40px]"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Data Blocks with significantly larger labels */}
        <div class="col-span-7 flex flex-col border-l-2 border-slate-800 pl-4 space-y-3 min-h-0">
          {/* Symbol & Weapon */}
          <div class="grid grid-cols-2 gap-3 shrink-0">
            <div class="border-2 border-slate-900 p-2 bg-white/10 shadow-sm">
              <h3 class="font-black border-b-2 border-slate-800 mb-2 text-[10px]">
                (4a.) Symbol
              </h3>
              <div class="h-12 flex items-center justify-center text-3xl">
                ⚖
              </div>
            </div>
            <div class="border-2 border-slate-900 p-2 bg-white/10 shadow-sm">
              <h3 class="font-black border-b-2 border-slate-800 mb-2 text-[10px]">
                (4b.) Primary Arms
              </h3>
              <div class="h-12 bg-slate-800/20 flex items-center justify-center border border-slate-400">
                <div class="w-12 h-3 bg-slate-900"></div>
              </div>
            </div>
          </div>

          {/* Designations: Increased circle sizes */}
          <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
            <section class="border-2 border-slate-800 p-2 flex flex-col min-h-0 bg-slate-400/5">
              <h3 class="font-black border-b-2 border-slate-800 mb-2 text-[10px] shrink-0">
                (5.) Line
              </h3>
              <div class="flex justify-around items-center flex-1">
                <div class="w-10 h-10 bg-slate-700 border-2 border-slate-900 rounded-t-full shadow-md"></div>
                <div class="w-10 h-10 bg-slate-700 border-2 border-slate-900 rounded-t-full relative overflow-hidden shadow-md">
                  <div class="absolute inset-y-0 left-1/3 right-1/3 bg-orange-700"></div>
                </div>
              </div>
            </section>

            <div class="flex flex-col gap-2 min-h-0 text-[9px] font-bold">
              <section class="border-2 border-slate-800 p-2 flex-1 flex flex-col min-h-0">
                <h3 class="border-b border-slate-400 mb-1">(6.) Veteran</h3>
                <div class="flex-1 flex items-center">
                  <div class="w-8 h-8 bg-orange-600 border-2 border-slate-800 rounded-t-full"></div>
                </div>
              </section>
              <section class="border-2 border-slate-800 p-2 flex-1 flex flex-col min-h-0">
                <h3 class="border-b border-slate-400 mb-1">(7.) Command</h3>
                <div class="flex-1 flex items-center">
                  <div class="w-8 h-8 bg-slate-800 border-2 border-orange-600 rounded-t-full"></div>
                </div>
              </section>
            </div>
          </div>

          {/* Knee Signifiers: Larger circles, clearer text */}
          <section class="border-2 border-slate-800 p-2 shrink-0 bg-white/5">
            <h3 class="font-black mb-2 border-b-2 border-slate-800 text-[10px]">
              (8.) Company Designations
            </h3>
            <div class="grid grid-cols-5 gap-2">
              <For each={companies}>
                {(company) => (
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 rounded-full bg-orange-900 border-2 border-slate-900 shadow-md"></div>
                    <span class="text-[8px] font-black mt-1">{company}</span>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* FOOTER: Fixed height, larger text */}
          <footer class="shrink-0 border-t-4 border-slate-900 pt-2 flex justify-between items-center bg-[#e2d6c3] z-10">
            <p class="text-[9px] font-black italic tracking-tight">
              "Thought for the day: Be strong in your ignorance."
            </p>
            <div class="border-4 border-red-900/60 text-red-900/60 px-3 py-1  text-xs font-black rotate-[-2deg] shadow-sm">
              CLASSIFIED
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoyalistSM;
