import _ from 'lodash';
import moment from 'moment';
import './requests';
moment.locale('pt-br')

function component () {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const time = new Date();
console.log(time);

const timeMoment = moment(time).format("h:mm:ss");
console.log('timeMoment', timeMoment);

//input do usuário
const a = moment("21/01/2020", "DD/MM/YYYY")

//menos 15 dias dia da semana
const subFifteen = a.subtract(15, 'days')
console.log(subFifteen.format('dddd'))

//Mes após 60 dias
console.log(subFifteen.format('dddd'), a.add(60, 'days').format('MMMM'))

//Natal
console.log(moment("25/12/" + a.format("YYYY"), "DD/MM/YYYY").format("dddd"))


//Aula requests
