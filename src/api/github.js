
import axios from "axios";

//crear peticiones para listar mis repositorios ya sea publicos o privados
const urlApiGithub = "https://api.github.com";

const ApiGithub = {
  getRepos: async () => {
      try {


        const data = await axios.get(urlApiGithub + "/user/repos", {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            }
            });

        console.log(data.data);
        //mostrar repo en cuyo name incluya la palabra "SENA"
        const repos = data.data.filter((repo) => repo.name.includes("SENA"));
        console.log(repos);

      } catch (error) {
        console.log(error);
      }
  },
};

export default ApiGithub;
