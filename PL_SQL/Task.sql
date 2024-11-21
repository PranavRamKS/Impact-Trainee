CREATE database task;
use task;
create table Product(
ProductId numeric not null,
ProductName varchar(50),
Quantity numeric ,
Price numeric not null);
insert into Product 
values("1","Mobile phone","10","50000"),
("2","Mp3 player","20","5000"),
("3","USB dongle","10","500");
insert into Product
values(4,"charger",20,100);
create view ProductDetails as
Select ProductID,ProductName,Quantity,Price
From Product;
Select * from Product;
insert into Product
value (5,"mouse",20,799),
(6,"Keyboard",30,1499),
(7,"Thumb drive",40,2000),
(8,"Speaker",20,3000),
(9,"Mouse pad",5,200);
delete from product Where ProductId = 2;
DELIMITER &&
create procedure getProdutDetails (IN product_ID numeric)
begin
Select * from Product where productId = Product_ID;
END&&;
DELIMITER 


CALL getProdutDetails (5);

DELIMITER //
create function getProductList(pricePoint numeric) 
returns varchar(20)
DETERMINISTIC
Begin 
declare  productS varchar(20);
select * into productS from Product where price > pricePoint;
return productS ;
END //
DELIMITER ;
drop function getProductList;
SELECT getProductList(20);

Create table ProductCount(
prodCount numeric Default 0);
insert into productCount (prodcount) values (0);
DELIMITER //

CREATE TRIGGER afert_product_isert
after insert on Product
for each row
begin
update prodCount
set prodCount= prodCount+1;
end //
Delimiter ;

insert into Product(productId,ProductName,Quantity,price)
values (10,"headphones",20,500);
set sql_safe_updates=0;
drop trigger afert_product_isert;
