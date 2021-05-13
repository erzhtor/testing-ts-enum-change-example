import { render } from "@testing-library/react";
import { SnapshotObject } from ".";

enum ExampleEnum {
    One,
    Two,
    Three,
}

enum ExampleEnum2 {
    Four = "One",
    Five = "Five",
    Six = "Six",
}

describe("test enums", () => {
    test("SnapshotObject", () => {
        const { asFragment } = render(<SnapshotObject object={ExampleEnum} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("ExampleEnum2", () => {
        const { asFragment } = render(<SnapshotObject object={ExampleEnum2} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
