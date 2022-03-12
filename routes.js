
const loginHandler = (request, h) => {
       const { username, password } = request.payload;
       if (password === 'password') {
              return h.response(request.payload).code(200).header('X-Custom', 'some-value').type('application/json');

       }
       return h.response({ 'message': 'password salah!' }).code(404).header('X-Custom', 'some-value').type('application/json');
}

const homeHandler = (request, h) => {
       return 'Homepage';
}

const aboutHandler = (request, h) => {
       return 'About page';
}

const profileHandler = (request, h) => {
       let { username = 'stranger' } = request.params;
       let { location } = request.query;
       if (username === '') {
              username = 'stranger';
       }
       let response = `${username} profile page`;
       if (location) {
              response = `${response}, from ${location}`;
       }
       return response;
}

const notfoundHandler = (request, h) => {
       return 'Not Found';
}

const routes = [
       {
              method: 'POST',
              path: "/login",
              handler: loginHandler

       },
       {
              method: 'GET',
              path: "/",
              handler: homeHandler

       },
       {
              method: 'GET',
              path: "/about",
              handler: aboutHandler

       },
       {
              method: 'GET',
              path: "/profile/{username?}",
              handler: profileHandler

       },
       {
              method: '*',
              path: "/{any*}",
              handler: notfoundHandler

       }
];

module.exports = routes