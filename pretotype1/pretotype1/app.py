from flask import Flask, request, render_template

app = Flask(__name__)

received_emails = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/save_email', methods=['POST'])
def save_email():
    user_email = request.form.get('userEmail')

    if user_email:
        received_emails.append(user_email)
        print('Email saved:', user_email)
        return 'Email saved successfully'
    else:
        return 'Invalid email', 400

if __name__ == '__main__':
    app.run(debug=True)