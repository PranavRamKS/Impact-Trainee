USE TASK;

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