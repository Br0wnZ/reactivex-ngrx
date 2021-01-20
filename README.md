# Initial Project - RXJS Course

* The first thing we must do after downloading the code is to execute the command:

```
npm install
```
That command will download all the node modules needed to run the project.


* When I finish installing the node_modules, then we can run the project with the following command

```
npm start
```
For that to work, remember that you must execute that command in the same directory where the ```package.json```

## Cambiar el puerto
By default, the port I configured for this project is the ```8081```, but if you need to change it because that port may be used by your computer, you can change it by opening the ```package.json``` >> scripts . There you will see the instruction that the development server launches

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

They simply change the port for the one you need and that's it. (logically they save the changes before executing the `` `npm start``` again)


