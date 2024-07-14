from flask import Flask # Flask
import pymysql

app = Flask(__name__)
db = pymysql.connect(host='158.179.172.212', user='root', password='1234', db='website', charset='utf8')

'''
@app.route('/users')
def users():
    return {"members": [{ "id" : 1, "name" : "yerin" },
    					{ "id" : 2, "name" : "dalkong" }]}
'''
           
@app.route('/board/<int:boardid>', methods=['GET'])
def board():
    cursor = db.cursor()
    print(cursor.execute(f"SELECT * FROM posts WHERE board='{boardid}'"))

if __name__ == "__main__":
    app.run(debug = True)
