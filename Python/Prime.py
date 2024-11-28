def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def display_primes(x, y):
    primes = [i for i in range(x, y+1) if is_prime(i)]
    return primes

 
print(display_primes(10, 50)) # [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]