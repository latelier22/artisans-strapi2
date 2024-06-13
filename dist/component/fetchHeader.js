import myFetch from "./myFetch";
async function fetchHeader() {
  const channel = process.env.NEXT_PUBLIC_STRAPI_CHANNEL;
  const response = await myFetch(`/api/headers?populate=*&filters[channels][name][$eq]=${channel}`, "GET", null, "headers");
  const data = response.data[0];

  // Extracting and formatting the header data
  const header = {
    id: data.id,
    messages: data.attributes.message.reduce((acc, msg) => {
      acc[msg.title] = msg.message;
      return acc;
    }, {})
  };
  console.log("header", header);
  return header;
}
export default fetchHeader;