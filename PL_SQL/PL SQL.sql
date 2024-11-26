use task;
select * from Employee;
Drop table employee;

create table employee(
EmployeeID numeric not null,
EmployeeName varchar(20),
salary numeric,
Location varchar(20),
DepartmentID numeric not null,
doj date,

primary key (EmployeeID)
);

create table Department(
DepartmentID numeric not null,
DepartmentName varchar (20),
DeptCount numeric,
primary key(DepartmentID));

insert into department
values(101,'TA',20),
(102,'TN',30);

select* from department;

insert into employee 
values(12385,'Aravindh',30000,'Chennai',101,'2023-11-10'),
(12386,'Avesh',35000,'Bangalore',102,'2024-11-22'),
(12387,'Arun',32000,'Hyderabad',102,'2021-11-15'),
(12388,'Barath',40000,'Cochin',101,'2024-11-21'),
(12389,'Barathi',50000,'Chennai',102,'2022-11-08'),
(12390,'Ram',55000,'Cochin',101,'2020-11-12'),
(12391,'Rajesh',55000,'Cochin',102,'2012-11-30'),
(12392,'Rahul',55000,'Cochin',101,'2018-11-27');

Drop table Department;

delimiter //
create procedure get_UpdatedSalary(in id int,out updated_salary numeric)
begin
declare current_salary numeric;
select salary into current_salary from Employee where EmployeeID = id;
set updated_salary = current_salary +2500;
update Employee set salary = updated_salary where EmployeeID = id;
end;//
call get_UpdatedSalary(12385,@Employee);

 select * from Employee;
 
 -- 2)Create a function that takes location as an argument and Display the details of all employees in the specified location.
 
delimiter //
create function get_employeeDetails(loc varchar(50))
returns boolean
deterministic
begin
drop temporary table if exists temp_table;
create temporary table if not exists temp_table as 
select * from Employee where location = loc;
return true;
end //
delimiter ;
 
select get_employeeDetails('cochin');
select * from temp_table;
 
-- 3)Create a view to display the employeeId,departmentname of all employees in "TN" and "TA" departments who joined in 2022
 
create view fetch_employee as
select Employee.EmployeeID,department.DepartmentName from Employee join department 
on Employee.DepartmentID = department.DepartmentID
where department.DepartmentName in('TN','TA')  and year(Employee.doj) = 2024;
 
select * from fetch_employee;

-- 4)Create a trigger that fire After insertion in the employee table by updating the count in the department
 
delimiter //
create trigger get_trigger
after insert on EMployee
for each row
begin
update department
set deptcount = deptcount+1
where DepartmentID = new.DepartmentID;
end; //
 
select * from Employee;
insert into employee values (12393,'arjun',30000,'chennai',101,'2020-04-04'),
(12394,'ramesh',30000,'chennai',102,'2020-04-04'),
(12395,'Pranav',50000,'chennai',101,'2024-11-13');
select * from department;

-- 5)Create a trigger that fire after update salary in the employee table.Store the updated employee details in another table
 
 Create table updatedSalaryDetails(
 employeeID numeric not null,
 employeename varchar(20),
 departmentID numeric,
 location varchar(20),
 old_salary numeric,
 new_salary numeric, 
 doj date);
 
 
delimiter //
create trigger store_anotherTable
after update on Employee
for each row
begin 
if old.salary <> new.salary then
insert into updatedsalarydetails (employeeID, employeename, departmentID, location, old_salary,new_salary, doj)
values (new.employeeID, new.employeename, new.departmentID, new.location, old.salary, new.salary, new.doj);
    END IF;
end //   
 
 
update employee 
set salary = 26000 where employeeid = 12389;
 
select * from updatedSalaryDetails;
