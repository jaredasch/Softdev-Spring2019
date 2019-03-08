'''
Cathy Cai, Jared Asch, and Tim Marder, Team Baseball > Football
SoftDev2 pd6
K #08: Ay Mon, Go Git It From Yer Flask
2019-03-01
'''

'''
Dataset: Nobel peace prize winners and their research, starting from 1901
http://api.nobelprize.org/v1/prize.json
Imported through json.load, adding the values of the "prize" key to the nobel_prize collection
in the bambi db
'''

import pymongo, urllib.request, json
SERVER_ADDR="206.81.7.95"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.prize
collection=db.nobel_prize

from flask import Flask, render_template, request, url_for, redirect
app = Flask(__name__)

f = open("prize.json")
data = json.load(f)
collection.remove()
collection.insert_many(data["prizes"])

# with urllib.request.urlopen("") as url:
#     data = json.loads(url.read().decode())["prizes"][0]
#     collection.insert_one(data)

@app.route('/')
def home():
    return render_template("/index.html",
                            subject=find_subject("physics"),
                            # year=find_year("2018"),
                            surname=find_surname("Curie"),
    )

def find_subject(subject):
    l = []
    for d in collection.find({"category" : subject}):
        l.append(d)
    return l

def find_year(year):
    l = []
    for d in collection.find({"year" : year}):
        l.append(d)
    return l

def find_surname(surname):
    l = []
    for d in collection.find({"laureates.surname" : surname}):
        l.append(d)
    return l

@app.route("/year", methods = ["POST"])
def year():
    year = request.form.get("year")
    return render_template("/index.html",
                            subject=find_subject("physics"),
                            year=find_year(year),
                            surname=find_surname("Curie"))

@app.route("/change_ip", methods = ["POST"])
def change_ip():
    IP = request.form.get("new_ip")

    SERVER_ADDR = IP
    connection = pymongo.MongoClient(SERVER_ADDR)
    print(connection.database_names())
    db = connection.bambi
    collection = db.nobel_prize

    f = open("prize.json")
    data = json.load(f)
    collection.insert_many(data["prizes"])
    return redirect(url_for("home"))

#
# print("-----------")
# print("test find_subject")
# print(find_subject("physics"))
#
# print("-----------")
# print("test find_year")
# print(find_year("2018"))
# #
# print("-----------")
# print("test find_surname")
# print(find_surname("Curie"))
#

if __name__=="__main__":
    app.debug=True
    app.run()
