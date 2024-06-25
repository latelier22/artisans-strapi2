
import React from "react";
const Section = ({section}) => {
  
  return (
   
     

<section className="container mx-auto my-8 p-4  first-line:rounded-md  border-solid border-2">
<h2 className="text-2xl  font-bold mb-10">
{section.title}
</h2>

{section.body}

</section>

  );
};

export default Section;




