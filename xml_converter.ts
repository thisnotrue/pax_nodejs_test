// MODULES
let http = require('http');
let input = require('./app/library/input');


  input.ask("Email", /^.+@.+$/, function(email) {
    console.log("Your email is:", email);
 
    process.exit();
  });

// function readInput(prompt)

//optional command
let command;
if (process.argv[2] == undefined) {
  console.log("command is not defined")
} else {
  console.log("command: " + process.argv[2]);

  //The unary operator + converts string to number
  command = +process.argv[2];
}

//list of variables
let nation = ['AA', 'BC', 'SE', 'TR'];
let subcode = ['S00', 'S01', 'S02', 'S03', 'S04', 'S05'];
let carrier = ['SS', 'VV', 'LL'];

// var stdin = process.openStdin();

//display arrays
function displayArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + 1 + ') ' + array[i]);
  }
}

displayArray(nation);



//Input command

//choose nation
switch (command) {
  case 1:
    console.log('case 1');

    break
  case 2:
    console.log('case 2');

    break
  case 3:
    console.log('case 3');

    break
  case 4:
    console.log('case 4');

    break
  default:
    console.log('default case');
}

//choose subcode


//choose carrier


var builder = require('xmlbuilder');

//create array from file



//X1 Template 
var x1 = builder.create('Onwer', {
    encoding: 'utf-8'
  })

  .att('OwnerIdentifier', "AMD")
  .ele('Nation', {
    'Nation': nation
  })
  .ele('TaxCode', {
    'att1': 'test1'
  })
  .ele('TaxType', {
    'att1': 'test1',
    'att2': 'test2',
    'att3': 'test3'
  })
  .ele('TaxRulesSequence', {
    'att1': 'test1',
    'att2': 'test2'
  })
  .ele('TaxRulesData', {
    'att1': 'test1',
    'att2': 'test2',
    'att3': 'test3'
  })
  .ele('TaxUnitTag', {
    'att1': 'test1'
  }).up()
  .ele('TaxTarget', {
    'att1': 'test1'
  })
  .ele('CarrierApplTable', {
    'att1': 'test1'
  })
  .ele('CarrierAppSegment').up()
  .ele('CarrierAppSegment', {
    'att1': carrier
  }).up().up().up()
  .ele('TaxApplication', {
    'Subcode': subcode,
    'att2': 'test2'
  })
  .ele('SpecifiedTax');

console.log(x1.end({
  pretty: true
}));