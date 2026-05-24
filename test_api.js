async function test() {
  try {
    console.log("Fetching...");
    const res = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=1e768420-7aa3-46d2-951b-3ac2eadc1711&offset=0");
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
  } catch(e) {
    console.error(e);
  }
}
test();
