# NODE - Martian Robots (coding challenge)

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program
that determines each sequence of robot positions and reports the final position of the robot.

## Usage:

The solution is built in NodeJS and the project has been created by using: npm install. Also development dependencies for testing have been included (JEST for unit testing).

**Testing**
npm test

**Run application**

- Edit input.txt file according to your needs
- node index.js
- the result is printed out in the line command window in a json format (** extra information has been added **)

## Things to be improved

- More unit test

## Thoughts

- I'd provide another solution based in a distributed environment (node js server + FrontEnd with a form) allowing to type in the position of a robot and instructions. Then, according to the information provided, the request would be sent to an endpoint (exposed or implemented using Express framework). And the response would be provided by the endpoint in a json format and be rendered by the frontend in a nice look and feel. I wuld use also MySQL or MongoDB as the persistane layer in this case.

## License

MIT
