const containerGen = () => {
  const containerEl = document.createElement("div");
  return containerEl;
};

const titleGen = (data) => {
  const titleEl = document.createElement("h1");
  titleEl.textContent = data.title;
  titleEl.className = "title";

  return titleEl;
};

const imageGen = (data) => {
  const imageEl = document.createElement("img");
  imageEl.className = "image";
  imageEl.src = data.image;
  imageEl.alt = data.description;

  return imageEl;
};

const paragrGen = (data) => {
  const paragrEl = document.createElement("p");
  paragrEl.textContent = data.description;
  paragrEl.className = "descrizione";

  return paragrEl;
};

const rootEl = document.querySelector(".root-element");
const container = containerGen();

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const title = titleGen(data);
    const image = imageGen(data);
    const paragrafo = paragrGen(data);

    container.append(title, image, paragrafo);
    rootEl.append(container);
  });
