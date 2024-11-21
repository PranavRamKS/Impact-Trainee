USE TASK;
Create table ProductCount(
prodCount numeric Default 0);
insert into productCount (prodcount) values (0);
DELIMITER //

CREATE TRIGGER afert_product_isert
after insert on Product
for each row
begin
update productCount
set prodCount= prodCount+1;
end //
Delimiter ;

insert into Product(productId,ProductName,Quantity,price)
values (10,"headphones",20,500);
set sql_safe_updates=0;
drop trigger afert_product_isert;
select* from productcount;
