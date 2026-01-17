import { createSignal, type Component } from "solid-js";
import { Dynamic } from "solid-js/web";

import LoyalistSM from "../views/Humans/LoyalistSM";
import ChaosSM from "../views/Humans/ChaosSM";
import Asuryani from "../views/Eldars/Asuryani";
import Necron from "../views/Necrons/NecronDynasty";
import AstraMilitarum from "../views/Humans/AstraMilitarum";
import RenegadeImperialGuard from "../views/Humans/RenegadeGuard";

const HomebrewEditor = () => {
  const themes: Record<string, Component> = {
    loyalist: LoyalistSM,
    traitor: ChaosSM,
    asuryani: Asuryani,
    necrons: Necron,
    imperial_guard: AstraMilitarum,
    renegade_imperial_guard: RenegadeImperialGuard,
  };

  const [selectedTheme, setSelectedTheme] = createSignal("loyalist");

  return (
    // h-screen + overflow-hidden prevents the body from scrolling
    <div class="h-screen w-screen bg-[#121212] flex flex-col overflow-hidden">
      {/* HEADER / TOOLBAR - Fixed height via padding/flex-shrink-0 */}
      <nav class="shrink-0 p-1 bg-[#1e1e1e] border-b border-slate-700 flex items-center justify-between shadow-lg z-20">
        <div class="flex items-center gap-4">
          <span class="text-[#e2d6c3] font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            System Logic: Administration
          </span>

          <div class="relative flex items-center">
            <label class="text-slate-500 font-mono text-[9px] mr-2 uppercase">
              Template:
            </label>
            <select
              value={selectedTheme()}
              onInput={(e) => setSelectedTheme(e.currentTarget.value)}
              class="bg-slate-900 text-[#e2d6c3] border border-slate-700 px-4 py-1 font-mono text-xs uppercase tracking-tighter focus:border-orange-500 focus:outline-none hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <option value="loyalist">Adeptus Astartes (Loyalist)</option>
              <option value="traitor">Renegades (Renegades)</option>
              <option value="imperial_guard">Imperial Guard (Loyalist)</option>
              <option value="imperial_guard">Imperial Guard (Renegades)</option>
              <option value="asuryani">Asuryani (Eldar)</option>
              <option value="necrons">Necrons</option>
            </select>
          </div>
        </div>

        <div class="text-slate-600 font-mono text-[8px]">
          TERMINAL // 0.9.4-ALPHA
        </div>
      </nav>

      {/* THE VIEWPORT - flex-1 takes up all remaining space */}
      <main class="flex-1 relative overflow-hidden bg-[#0a0a0a]">
        {/* This wrapper ensures the component inside
           stays exactly the size of the main area
        */}
        <div class="absolute inset-0 w-full h-full">
          <Dynamic component={themes[selectedTheme()]} />
        </div>
      </main>
    </div>
  );
};

export default HomebrewEditor;
