import React from "react";
import ContactForm from "./ContactForm";
import {render, fireEvent} from "@testing-library/react";

import 'mutationobserver-shim';


test("renders form component correctly",()=>{

    render(<ContactForm />);

});


test("renders form label text" ,() =>{

    const {getByText} = render(<ContactForm/>);

    const firstName = getByText(/first name/i);

    fireEvent.change(firstName , {target: {innerHTML : "miguel"}}); //changes the innerhtml of the targeted variable
    
    expect(firstName.innerHTML).toBe("miguel"); //checks labels innerHtml for the set string

});


test("renders placeholder text correctly" , () =>{

    const { getByPlaceholderText } = render(<ContactForm />);

    getByPlaceholderText(/mike/i);
})