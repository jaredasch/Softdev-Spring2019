# Jared Asch
# Softdev2 pd06
# K06 -- Yummy Mongo Py
# 2019-03-01

import pymongo

SERVER_IP = "142.93.202.60"
connection = pymongo.MongoClient(SERVER_IP)
db = connection.test
collection = db["primer-dataset"]

def findBorough(b):
    return list(collection.find({"borough": b}))

def findZip(z):
    return list(collection.find({"address.zip": z}))

def findZipGrade(zip, grade):
    return list(collection.find({"address.zip": zip, "grades.0.grade": grade}))

def findZipScore(zip, score):
    return list(collection.find({"address.zip": zip, "grades.0.score": {"$lt": score}}))

print(findBorough("Manhattan"))
print(findZip("10462"))
print(findZipGrade("10462", "A"))
print(findZipScore("10462", 10))
