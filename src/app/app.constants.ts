// let Environment = 'DEVELOPMENT';
const Environment = 'PRODUCTION';

const BaseUrl = "http://localhost:8080/api/";

let Host;
if (Environment === 'PRODUCTION') {
    Host = true;
} else {
    Host = false;
}

export { BaseUrl, Host };
