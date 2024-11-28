
def calculate_discount(member_type, bill_value):
    if member_type == "premium":
        discount = 0.20 * bill_value
    elif member_type == "gold":
        discount = 0.15 * bill_value
    elif member_type == "silver":
        discount = 0.10 * bill_value
    else:
        discount = 0.05 * bill_value if bill_value > 2000 else 0
    return discount

membership  =  str(input ("entre the membership ")).lower()
bill = float(input("enter the bill value"))
print(calculate_discount(membership, bill)) #450

