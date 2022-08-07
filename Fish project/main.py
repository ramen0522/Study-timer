from website import create_app

app = create_app()

#only if we run the file which is __main__.py, not import - we will execute line 6
if __name__ == '__main__':
    app.run(debug=True)