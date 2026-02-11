const endpoints = [
  { btn: "get-data",   out: "data",  url: "http://192.168.17.246:9200", json: true },
  { btn: "get-data1",  out: "data1", url: "http://192.168.17.246:9200/_cat/indices", json: false },
  { btn: "get-data2",  out: "data2", url: "http://192.168.17.246:9200/_cat/shards", json: false },
];

async function fetchTo(url, outId, asJson) {
  const out = document.getElementById(outId);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Response status: ${res.status}`);
    const data = asJson ? await res.json() : await res.text();
    out.textContent = asJson ? JSON.stringify(data, null, 2) : data;
  } catch (e) {
    console.log(e);
  }
}

endpoints.forEach(({ btn, out, url, json }) => {
  document.getElementById(btn).addEventListener("click", () => fetchTo(url, out, json));
});
