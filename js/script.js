/* 
Activity: Contact manager
*/

var contacts = {
    init: function (firstName, lastName, number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
    },
    describe: function () {
        var description = this.firstName + " " + this.lastName + " - " + this.number;
        return description;
    }
};

var contact1 = Object.create(contacts);
contact1.init("John", "Smith", "1111333325");

var contact2 = Object.create(contacts);
contact2.init("Jane", "Doe", "2222333344");

var contact3 = Object.create(contacts);
contact3.init("Mary","Rose", "0001011256");


var ncontacts = [];
ncontacts.push(contact1);
ncontacts.push(contact2);
ncontacts.push(contact3);

window.onload = function (){
  
    _("add").onclick = function () { showForm() }       
    
    _("show").onclick = function (){ showData() }
    
    _("exit").onclick = function () { showLink() }
}

function save () {
    var tmp = Object.create(contacts);
    console.log(tmp)
    tmp.init(_("addName").value,_("addLast").value, _("addNumber").value);
    ncontacts.push(tmp);
    showData();
}

function showData () {
    var tmp = '<ol>';
    ncontacts.forEach(function (contacts) {
      console.log(contacts.describe());          
      tmp += '<li>'+contacts.describe()+'</li>';
    });
    _('display').innerHTML = tmp+'<\ol>';
}

function showForm () {
    _("display").innerHTML = '<form id="form"><label>Name:</label><input id="addName"><br><label>Last:</label><input id="addLast"><br><label>Number:</label><input id="addNumber" type="number"><br><button onclick="save();">Add</button>&nbsp;<button type="reset" id="configreset" value="Reset">Reset</button>';
}

 $('#configreset').click(function(){
            $('#form')[0].reset();
 });

function showLink () {
    _('display').innerHTML = '<a href="https://www.linkedin.com/in/danielkapexhiu/" target="_new">Contact me!</a>';
}

function _(e) {
   return document.getElementById(e);
}
