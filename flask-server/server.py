from flask import Flask # Flask
import pymysql

app = Flask(__name__)
db = pymysql.connect(host='127.0.0.1', user='root', password='shajuly3', db='website', charset='utf8')


@app.route('/')
def default():
    return "<h1 style='color:blue'>Hello, world!</h1>"

'''
@app.route('/board/<int:boardid>', methods=['GET'])
def board():
    cursor = db.cursor()
    print(cursor.execute(f"SELECT * FROM posts WHERE board='{boardid}'"))
'''

if __name__ == "__main__":
    app.run(host='0.0.0.0')
