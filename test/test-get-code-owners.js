var should = require('should');
var test = require('unit.js');
var get_code_owners = require('../get-code-owners');

var codeOwners = get_code_owners('./test/test-code-owners.json');

var C_SPEC = 'specialisation';
//code owners is truthy
codeOwners.should.be.ok;
test.undefined(codeOwners['ERROR']);
test.value(codeOwners['ERROR']).isUndefined;
test.assert(1 == 1);
var delphiSpec = codeOwners['delphi']
delphiSpec.should.be.ok;
delphiSpec.type.should.equal(C_SPEC);
delphiSpec.description.should.equal('Delphi');
delphiSpec['owners'];
test.given(1 == 1).assert(1 == 1)

//to run use :> mocha test/test-get-code-owners.js

describe('Can get all code owners', function () {
    it('correctly contains delphi specialism', function () {
        var example = 'hello';
        test
            .string(example)
            .startsWith('hello')

        .given(example = 'bye')
            .string(example)
            .endsWith('bye')

        .when('some description', function () {
            //do something
        })

        .then('some test', function () {
                test
                    .string(example)
                    .startsWith('bye')
                    //can use contains to check for a field on an object
                    //e.g. .contains({message: 'hello world'})
                    //see http://unitjs.com/guide/quickstart.html
                ;
            })
            //can also handle bad data returned with an if().error()
        ;
    });
});