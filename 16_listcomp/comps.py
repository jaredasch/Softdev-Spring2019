def passwordThreshold(password):
    nums = [1 for c in password  if '0' <= c <= '9']
    upps = [1 for c in password if 'A' <= c <= 'Z']
    lows = [1 for c in password if 'a' <= c <= 'z']
    return len(upps) > 0 and len(lows) > 0 and len(nums) > 0

print("Does 'jaredasch' pass the threshold? " + str(passwordThreshold("jaredasch"))) # Expecting False
print("Does 'jaredAsch' pass the threshold? " + str(passwordThreshold("jaredAsch")))# Expecting False
print("Does 'jaredAsch1' pass the threshold? " + str(passwordThreshold("jaredAsch1"))) # Expecting True

nonAlphaNumeric = ".?!&#,;:-_*"

def passwordRating(password):
    nonAlphas = [1 for c in password if c in nonAlphaNumeric]
    nums = [1 for c in password  if '0' <= c <= '9']
    upps = [1 for c in password if 'A' <= c <= 'Z']
    lows = [1 for c in password if 'a' <= c <= 'z']

    return int( ((len(password) - abs(len(upps) - len(lows))) / len(password)) * 5 + min(len(nonAlphas), 3) + min(len(nums), 2) )

print("Rating for 'jared16&ASCH@stuyCS.COM' : " + str(passwordRating("jared16&ASCH@stuyCS.COM"))) # Expecting 9
print("Rating for 'jaredasch' : " + str(passwordRating("jaredasch")))
