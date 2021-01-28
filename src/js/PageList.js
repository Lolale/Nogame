const PageList = (argument = "") => {
  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch (`${finalURL}`)
      .then((response) => response.json ())
      .then((response) => {
        let { name, released, description } = response;
        let articleDOM = document.querySelector(".page-detail .article");

        articleDOM.querySelector("h1.title").innerHTML = name;
        articleDOM.querySelector("p.realease-date span").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
      });
    };
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContest.innerHTML = `
      <section class="page-list">
        <div class="articles">Hey, this page is a PageList template, about: ${argument}</div>
      </section>
      `;

      preparePage();
  };

  render();
};