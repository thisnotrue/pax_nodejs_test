// MODULES
let http = require('http');
let input = require('./library/input.js');
//list of variables
let nation = ['AA', 'BC', 'SE', 'TR'];
let subcode = ['S00', 'S01', 'S02', 'S03', 'S04', 'S05'];
let carrier = ['SS', 'VV', 'LL'];
//Menu
console.log('1: Display nation');
console.log('2: Display subocde');
console.log('3: Display carrier');
console.log('4: Email');
//Optional command
function optionalCommand(callback) {
    let command;
    if (process.argv[2] == undefined) {
        console.log("command is not defined");
    }
    else {
        console.log("command: " + process.argv[2]);
        //The unary operator + converts string to number
        command = +process.argv[2];
        switch (command) {
            case 1:
                console.log('Display nation');
                displayArray(nation);
                break;
            case 2:
                console.log('Display subcode');
                displayArray(subcode);
                break;
            case 3:
                console.log('Display carrier');
                displayArray(carrier);
                break;
            case 4:
                callback();
                break;
            default:
                input.ask("Email", /^.+@.+$/, function (email) {
                    console.log("Your email is:", email);
                    process.exit();
                });
        }
    }
}
optionalCommand(xmlBuilder);
//Display arrays
function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i + 1 + ') ' + array[i]);
    }
}
//User input
//Input command
//choose nation
function xmlBuilder() {
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
}
//# sourceMappingURL=xml_converter.js.map