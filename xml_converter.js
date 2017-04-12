var builder = require('xmlbuilder');


 
var x1 = builder.create('Onwer', { encoding: 'utf-8' })

  .att('OwnerIdentifier',"AMD")
  .ele('Nation',{'Nation': 'test1'})
  .ele('TaxCode',{'att1': 'test1'})
  .ele('TaxType',{'att1': 'test1', 'att2': 'test2', 'att3': 'test3'})
  .ele('TaxRulesSequence',{'att1': 'test1', 'att2': 'test2'})
  .ele('TaxRulesData',{'att1': 'test1', 'att2': 'test2', 'att3': 'test3'})
  .ele('TaxUnitTag',{'att1': 'test1'}).up()
  .ele('TaxTarget',{'att1': 'test1'})
  .ele('CarrierApplTable',{'att1': 'test1'})
  .ele('CarrierAppSegment').up()
  .ele('CarrierAppSegment',{'att1': 'test1'}).up().up().up()
  .ele('TaxApplication',{'att1': 'test1', 'att2':'test2'})
  .ele('SpecifiedTax');
  
console.log(x1.end({ pretty: true }));
