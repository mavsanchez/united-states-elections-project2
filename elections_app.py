from flask import Flask, render_template

app = Flask(__name__)

@app.route("/results")
def results():
    return render_template("results.html", pg_title="Results")

@app.route("/demographics")
def demographics():
    return render_template("demographics.html", pg_title="Demographics")

@app.route("/trends")
def trends():
    return render_template("trends.html", pg_title="Trends")

@app.route("/map")
def map():
    return render_template("map.html", pg_title="Map")

@app.route("/")
def index():
    return render_template("index.html", result_dict=None)

if __name__ == "__main__":
    app.run(debug=True)
