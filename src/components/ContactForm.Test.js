import React from "react";
import ContactForm from "./ContactForm";
import {render} from "@testing-library/react";
import 'mutationobserver-shim';


test("renders form correctly",()=>{

   const { getByLabelText } = render(<ContactForm />);

});