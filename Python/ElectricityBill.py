def calculate_electricity_bill(units):
    if units > 1000:
        bill = units * 10
    elif units > 500:
        bill = units * 5
    elif units > 200:
        bill = units * 2
    else:
        bill = units * 1
    return bill

 
print(calculate_electricity_bill(1200)) # 12000