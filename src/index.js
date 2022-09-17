import _ from 'lodash';
import moment from 'moment';
moment.locale('pt-br')

function component () {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const time = new Date();
console.log(time);

const timeMoment = moment(time).format("h:mm:ss");
console.log('timeMoment', timeMoment);


