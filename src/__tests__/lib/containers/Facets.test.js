import React from "react";
import {shallow, configure} from "enzyme";
import {Facets, CheckboxGroup} from "../../../lib/containers/Facets";
import {mockData} from "../../../JSON_test_data";

describe("it renders a facet without crashing", () => {
    it("renders correctly", async () => {
        const tree = await shallow(
            <Facets
                data={mockData}
                filter={"name"}
            >
            </Facets>
        )
        expect(tree).toBeDefined()
    });

    it("renders checkbox groups correctly", async () => {
        const tree = await shallow( 
            <Facets
                data={mockData}
                filter={"name"}
            >
            </Facets>
        )
        expect(tree).toBeDefined()
        expect(tree.find(CheckboxGroup)).toHaveLength(1)
    });
})