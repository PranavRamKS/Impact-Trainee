USE TASK;

Create table Employee(
EmployeeID numeric not null,
EmployeeName varchar (20),
Salary decimal,
Dept varchar(10),
Loation varchar(10)
 );
  insert into Employee 
  values (101,"Ragu",30000,"D&A","Chennai"),
  (102,"Raja",40000,"D&A","Hyderabad"),
  (103,"Ram",35000,"D&A","Chennai"),
  (104,"Arum",33000,"D&A","Bangalore"),
  (105,"ajai",20000,"D&A","Cochi"),
  (106,"Vamshi",55000,"D&A","hyderabad"),
  (107,"Vishnu",12000,"D&A","Cochi"),
  (108,"Murugan",45000,"D&A","Chennai"),
  (109,"Srini",38000,"D&A","Bangalore"),
  (110,"Dhandapani",80000,"D&A","Chennai");

Select * from Employee;

alter table Employee add DOJ date;

update Employee set DOJ = '2014-01-06' where EmployeeID= 101;
update Employee set DOJ = '2010-02-28' where EmployeeID = 102;
update Employee set DOJ = '2013-11-11' where EmployeeID = 103;
update Employee set DOJ = '2018-06-23' where EmployeeID = 104;
update Employee set DOJ = '2019-12-13' where EmployeeID = 105;
update Employee set DOJ = '2020-12-09' where EmployeeID = 106;
update Employee set DOJ = '2020-03-11' where EmployeeID = 107;
update Employee set DOJ = '2018-07-21' where EmployeeID = 108;
update Employee set DOJ = '2018-08-23' where EmployeeID = 109;
update Employee set DOJ = '2018-07-16' where EmployeeID = 110;

Delimiter $$
Create procedure get_year_Specific_Details(in yearofDoj numeric)
begin
select * from Employee where year(DOJ) = yearofDoj;
End $$
delimiter ;

Call get_year_Specific_Details(2020);

create view seniority_view as
select * from Employee order by DOJ asc limit 3;
 
select * from seniority_view;