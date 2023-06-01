import { TranslateLib } from "translate-lib";

const lib = new TranslateLib({ token: "a9477290-9047-5d96-b11c-1f82994f0aa2" });
lib.getTranslations("it").then(console.log);
lib.getTenantInfo().then(console.log);
