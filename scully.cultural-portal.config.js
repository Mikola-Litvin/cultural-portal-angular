exports.config = {
  projectRoot: "./src",
  projectName: "cultural-portal",
  outDir: './dist/static',
  routes: {
    '/architects/:architectsId': {
      type: 'json',
      architectsId: {
        url: 'https://my-json-server.typicode.com/Mikola-Litvin/cultural-portal-angular/posts',
        property: 'id',
      },
    },
  },
};