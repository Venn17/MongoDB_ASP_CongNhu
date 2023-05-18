/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'departments';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);
db.createCollection("areas");
db.createCollection("employees");
db.createCollection("positions");
db.createCollection("accounts");
db.createCollection("logined");

db.departments.insertMany([
    {_id:"dep01",name:"Front End",status:1},
    {_id:"dep02",name:"Back End",status:1},
    {_id:"dep03",name:"Test",status:1},
    {_id:"dep04",name:"Business",status:1},
    {_id:"dep05",name:"Technical",status:1}
])

db.areas.insertMany([
    {_id:"a01",name:"Hà Nội",status:1},
    {_id:"a02",name:"Đà Nẵng",status:1},
    {_id:"a03",name:"Cần Thơ",status:1},
    {_id:"a04",name:"Hồ Chí Minh",status:1}
])

db.positions.insertMany([
    {_id:"po01",name:"Java Dev"},
    {_id:"po02",name:"PHP Dev"},
    {_id:"po03",name:"Auto Test"},
    {_id:"po04",name:"Angular Dev"},
    {_id:"po05",name:"StackoverFlow"},
    {_id:"po06",name:"FullStack"},
    {_id:"po07",name:"Software Engineer"},
    {_id:"po08",name:"FixBug Dev"},
    {_id:"po09",name:"Leader"}

])

db.employees.insertMany([
    {_id:"emp01",firstName:"Phạm Văn",lastName:"Hoàng",image:"",email:"hoangpv1999@tcg.com",description:"",phone:"0936 867 567",age:25,gender:1,address:"Thái Bình",experience:5,departmentID:"dep01",areaID:"a01",positionID:"po01"},
    {_id:"emp02",firstName:"Nguyễn Thị",lastName:"Vân",image:"",email:"nguyenthivan@tcg.com",description:"",phone:"0945 888 666",age:28,gender:0,address:"Thái Bình",experience:7,departmentID:"dep03",areaID:"a02",positionID:"po03"},
    {_id:"emp03",firstName:"Lưu Hoàng",lastName:"Thanh",image:"",email:"thanhhoangxx@tcg.com",description:"",phone:"0977 444 678",age:22,gender:1,address:"Hải Dương",experience:1,departmentID:"dep02",areaID:"a01",positionID:"po02"},
    {_id:"emp04",firstName:"Nguyễn Hoàng",lastName:"Tú",image:"",email:"khongcomail@tcg.com",description:"",phone:"0945 123 666",age:30,gender:1,address:"Vũng Tàu",experience:5,departmentID:"dep01",areaID:"a03",positionID:"po04"},
    {_id:"emp05",firstName:"Phạm Thu",lastName:"Hà",image:"",email:"havuitinh@tcg.com",description:"",phone:"0936 999 222",age:26,gender:0,address:"Hà Nội",experience:3,departmentID:"dep03",areaID:"a01",positionID:"po03"},
    {_id:"emp06",firstName:"Trịnh Văn",lastName:"Quyết",image:"",email:"quyetvan1999@tcg.com",description:"",phone:"0936 655 388",age:25,gender:1,address:"Thanh Hóa",experience:1,departmentID:"dep02",areaID:"a01",positionID:"po01"},
    {_id:"emp07",firstName:"Trịnh Thị",lastName:"Nga",image:"",email:"ngatrinh@tcg.com",description:"",phone:"0936 867 888",age:28,gender:0,address:"Hải Phòng",experience:10,departmentID:"dep04",areaID:"a01",positionID:"po03"},
    {_id:"emp08",firstName:"Trần Thị",lastName:"Hồng Ân",image:"",email:"tranhongan@tcg.com",description:"",phone:"0988 488 588",age:25,gender:0,address:"Quảng Bình",experience:5,departmentID:"dep05",areaID:"a02",positionID:"po07"},
    {_id:"emp09",firstName:"Phan Văn",lastName:"Hải",image:"",email:"phanhai97@tcg.com",description:"",phone:"0933 754 845",age:27,gender:1,address:"Hưng Yên",experience:5,departmentID:"dep02",areaID:"a01",positionID:"po01"},
    {_id:"emp010",firstName:"Bùi Văn",lastName:"Hoàng",image:"",email:"hoangbuivan@tcg.com",description:"",phone:"0377 657 817",age:32,gender:1,address:"Thái Bình",experience:10,departmentID:"dep04",areaID:"a02",positionID:"po06"},
    {_id:"emp011",firstName:"Phạm",lastName:"Thái",image:"",email:"thaipham@tcg.com",description:"",phone:"0345 787 999",age:29,gender:1,address:"Nghệ An",experience:8,departmentID:"dep04",areaID:"a02",positionID:"po08"},
    {_id:"emp012",firstName:"Đinh Văn",lastName:"Công",image:"",email:"dinhcong@tcg.com",description:"",phone:"0977 343 816",age:24,gender:1,address:"Hải Dương",experience:1,departmentID:"dep01",areaID:"a02",positionID:"po05"},
    {_id:"emp013",firstName:"Phan",lastName:"Giang",image:"",email:"phangiang@tcg.com",description:"",phone:"0386 686 868",age:31,gender:1,address:"Cần Thơ",experience:10,departmentID:"dep04",areaID:"a04",positionID:"po01"},
    {_id:"emp014",firstName:"Huỳnh Văn",lastName:"Đô",image:"",email:"luuhuynhdo@tcg.com",description:"",phone:"0983 368 888",age:25,gender:1,address:"Bạc Liêu",experience:1,departmentID:"dep05",areaID:"a04",positionID:"po08"},
    {_id:"emp015",firstName:"Trương Đình",lastName:"Phùng",image:"",email:"phungtd@tcg.com",description:"",phone:"0973 867 945",age:22,gender:1,address:"Yên Bái",experience:0,departmentID:"dep02",areaID:"a02",positionID:"po02"},
    {_id:"emp016",firstName:"Phạm Thị",lastName:"Hồng",image:"",email:"hongpt@tcg.com",description:"",phone:"0387 664 446",age:28,gender:0,address:"Bình Dương",experience:7,departmentID:"dep04",areaID:"a03",positionID:"po03"}
])

db.accounts.insertMany([
    {_id:"01",name:"Admin 01",email:"vienavtb@gmail.com",password:"1",role:0,status:1},
    {_id:"02",name:"Công Viện",email:"maxdzavtb@gmail.com",password:"1",role:0,status:1}
])


