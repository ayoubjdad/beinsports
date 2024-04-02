import { getNewApi } from "../config/api.config";

const apis = {
  // * GET
  getTeamLogo: (teamId) =>
    getNewApi(`https://api.sofascore.app/api/v1/team/${teamId}/image`),
  // getData: (dir, fileName) =>
  //   getNewApi(`${appDataEndPoints.getData}/${dir}/${fileName}`),
  // getFileNames: (dir) => getNewApi(`${appDataEndPoints.getFiles}/${dir}`),
};

export default apis;
