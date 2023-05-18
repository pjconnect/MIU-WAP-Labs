// Question 1:

askPassword(user.loginOk.bind(user), user.loginFail.bind(user))



// Question 2:

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student
    );
    }.bind(this)); //bind here
  }
};
group.showList();