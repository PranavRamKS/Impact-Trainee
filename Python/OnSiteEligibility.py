def is_eligible_for_onsite(passport, communication, feedback, experience, age):
    if passport and communication == "good" and feedback == "good" and experience >= 2 and age >= 23:
        return True
    return False

 
print(is_eligible_for_onsite(True, "good", "good", 3, 25)) # True