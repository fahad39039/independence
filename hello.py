from flask import Flask, render_template, request, jsonify
import json
from sqlalchemy import create_engine
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
	if request.method == 'POST':
		formData = json.loads(request.data)
		return jsonify(success=True, a=formData.get('name'))
	return render_template('home.html')

@app.route('/<username>')
def bye(username):
	return render_template('user.html', username=username)
