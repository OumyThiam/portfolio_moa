import Path from "@/components/Path.js";
import About from "@/blocks/about/About.js"
import Skills from "@/blocks/about/Skills.js";
import Facts from "@/blocks/about/Facts.js";
import experience_pro from "../blocks/about/exp_pro";


import "styles/pages/about.sass"

export default (t, locale) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        ${About(t.about)}
        ${Skills(t.skills, locale.skills)}
        ${experience_pro(t.experience_pro)}
        ${Facts(t.facts)}
        
    `;
};
