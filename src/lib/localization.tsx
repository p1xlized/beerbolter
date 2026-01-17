import { Derived, Store } from "@tanstack/store";
import * as i18n from "@solid-primitives/i18n";

// Define the type to match the library's output
type FlattenedDict = Record<string, any>;

export const store = new Store({
  locale: "en",
  // Change the type from string to any or unknown to allow the flattened structure
  dictionary: {} as FlattenedDict,
});

export const i18nHelper = new Derived({
  fn: () => {
    // We access the state directly for the derived calculation
    const dict = store.state.dictionary;
    return i18n.translator(() => dict);
  },
  deps: [store],
});

i18nHelper.mount();

export const loadLocale = async (lang: string) => {
  const response = await fetch(`/locales/${lang}.json`);
  const json = await response.json();

  // The error was here because i18n.flatten returns unknown values
  const flat = i18n.flatten(json) as FlattenedDict;

  store.setState((state) => ({
    ...state,
    locale: lang,
    dictionary: flat,
  }));
};
