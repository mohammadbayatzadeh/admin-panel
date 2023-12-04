import React, { useEffect } from "react";

//temps
import Contact from "../../modules/Contact";

function ContactPage() {
  useEffect(() => {
    document.title = "Contact Panel";
  }, []);
  return <Contact />;
}

export default ContactPage;
