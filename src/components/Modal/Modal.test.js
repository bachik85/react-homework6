import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom';
import Modal from "./Modal";

describe("modal tests", () => {
  test("rendering modal", () => {
    const modal = render(<Modal className="testClassName"
                                closeButton={true}
                                header="test header"
                                actions={[]}
                                closeModal={() => {
                                }}

      />
    );
    expect(modal).toBeDefined();
  });
});
