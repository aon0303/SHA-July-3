from flask import Flask, request, jsonify # Flask
import pymysql

app = Flask(__name__)
db = pymysql.connect(host='127.0.0.1', user='root', password='shajuly3', db='bulletboard', charset='utf8')
cursor = db.cursor()


@app.route('/')
def default():
    return "<h1 style='color:blue'>Hello, world!</h1>"

# User
@app.route('/user/username/<string:username>', methods=['GET'])
def user_by_name(username):
    cursor.execute(f'SELECT * FROM users WHERE username=\'{username}\';')
    user = cursor.fetchone()
    if user:
        return jsonify(user), 200
    else:
        return jsonify({'error':'User not found.'}), 404

@app.route('/user/id/<int:id>', methods=['GET'])
def user_by_id(id):
    cursor.execute(f'SELECT * FROM users WHERE id={id};')
    user = cursor.fetchone()
    if user:
        return jsonify(user), 200
    else:
        return jsonify({'error':'User not found.'}), 404

@app.route('/user/add', methods=['POST'])
def add_user():
    data = request.get_json()
    print(f'User add request: {data}')
    if not data:
        return jsonify({'error':'Invalid JSON data'}), 400

    username = data.get('username')
    school_year = data.get('school_year')
    pw_hash = data.get('pw_hash')
    additional_info = data.get('additional_info')

    if not (username and school_year and pw_hash):
        return jsonify({'error':'Missing user data.'}), 400
    if not additional_info:
        cursor.execute('INSERT INTO users (username, school_year, pw_hash) VALUES (\'{username}\', {school_year}, \'{pw_hash}\');')
    else:
        cursor.execute('INSERT INTO users (username, school_year, pw_hash, additional_info) VALUES (\'{username}\', {school_year}, \'{pw_hash}\', \'{additional_info}\');')
    return jsonify({'message':'User added successfully.'})



# Post
@app.route('/posts/<int:post_id>')
def post(post_id):
    cursor.execute(f'SELECT * FROM posts WHERE id={post_id};')
    post = cursor.fetchone()
    if post:
        return jsonify(post), 200
    else:
        return jsonify({'error':'Post not found.'}), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0')
