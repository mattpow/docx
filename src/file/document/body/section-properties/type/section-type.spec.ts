import { expect } from "chai";

import { Formatter } from "export/formatter";
import { Type } from "./section-type";
import { SectionType } from "./section-type-attributes";

describe("Type", () => {
    it("should create with even page section type", () => {
        const sectionType = new Type(SectionType.EVEN_PAGE);

        const tree = new Formatter().format(sectionType);

        expect(tree).to.deep.equal({
            "w:type": {
                _attr: {
                    "w:val": "evenPage",
                },
            },
        });
    });

    it("should create with continuous section type", () => {
        const sectionType = new Type(SectionType.CONTINUOUS);

        const tree = new Formatter().format(sectionType);

        expect(tree).to.deep.equal({
            "w:type": {
                _attr: {
                    "w:val": "continuous",
                },
            },
        });
    });
});
