def mode_of_transport(priority, weight, distance):
    if priority != "urgent" and weight <= 5:
        return "Bike"
    elif priority != "urgent" and weight > 5 and distance <= 250:
        return "Lorry"
    elif priority == "urgent" and distance < 50 and weight < 100:
        return "Van"
    else:
        return "Train"
print(mode_of_transport("urgent", 30, 40)) # van